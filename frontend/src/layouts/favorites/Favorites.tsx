import { Link } from 'react-router-dom';
import { CardCard } from '../utils/components/CarCard/CarCard';
import './Favorites.css'

export const Favorites = () => {

    return (
        <div className='container d-flex flex-column py-4' style={{ rowGap: '20px' }}>
            <div className='row d-flex align-items-center'>
                <Link className='col-1 d-flex flex-row align-items-center back-home' to='/'>
                    <i className="bi bi-house-fill" style={{ color: 'white', fontSize: '30px' }}></i>
                    <p className='d-none d-sm-flex text-white ms-3 mb-0'>Home</p>
                </Link>
                <div className='col-10'>
                    <h3 className='text-center text-white mb-0'>Favorites</h3>
                </div>
                <div className='col-1 text-center'>
                    <i className="bi bi-person-circle fs-3" style={{ color: 'white' }}></i>
                </div>
            </div>
            <div className='row' style={{ rowGap: '10px' }}>
                <div className='col-md-11'>
                    <CardCard/>
                </div>
                <div className='col-md-1'>
                    <div className='remove-favorite-container d-flex justify-content-center align-items-center h-100'>
                        <i className="bi bi-trash fs-4" style={{ color: 'white' }}></i>
                    </div>
                </div>
            </div>
            <div className='row' style={{ rowGap: '10px' }}>
                <div className='col-md-11'>
                    <CardCard/>
                </div>
                <div className='col-md-1'>
                    <div className='remove-favorite-container d-flex justify-content-center align-items-center h-100'>
                        <i className="bi bi-trash fs-4" style={{ color: 'white' }}></i>
                    </div>
                </div>
            </div>
            <div className='row' style={{ rowGap: '10px' }}>
                <div className='col-md-11'>
                    <CardCard/>
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