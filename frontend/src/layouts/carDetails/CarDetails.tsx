import { useParams } from 'react-router-dom';
import { Carousel } from './Carousel/Carousel';
import { KeyDetails } from './KeyDetails/KeyDetails';
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
            <div className='row g-0 py-3'>
                <Carousel />
                <KeyDetails formatValueSpaces={formatValueSpaces} />
            </div>
            <div className='d-flex flex-row flex-wrap justify-content-evenly align-items-center car-key-info-container'>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <i className="bi bi-speedometer2 lh-1" style={{ color: 'white' }}></i>
                        <p className='text-white mb-2 fs-6'>Mileage</p>
                        <span className='text-white fs-5'>{formatValueSpaces(189998)} KM</span>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <i className="bi bi-fuel-pump lh-1" style={{ color: 'white' }}></i>
                        <p className='text-white mb-2 fs-6'>Fuel</p>
                        <span className='text-white fs-5'>Diesel</span>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <i className="bi bi-gear lh-1" style={{ color: 'white' }}></i>
                        <p className='text-white mb-2 fs-6'>Gear Box</p>
                        <span className='text-white fs-5'>Automatic</span>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <i className="bi bi-calendar-event lh-1" style={{ color: 'white' }}></i>
                        <p className='text-white mb-2 fs-6'>Year</p>
                        <span className='text-white fs-5'>2019</span>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <i className="bi bi-ev-front lh-1" style={{ color: 'white' }}></i>
                        <p className='text-white mb-2 fs-6'>Horse Power</p>
                        <span className='text-white fs-5'>194 HP</span>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <i className="bi bi-box-seam-fill lh-1" style={{ color: 'white' }}></i>
                        <p className='text-white mb-2 fs-6'>Displacement</p>
                        <span className='text-white fs-5'>{formatValueSpaces(1950)} cm3</span>
                    </div>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <i className="bi bi-car-front lh-1" style={{ color: 'white' }}></i>
                        <p className='text-white mb-2 fs-6'>Style</p>
                        <span className='text-white fs-5'>Coupe</span>
                    </div>
                </div>
            <div className='row g-0 py-3'>
                
            </div>
        </div>
    );
}