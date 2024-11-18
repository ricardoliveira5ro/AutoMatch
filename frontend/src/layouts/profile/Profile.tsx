import { Link, useNavigate } from 'react-router-dom';
import './Profile.css'
import { CarCardsList } from '../utils/components/CarCardsList/CarCardsList';
import { ProfileForm } from './components/ProfileForm/ProfileForm';
import { useEffect, useState } from 'react';
import CarModel from '../../models/CarModel';
import { SpinnerLoading } from '../utils/components/SpinnerLoading/SpinnerLoading';
import { useAuth } from '../../authentication/AuthProvider';

export const Profile = () => {

    const navigate = useNavigate();
    const { logout } = useAuth();

    const [cars, setCars] = useState<CarModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchCars = async () => {
            setIsLoading(true);

            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/cars/listings`, {
                method: "GET",
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("user_access_token")}`
                }
            })

            const responseData = await response.json();

            // Unauthorized access (Expired / Invalid token)
            if (response.status === 401) {
                logout(true);
                return;
            }

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

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
        const deleteCar = async () => {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/cars/${car.id}`, {
                method: "DELETE",
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("user_access_token")}`
                }
            })

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
        };

        deleteCar().catch((error: any) => {
            alert("Error deleting car: " + error.message);
        });

        
        // Update UI list
        setCars(prevCars => prevCars.filter(c => c.id !== car.id));
    };

    return (
        <div className='container py-4'>
            <div className='d-flex justify-content-between align-items-center'>
                <Link className='col-1 d-flex flex-row align-items-center back-home px-0 px-sm-3' to='/home'>
                    <i className="bi bi-house-fill" style={{ color: 'white', fontSize: '30px' }}></i>
                    <p className='d-flex text-white ms-3 mb-0'>Home</p>
                </Link>
                <a className='logout' onClick={() => logout(false)}>Logout</a>
            </div>
            <ProfileForm />
            <hr className='text-white' />
            <div className='mt-5 w-100'>
                <div className='row mb-4'>
                    <div className='col-11'>
                        <h3 className='text-white'>Your active listings</h3>
                    </div>
                    <a className='col-1 text-center ps-2' onClick={() => navigate('/newListing')}>
                        <i className="bi bi-plus-square fs-4" style={{ color: 'white' }}></i>
                    </a>
                </div>
                {httpError ? (
                    <p className='text-white'>{httpError}</p>
                ) : (
                    <>
                        {isLoading ? (
                            <SpinnerLoading />
                        ) : (
                            <CarCardsList cars={cars} removeCar={deleteListing} />
                        )}
                    </>
                )}
            </div>
        </div>
    );
}