import { useNavigate } from 'react-router-dom';
import './NotFound.css'

export const NotFound = () => {

    const navigate = useNavigate();

    return (
        <div className='container'>
            <div className='d-flex flex-column justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
                <img src={require('../../images/404-error.png')} width={200}/>
                <h1 className='text-white'>Ooops! Page Not Found</h1>
                <p className='text-white'>This page doesn't exist or was removed</p>
                <a className='not-found-home rounded-pill' onClick={() => navigate('/home')}>Back to Home</a>
            </div>
        </div>
    );
}