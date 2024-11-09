import { Link, useNavigate } from 'react-router-dom';
import './Profile.css'
import { CarCardsList } from '../utils/components/CarCardsList/CarCardsList';
import { ProfileForm } from './components/ProfileForm/ProfileForm';
import { useEffect, useState } from 'react';
import CarModel from '../../models/CarModel';

export const Profile = () => {

    const navigate = useNavigate();

    const [cars, setCars] = useState<CarModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchCars = async () => {
            setIsLoading(true);

            const response = await fetch("http://localhost:8080/api/cars/listings", {
                method: "GET",
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("user_access_token")}`
                }
            })

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();
            const loadedCars: CarModel[] = [];

            for (const key in responseData) {
                loadedCars.push({
                    id: responseData[key].id,
                    title: responseData[key].title,
                    price: responseData[key].price,
                    date: responseData[key].date,
                    mileage: responseData[key].mileage,
                    fuelType: responseData[key].fuelType,
                    gearBox: responseData[key].gearBox,
                    displacement: responseData[key].displacement,
                    horsePower: responseData[key].horsePower,
                    imgCover: responseData[key].imgCover
                });
            }

            setCars(loadedCars);
            setIsLoading(false);
        };

        fetchCars().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        })
    }, []);

    const deleteListing = (car: CarModel) => {
        //Call Delete listing endpoint
        setCars(prevCars => prevCars.filter(c => c.id !== car.id));
    };

    const logout = () => {
        localStorage.removeItem("user_access_token");
        navigate('/');
    }

    return (
        <div className='container py-4'>
            <div className='d-flex justify-content-between align-items-center'>
                <Link className='col-1 d-flex flex-row align-items-center back-home px-0 px-sm-3' to='/'>
                    <i className="bi bi-house-fill" style={{ color: 'white', fontSize: '30px' }}></i>
                    <p className='d-flex text-white ms-3 mb-0'>Home</p>
                </Link>
                <a className='logout' onClick={logout}>Logout</a>
            </div>
            <ProfileForm />
            <hr className='text-white' />
            <div className='mt-5 w-100'>
                <div className='row mb-4'>
                    <div className='col-11'>
                        <h3 className='text-white'>Your active listings</h3>
                    </div>
                    <div className='col-1 text-center ps-2'>
                        <i className="bi bi-plus-square fs-4" style={{ color: 'white' }}></i>
                    </div>
                </div>
                <CarCardsList cars={cars} removeCar={deleteListing} />
            </div>
        </div>
    );
}