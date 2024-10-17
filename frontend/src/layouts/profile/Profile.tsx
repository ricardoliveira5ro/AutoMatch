import { Link } from 'react-router-dom';
import './Profile.css'

export const Profile = () => {

    const email = "ricardo.example@example.com";

    return (
        <div className='container profile-container py-4'>
            <Link className='col-1 d-flex flex-row align-items-center back-home px-0 px-sm-3' to='/'>
                <i className="bi bi-house-fill" style={{ color: 'white', fontSize: '30px' }}></i>
                <p className='d-flex text-white ms-3 mb-0'>Home</p>
            </Link>
            <div className='row py-5'>
                <div className='col-3 d-none d-sm-flex justify-content-center align-items-center'>
                    <i className="bi bi-person-circle" style={{ color: 'white' }}></i>
                </div>
                <div className='col col-sm-8'>
                    <div className='d-flex flex-column w-100' style={{ rowGap: '20px' }}>
                        <div className='d-flex flex-row justify-content-between align-items-center w-100'>
                            <input className='me-2 me-lg-5' type="text" placeholder="First Name" aria-label="First Name" aria-describedby="profile-first-name" />
                            <input type="text" placeholder="Last Name" aria-label="Last Name" aria-describedby="profile-last-name" />
                        </div>
                        <div className='d-flex flex-row justify-content-between align-items-center w-100'>
                            <input className='me-2 me-lg-5' type="text" placeholder="Location, Country or City" aria-label="Location, Country or City" aria-describedby="profile-location" />
                            <input type="number" placeholder="Phone number" aria-label="Phone number" aria-describedby="profile-phone-number" />
                        </div>
                        <div className='email-save-container d-flex flex-row justify-content-between align-items-center'>
                            <input value={email} type="text" placeholder="Email" aria-label="Email" aria-describedby="profile-email" disabled />
                            <button className='btn btn-primary px-4 save-profile-btn'>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}