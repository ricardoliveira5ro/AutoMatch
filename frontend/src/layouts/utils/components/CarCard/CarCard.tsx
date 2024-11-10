import { Link } from 'react-router-dom';
import './CarCard.css'
import { formatValueSpaces } from '../../functions';
import React from 'react';
import CarModel from '../../../../models/CarModel';

export const CardCard: React.FC<{
    car: CarModel | undefined
}> = (props) => {

    const carImg = props.car?.imgCover ? `data:image/jpeg;base64,${props.car.imgCover}` :
                    require('../../../../images/image-not-available.jpg')

    return (
        <Link to={`/cars/${props.car?.id}`} className="card w-100" style={{ backgroundColor: 'var(--color-background-dark-contrast)' }}>
            <div className="row g-0">
                <div className="col-md-3 card-image">
                    <img src={carImg} className="img-fluid car-card-img" alt="Car" />
                </div>
                <div className="col-md-9">
                    <div className="car-card-body card-body d-flex flex-row justify-content-between align-items-center h-100" style={{rowGap: '20px'}}>
                        <div className='h-100'>
                            <h5 className="card-title text-white">{props.car?.title}</h5>
                            <p className="card-text text-white">
                                {props.car?.displacement ? `${formatValueSpaces(props.car.displacement)} cm3 • ` : ""}
                                {props.car?.horsePower} hp
                            </p>
                            <div className='d-flex flex-row flex-wrap' style={{ columnGap: '20px', rowGap: '5px' }}>
                                <div className='d-flex flex-row align-items-center car-card-characteristic'>
                                    <i className="bi bi-speedometer2" style={{ color: 'white' }}></i>
                                    <p className='text-white'>{formatValueSpaces(props.car?.mileage || 0)} KM</p>
                                </div>
                                <div className='d-flex flex-row align-items-center car-card-characteristic'>
                                    <i className="bi bi-fuel-pump" style={{ color: 'white' }}></i>
                                    <p className='text-white'>{props.car?.fuelType}</p>
                                </div>
                                <div className='d-flex flex-row align-items-center car-card-characteristic'>
                                    <i className="bi bi-car-front" style={{ color: 'white' }}></i>
                                    <p className='text-white'>{props.car?.gearBox}</p>
                                </div>
                                <div className='d-flex flex-row align-items-center car-card-characteristic'>
                                    <i className="bi bi-calendar-event" style={{ color: 'white' }}></i>
                                    <p className='text-white'>{props.car?.date?.split('-')[0]}</p>
                                </div>
                            </div>
                        </div>
                        <span className='card-text fs-4' style={{ color: 'var(--color-main-orange)' }}>{formatValueSpaces(props.car?.price || 0)} €</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}