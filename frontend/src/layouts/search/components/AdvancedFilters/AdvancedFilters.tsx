import React from 'react';
import './AdvancedFilters.css';
import colors from '../../../../static/colors.json';
import condition from '../../../../static/condition.json';
import gearBox from '../../../../static/gear-box.json';

export const AdvancedFilters: React.FC<{
    filters: any,
    onFilterChange: (name: string, value: string) => void
}> = (props) => {

    return (
        <div className='d-flex flex-column justify-content-center align-items-center advanced-filters-container w-100'>
            <div className='d-flex flex-column car-style-container'>
                <ul className="list-group d-flex flex-row flex-wrap justify-content-center align-items-center" style={{ rowGap: '15px', columnGap: '35px' }}>
                    <li className="list-group-item d-flex justify-content-center align-items-end">
                        <input className="form-check-input me-1 mb-1" type="checkbox" value="" id="firstCheckbox" />
                        <div className='d-flex flex-row justify-content-center align-items-end'>
                            <img src={require('../../../../images/body-style/convertible.png')} alt="Convertible" />
                            <p className='ms-1 mb-0'>Convertible</p>
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-center align-items-end">
                        <input className="form-check-input me-1 mb-1" type="checkbox" value="" id="secondCheckbox" />
                        <div className='d-flex flex-row justify-content-center align-items-end'>
                            <img src={require('../../../../images/body-style/coupe.png')} alt="Coupe" />
                            <p className='ms-1 mb-0'>Coupe</p>
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-center align-items-end">
                        <input className="form-check-input me-1 mb-1" type="checkbox" value="" id="thirdCheckbox" />
                        <div className='d-flex flex-row justify-content-center align-items-end'>
                            <img src={require('../../../../images/body-style/estate.png')} alt="Estate" />
                            <p className='ms-1 mb-0'>Estate</p>
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-center align-items-end">
                        <input className="form-check-input me-1 mb-1" type="checkbox" value="" id="fourthCheckbox" />
                        <div className='d-flex flex-row justify-content-center align-items-end'>
                            <img src={require('../../../../images/body-style/hatchback.png')} alt="Hatchback" />
                            <p className='ms-1 mb-0'>Hatchback</p>
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-center align-items-end">
                        <input className="form-check-input me-1 mb-1" type="checkbox" value="" id="fifthCheckbox" />
                        <div className='d-flex flex-row justify-content-center align-items-end'>
                            <img src={require('../../../../images/body-style/mpv.png')} alt="MPV" />
                            <p className='ms-1 mb-0'>MPV</p>
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-center align-items-end">
                        <input className="form-check-input me-1 mb-1" type="checkbox" value="" id="sixthCheckbox" />
                        <div className='d-flex flex-row justify-content-center align-items-end'>
                            <img src={require('../../../../images/body-style/pickup.png')} alt="Pickup" />
                            <p className='ms-1 mb-0'>Pickup</p>
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-center align-items-end">
                        <input className="form-check-input me-1 mb-1" type="checkbox" value="" id="seventhCheckbox" />
                        <div className='d-flex flex-row justify-content-center align-items-end'>
                            <img src={require('../../../../images/body-style/saloon.png')} alt="Saloon" />
                            <p className='ms-1 mb-0'>Saloon</p>
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-center align-items-end">
                        <input className="form-check-input me-1 mb-1" type="checkbox" value="" id="eighthCheckbox" />
                        <div className='d-flex flex-row justify-content-center align-items-end'>
                            <img src={require('../../../../images/body-style/suv.png')} alt="SUV" />
                            <p className='ms-1 mb-0'>SUV</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className='d-flex flex-row flex-wrap justify-content-center align-items-center other-filters-container mt-3'>
                <div className='d-flex flex-column align-items-center'>
                    <div className='container p-0 mb-2'>
                        <span className="text-white">Condition</span>
                    </div>
                    <select value={props.filters.condition} onChange={e => props.onFilterChange('condition', e.target.value)}
                        className="form-select form-select-sm banner-select shadow-none" aria-label="Default select example"
                    >
                        <option value="All">All</option>
                        {condition.map((item, index) => (
                            <option key={index} value={item.condition}>{item.condition}</option>
                        ))}
                    </select>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <div className='container p-0 mb-2'>
                        <span className="text-white">Gear Box</span>
                    </div>
                    <select value={props.filters.gearBox} onChange={e => props.onFilterChange('gearBox', e.target.value)}
                        className="form-select form-select-sm banner-select shadow-none" aria-label="Default select example"
                    >
                        <option value="All">All</option>
                        {gearBox.map((item, index) => (
                            <option key={index} value={item.gearBox}>{item.gearBox}</option>
                        ))}
                    </select>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <div className='container p-0 mb-2'>
                        <span className="text-white">Doors</span>
                    </div>
                    <input value={props.filters.doors} onChange={e => props.onFilterChange('doors', e.target.value)} type="number" className="banner-input" placeholder="4" aria-label="Doors" aria-describedby="doors" />
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <div className='container p-0 mb-2'>
                        <span className="text-white">Displacement (Min.)</span>
                    </div>
                    <input value={props.filters.minDisplacement} onChange={e => props.onFilterChange('minDisplacement', e.target.value)} type="number" className="banner-input" placeholder="cm3" aria-label="Displacement (Min.)" aria-describedby="displacement-min" />
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <div className='container p-0 mb-2'>
                        <span className="text-white">Displacement (Max.)</span>
                    </div>
                    <input value={props.filters.maxDisplacement} onChange={e => props.onFilterChange('maxDisplacement', e.target.value)} type="number" className="banner-input" placeholder="cm3" aria-label="Displacement (Max.)" aria-describedby="displacement-max" />
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <div className='container p-0 mb-2'>
                        <span className="text-white">Color</span>
                    </div>
                    <select value={props.filters.color} onChange={e => props.onFilterChange('color', e.target.value)}
                        className="form-select form-select-sm banner-select shadow-none" aria-label="Default select example"
                    >
                        <option value="All">All</option>
                        {colors.map((item, index) => (
                            <option key={index} value={item.color}>{item.color}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}