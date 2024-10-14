import './Carousel.css'

export const Carousel = () => {

    return (
        <div id="carouselExample" className="car-carousel carousel slide col-7">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={require('../../../images/cars/recommendation-mercedes-E220.jpg')} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={require('../../../images/cars/recommendation-mercedes-E220-2.jpg')} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={require('../../../images/cars/recommendation-mercedes-E220-3.jpg')} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item ">
                    <img src={require('../../../images/cars/recommendation-mercedes-E220-4.jpg')} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={require('../../../images/cars/recommendation-mercedes-E220-5.jpg')} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src={require('../../../images/cars/recommendation-mercedes-E220-6.jpg')} className="d-block w-100" alt="..." />
                </div>
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