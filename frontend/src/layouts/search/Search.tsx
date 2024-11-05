import { Link, useLocation } from 'react-router-dom';
import './Search.css';
import { useEffect, useState } from 'react';
import { BasicFilters } from './components/BasicFilters/BasicFilters';
import { AdvancedFilters } from './components/AdvancedFilters/AdvancedFilters';
import { CardCard } from '../utils/components/CarCard/CarCard';
import CarModel from '../../models/CarModel';
import { SpinnerLoading } from '../utils/components/SpinnerLoading/SpinnerLoading';
import { Pagination } from '../utils/components/Pagination/Pagination';

export const Search = () => {

    /* ---------- Filters ------------ */
    const location = useLocation();
    const [filters, setFilters] = useState({
        make: location.state?.make || "All",
        model: location.state?.model || "All",
        fuelType: location.state?.fuelType || "All",
        selectedYear: location.state?.selectedYear || "",
        minYear: "",
        maxYear: "",
        minMileage: "",
        maxMileage: location.state?.maxMileage || "",
        minPrice: "",
        maxPrice: location.state?.maxPrice || "",
        minHorsePower: location.state?.minHorsePower || "",
        maxHorsePower: "",
        searchQuery: location.state?.searchQuery || "",
        gearBox: "All",
        condition: "All",
        color: "All",
        doors: "",
        minDisplacement: "",
        maxDisplacement: "",
        styles: []
    });

    const handleFilterChange = (name: string, value: any) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    /* ---------- Pagination ------------ */
    const carsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [totalElements, setTotalElements] = useState(1);

    /* ---------- Fetch cars ------------ */
    const [cars, setCars] = useState<CarModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchCars = async () => {
            setIsLoading(true);

            const baseUrl: string = "http://localhost:8080/api/cars/search";
            const url: string = `${baseUrl}?make=${filters.make}&model=${filters.model}&fuelType=${filters.fuelType}&selectedYear=${filters.selectedYear}` +
                `&minYear=${filters.minYear}&maxYear=${filters.maxYear}&minMileage=${filters.minMileage}&maxMileage=${filters.maxMileage}` +
                `&minPrice=${filters.minPrice}&maxPrice=${filters.maxPrice}&minHorsePower=${filters.minHorsePower}&maxHorsePower=${filters.maxHorsePower}` +
                `&searchQuery=${filters.searchQuery}&gearBox=${filters.gearBox}&condition=${filters.condition}&color=${filters.color}` +
                `&doors=${filters.doors}&minDisplacement=${filters.maxDisplacement}&maxDisplacement=${filters.maxDisplacement}` +
                `&styles=${filters.styles.join('-')}&page=${currentPage-1}&size=${carsPerPage}`

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();
            const loadedCars: CarModel[] = [];

            for (const car of responseData.content) {
                loadedCars.push({
                    id: car.id,
                    title: car.title,
                    price: car.price,
                    date: car.date,
                    mileage: car.mileage,
                    fuelType: car.fuelType,
                    gearBox: car.gearBox,
                    displacement: car.displacement,
                    horsePower: car.horsePower,
                    imgCover: car.imgCover
                });
            }

            setCars(loadedCars);
            setTotalElements(responseData.totalElements);
            setIsLoading(false);
        };

        fetchCars().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, [filters, currentPage]);
    

    /* ---------- Toggle Advanced Filters ------------ */
    const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
    const toggleAdvancedFilters = () => {
        setShowAdvancedFilters(prevState => !prevState);
    };

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center py-4 px-3 px-sm-0" style={{rowGap: '20px'}}>
            <div className='d-flex flex-row justify-content-between align-items-center w-100'>
                <Link className='d-flex flex-row align-items-center back-home' to='/'>
                    <i className="bi bi-house-fill" style={{ color: 'white', fontSize: '30px' }}></i>
                    <p className='d-none d-sm-flex text-white ms-3 mb-0'>Home</p>
                </Link>
                <input value={filters.searchQuery} onChange={e => handleFilterChange('searchQuery', e.target.value)} type="text" className="search-query-input" placeholder="Version, Title ex. GTI Turbo ..." aria-label="Search Query" aria-describedby="search-query" />
            </div>
            
            <BasicFilters toggleAdvancedFilters={toggleAdvancedFilters} filters={filters} onFilterChange={handleFilterChange} />
            {showAdvancedFilters && <AdvancedFilters filters={filters} onFilterChange={handleFilterChange}/>}

            {httpError ? (
                <p className='text-white'>{httpError}</p>
            ) : (
                <>
                {isLoading ? (
                    <SpinnerLoading />
                ) : (
                    <>
                        {cars.map(car => (
                            <CardCard key={car.id} car={car} />
                        ))}
                    </>
                )}
                </>
            )}

            <Pagination carsPerPage={carsPerPage} totalElements={totalElements} currentPage={currentPage} handleChangeCurrentPage={setCurrentPage}></Pagination>
        </div>
    );
}