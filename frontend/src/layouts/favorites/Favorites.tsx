import { Link, useNavigate } from 'react-router-dom';
import { CarCardsList } from '../utils/components/CarCardsList/CarCardsList';
import { useEffect, useState } from 'react';
import CarModel from '../../models/CarModel';
import { SpinnerLoading } from '../utils/components/SpinnerLoading/SpinnerLoading';
import './Favorites.css'
import { useAuth } from '../../authentication/AuthProvider';

export const Favorites = () => {

    const navigate = useNavigate();
    const { logout } = useAuth();

    const [cars, setCars] = useState<CarModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {

        const fetchCars = async () => {
            
            const response = await fetch("http://localhost:8080/api/favorites/", {
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
        });
    }, []);

    const removeFavorite = (car: CarModel) => {
        const deleteFavorite = async () => {
            const response = await fetch(`http://localhost:8080/api/favorites/${car.id}`, {
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

        deleteFavorite().catch((error: any) => {
            alert("Error deleting car: " + error.message);
        });

        
        // Update UI list
        setCars(prevCars => prevCars.filter(c => c.id !== car.id));
    }

    return (
        <div className='container d-flex flex-column py-4'>
            <div className='row d-flex align-items-center mb-5'>
                <Link className='col-1 d-flex flex-row align-items-center back-home' to='/home'>
                    <i className="bi bi-house-fill" style={{ color: 'white', fontSize: '30px' }}></i>
                    <p className='d-none d-sm-flex text-white ms-3 mb-0'>Home</p>
                </Link>
                <div className='col-10'>
                    <h3 className='text-center text-white mb-0'>Favorites</h3>
                </div>
                <a onClick={() => navigate('/profile')} className='col-1 text-center'>
                    <i className="bi bi-person-circle fs-3" style={{ color: 'white' }}></i>
                </a>
            </div>
            {httpError ? (
                <p className='text-white'>{httpError}</p>
            ) : (
                <>
                    {isLoading ? (
                        <SpinnerLoading/>
                    ) : (
                        <CarCardsList cars={cars} removeCar={removeFavorite}></CarCardsList>
                    )}
                </>
            )}
        </div>
    );
}