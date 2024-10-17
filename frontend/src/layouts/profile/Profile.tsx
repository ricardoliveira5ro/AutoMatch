import { Link } from 'react-router-dom';
import './Profile.css'
import { CarCardsList } from '../utils/components/CarCardsList/CarCardsList';
import { ProfileForm } from './components/ProfileForm/ProfileForm';

export const Profile = () => {

    return (
        <div className='container py-4'>
            <Link className='col-1 d-flex flex-row align-items-center back-home px-0 px-sm-3' to='/'>
                <i className="bi bi-house-fill" style={{ color: 'white', fontSize: '30px' }}></i>
                <p className='d-flex text-white ms-3 mb-0'>Home</p>
            </Link>
            <ProfileForm />
            <hr className='text-white' />
            <div className='mt-5 w-100'>
                <div className='row mb-4'>
                    <div className='col-11'>
                        <h3 className='text-white'>Your active listings</h3>
                    </div>
                    <div className='col-1 text-center ps-2'>
                        <i className="bi bi-plus-square fs-4" style={{ color: 'white' }}></i>
                    </div>
                </div>
                <CarCardsList />
            </div>
        </div>
    );
}