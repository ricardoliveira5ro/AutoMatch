import React from 'react';
import './App.css';
import { Home } from './layouts/home/Home';
import { Route, Routes } from 'react-router-dom';
import { Login } from './layouts/authentication/Login/Login';
import { Register } from './layouts/authentication/Register/Register';
import { Search } from './layouts/search/Search';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </div>
  );
}
