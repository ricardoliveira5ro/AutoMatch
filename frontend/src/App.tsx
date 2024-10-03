import React from 'react';
import './App.css';

function App() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className='d-flex mx-auto'>
          <a className="navbar-brand me-5" href="#">
            <img src={require('./logos/logo-no-background.png')} width={220} alt="book"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-5">
              <li className="nav-item">
                <a className="nav-link text-white active" aria-current="page" href="#">Sport Cars</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Best Sellers</a>
              </li>
            </ul>
            <div className='d-flex align-items-center ms-5'>
              <div className='d-flex align-items-center me-3'>
                <i className="bi bi-star-fill" style={{color: '#83888f'}}></i>
                <a className="nav-link text-white ms-2" href="#">Favorites</a>
              </div>
              <button type="button" className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default App;
