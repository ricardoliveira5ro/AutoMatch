import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Login.css';

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const location = useLocation();

    const login = (e: any) => {
        e.preventDefault();

        fetch("http://localhost:8080/api/users/login", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(async response => {
                const result = await response.json();

                if (response.ok) {
                    localStorage.setItem("user_access_token", result.token)
                    navigate('/profile');
                    return;
                }

                const error = result || "Unknown error"

                return Promise.reject(error)
            })
            .catch(error => {
                alert(error.message)
            });
    }

    return (
        <div className="container d-flex justify-content-center align-items-center p-5 p-sm-0" style={{ height: "100vh" }}>
            {location.state?.forcedRedirect &&
                <div className="container alert alert-danger alert-dismissible fade show top-alert" role="alert">
                    Session expired, please log in again!
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            }
            <form onSubmit={e => { login(e) }} className="d-flex flex-column justify-content-center align-items-center login-container">
                <i className="bi bi-person-circle"></i>
                <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" aria-label="Email" aria-describedby="login-email" />
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" aria-label="Password" aria-describedby="login-password" />
                <button className="btn btn-primary" type="submit">Login</button>
                <div className='d-flex flex-row justify-content-between align-items-center w-100'>
                    <Link className='d-flex flex-row align-items-center back-home' to='/'>
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