import { useParams } from 'react-router-dom';
import { Carousel } from './components/Carousel/Carousel';
import { KeyDetails } from './components/KeyDetails/KeyDetails';
import { CarKeyInfo } from './components/CarKeyInfo/CarKeyInfo';
import './CarDetails.css'
import { CarDescription } from './components/CarDescription/CarDescription';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import CarModel from '../../models/CarModel';
import { SpinnerLoading } from '../utils/components/SpinnerLoading/SpinnerLoading';

export const CarDetails = () => {

    const formatValueSpaces = (value: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'decimal',
            maximumFractionDigits: 0,
        })
            .format(value)
            .replace(/,/g, ' ');
    };

    const [car, setCar] = useState<CarModel>()
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const fetchCar = async () => {
            const url = `http://localhost:8080/api/cars/${id}`

            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();

            const loadedCar: CarModel = {
                id: responseData.id,
                title: responseData.title,
                description: responseData.description,
                make: responseData.make,
                model: responseData.model,
                condition: responseData.condition,
                price: responseData.price,
                style: responseData.style,
                date: responseData.date,
                mileage: responseData.mileage,
                fuelType: responseData.fuelType,
                gearBox: responseData.gearBox,
                color: responseData.color,
                doors: responseData.doors,
                displacement: responseData.displacement,
                horsePower: responseData.horsePower,
                user: {
                    id: responseData.user.id,
                    firstName: responseData.user.firstName,
                    lastName: responseData.user.lastName,
                    contactEmail: responseData.user.contactEmail,
                    contactPhone: responseData.user.contactPhone,
                    location: responseData.user.location
                },
                images: responseData.images
            }

            setCar(loadedCar);
            setIsLoading(false);
        };

        fetchCar().catch((error: any) => {
            setIsLoading(false);
            setHttpError(error.message);
        });

    }, []);

    if (isLoading) {
        return (
            <div className='mt-5'>
                <SpinnerLoading />
            </div>
        )
    }

    return (
        <div className='container w-100'>
            <Link className='d-flex flex-row align-items-center back-home mt-3' to='/'>
                <i className="bi bi-house-fill" style={{ color: 'white', fontSize: '30px' }}></i>
                <p className='d-none d-sm-flex text-white ms-3 mb-0'>Home</p>
            </Link>
            {httpError ? (
                <div className='mt-3'>
                    <p className='text-white'>{httpError}</p>
                </div>
            ) : (
                <>
                    <div className='row g-0 pt-1 pb-3'>
                        <Carousel car={car} />
                        <KeyDetails car={car} formatValueSpaces={formatValueSpaces} />
                    </div>
                    <CarKeyInfo car={car} formatValueSpaces={formatValueSpaces} />
                    <CarDescription car={car} />
                </>
            )}
        </div>
    );
}