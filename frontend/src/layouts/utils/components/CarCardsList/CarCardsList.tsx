import React from 'react'
import { Link } from 'react-router-dom';
import CarModel from '../../../../models/CarModel';
import { CardCard } from '../CarCard/CarCard';
import './CarCardsList.css'

export const CarCardsList: React.FC<{
    cars: CarModel[],
    editMode: boolean
    removeCar: (car: CarModel) => void
}> = (props) => {

    return (
        <div className='d-flex flex-column car-cards-list'>
            {props.cars.map((car, index) => (
                <div key={index} className='row' style={{ rowGap: '10px' }}>
                    {props.editMode &&
                        <div className='col-md-1'>
                            <Link className='edit-listing-button d-flex justify-content-center align-items-center' to={'/newListing'} state={ { editMode: true, carId: car.id } }>
                                <i className="bi bi-pencil-fill fs-5" style={{ color: 'white' }}></i>
                            </Link>
                        </div>
                    }
                    <div className='col'>
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