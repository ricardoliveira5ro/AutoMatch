import React from 'react'
import CarModel from '../../../../models/CarModel';
import { CardCard } from '../CarCard/CarCard';
import './CarCardsList.css'

export const CarCardsList: React.FC<{
    cars: CarModel[],
    removeCar: (car: CarModel) => void
}> = (props) => {

    return (
        <div className='d-flex flex-column car-cards-list'>
            {props.cars.map((car, index) => (
                <div key={index} className='row' style={{ rowGap: '10px' }}>
                    <div className='col-md-11'>
                        <CardCard car={car} />
                    </div>
                    <div className='col-md-1'>
                        <button className='remove-favorite-button d-flex justify-content-center align-items-center' onClick={() => props.removeCar(car)}>
                            <i className="bi bi-trash fs-4" style={{ color: 'white' }}></i>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}