import React from 'react';
import './CarKeyInfo.css'

export const CarKeyInfo: React.FC<{
    formatValueSpaces: any
}> = (props) => {

    return (
        <div className='d-flex flex-row flex-wrap justify-content-evenly align-items-center car-key-info-container'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <i className="bi bi-speedometer2 lh-1" style={{ color: 'white' }}></i>
                <p className='text-white mb-2 fs-6'>Mileage</p>
                <span className='text-white fs-5'>{props.formatValueSpaces(189998)} KM</span>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <i className="bi bi-fuel-pump lh-1" style={{ color: 'white' }}></i>
                <p className='text-white mb-2 fs-6'>Fuel</p>
                <span className='text-white fs-5'>Diesel</span>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <i className="bi bi-gear lh-1" style={{ color: 'white' }}></i>
                <p className='text-white mb-2 fs-6'>Gear Box</p>
                <span className='text-white fs-5'>Automatic</span>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <i className="bi bi-calendar-event lh-1" style={{ color: 'white' }}></i>
                <p className='text-white mb-2 fs-6'>Year</p>
                <span className='text-white fs-5'>2019</span>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <i className="bi bi-ev-front lh-1" style={{ color: 'white' }}></i>
                <p className='text-white mb-2 fs-6'>Horse Power</p>
                <span className='text-white fs-5'>194 HP</span>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <i className="bi bi-box-seam-fill lh-1" style={{ color: 'white' }}></i>
                <p className='text-white mb-2 fs-6'>Displacement</p>
                <span className='text-white fs-5'>{props.formatValueSpaces(1950)} cm3</span>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <i className="bi bi-car-front lh-1" style={{ color: 'white' }}></i>
                <p className='text-white mb-2 fs-6'>Style</p>
                <span className='text-white fs-5'>Coupe</span>
            </div>
        </div>
    );
}