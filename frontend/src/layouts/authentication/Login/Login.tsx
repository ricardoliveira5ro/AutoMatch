import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../../authentication/AuthProvider';
import './Login.css';

export const Login = () => {

    const { login } = useAuth();
    
    const location = useLocation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = (e: any) => {
        e.preventDefault();

        login(email, password);
    }

    return (
        <div className="container d-flex justify-content-center align-items-center p-5 p-sm-0" style={{ height: "100vh" }}>
            {location.state?.forcedRedirect &&
                <div className="container alert alert-danger alert-dismissible fade show top-alert" role="alert">
                    Session expired, please log in again!
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            }
            <form onSubmit={e => { onLogin(e) }} className="d-flex flex-column justify-content-center align-items-center login-container">
                <i className="bi bi-person-circle"></i>
                <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" aria-label="Email" aria-describedby="login-email" />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" aria-label="Password" aria-describedby="login-password" />
                <button className="btn btn-primary" type="submit">Login</button>
                <div className='d-flex flex-row justify-content-between align-items-center w-100'>
                    <Link className='d-flex flex-row align-items-center back-home' to='/home'>
                        <i className="bi bi-house-fill" style={{ color: 'white', fontSize: '30px' }}></i>
                        <p className='d-none d-sm-flex text-white ms-3 mb-0'>Go back</p>
                    </Link>
                    <div className='d-flex flex-row align-items-center' style={{ columnGap: '10px' }}>
                        <p className='text-white mb-0'>Don't have an account?</p>
                        <Link to='/register' style={{ color: 'var(--color-main-orange)' }}>Sign Up</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}