import { useEffect, useState } from 'react';
import './Recommendations.css';
import { Link } from 'react-router-dom';
import CarModel from '../../../../models/CarModel';
import { SpinnerLoading } from '../../../utils/components/SpinnerLoading/SpinnerLoading';

export const Recommendations = () => {

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            maximumFractionDigits: 0,
        })
            .format(price)
            .replace(/,/g, ' ');
    };

    const [cars, setCars] = useState<CarModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchCars = async () => {
            const baseUrl: string = "http://localhost:8080/api/cars/";
            const url: string = `${baseUrl}?page=0&size=12`

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();
            const loadedCars: CarModel[] = [];

            for (const key in responseData) {
                loadedCars.push({
                    id: responseData[key].id,
                    make: responseData[key].make,
                    model: responseData[key].model,
                    condition: responseData[key].condition,
                    price: responseData[key].price,
                    style: responseData[key].style,
                    date: responseData[key].date,
                    mileage: responseData[key].mileage,
                    fuelType: responseData[key].fuelType,
                    gearBox: responseData[key].gearBox,
                    color: responseData[key].color,
                    doors: responseData[key].doors,
                    displacement: responseData[key].displacement,
                    horsePower: responseData[key].horsePower
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

    if (isLoading) {
        return (
            <SpinnerLoading />
        )
    }

    if (httpError) {
        return (
            <div className='container m-5'>
                <p>{httpError}</p>
            </div>
        )
    }

    return (
        <div className='container'>
            <div className='card p-4 recommendations-container'>
                <h2 className='text-white text-center'>Recommendations</h2>
                <div className='d-flex flex-wrap justify-content-center align-items-center mt-4' style={{ columnGap: '30px', rowGap: '30px' }}>
                    {cars.map(car => (
                        <Link key={car.id} to={`/cars/${car.id}`} className="card card-recommendation">
                            <img src={require('../../../../images/cars/recommendation-mercedes-E220.jpg')} className="card-img-top img-fluid" alt="Car Image" />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div>
                                    <h5 className="card-title text-white">Mercedes-Benz E 220 d AMG Line</h5>
                                    <p className="card-text text-white">{car.date.split('-')[0]} &nbsp;&#8226;&nbsp; {formatPrice(car.mileage)} km &nbsp;&#8226;&nbsp; {car.fuelType} &nbsp;&#8226;&nbsp; {car.horsePower} hp</p>
                                </div>
                                <span className='card-price'>{formatPrice(car.price)} <span>EUR</span></span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}