import { useParams } from 'react-router-dom';
import { Carousel } from './components/Carousel/Carousel';
import { KeyDetails } from './components/KeyDetails/KeyDetails';
import { CarKeyInfo } from './components/CarKeyInfo/CarKeyInfo';
import './CarDetails.css'
import { CarDescription } from './components/CarDescription/CarDescription';
import { Link } from 'react-router-dom';

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
            <Link className='d-flex flex-row align-items-center back-home mt-3' to='/'>
                    <i className="bi bi-house-fill" style={{ color: 'white', fontSize: '30px' }}></i>
                    <p className='d-none d-sm-flex text-white ms-3 mb-0'>Home</p>
            </Link>
            <div className='row g-0 pt-1 pb-3'>
                <Carousel />
                <KeyDetails formatValueSpaces={formatValueSpaces} />
            </div>
            <CarKeyInfo formatValueSpaces={formatValueSpaces}/>
            <CarDescription/>
        </div>
    );
}