import React from 'react'
import { CardCard } from '../CarCard/CarCard';
import './CarCardsList.css'

export const CarCardsList: React.FC<{

}> = (props) => {

    return (
        <div className='d-flex flex-column car-cards-list'>
            <div className='row' style={{ rowGap: '10px' }}>
                <div className='col-md-11'>
                    <CardCard />
                </div>
                <div className='col-md-1'>
                    <div className='remove-favorite-container d-flex justify-content-center align-items-center h-100'>
                        <i className="bi bi-trash fs-4" style={{ color: 'white' }}></i>
                    </div>
                </div>
            </div>
            <div className='row' style={{ rowGap: '10px' }}>
                <div className='col-md-11'>
                    <CardCard />
                </div>
                <div className='col-md-1'>
                    <div className='remove-favorite-container d-flex justify-content-center align-items-center h-100'>
                        <i className="bi bi-trash fs-4" style={{ color: 'white' }}></i>
                    </div>
                </div>
            </div>
            <div className='row' style={{ rowGap: '10px' }}>
                <div className='col-md-11'>
                    <CardCard />
                </div>
                <div className='col-md-1'>
                    <div className='remove-favorite-container d-flex justify-content-center align-items-center h-100'>
                        <i className="bi bi-trash fs-4" style={{ color: 'white' }}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}