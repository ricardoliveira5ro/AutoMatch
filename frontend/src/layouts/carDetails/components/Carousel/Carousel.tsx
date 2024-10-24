import React from 'react';
import './Carousel.css'
import CarModel from '../../../../models/CarModel';

export const Carousel: React.FC<{
    car: CarModel | undefined
}> = (props) => {

    const carImages = props.car?.images || [];

    return (
        <div id="carouselExample" className="car-carousel carousel slide col-lg-7 col-12">
            <div className="carousel-inner">
                {carImages.map((carImage, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <img src={`data:image/jpeg;base64,${carImage}`} className="d-block w-100" alt={`Car Image ${index + 1}`}/>
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next"  >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}