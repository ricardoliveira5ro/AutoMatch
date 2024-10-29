import React from 'react';
import './CarKeyInfo.css'
import CarModel from '../../../../models/CarModel';
import { formatValueSpaces } from '../../../utils/functions';

export const CarKeyInfo: React.FC<{
    car: CarModel | undefined
}> = (props) => {

    return (
        <div className='d-flex flex-row flex-wrap justify-content-evenly align-items-center car-key-info-container'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <i className="bi bi-speedometer2 lh-1" style={{ color: 'white' }}></i>
                <p className='text-white mb-2 fs-6'>Mileage</p>
                <span className='text-white fs-5'>{formatValueSpaces(props.car?.mileage || 0)} KM</span>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <i className="bi bi-fuel-pump lh-1" style={{ color: 'white' }}></i>
                <p className='text-white mb-2 fs-6'>Fuel</p>
                <span className='text-white fs-5'>{props.car?.fuelType}</span>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <i className="bi bi-gear lh-1" style={{ color: 'white' }}></i>
                <p className='text-white mb-2 fs-6'>Gear Box</p>
                <span className='text-white fs-5'>{props.car?.gearBox}</span>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <i className="bi bi-calendar-event lh-1" style={{ color: 'white' }}></i>
                <p className='text-white mb-2 fs-6'>Year</p>
                <span className='text-white fs-5'>{props.car?.date?.split('-')[0]}</span>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <i className="bi bi-ev-front lh-1" style={{ color: 'white' }}></i>
                <p className='text-white mb-2 fs-6'>Horse Power</p>
                <span className='text-white fs-5'>{props.car?.horsePower} HP</span>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <i className="bi bi-box-seam-fill lh-1" style={{ color: 'white' }}></i>
                <p className='text-white mb-2 fs-6'>Displacement</p>
                <span className='text-white fs-5'>{formatValueSpaces(props.car?.displacement || 0)} cm3</span>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <i className="bi bi-car-front lh-1" style={{ color: 'white' }}></i>
                <p className='text-white mb-2 fs-6'>Style</p>
                <span className='text-white fs-5'>{props.car?.style}</span>
            </div>
        </div>
    );
}