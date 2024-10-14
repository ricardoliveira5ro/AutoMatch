import { useParams } from 'react-router-dom';
import { Carousel } from './Carousel/Carousel';
import { KeyDetails } from './KeyDetails/KeyDetails';
import './CarDetails.css'

export const CarDetails = () => {

    const { id } = useParams();

    return (
        <div className='container w-100'>
            <div className='row g-0 py-3'>
                <Carousel/>
                <KeyDetails/>
            </div>
        </div>
    );
}