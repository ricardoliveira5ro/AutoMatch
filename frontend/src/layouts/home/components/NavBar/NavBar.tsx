import { NavLink, useNavigate } from 'react-router-dom';
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const NavBar = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const navigate = useNavigate();
    const handleSearchSubmit = (e: any) => {
        if (e.key === 'Enter') {
            navigate('/search', { state: { searchQuery: searchQuery } });
        }
    }

    return (
        <nav className="navbar navbar-dark">
            <div className="container-fluid flex-column flex-md-row justify-content-center justify-content-sm-between mx-sm-5 my-sm-2">
                <a className="navbar-brand mb-2 mb-md-0">
                    <img src={require('../../../../images/logos/logo-no-background.png')} width={180} alt="logo" />
                </a>
                <div className='d-none d-lg-flex'>
                    <div className="input-group input-group-sm">
                        <input type="text" placeholder="Any make, model..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} 
                            onKeyDown={handleSearchSubmit} className="form-control shadow-none border" aria-label="Any make, model..." aria-describedby="home-search" 
                        />
                        <Link to={'/search'} state={{searchQuery: searchQuery}} className="btn btn-outline-secondary" id="home-search">
                            <i className="bi bi-search"></i>
                        </Link>
                    </div>
                </div>
                <div className='d-flex align-items-center'>
                    <NavLink className='d-flex nav-link me-4' to={'/favorites'}>
                        <i className="bi bi-star-fill" style={{ color: '#83888f' }}></i>
                        <span className='ms-2 text-white'>Favorites</span>
                    </NavLink>
                    <NavLink to={localStorage.getItem("user_access_token") ? `/profile` : `/login`} type="button" className="btn btn-primary btn-sm px-5">
                        {localStorage.getItem("user_access_token") ? `My Account` : `Login` }
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}