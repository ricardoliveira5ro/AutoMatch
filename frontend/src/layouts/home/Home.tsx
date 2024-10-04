import './Home.css';
import { NavBar } from "./components/NavBar/NavBar";

export const Home = () => {

    return (
        <>
            <NavBar/>
            <div className="background-wrapper position-relative">
                <div className="background"></div>
                <div className="container card-container position-absolute start-50 translate-middle">
                    <div className="card card-banner shadow p-4">
                        <div className='row'>
                            <div className='col'>
                                <span className="text-white">Make</span>
                                <select className="form-select form-select-sm banner-select shadow-none text-white" aria-label="Default select example">
                                    <option selected>All</option>
                                    <option value="1">Mercedes</option>
                                    <option value="2">Ferrari</option>
                                    <option value="3">Renault</option>
                                </select>
                            </div>
                            <div className='col'>
                                <span className="text-white">Model</span>
                                <select className="form-select form-select-sm banner-select shadow-none" aria-label="Default select example" disabled>
                                    <option selected>All</option>
                                    <option value="1">Mercedes</option>
                                    <option value="2">Ferrari</option>
                                    <option value="3">Renault</option>
                                </select>
                            </div>
                            <div className='col'>
                                <span className="text-white">Year</span>
                                <input type="text" className="banner-input" placeholder="--" aria-label="Year" aria-describedby="year"/>
                            </div>
                            <div className='col'>
                                <span className="text-white">Mileage</span>
                                <input type="text" className="banner-input" placeholder="KM" aria-label="Mileage" aria-describedby="mileage"/>
                            </div>
                        </div>

                        <div className='row mt-4'>
                            <div className='col'>
                                <span className="text-white">Price (Max.)</span>
                                <input type="text" className="banner-input" placeholder="$" aria-label="Horse Power" aria-describedby="horsepower"/>
                            </div>
                            <div className='col'>
                                <span className="text-white">Horse Power</span>
                                <input type="text" className="banner-input" placeholder="HP" aria-label="Horse Power" aria-describedby="horsepower"/>
                            </div>
                            <div className='col'>
                                <span className="text-white">Fuel Type</span>
                                <select className="form-select form-select-sm banner-select shadow-none text-white" aria-label="Default select example">
                                    <option selected>All</option>
                                    <option value="1">Gasoline</option>
                                    <option value="2">Diesel</option>
                                    <option value="3">Hybrid</option>
                                    <option value="4">Electric</option>
                                    <option value="5">Hydrogen</option>
                                </select>
                            </div>
                            <div className='col d-flex align-items-end'>
                                <button type="button" className="btn btn-sm btn-banner-search text-white">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}