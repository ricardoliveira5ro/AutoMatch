import { useParams } from 'react-router-dom';
import './CarDetails.css'

export const CarDetails = () => {

    const { id } = useParams();

    const formatValueSpaces = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            maximumFractionDigits: 0,
        })
            .format(value)
            .replace(/,/g, ' ');
    };

    return (
        <div className='container w-100'>
            <div className='row g-0 py-5'>
                <div id="carouselExample" className="car-carousel carousel slide col-7">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={require('../../images/cars/recommendation-mercedes-E220.jpg')} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={require('../../images/cars/recommendation-mercedes-E220-2.jpg')} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={require('../../images/cars/recommendation-mercedes-E220-3.jpg')} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item ">
                            <img src={require('../../images/cars/recommendation-mercedes-E220-4.jpg')} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={require('../../images/cars/recommendation-mercedes-E220-5.jpg')} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={require('../../images/cars/recommendation-mercedes-E220-6.jpg')} className="d-block w-100" alt="..." />
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
                <div className='col-5 px-4'>
                    <div className='car-key-details-container d-flex flex-column p-3'>
                        <span className='fs-5'>Mercedes-Benz E 220 d AMG Line</span>
                        <p className='fs-6'>Class E 220</p>
                        <span className='fs-4' style={{ color: 'var(--color-main-orange)' }}>{formatValueSpaces(37500)} €</span>
                        <hr className='text-white'></hr>
                        <span>Ricardo Oliveira</span>
                        <p>Lisbon</p>
                        <div className='d-flex flex-row mb-4'>
                            <i className="bi bi-telephone-fill me-2" style={{ color: 'var(--color-main-orange)' }}></i>
                            <span>918171610</span>
                        </div>
                        <button className='btn btn-primary mb-2'>
                            <i className="bi bi-envelope me-2"></i>
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}