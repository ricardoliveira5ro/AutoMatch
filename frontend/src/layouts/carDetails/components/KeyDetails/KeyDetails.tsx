import React, { useState } from 'react';
import './KeyDetails.css'
import CarModel from '../../../../models/CarModel';

export const KeyDetails: React.FC<{
    car: CarModel | undefined,
    formatValueSpaces: any
}> = (props) => {

    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        <div className='col-lg-5 col-12 ps-lg-4 pt-lg-0 pt-4'>
            <div className='car-key-details-container d-flex flex-column justify-content-between p-3'>
                <div>
                    <span className='fs-5'>{props.car?.title}</span>
                    <p className='fs-6'>{props.car?.model}</p>
                    <span className='fs-4' style={{ color: 'var(--color-main-orange)' }}>{props.formatValueSpaces(props.car?.price)} €</span>
                    <hr className='text-white'></hr>
                    <span>{props.car?.user?.firstName} {props.car?.user?.lastName}</span>
                    <p>{props.car?.user?.location}</p>
                </div>
                <div>
                    <div className='d-flex flex-row justify-content-between mb-4'>
                        <div>
                            <i className="bi bi-telephone-fill me-2" style={{ color: 'var(--color-main-orange)' }}></i>
                            <span>{props.car?.user?.contactPhone}</span>
                        </div>
                        <a onClick={toggleFavorite}>
                            <i className={`bi me-2 ${isFavorite ? 'bi-star-fill' : 'bi-star'}`} style={{ color: 'yellow' }}></i>
                            <span>{isFavorite ? 'Remove from favorites' : 'Add to favorites'}</span>
                        </a>
                    </div>
                    <button className='btn btn-primary mb-2 w-100'>
                        <i className="bi bi-envelope me-2"></i>
                        Contact
                    </button>
                </div>
            </div>
        </div>
    );
}