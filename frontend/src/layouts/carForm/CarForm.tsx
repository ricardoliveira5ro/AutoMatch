import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import make_models_data from '../../static/make-model.json';
import fuelType_data from '../../static/fuel-type.json';
import carStyles from '../../static/car-styles.json';
import colors from '../../static/colors.json';
import condition from '../../static/condition.json';
import gearBox from '../../static/gear-box.json';

import { SpinnerLoading } from '../utils/components/SpinnerLoading/SpinnerLoading';

import './CarForm.css'

export const CarForm = () => {

    const navigate = useNavigate();
    const location = useLocation();

    /* ---------------- Inputs --------------------- */
    const [title, setTitle] = useState("");
    const [selectedCondition, setSelectedCondition] = useState("");
    const [selectedMake, setSelectedMake] = useState("");
    const [selectedModel, setSelectedModel] = useState("");
    const [selectedGearBox, setSelectedGearBox] = useState("");
    const [selectedFuelType, setSelectedFuelType] = useState("");
    const [selectedStyle, setSelectedStyle] = useState("");
    const [mileage, setMileage] = useState("");
    const [price, setPrice] = useState("");
    const [horsePower, setHorsePower] = useState("");
    const [displacement, setDisplacement] = useState("");
    const [date, setDate] = useState<Date>();
    const [selectedColor, setSelectedColor] = useState("");
    const [doors, setDoors] = useState("");
    const [imageURLs, setImageURLs] = useState<string[]>([]);
    const [description, setDescription] = useState("");

    /* ---------------- Edit Mode --------------------- */
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        if (location.state?.editMode && location.state?.carId) {
            const fetchCar = async () => {
                const url = `${process.env.REACT_APP_BASE_URL}/api/cars/${location.state?.carId}`

                const response = await fetch(url);

                if (response.status === 404) {
                    navigate('*');
                }

                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }

                const responseData = await response.json();

                setTitle(responseData.title);
                setDescription(responseData.description);

                makeChange(responseData.make);
                setSelectedModel(responseData.model);

                setSelectedCondition(responseData.condition);
                setPrice(responseData.price);
                setSelectedStyle(responseData.style);
                setDate(new Date(responseData.date));
                setMileage(responseData.mileage);
                setSelectedFuelType(responseData.fuelType);
                setSelectedGearBox(responseData.gearBox);
                setSelectedColor(responseData.color);
                setDoors(responseData.doors);
                setDisplacement(responseData.displacement);
                setHorsePower(responseData.horsePower);

                const fetchedImageUrls = responseData.images.map((base64Image: string) => `data:image/png;base64,${base64Image}`);
                setImages(fetchedImageUrls);
                setImageURLs(fetchedImageUrls);
            };

            fetchCar().catch((error: any) => {
                setHttpError(error.message);
            });
        }

        setIsLoading(false)
    }, [])

    /* ---------- Make <--> Model logic ------------ */
    const [models, setModels] = useState<{ model: string }[]>([]);
    const [isModelDisabled, setIsModelDisabled] = useState(true);

    const makeChange = (e: any) => {
        const newSelectedMake = e.target?.value || e;
        setSelectedMake(newSelectedMake)

        if (newSelectedMake === "") {
            setModels([]);
            setIsModelDisabled(true);

        } else {
            const filteredMake = make_models_data.find(data => data.make === newSelectedMake);
            setModels(filteredMake ? filteredMake.models : []);
            setIsModelDisabled(false)
            setSelectedModel("");
        }
    }

    /* ---------- Uploading images ------------ */
    const [images, setImages] = useState<(File | string)[]>([]);

    useEffect(() => {
        const newImageUrls = images.map((image) =>
            typeof image === 'string' ? image : URL.createObjectURL(image)
        );
        setImageURLs(newImageUrls);
    }, [images]);

    const onImageChange = (e: any) => {
        if (!e.target.files) return;

        setImages([...e.target.files]);
    };

    /* ---------- Save Listing ------------ */
    const validate = () => {
        const inputsNumbers = document.querySelectorAll("input[type=number], input[type=text], select");
        let invalidInputs = false;

        inputsNumbers.forEach(input => {
            const inputElement = input as HTMLInputElement;

            if (inputElement.value === "") {
                inputElement.style.border = "1px solid red";
                invalidInputs = true;
            } else {
                inputElement.style.border = "";
            }
        });


        if (!invalidInputs) {
            saveListing();
        }
    }

    const saveListing = () => {
        const formData = new FormData();

        formData.append('title', title);
        formData.append('condition', selectedCondition);
        formData.append('make', selectedMake);
        formData.append('model', selectedModel);
        formData.append('gearBox', selectedGearBox);
        formData.append('fuelType', selectedFuelType);
        formData.append('style', selectedStyle);
        formData.append('mileage', mileage);
        formData.append('price', price);
        formData.append('horsePower', horsePower);
        formData.append('displacement', displacement);
        formData.append('date', date?.toISOString() || '');
        formData.append('color', selectedColor);
        formData.append('doors', doors);
        formData.append('description', description);

        images.forEach((image, index) => {
            if (typeof image === 'string') {
                const byteString = atob(image.split(',')[1]);
                const mimeType = image.split(',')[0].match(/:(.*?);/)?.[1];
                const arrayBuffer = new Uint8Array(byteString.length);

                for (let i = 0; i < byteString.length; i++) {
                    arrayBuffer[i] = byteString.charCodeAt(i);
                }

                const blob = new Blob([arrayBuffer], { type: mimeType });
                formData.append('images', blob,);
            } else {
                formData.append('images', image);
            }
        });

        const createCar = async () => {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/cars/newListing`, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("user_access_token")}`
                },
                body: formData,
            })

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            navigate('/profile');
            return;
        };

        createCar().catch((error: any) => {
            alert("Error creating car: " + error.message);
        });
    };


    return (
        <div className='container py-4'>
            {httpError ? (
                <div className='mt-3'>
                    <p className='text-white'>{httpError}</p>
                </div>
            ) : (
                <>
                    {isLoading ? (
                        <SpinnerLoading />
                    ) : (
                        <>
                            <div className='row d-flex align-items-center mb-5'>
                                <Link to={'/home'} className='col-1 d-flex flex-row align-items-center back-home'>
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
                                        <input value={title} onChange={e => setTitle(e.target.value)} type="text" required className="banner-input" placeholder="Title" aria-label="Title" aria-describedby="title-from" />
                                    </div>
                                    <div className='d-flex flex-column align-items-center col'>
                                        <div className='container p-0'>
                                            <span className="text-white">Condition</span>
                                        </div>
                                        <select value={selectedCondition} onChange={e => setSelectedCondition(e.target.value)} required className="form-select form-select-sm banner-select shadow-none text-white" aria-label="Default select example">
                                            <option value="">Select Option</option>
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
                                        <select required value={selectedMake} onChange={makeChange} className="form-select form-select-sm banner-select shadow-none text-white" aria-label="Default select example">
                                            <option value="">Select Option</option>
                                            {make_models_data.map((data, index) => (
                                                <option key={index} value={data.make}>{data.make}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='d-flex flex-column align-items-center col-12 col-md'>
                                        <div className='container p-0'>
                                            <span className="text-white">Model</span>
                                        </div>
                                        <select required value={selectedModel} disabled={isModelDisabled} onChange={e => setSelectedModel(e.target.value)}
                                            className="form-select form-select-sm banner-select shadow-none" aria-label="Default select example"
                                        >
                                            <option value="">Select Option</option>
                                            {models.map((item, index) => (
                                                <option key={index} value={item.model}>{item.model}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='d-flex flex-column align-items-center col-12 col-md'>
                                        <div className='container p-0'>
                                            <span className="text-white">Gear Box</span>
                                        </div>
                                        <select required value={selectedGearBox} onChange={e => setSelectedGearBox(e.target.value)}
                                            className="form-select form-select-sm banner-select shadow-none text-white" aria-label="Default select example"
                                        >
                                            <option value="">Select Option</option>
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
                                        <select required value={selectedFuelType} onChange={e => setSelectedFuelType(e.target.value)}
                                            className="form-select form-select-sm banner-select shadow-none" aria-label="Default select example"
                                        >
                                            <option value="">Select Option</option>
                                            {fuelType_data.map((item, index) => (
                                                <option key={index} value={item.fuelType}>{item.fuelType}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='d-flex flex-column align-items-center col-12 col-md'>
                                        <div className='container p-0'>
                                            <span className="text-white">Body Style</span>
                                        </div>
                                        <select required value={selectedStyle} onChange={e => setSelectedStyle(e.target.value)}
                                            className="form-select form-select-sm banner-select shadow-none" aria-label="Default select example"
                                        >
                                            <option value="">Select Option</option>
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
                                        <input value={price} onChange={e => setPrice(e.target.value)} type="number" required className="banner-input" placeholder="€" aria-label="Title" aria-describedby="title-from" />
                                    </div>
                                    <div className='d-flex flex-column align-items-center col-12 col-md'>
                                        <div className='container p-0'>
                                            <span className="text-white">Mileage</span>
                                        </div>
                                        <input value={mileage} onChange={e => setMileage(e.target.value)} type="number" required className="banner-input" placeholder="KM" aria-label="Title" aria-describedby="title-from" />
                                    </div>
                                    <div className='d-flex flex-column align-items-center col-12 col-md'>
                                        <div className='container p-0'>
                                            <span className="text-white">Horse Power</span>
                                        </div>
                                        <input value={horsePower} onChange={e => setHorsePower(e.target.value)} type="number" required className="banner-input" placeholder="HP" aria-label="Title" aria-describedby="title-from" />
                                    </div>
                                    <div className='d-flex flex-column align-items-center col-12 col-md'>
                                        <div className='container p-0'>
                                            <span className="text-white">Displacement</span>
                                        </div>
                                        <input value={displacement} onChange={e => setDisplacement(e.target.value)} type="number" required className="banner-input" placeholder="cm3" aria-label="Title" aria-describedby="title-from" />
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
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className='d-flex flex-column align-items-center col-12 col-md'>
                                        <div className='container p-0'>
                                            <span className="text-white">Color</span>
                                        </div>
                                        <select required value={selectedColor} onChange={e => setSelectedColor(e.target.value)}
                                            className="form-select form-select-sm banner-select shadow-none" aria-label="Default select example"
                                        >
                                            <option value="">Select Option</option>
                                            {colors.map((item, index) => (
                                                <option key={index} value={item.color}>{item.color}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className='d-flex flex-column align-items-center col-12 col-md'>
                                        <div className='container p-0'>
                                            <span className="text-white">Doors</span>
                                        </div>
                                        <input value={doors} onChange={e => setDoors(e.target.value)} type="number" required className="banner-input" placeholder="4" aria-label="Title" aria-describedby="title-from" />
                                    </div>
                                </div>

                                <div className='row'>
                                    <span className="text-white">Car images</span>
                                    <input type="file" required multiple accept="image/*" onChange={onImageChange} className='input-images' />
                                    {imageURLs.length > 0 && (
                                        <div id="carouselExample" className="car-form-carousel carousel slide mt-2">
                                            <div className="carousel-inner">
                                                {imageURLs.map((imageSrc, index) => (
                                                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                                        <img src={imageSrc} className="d-block w-100" alt={`Car Image ${index + 1}`} />
                                                    </div>
                                                ))}
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <div className='row'>
                                    <span className="text-white">Description</span>
                                    <div className='mt-2'>
                                        <textarea value={description} onChange={e => setDescription(e.target.value)} name="form-description" id="form-description" className='w-100 text-white p-3'></textarea>
                                    </div>
                                </div>

                                <button className='btn btn-primary' onClick={validate}>Save listing</button>
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
}