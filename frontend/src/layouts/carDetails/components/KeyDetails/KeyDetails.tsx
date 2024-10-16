import React, { useState } from 'react';
import './KeyDetails.css'

export const KeyDetails: React.FC<{
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
                    <span className='fs-5'>Mercedes-Benz E 220 d AMG Line</span>
                    <p className='fs-6'>Class E 220</p>
                    <span className='fs-4' style={{ color: 'var(--color-main-orange)' }}>{props.formatValueSpaces(37500)} €</span>
                    <hr className='text-white'></hr>
                    <span>Ricardo Oliveira</span>
                    <p>Lisbon</p>
                </div>
                <div>
                    <div className='d-flex flex-row justify-content-between mb-4'>
                        <div>
                            <i className="bi bi-telephone-fill me-2" style={{ color: 'var(--color-main-orange)' }}></i>
                            <span>918171610</span>
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