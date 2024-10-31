import { Link, useLocation } from 'react-router-dom';
import './Search.css';
import { useState } from 'react';
import { BasicFilters } from './components/BasicFilters/BasicFilters';
import { AdvancedFilters } from './components/AdvancedFilters/AdvancedFilters';
import { CardCard } from '../utils/components/CarCard/CarCard';

export const Search = () => {

    const location = useLocation();
    const filters = {
        make: location.state?.make || "All",
        model: location.state?.model || "All",
        fuelType: location.state?.fuelType || "All",
        year: location.state?.year || "",
        mileage: location.state?.mileage || "",
        maxPrice: location.state?.maxPrice || "",
        horsePower: location.state?.horsePower || "",
        searchQuery: location.state?.searchQuery || ""
    }
    
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