import { Link, useLocation } from 'react-router-dom';
import './Search.css';
import { useEffect, useState } from 'react';
import { BasicFilters } from './components/BasicFilters/BasicFilters';
import { AdvancedFilters } from './components/AdvancedFilters/AdvancedFilters';
import { CardCard } from '../utils/components/CarCard/CarCard';
import CarModel from '../../models/CarModel';

export const Search = () => {

    const location = useLocation();
    const filters = {
        make: location.state?.make,
        model: location.state?.model,
        fuelType: location.state?.fuelType,
        year: location.state?.year,
        maxMileage: location.state?.maxMileage,
        maxPrice: location.state?.maxPrice,
        minHorsePower: location.state?.minHorsePower,
        searchQuery: location.state?.searchQuery || ""
    }

    const [cars, setCars] = useState<CarModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchCars = async () => {
            const baseUrl: string = "http://localhost:8080/api/cars/search";
            const url: string = `${baseUrl}?make=${filters.make}&model=${filters.model}&fuelType=${filters.fuelType}&year=${filters.year}&maxMileage=${filters.maxMileage}&maxPrice=${filters.maxPrice}&minHorsePower=${filters.minHorsePower}&searchQuery=${filters.searchQuery}`

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
                    horsePower: responseData[key].horsePower
                    //imgCover: responseData[key].imgCover
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
                <button className='btn btn-primary px-5' type='button'>Search</button>
            </div>
            
            <BasicFilters toggleAdvancedFilters={toggleAdvancedFilters}/>
            {showAdvancedFilters && <AdvancedFilters/>}

            <CardCard />
        </div>
    );
}