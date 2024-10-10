import './Login.css';

export const Login = () => {
    
    return (
        <div className="container d-flex justify-content-center align-items-center p-5 p-sm-0" style={{ height: "100vh" }}>
            <div className="d-flex flex-column justify-content-center align-items-center login-container">
                <i className="bi bi-person-circle"></i>
                <input type="text" placeholder="Email" aria-label="Email" aria-describedby="login-email" />
                <input type="password" placeholder="Password" aria-label="Password" aria-describedby="login-password" />
                <button className="btn btn-primary">Login</button>
                <div className='d-flex flex-row justify-content-between align-items-center w-100'>
                    <a className='d-flex flex-row align-items-center back-home' href="#">
                        <i className="bi bi-house-fill" style={{color: 'white', fontSize: '30px'}}></i>
                        <p className='d-none d-sm-flex text-white ms-3 mb-0'>Go back</p>
                    </a>
                    <div className='d-flex flex-row align-items-center' style={{columnGap: '10px'}}>
                        <p className='text-white mb-0'>Already have an account?</p>
                        <a href="#" style={{color: 'var(--color-main-orange)'}}>Log in</a>
                    </div>
                </div>
            </div>
        </div>
    );
}