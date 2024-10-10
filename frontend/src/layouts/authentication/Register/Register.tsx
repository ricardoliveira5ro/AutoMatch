import { Link } from 'react-router-dom';
import './Register.css';

export const Register = () => {

    return (
        <div className="container d-flex justify-content-center align-items-center p-5 p-sm-0" style={{ height: "100vh" }}>
            <div className="d-flex flex-column justify-content-center align-items-center register-container">
                <i className="bi bi-person-circle"></i>
                <input type="text" placeholder="Email" aria-label="Email" aria-describedby="register-email" />
                <div className='d-flex flex-row justify-content-between align-items-center w-100'>
                    <input className='me-2 me-sm-5' type="text" placeholder="First Name" aria-label="First Name" aria-describedby="register-first-name" />
                    <input type="text" placeholder="Last Name" aria-label="Last Name" aria-describedby="register-last-name" />
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center w-100">
                    <input className='me-2 me-sm-5' type="password" placeholder="Password" aria-label="Password" aria-describedby="register-password" />
                    <input type="number" placeholder="Phone number" aria-label="Phone number" aria-describedby="register-phone-number" />
                </div>
                <button className="btn btn-primary">Sign Up</button>
                <div className='d-flex flex-row justify-content-between align-items-center w-100'>
                    <Link className='d-flex flex-row align-items-center back-home' to='/'>
                        <i className="bi bi-house-fill" style={{color: 'white', fontSize: '30px'}}></i>
                        <p className='d-none d-sm-flex text-white ms-3 mb-0'>Go back</p>
                    </Link>
                    <div className='d-flex flex-row align-items-center' style={{columnGap: '10px'}}>
                        <p className='text-white mb-0'>Already have an account?</p>
                        <Link to='/login' style={{color: 'var(--color-main-orange)'}}>Log in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}