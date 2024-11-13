import React from 'react';
import './App.css';
import { Home } from './layouts/home/Home';
import { Route, Routes } from 'react-router-dom';
import { Login } from './layouts/authentication/Login/Login';
import { Register } from './layouts/authentication/Register/Register';
import { Search } from './layouts/search/Search';
import { CarDetails } from './layouts/carDetails/CarDetails';
import { Favorites } from './layouts/favorites/Favorites';
import { Profile } from './layouts/profile/Profile';
import { NotFound } from './layouts/notFound/NotFound';
import { CarForm } from './layouts/carForm/CarForm';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/cars/:id' element={<CarDetails/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/newListing' element={<CarForm/>}/>
      </Routes>
    </div>
  );
}
