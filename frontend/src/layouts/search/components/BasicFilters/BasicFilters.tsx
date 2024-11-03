import React, { useState } from "react";
import './BasicFilters.css';
import make_models_data from '../../../../static/make-model.json';
import fuelType_data from '../../../../static/fuel-type.json';

export const BasicFilters: React.FC<{
    toggleAdvancedFilters: any,
    initialFiltersInputs: any
}> = (props) => {

    /* ---------- Filter inputs ------------ */
    const [selectedMake, setSelectedMake] = useState(props.initialFiltersInputs.make);
    const [selectedModel, setSelectedModel] = useState(props.initialFiltersInputs.model);
    const [selectedFuelType, setSelectedFuelType] = useState(props.initialFiltersInputs.fuelType);
    const [minYear, setMinYear] = useState(props.initialFiltersInputs.minYear);
    const [maxYear, setMaxYear] = useState(props.initialFiltersInputs.maxYear);
    const [minPrice, setMinPrice] = useState(props.initialFiltersInputs.minPrice);
    const [maxPrice, setMaxPrice] = useState(props.initialFiltersInputs.maxPrice);
    const [minMileage, setMinMileage] = useState(props.initialFiltersInputs.minMileage);
    const [maxMileage, setMaxMileage] = useState(props.initialFiltersInputs.maxMileage);
    const [minHorsePower, setMinHorsePower] = useState(props.initialFiltersInputs.minHorsePower);
    const [maxHorsePower, setMaxHorsePower] = useState(props.initialFiltersInputs.maxHorsePower);


    /* ---------- Make <--> Model logic ------------ */
    const [models, setModels] = useState<{ model: string }[]>([]);
    const [isModelDisabled, setIsModelDisabled] = useState(true);
    
    const makeChange = (e: any) => {
        const newSelectedMake = e.target.value;
        setSelectedMake(newSelectedMake)
        
        if (newSelectedMake === "All") {
            setModels([]);
            setIsModelDisabled(true);
            
        } else {
            const filteredMake = make_models_data.find(data => data.make === newSelectedMake);
            setModels(filteredMake ? filteredMake.models : []);
            setIsModelDisabled(false)
            setSelectedModel("All");
        }
    }    


    return (
        <div className='d-flex flex-row flex-wrap justify-content-center align-items-end basic-filters-container w-100'>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Make</span>
                </div>
                <select value={selectedMake} onChange={makeChange} className="form-select form-select-sm banner-select shadow-none text-white" aria-label="Default select example">
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
                <select value={selectedModel} disabled={isModelDisabled} onChange={e => setSelectedModel(e.target.value)}
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
                <input value={minYear} onChange={e => setMinYear(e.target.value)} type="number" className="banner-input" placeholder="1990" aria-label="Year" aria-describedby="year-from" />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Year (To)</span>
                </div>
                <input value={maxYear} onChange={e => setMaxYear(e.target.value)} type="number" className="banner-input" placeholder="2024" aria-label="Year" aria-describedby="year-to" />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Price (Min.)</span>
                </div>
                <input value={minPrice} onChange={e => setMinPrice(e.target.value)} type="number" className="banner-input" placeholder="€" aria-label="Price Min" aria-describedby="price-min" />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Price (Max.)</span>
                </div>
                <input value={maxPrice} onChange={e => setMaxPrice(e.target.value)} type="number" className="banner-input" placeholder="€" aria-label="Price Max" aria-describedby="price-max" />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Mileage (Min.)</span>
                </div>
                <input value={minMileage} onChange={e => setMinMileage(e.target.value)} type="number" className="banner-input" placeholder="KM" aria-label="Mileage Min" aria-describedby="mileage-min" />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Mileage (Max.)</span>
                </div>
                <input value={maxMileage} onChange={e => setMaxMileage(e.target.value)} type="number" className="banner-input" placeholder="KM" aria-label="Mileage Max" aria-describedby="mileage-max" />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Horse Power (Min.)</span>
                </div>
                <input value={minHorsePower} onChange={e => setMinHorsePower(e.target.value)} type="number" className="banner-input" placeholder="HP" aria-label="Horse Power Min" aria-describedby="horsepower-min" />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Horse Power (Max.)</span>
                </div>
                <input value={maxHorsePower} onChange={e => setMaxHorsePower(e.target.value)} type="number" className="banner-input" placeholder="HP" aria-label="Horse Power Max" aria-describedby="horsepower-max" />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Fuel Type</span>
                </div>
                <select value={selectedFuelType} onChange={e => setSelectedFuelType(e.target.value)}
                    className="form-select form-select-sm banner-select shadow-none text-white" aria-label="Default select example"
                >
                    <option value="All">All</option>
                    {fuelType_data.map(item => (
                        <option key={item.id} value={item.fuelType}>{item.fuelType}</option>
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