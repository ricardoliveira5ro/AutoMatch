import React from 'react'
import CarModel from '../../../../../../models/CarModel';
import { Link } from 'react-router-dom';

export const RecommendationCar: React.FC<{
    car: CarModel,
    formatValueSpace: any
}> = (props) => {

    const carImg = props.car.imgCover ? `data:image/jpeg;base64,${props.car.imgCover}` :
                    require('../../../../../../images/cars/recommendation-mercedes-E220.jpg')

    return (
        <Link to={`/cars/${props.car.id}`} className="card card-recommendation">
            <img src={carImg} className="card-img-top img-fluid" alt="Car Image" />
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title text-white">{props.car.title}</h5>
                    <p className="card-text text-white">{props.car.date?.split('-')[0]} &nbsp;&#8226;&nbsp; {props.formatValueSpace(props.car.mileage)} km &nbsp;&#8226;&nbsp; {props.car.fuelType} &nbsp;&#8226;&nbsp; {props.car.horsePower} hp</p>
                </div>
                <span className='card-price'>{props.formatValueSpace(props.car.price)} <span>EUR</span></span>
            </div>
        </Link>
    );
}
