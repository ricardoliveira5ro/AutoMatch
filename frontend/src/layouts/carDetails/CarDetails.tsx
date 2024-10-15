import { useParams } from 'react-router-dom';
import { Carousel } from './components/Carousel/Carousel';
import { KeyDetails } from './components/KeyDetails/KeyDetails';
import { CarKeyInfo } from './components/CarKeyInfo/CarKeyInfo';
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
            <CarKeyInfo formatValueSpaces={formatValueSpaces}/>
            <div className='row g-0 py-3'>

            </div>
        </div>
    );
}