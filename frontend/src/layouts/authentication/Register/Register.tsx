import { Link } from 'react-router-dom';
import './Register.css';
import { useState } from 'react';

export const Register = () => {

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const register = () => {
        // CALL ENDPOINT
        // REDIRECT TO /login
    }

    return (
        <div className="container d-flex justify-content-center align-items-center p-5 p-sm-0" style={{ height: "100vh" }}>
            <form onSubmit={register} className="d-flex flex-column justify-content-center align-items-center register-container">
                <i className="bi bi-person-circle"></i>
                <input value={email} onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" aria-label="Email" aria-describedby="register-email" required />
                <div className='d-flex flex-row justify-content-between align-items-center w-100'>
                    <input value={firstName} onChange={e => setFirstName(e.target.value)} className='me-2 me-sm-5' type="text" placeholder="First Name" aria-label="First Name" aria-describedby="register-first-name" required />
                    <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" placeholder="Last Name" aria-label="Last Name" aria-describedby="register-last-name" required />
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center w-100">
                    <input value={password} onChange={e => setPassword(e.target.value)} className='me-2 me-sm-5' type="password" placeholder="Password" aria-label="Password" aria-describedby="register-password" required />
                    <input value={phone} onChange={e => setPhone(e.target.value)} type="number" placeholder="Phone number" aria-label="Phone number" aria-describedby="register-phone-number" required />
                </div>
                <button className="btn btn-primary" type="submit">Sign Up</button>
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
            </form>
        </div>
    );
}