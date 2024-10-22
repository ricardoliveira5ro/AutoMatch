import './AdvancedFilters.css';

export const AdvancedFilters = () => {

    return (
        <div className='d-flex flex-column justify-content-center align-items-center advanced-filters-container w-100'>
            <div className='d-flex flex-column car-style-container'>
                <ul className="list-group d-flex flex-row flex-wrap justify-content-center align-items-center" style={{ rowGap: '15px', columnGap: '35px' }}>
                    <li className="list-group-item d-flex justify-content-center align-items-end">
                        <input className="form-check-input me-1 mb-1" type="checkbox" value="" id="firstCheckbox" />
                        <div className='d-flex flex-row justify-content-center align-items-end'>
                            <img src={require('../../../../images/body-style/convertible.png')} alt="Convertible" />
                            <p className='ms-1 mb-0'>Convertible</p>
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-center align-items-end">
                        <input className="form-check-input me-1 mb-1" type="checkbox" value="" id="secondCheckbox" />
                        <div className='d-flex flex-row justify-content-center align-items-end'>
                            <img src={require('../../../../images/body-style/coupe.png')} alt="Coupe" />
                            <p className='ms-1 mb-0'>Coupe</p>
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-center align-items-end">
                        <input className="form-check-input me-1 mb-1" type="checkbox" value="" id="thirdCheckbox" />
                        <div className='d-flex flex-row justify-content-center align-items-end'>
                            <img src={require('../../../../images/body-style/estate.png')} alt="Estate" />
                            <p className='ms-1 mb-0'>Estate</p>
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-center align-items-end">
                        <input className="form-check-input me-1 mb-1" type="checkbox" value="" id="fourthCheckbox" />
                        <div className='d-flex flex-row justify-content-center align-items-end'>
                            <img src={require('../../../../images/body-style/hatchback.png')} alt="Hatchback" />
                            <p className='ms-1 mb-0'>Hatchback</p>
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-center align-items-end">
                        <input className="form-check-input me-1 mb-1" type="checkbox" value="" id="fifthCheckbox" />
                        <div className='d-flex flex-row justify-content-center align-items-end'>
                            <img src={require('../../../../images/body-style/mpv.png')} alt="MPV" />
                            <p className='ms-1 mb-0'>MPV</p>
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-center align-items-end">
                        <input className="form-check-input me-1 mb-1" type="checkbox" value="" id="sixthCheckbox" />
                        <div className='d-flex flex-row justify-content-center align-items-end'>
                            <img src={require('../../../../images/body-style/pickup.png')} alt="Pickup" />
                            <p className='ms-1 mb-0'>Pickup</p>
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-center align-items-end">
                        <input className="form-check-input me-1 mb-1" type="checkbox" value="" id="seventhCheckbox" />
                        <div className='d-flex flex-row justify-content-center align-items-end'>
                            <img src={require('../../../../images/body-style/saloon.png')} alt="Saloon" />
                            <p className='ms-1 mb-0'>Saloon</p>
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-center align-items-end">
                        <input className="form-check-input me-1 mb-1" type="checkbox" value="" id="eighthCheckbox" />
                        <div className='d-flex flex-row justify-content-center align-items-end'>
                            <img src={require('../../../../images/body-style/suv.png')} alt="SUV" />
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
                    <select defaultValue={"0"} className="form-select form-select-sm banner-select shadow-none" aria-label="Default select example">
                        <option value="0">All</option>
                        <option value="1">New</option>
                        <option value="2">Old</option>
                    </select>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <div className='container p-0 mb-2'>
                        <span className="text-white">Gear Box</span>
                    </div>
                    <select defaultValue={"0"} className="form-select form-select-sm banner-select shadow-none" aria-label="Default select example">
                        <option value="0">All</option>
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
                    <select defaultValue={"0"} className="form-select form-select-sm banner-select shadow-none" aria-label="Default select example">
                        <option value="0">All</option>
                        <option value="1">Black</option>
                        <option value="2">Blue</option>
                        <option value="3">Grey</option>
                        <option value="4">White</option>
                        <option value="5">Silver</option>
                        <option value="6">Red</option>
                        <option value="7">Green</option>
                        <option value="8">Beige</option>
                        <option value="9">Bronze</option>
                        <option value="10">Gold</option>
                        <option value="11">Orange</option>
                        <option value="12">Pink</option>
                        <option value="13">Purple</option>
                        <option value="14">Yellow</option>
                    </select>
                </div>
            </div>
        </div>
    );
}