import './Banner.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import make_models_data from '../../../../static/make-model.json';
import fuelType_data from '../../../../static/fuel-type.json';

export const Banner = () => {

    const [selectedModel, setSelectedModel] = useState("All");
    const [models, setModels] = useState<{ id: number; model: string }[]>([]);
    const [isModelDisabled, setIsModelDisabled] = useState(true);

    const makeChange = (e: any) => {

        if (e.target.value === "All") {
            setModels([]);
            setIsModelDisabled(true);

        } else {
            const filteredMake = make_models_data.find(data => data.make === e.target.value);
            setModels(filteredMake ? filteredMake.models : []);
            setIsModelDisabled(false)
            setSelectedModel("All");
        }
    }

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
                            <select defaultValue={"All"} onChange={makeChange} className="form-select form-select-sm banner-select shadow-none text-white" aria-label="Default select example">
                                <option value="All">All</option>
                                {make_models_data.map(data => (
                                    <option key={data.id} value={data.make}>{data.make}</option>
                                ))}
                            </select>
                        </div>
                        <div className='col d-flex flex-column align-items-center'>
                            <div className='container p-0'>
                                <span className="text-white">Model</span>
                            </div>
                            <select value={selectedModel} disabled={isModelDisabled} onChange={(e) => {setSelectedModel(e.target.value);}}
                                className="form-select form-select-sm banner-select shadow-none" aria-label="Default select example"
                            >
                                <option value="All">All</option>
                                {models.map(item => (
                                    <option key={item.id} value={item.model}>{item.model}</option>
                                ))}
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
                            <select defaultValue={"All"} className="form-select form-select-sm banner-select shadow-none text-white" aria-label="Default select example">
                                <option value="All">All</option>
                                {fuelType_data.map(item => (
                                    <option key={item.id} value={item.fuelType}>{item.fuelType}</option>
                                ))}
                            </select>
                        </div>
                        <div className='col-1 d-flex d-md-none justify-content-center align-items-center banner-advanced' >
                            <a href='#'>
                                <i className="bi bi-sliders2 me-2" style={{color: 'white'}}></i>
                                Advanced
                            </a>
                        </div>
                        <div className='col d-flex flex-column justify-content-end align-items-center'>
                            <Link to='/search' type="button" className="btn btn-sm btn-banner-search text-white">Search</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}