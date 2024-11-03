import { Link, useLocation } from 'react-router-dom';
import './Search.css';
import { useEffect, useState } from 'react';
import { BasicFilters } from './components/BasicFilters/BasicFilters';
import { AdvancedFilters } from './components/AdvancedFilters/AdvancedFilters';
import { CardCard } from '../utils/components/CarCard/CarCard';
import CarModel from '../../models/CarModel';
import { SpinnerLoading } from '../utils/components/SpinnerLoading/SpinnerLoading';

export const Search = () => {

    /* ---------- Initial filters ------------ */
    const location = useLocation();
    const filters = {
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
        maxDisplacement: ""
    }


    /* ---------- Fetch cars ------------ */
    const [cars, setCars] = useState<CarModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchCars = async () => {
            const baseUrl: string = "http://localhost:8080/api/cars/search";
            const url: string = `${baseUrl}?make=${filters.make}&model=${filters.model}&fuelType=${filters.fuelType}&selectedYear=${filters.selectedYear}&maxMileage=${filters.maxMileage}&maxPrice=${filters.maxPrice}&minHorsePower=${filters.minHorsePower}&searchQuery=${filters.searchQuery}`

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();
            const loadedCars: CarModel[] = [];

            for (const key in responseData) {
                loadedCars.push({
                    id: responseData[key].id,
                    title: responseData[key].title,
                    price: responseData[key].price,
                    date: responseData[key].date,
                    mileage: responseData[key].mileage,
                    fuelType: responseData[key].fuelType,
                    gearBox: responseData[key].gearBox,
                    displacement: responseData[key].displacement,
                    horsePower: responseData[key].horsePower,
                    imgCover: responseData[key].imgCover
                });
            }

            setCars(loadedCars);
            setIsLoading(false);
        };

        fetchCars().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, []);
    

    /* ---------- Toggle Advanced Filters ------------ */
    const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
    const toggleAdvancedFilters = () => {
        setShowAdvancedFilters(prevState => !prevState);
    };


    /* ---------- Filter inputs ------------ */
    const [selectedMake, setSelectedMake] = useState("All");
    const [selectedModel, setSelectedModel] = useState("All");
    const [selectedFuelType, setSelectedFuelType] = useState("All");
    const [selectedCondition, setSelectedCondition] = useState("All");
    const [selectedGearBox, setSelectedGearBox] = useState("All");
    const [selectedColor, setSelectedColor] = useState("All");
    //TODO: selectedStyle
    const [minYear, setMinYear] = useState("");
    const [maxYear, setMaxYear] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [minMileage, setMinMileage] = useState("");
    const [maxMileage, setMaxMileage] = useState("");
    const [minHorsePower, setMinHorsePower] = useState("");
    const [maxHorsePower, setMaxHorsePower] = useState("");
    const [doors, setDoors] = useState("");
    const [minDisplacement, setMinDisplacement] = useState("");
    const [maxDisplacement, setMaxDisplacement] = useState("");

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center py-4 px-3 px-sm-0" style={{rowGap: '20px'}}>
            <div className='d-flex flex-row justify-content-between align-items-center w-100'>
                <Link className='d-flex flex-row align-items-center back-home' to='/'>
                    <i className="bi bi-house-fill" style={{ color: 'white', fontSize: '30px' }}></i>
                    <p className='d-none d-sm-flex text-white ms-3 mb-0'>Home</p>
                </Link>
                <button className='btn btn-primary px-5' type='button'>Search</button>
            </div>
            
            <BasicFilters toggleAdvancedFilters={toggleAdvancedFilters}/>
            {showAdvancedFilters && <AdvancedFilters/>}

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

        </div>
    );
}