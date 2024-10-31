import { useEffect, useState } from 'react';
import './Recommendations.css';
import CarModel from '../../../../models/CarModel';
import { SpinnerLoading } from '../../../utils/components/SpinnerLoading/SpinnerLoading';
import { RecommendationCar } from './components/RecommendationCar/RecommendationCar';

export const Recommendations = () => {

    const [cars, setCars] = useState<CarModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchCars = async () => {
            const baseUrl: string = "http://localhost:8080/api/cars/recommended";
            const url: string = `${baseUrl}?page=0&size=9`

            const response = await fetch(url);

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

    return (
        <div className='container'>
            <div className='card p-4 recommendations-container'>
                <h2 className='text-white text-center'>Recommendations</h2>
                {httpError ? (
                    <p className='text-white'>{httpError}</p>
                ) : (
                    <div className='d-flex flex-wrap justify-content-center align-items-center mt-4' style={{ columnGap: '30px', rowGap: '30px' }}>
                        {isLoading ? (
                            <SpinnerLoading />
                        ) : (
                            <>
                                {cars.map(car => (
                                    <RecommendationCar car={car} key={car.id} />
                                ))}
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}