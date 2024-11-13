import { Link } from 'react-router-dom';
import { useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import make_models_data from '../../static/make-model.json';
import fuelType_data from '../../static/fuel-type.json';
import carStyles from '../../static/car-styles.json';
import colors from '../../static/colors.json';
import condition from '../../static/condition.json';
import gearBox from '../../static/gear-box.json';

import './CarForm.css'

export const CarForm = () => {

    const [selectedMake, setSelectedMake] = useState("0");
    const [selectedModel, setSelectedModel] = useState("0");
    const [date, setDate] = useState<Date>();

    /* ---------- Make <--> Model logic ------------ */
    const [models, setModels] = useState<{ model: string }[]>([]);
    const [isModelDisabled, setIsModelDisabled] = useState(true);

    const makeChange = (e: any) => {
        const newSelectedMake = e.target.value;
        setSelectedMake(newSelectedMake)

        if (newSelectedMake === "0") {
            setModels([]);
            setIsModelDisabled(true);

        } else {
            const filteredMake = make_models_data.find(data => data.make === newSelectedMake);
            setModels(filteredMake ? filteredMake.models : []);
            setIsModelDisabled(false)
            setSelectedModel("0");
        }
    }

    return (
        <div className='container py-4'>
            <div className='row d-flex align-items-center mb-5'>
                <Link to={'/'} className='col-1 d-flex flex-row align-items-center back-home'>
                    <i className="bi bi-house-fill" style={{ color: 'white', fontSize: '30px' }}></i>
                    <p className='d-none d-sm-flex text-white ms-3 mb-0'>Home</p>
                </Link>
                <div className='col-10'>
                    <h3 className='text-center text-white mb-0'>Favorites</h3>
                </div>
                <Link to={'/profile'} className='col-1 text-center'>
                    <i className="bi bi-person-circle fs-3" style={{ color: 'white' }}></i>
                </Link>
            </div>

            <div className='d-flex flex-column' style={{ rowGap: '20px' }}>
                <div className='row d-flex' style={{ rowGap: '20px' }}>
                    <div className='d-flex flex-column align-items-center col-12 col-md'>
                        <div className='container p-0'>
                            <span className="text-white">Title</span>
                        </div>
                        <input type="text" className="banner-input" placeholder="Title" aria-label="Title" aria-describedby="title-from" />
                    </div>
                    <div className='d-flex flex-column align-items-center col'>
                        <div className='container p-0'>
                            <span className="text-white">Condition</span>
                        </div>
                        <select className="form-select form-select-sm banner-select shadow-none text-white" aria-label="Default select example">
                            <option value="0">Select Option</option>
                            {condition.map((data, index) => (
                                <option key={index} value={data.condition}>{data.condition}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className='row d-flex' style={{ rowGap: '20px' }}>
                    <div className='d-flex flex-column align-items-center col-12 col-md'>
                        <div className='container p-0'>
                            <span className="text-white">Make</span>
                        </div>
                        <select value={selectedMake} onChange={makeChange} className="form-select form-select-sm banner-select shadow-none text-white" aria-label="Default select example">
                            <option value="0">Select Option</option>
                            {make_models_data.map((data, index) => (
                                <option key={index} value={data.make}>{data.make}</option>
                            ))}
                        </select>
                    </div>
                    <div className='d-flex flex-column align-items-center col-12 col-md'>
                        <div className='container p-0'>
                            <span className="text-white">Model</span>
                        </div>
                        <select value={selectedModel} disabled={isModelDisabled} onChange={e => setSelectedModel(e.target.value)}
                            className="form-select form-select-sm banner-select shadow-none" aria-label="Default select example"
                        >
                            <option value="0">Select Option</option>
                            {models.map((item, index) => (
                                <option key={index} value={item.model}>{item.model}</option>
                            ))}
                        </select>
                    </div>
                    <div className='d-flex flex-column align-items-center col-12 col-md'>
                        <div className='container p-0'>
                            <span className="text-white">Gear Box</span>
                        </div>
                        <select className="form-select form-select-sm banner-select shadow-none text-white" aria-label="Default select example">
                            <option value="0">Select Option</option>
                            {gearBox.map((data, index) => (
                                <option key={index} value={data.gearBox}>{data.gearBox}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className='row d-flex' style={{ rowGap: '20px' }}>
                    <div className='d-flex flex-column align-items-center col-12 col-md'>
                        <div className='container p-0'>
                            <span className="text-white">Fuel Type</span>
                        </div>
                        <select
                            className="form-select form-select-sm banner-select shadow-none" aria-label="Default select example"
                        >
                            <option value="0">Select Option</option>
                            {fuelType_data.map((item, index) => (
                                <option key={index} value={item.fuelType}>{item.fuelType}</option>
                            ))}
                        </select>
                    </div>
                    <div className='d-flex flex-column align-items-center col-12 col-md'>
                        <div className='container p-0'>
                            <span className="text-white">Body Style</span>
                        </div>
                        <select
                            className="form-select form-select-sm banner-select shadow-none" aria-label="Default select example"
                        >
                            <option value="0">Select Option</option>
                            {carStyles.map((item, index) => (
                                <option key={index} value={item.carStyle}>{item.carStyle}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className='row d-flex' style={{ rowGap: '20px' }}>
                    <div className='d-flex flex-column align-items-center col-12 col-md'>
                        <div className='container p-0'>
                            <span className="text-white">Price</span>
                        </div>
                        <input type="number" className="banner-input" placeholder="€" aria-label="Title" aria-describedby="title-from" />
                    </div>
                    <div className='d-flex flex-column align-items-center col-12 col-md'>
                        <div className='container p-0'>
                            <span className="text-white">Mileage</span>
                        </div>
                        <input type="number" className="banner-input" placeholder="KM" aria-label="Title" aria-describedby="title-from" />
                    </div>
                    <div className='d-flex flex-column align-items-center col-12 col-md'>
                        <div className='container p-0'>
                            <span className="text-white">Horse Power</span>
                        </div>
                        <input type="number" className="banner-input" placeholder="HP" aria-label="Title" aria-describedby="title-from" />
                    </div>
                    <div className='d-flex flex-column align-items-center col-12 col-md'>
                        <div className='container p-0'>
                            <span className="text-white">Displacement</span>
                        </div>
                        <input type="number" className="banner-input" placeholder="cm3" aria-label="Title" aria-describedby="title-from" />
                    </div>
                </div>

                <div className='row d-flex' style={{ rowGap: '20px' }}>
                    <div className='d-flex flex-column align-items-center col-12 col-md'>
                        <div className='container p-0'>
                            <span className="text-white">Date</span>
                        </div>
                        <div className="date-picker-wrapper">
                            <DatePicker
                                dateFormat={'dd-MM-yyyy'}
                                placeholderText='Select date'
                                selected={date}
                                onChange={(date) => setDate(date || new Date())}
                                className="banner-input"
                            />
                        </div>
                    </div>
                    <div className='d-flex flex-column align-items-center col-12 col-md'>
                        <div className='container p-0'>
                            <span className="text-white">Color</span>
                        </div>
                        <select
                            className="form-select form-select-sm banner-select shadow-none" aria-label="Default select example"
                        >
                            <option value="0">Select Option</option>
                            {colors.map((item, index) => (
                                <option key={index} value={item.color}>{item.color}</option>
                            ))}
                        </select>
                    </div>
                    <div className='d-flex flex-column align-items-center col-12 col-md'>
                        <div className='container p-0'>
                            <span className="text-white">Doors</span>
                        </div>
                        <input type="number" className="banner-input" placeholder="4" aria-label="Title" aria-describedby="title-from" />
                    </div>
                </div>
            </div>


        </div>
    );
}