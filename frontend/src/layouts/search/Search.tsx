import { Link } from 'react-router-dom';
import './Search.css';
import { useState } from 'react';

export const Search = () => {

    const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

    const toggleAdvancedFilters = () => {
        setShowAdvancedFilters(prevState => !prevState);
    };

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center py-4 px-3 px-sm-0">
            <div className='d-flex flex-row justify-content-between align-items-center w-100'>
                <Link className='d-flex flex-row align-items-center back-home' to='/'>
                    <i className="bi bi-house-fill" style={{ color: 'white', fontSize: '30px' }}></i>
                    <p className='d-none d-sm-flex text-white ms-3 mb-0'>Home</p>
                </Link>
                <button className='btn btn-primary px-5' type='button'>Search</button>
            </div>
            <div className='d-flex flex-row flex-wrap justify-content-center align-items-end basic-filters-container w-100 mt-3'>
                <div className='d-flex flex-column align-items-center'>
                    <div className='container p-0'>
                        <span className="text-white">Make</span>
                    </div>
                    <select className="form-select form-select-sm banner-select shadow-none text-white" aria-label="Default select example">
                        <option selected>All</option>
                        <option value="1">Mercedes</option>
                        <option value="2">Ferrari</option>
                        <option value="3">Renault</option>
                    </select>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <div className='container p-0'>
                        <span className="text-white">Model</span>
                    </div>
                    <select className="form-select form-select-sm banner-select shadow-none" aria-label="Default select example" disabled>
                        <option selected>All</option>
                        <option value="1">Mercedes</option>
                        <option value="2">Ferrari</option>
                        <option value="3">Renault</option>
                    </select>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <div className='container p-0'>
                        <span className="text-white">Year (From)</span>
                    </div>
                    <input type="number" className="banner-input" placeholder="1990" aria-label="Year" aria-describedby="year-from" />
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <div className='container p-0'>
                        <span className="text-white">Year (To)</span>
                    </div>
                    <input type="number" className="banner-input" placeholder="2024" aria-label="Year" aria-describedby="year-to" />
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <div className='container p-0'>
                        <span className="text-white">Price (Min.)</span>
                    </div>
                    <input type="number" className="banner-input" placeholder="€" aria-label="Price Min" aria-describedby="price-min" />
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <div className='container p-0'>
                        <span className="text-white">Price (Max.)</span>
                    </div>
                    <input type="number" className="banner-input" placeholder="€" aria-label="Price Max" aria-describedby="price-max" />
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <div className='container p-0'>
                        <span className="text-white">Mileage (Min.)</span>
                    </div>
                    <input type="number" className="banner-input" placeholder="KM" aria-label="Mileage Min" aria-describedby="mileage-min" />
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <div className='container p-0'>
                        <span className="text-white">Mileage (Max.)</span>
                    </div>
                    <input type="number" className="banner-input" placeholder="KM" aria-label="Mileage Max" aria-describedby="mileage-max" />
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <div className='container p-0'>
                        <span className="text-white">Horse Power (Min.)</span>
                    </div>
                    <input type="number" className="banner-input" placeholder="HP" aria-label="Horse Power Min" aria-describedby="horsepower-min" />
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <div className='container p-0'>
                        <span className="text-white">Horse Power (Max.)</span>
                    </div>
                    <input type="number" className="banner-input" placeholder="HP" aria-label="Horse Power Max" aria-describedby="horsepower-max" />
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <div className='container p-0'>
                        <span className="text-white">Fuel Type</span>
                    </div>
                    <select className="form-select form-select-sm banner-select shadow-none text-white" aria-label="Default select example">
                        <option selected>All</option>
                        <option value="1">Gasoline</option>
                        <option value="2">Diesel</option>
                        <option value="3">Hybrid</option>
                        <option value="4">Electric</option>
                        <option value="5">Hydrogen</option>
                    </select>
                </div>
                <button className='advanced-filters-button' onClick={toggleAdvancedFilters}>
                    <i className="bi bi-sliders2 me-2" style={{ color: 'var(--color-main-orange)' }}></i>
                    Advanced Filters
                </button>
            </div>

            {showAdvancedFilters && (
                <div className='d-flex flex-column justify-content-center align-items-center advanced-filters-container w-100 mt-3'>
                    <div className='d-flex flex-column car-style-container'>
                        <ul className="list-group d-flex flex-row flex-wrap justify-content-center align-items-center" style={{ rowGap: '15px', columnGap: '35px' }}>
                            <li className="list-group-item d-flex justify-content-center align-items-end">
                                <input className="form-check-input me-1 mb-1" type="checkbox" value="" id="firstCheckbox" />
                                <div className='d-flex flex-row justify-content-center align-items-end'>
                                    <img src={require('../../images/body-style/convertible.png')} alt="Convertible" />
                                    <p className='ms-1 mb-0'>Convertible</p>
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-center align-items-end">
                                <input className="form-check-input me-1 mb-1" type="checkbox" value="" id="secondCheckbox" />
                                <div className='d-flex flex-row justify-content-center align-items-end'>
                                    <img src={require('../../images/body-style/coupe.png')} alt="Coupe" />
                                    <p className='ms-1 mb-0'>Coupe</p>
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-center align-items-end">
                                <input className="form-check-input me-1 mb-1" type="checkbox" value="" id="thirdCheckbox" />
                                <div className='d-flex flex-row justify-content-center align-items-end'>
                                    <img src={require('../../images/body-style/estate.png')} alt="Estate" />
                                    <p className='ms-1 mb-0'>Estate</p>
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-center align-items-end">
                                <input className="form-check-input me-1 mb-1" type="checkbox" value="" id="fourthCheckbox" />
                                <div className='d-flex flex-row justify-content-center align-items-end'>
                                    <img src={require('../../images/body-style/hatchback.png')} alt="Hatchback" />
                                    <p className='ms-1 mb-0'>Hatchback</p>
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-center align-items-end">
                                <input className="form-check-input me-1 mb-1" type="checkbox" value="" id="fifthCheckbox" />
                                <div className='d-flex flex-row justify-content-center align-items-end'>
                                    <img src={require('../../images/body-style/mpv.png')} alt="MPV" />
                                    <p className='ms-1 mb-0'>MPV</p>
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-center align-items-end">
                                <input className="form-check-input me-1 mb-1" type="checkbox" value="" id="sixthCheckbox" />
                                <div className='d-flex flex-row justify-content-center align-items-end'>
                                    <img src={require('../../images/body-style/pickup.png')} alt="Pickup" />
                                    <p className='ms-1 mb-0'>Pickup</p>
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-center align-items-end">
                                <input className="form-check-input me-1 mb-1" type="checkbox" value="" id="seventhCheckbox" />
                                <div className='d-flex flex-row justify-content-center align-items-end'>
                                    <img src={require('../../images/body-style/saloon.png')} alt="Saloon" />
                                    <p className='ms-1 mb-0'>Saloon</p>
                                </div>
                            </li>
                            <li className="list-group-item d-flex justify-content-center align-items-end">
                                <input className="form-check-input me-1 mb-1" type="checkbox" value="" id="eighthCheckbox" />
                                <div className='d-flex flex-row justify-content-center align-items-end'>
                                    <img src={require('../../images/body-style/suv.png')} alt="SUV" />
                                    <p className='ms-1 mb-0'>SUV</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className='d-flex flex-row flex-wrap justify-content-center align-items-center other-filters-container mt-3'>
                        <div className='d-flex flex-column align-items-center'>
                            <div className='container p-0 mb-2'>
                                <span className="text-white">Condition</span>
                            </div>
                            <select className="form-select form-select-sm banner-select shadow-none" aria-label="Default select example">
                                <option selected>All</option>
                                <option value="1">New</option>
                                <option value="2">Old</option>
                            </select>
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <div className='container p-0 mb-2'>
                                <span className="text-white">Gear Box</span>
                            </div>
                            <select className="form-select form-select-sm banner-select shadow-none" aria-label="Default select example">
                                <option selected>All</option>
                                <option value="1">Automatic</option>
                                <option value="2">Manual</option>
                            </select>
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <div className='container p-0 mb-2'>
                                <span className="text-white">Doors</span>
                            </div>
                            <input type="number" className="banner-input" placeholder="4" aria-label="Doors" aria-describedby="doors" />
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <div className='container p-0 mb-2'>
                                <span className="text-white">Displacement (Min.)</span>
                            </div>
                            <input type="number" className="banner-input" placeholder="cm3" aria-label="Displacement (Min.)" aria-describedby="displacement-min" />
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <div className='container p-0 mb-2'>
                                <span className="text-white">Displacement (Max.)</span>
                            </div>
                            <input type="number" className="banner-input" placeholder="cm3" aria-label="Displacement (Max.)" aria-describedby="displacement-max" />
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <div className='container p-0 mb-2'>
                                <span className="text-white">Color</span>
                            </div>
                            <select className="form-select form-select-sm banner-select shadow-none" aria-label="Default select example">
                                <option selected>All</option>
                                <option value="1">Black</option>
                                <option value="2">Blue</option>
                                <option value="1">Grey</option>
                                <option value="2">White</option>
                                <option value="1">Silver</option>
                                <option value="2">Red</option>
                                <option value="1">Green</option>
                                <option value="2">Beige</option>
                                <option value="1">Bronze</option>
                                <option value="2">Gold</option>
                                <option value="1">Orange</option>
                                <option value="2">Pink</option>
                                <option value="1">Purple</option>
                                <option value="2">Yellow</option>
                            </select>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}