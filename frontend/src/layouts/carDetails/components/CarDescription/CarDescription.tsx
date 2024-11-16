import React from 'react';
import './CarDescription.css'
import CarModel from '../../../../models/CarModel';

export const CarDescription: React.FC<{
    car: CarModel | undefined
}> = (props) => {

    return (
        <div className='car-description-container my-3'>
            <p className={`text-white m-0 ${!props.car?.description ? 'fst-italic' : ''}`} style={{ whiteSpace: 'pre-line' }}>
                {props.car?.description ? props.car?.description?.replace(/\\n/g, '\n') : 
                                            "This listing does not contain a description"}
            </p>
        </div>
    );
}