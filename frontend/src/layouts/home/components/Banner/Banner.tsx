import './Banner.css';

export const Banner = () => {

    return (
        <div className="background-wrapper position-relative">
            <div className="background"></div>
            <div className="container card-container position-absolute start-50 translate-middle">
                <div className="card card-banner shadow p-4">
                    <div className='row'>
                        <div className='col d-flex flex-column align-items-center'>
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
                        <div className='col d-flex flex-column align-items-center'>
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
                        <div className='col d-none d-md-flex flex-column align-items-center'>
                            <div className='container p-0'>
                                <span className="text-white">Year</span>
                            </div>
                            <input type="number" className="banner-input" placeholder="--" aria-label="Year" aria-describedby="year" />
                        </div>
                        <div className='col d-none d-md-flex flex-column align-items-center'>
                            <div className='container p-0'>
                                <span className="text-white">Mileage</span>
                            </div>
                            <input type="number" className="banner-input" placeholder="KM" aria-label="Mileage" aria-describedby="mileage" />
                        </div>
                    </div>

                    <div className='row mt-4'>
                        <div className='col d-none d-md-flex flex-column align-items-center'>
                            <div className='container p-0'>
                                <span className="text-white">Price (Max.)</span>
                            </div>
                            <input type="number" className="banner-input" placeholder="€" aria-label="Horse Power" aria-describedby="horsepower" />
                        </div>
                        <div className='col d-none d-md-flex flex-column align-items-center'>
                            <div className='container p-0'>
                                <span className="text-white">Horse Power</span>
                            </div>
                            <input type="number" className="banner-input" placeholder="HP" aria-label="Horse Power" aria-describedby="horsepower" />
                        </div>
                        <div className='col d-none d-md-flex flex-column align-items-center'>
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
                        <div className='col-1 d-flex d-md-none justify-content-center align-items-center banner-advanced' >
                            <a href='#'>
                                <i className="bi bi-sliders2 me-2" style={{color: 'white'}}></i>
                                Advanced
                            </a>
                        </div>
                        <div className='col d-flex flex-column justify-content-end align-items-center'>
                            <button type="button" className="btn btn-sm btn-banner-search text-white">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}