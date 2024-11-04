import React from 'react'
import CarModel from '../../../../../../models/CarModel';
import { Link } from 'react-router-dom';
import { formatValueSpaces } from '../../../../../utils/functions';

export const RecommendationCar: React.FC<{
    car: CarModel
}> = (props) => {

    const carImg = props.car.imgCover ? `data:image/jpeg;base64,${props.car.imgCover}` :
                    require('../../../../../../images/image-not-available.jpg')

    return (
        <Link to={`/cars/${props.car.id}`} className="card card-recommendation">
            <img src={carImg} className="card-img-top img-fluid" alt="Car Image" />
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title text-white">{props.car.title}</h5>
                    <p className="card-text text-white">{props.car.date?.split('-')[0]} &nbsp;&#8226;&nbsp; {formatValueSpaces(props.car.mileage || 0)} km &nbsp;&#8226;&nbsp; {props.car.fuelType} &nbsp;&#8226;&nbsp; {props.car.horsePower} hp</p>
                </div>
                <span className='card-price'>{formatValueSpaces(props.car.price || 0)} <span>EUR</span></span>
            </div>
        </Link>
    );
}
