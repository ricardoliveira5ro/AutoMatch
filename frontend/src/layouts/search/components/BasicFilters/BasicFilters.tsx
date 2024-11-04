import React, { useState } from "react";
import './BasicFilters.css';
import make_models_data from '../../../../static/make-model.json';
import fuelType_data from '../../../../static/fuel-type.json';

export const BasicFilters: React.FC<{
    toggleAdvancedFilters: any,
    filters: any,
    onFilterChange: (name: string, value: string) => void
}> = (props) => {

    /* ---------- Make <--> Model logic ------------ */
    const [models, setModels] = useState<{ model: string }[]>(make_models_data.find(data => data.make === props.filters.make)?.models || []);
    const [isModelDisabled, setIsModelDisabled] = useState(props.filters.make === "All");
    
    const onMakeChange = (e: any) => {
        const selectedMake = e.target.value;
        props.onFilterChange('make', selectedMake);

        if (selectedMake === "All") {
            setModels([]);
            setIsModelDisabled(true);
            
        } else {
            const filteredMake = make_models_data.find(data => data.make === selectedMake);
            setModels(filteredMake ? filteredMake.models : []);
            setIsModelDisabled(false)
            props.onFilterChange('model', 'All');
        }
    }    


    return (
        <div className='d-flex flex-row flex-wrap justify-content-center align-items-end basic-filters-container w-100'>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Make</span>
                </div>
                <select value={props.filters.make} onChange={onMakeChange} className="form-select form-select-sm banner-select shadow-none text-white" aria-label="Default select example">
                    <option value="All">All</option>
                    {make_models_data.map((data, index) => (
                        <option key={index} value={data.make}>{data.make}</option>
                    ))}
                </select>
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Model</span>
                </div>
                <select value={props.filters.model} disabled={isModelDisabled} onChange={e => props.onFilterChange('model', e.target.value)}
                    className="form-select form-select-sm banner-select shadow-none" aria-label="Default select example"
                >
                    <option value="All">All</option>
                    {models.map((item, index) => (
                        <option key={index} value={item.model}>{item.model}</option>
                    ))}
                </select>
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Year (From)</span>
                </div>
                <input value={props.filters.minYear} onChange={e => props.onFilterChange('minYear', e.target.value)} type="number" className="banner-input" placeholder="1990" aria-label="Year" aria-describedby="year-from" />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Year (To)</span>
                </div>
                <input value={props.filters.maxYear} onChange={e => props.onFilterChange('maxYear', e.target.value)} type="number" className="banner-input" placeholder="2024" aria-label="Year" aria-describedby="year-to" />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Price (Min.)</span>
                </div>
                <input value={props.filters.minPrice} onChange={e => props.onFilterChange('minPrice', e.target.value)} type="number" className="banner-input" placeholder="€" aria-label="Price Min" aria-describedby="price-min" />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Price (Max.)</span>
                </div>
                <input value={props.filters.maxPrice} onChange={e => props.onFilterChange('maxPrice', e.target.value)} type="number" className="banner-input" placeholder="€" aria-label="Price Max" aria-describedby="price-max" />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Mileage (Min.)</span>
                </div>
                <input value={props.filters.minMileage} onChange={e => props.onFilterChange('minMileage', e.target.value)} type="number" className="banner-input" placeholder="KM" aria-label="Mileage Min" aria-describedby="mileage-min" />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Mileage (Max.)</span>
                </div>
                <input value={props.filters.maxMileage} onChange={e => props.onFilterChange('maxMileage', e.target.value)} type="number" className="banner-input" placeholder="KM" aria-label="Mileage Max" aria-describedby="mileage-max" />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Horse Power (Min.)</span>
                </div>
                <input value={props.filters.minHorsePower} onChange={e => props.onFilterChange('minHorsePower', e.target.value)} type="number" className="banner-input" placeholder="HP" aria-label="Horse Power Min" aria-describedby="horsepower-min" />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Horse Power (Max.)</span>
                </div>
                <input value={props.filters.maxHorsePower} onChange={e => props.onFilterChange('maxHorsePower', e.target.value)} type="number" className="banner-input" placeholder="HP" aria-label="Horse Power Max" aria-describedby="horsepower-max" />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Fuel Type</span>
                </div>
                <select value={props.filters.fuelType} onChange={e => props.onFilterChange('fuelType', e.target.value)}
                    className="form-select form-select-sm banner-select shadow-none text-white" aria-label="Default select example"
                >
                    <option value="All">All</option>
                    {fuelType_data.map((item, index) => (
                        <option key={index} value={item.fuelType}>{item.fuelType}</option>
                    ))}
                </select>
            </div>
            <button className='advanced-filters-button' onClick={props.toggleAdvancedFilters}>
                <i className="bi bi-sliders2 me-2" style={{ color: 'var(--color-main-orange)' }}></i>
                Advanced Filters
            </button>
        </div>
    );
}