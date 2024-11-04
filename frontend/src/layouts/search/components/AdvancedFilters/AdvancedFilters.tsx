import React, { useState } from 'react';
import './AdvancedFilters.css';
import colors from '../../../../static/colors.json';
import condition from '../../../../static/condition.json';
import gearBox from '../../../../static/gear-box.json';
import carStyles from '../../../../static/car-styles.json';

export const AdvancedFilters: React.FC<{
    filters: any,
    onFilterChange: (name: string, value: any) => void
}> = (props) => {

    const handleCheckBoxChange = (e: any) => {
        const { value, checked } = e.target;

        const updatedSelectedIds = checked ? 
                [...props.filters.styles, value] : // Append to existing
                props.filters.styles.filter((id: string) => id !== value); // Remove from list

        props.onFilterChange('styles', updatedSelectedIds);
    }

    return (
        <div className='d-flex flex-column justify-content-center align-items-center advanced-filters-container w-100'>
            <div className='d-flex flex-column car-style-container'>
                <ul className="list-group d-flex flex-row flex-wrap justify-content-center align-items-center" style={{ rowGap: '15px', columnGap: '35px' }}>
                    {carStyles.map((item, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-center align-items-end">
                            <input onChange={(e) => { handleCheckBoxChange(e) }} checked={props.filters.styles.includes(item.carStyle)} 
                                value={item.carStyle} id={`checkbox-${index}`} className="form-check-input me-1 mb-1" type="checkbox" 
                            />
                            <div className='d-flex flex-row justify-content-center align-items-end'>
                                <img src={require(`../../../../${item.imgPath}`)} alt={item.carStyle} />
                                <p className='ms-1 mb-0'>{item.carStyle}</p>
                            </div>
                        </li>
                    ))}
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