import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AllUsers from '../pages/Products/AllUsers';
import ShowUser from '../pages/Products/ShowUser';
import Register from '../pages/Register/Register';


const Router = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path = '/users' element={<AllUsers/>}/>
                <Route path = '/register' element={<Register/>}/>
                <Route path = '/user/:id' element={<ShowUser/>}/>
                <Route path = '*' element={<Navigate to='/'/>}/>
            </Routes>
        </BrowserRouter>
    </div>
    )
};

export default Router;
