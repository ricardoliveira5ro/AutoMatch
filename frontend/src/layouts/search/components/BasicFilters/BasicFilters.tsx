import React from "react";
import './BasicFilters.css';

export const BasicFilters: React.FC<{
    toggleAdvancedFilters: any
}> = (props) => {

    return (
        <div className='d-flex flex-row flex-wrap justify-content-center align-items-end basic-filters-container w-100'>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Make</span>
                </div>
                <select defaultValue={"0"} className="form-select form-select-sm banner-select shadow-none text-white" aria-label="Default select example">
                    <option value="0">All</option>
                    <option value="1">Mercedes</option>
                    <option value="2">Ferrari</option>
                    <option value="3">Renault</option>
                </select>
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Model</span>
                </div>
                <select defaultValue={"0"} className="form-select form-select-sm banner-select shadow-none" aria-label="Default select example" disabled>
                    <option value="0">All</option>
                    <option value="1">Mercedes</option>
                    <option value="2">Ferrari</option>
                    <option value="3">Renault</option>
                </select>
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Year (From)</span>
                </div>
                <input type="number" className="banner-input" placeholder="1990" aria-label="Year" aria-describedby="year-from" />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Year (To)</span>
                </div>
                <input type="number" className="banner-input" placeholder="2024" aria-label="Year" aria-describedby="year-to" />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Price (Min.)</span>
                </div>
                <input type="number" className="banner-input" placeholder="€" aria-label="Price Min" aria-describedby="price-min" />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Price (Max.)</span>
                </div>
                <input type="number" className="banner-input" placeholder="€" aria-label="Price Max" aria-describedby="price-max" />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Mileage (Min.)</span>
                </div>
                <input type="number" className="banner-input" placeholder="KM" aria-label="Mileage Min" aria-describedby="mileage-min" />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Mileage (Max.)</span>
                </div>
                <input type="number" className="banner-input" placeholder="KM" aria-label="Mileage Max" aria-describedby="mileage-max" />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Horse Power (Min.)</span>
                </div>
                <input type="number" className="banner-input" placeholder="HP" aria-label="Horse Power Min" aria-describedby="horsepower-min" />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Horse Power (Max.)</span>
                </div>
                <input type="number" className="banner-input" placeholder="HP" aria-label="Horse Power Max" aria-describedby="horsepower-max" />
            </div>
            <div className='d-flex flex-column align-items-center'>
                <div className='container p-0'>
                    <span className="text-white">Fuel Type</span>
                </div>
                <select defaultValue={"0"} className="form-select form-select-sm banner-select shadow-none text-white" aria-label="Default select example">
                    <option value="0">All</option>
                    <option value="1">Gasoline</option>
                    <option value="2">Diesel</option>
                    <option value="3">Hybrid</option>
                    <option value="4">Electric</option>
                    <option value="5">Hydrogen</option>
                </select>
            </div>
            <button className='advanced-filters-button' onClick={props.toggleAdvancedFilters}>
                <i className="bi bi-sliders2 me-2" style={{ color: 'var(--color-main-orange)' }}></i>
                Advanced Filters
            </button>
        </div>
    );
}