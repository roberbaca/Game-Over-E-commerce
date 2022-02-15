import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home/Home'
import { PATHS } from './paths'
import { useSelector } from 'react-redux'

const Router = () => {

  const token = useSelector(store => store.user.token);

  return (
    <div>
      <BrowserRouter>
        <Routes>          
          {token ? PATHS.private.map( r => <Route {...r}/>) : PATHS.noLoggedIn.map( r => <Route {...r}/> )}
          {/* <Route path = "/" element = {<Home/>}></Route> */}

          {/* Una vez logueado, nos redirige al HOME */}
          {token && <Route path="/login" element={<Navigate to="/home" replace />} /> } 
          {!token && <Route path="/cart" element={<Navigate to="/home" replace />} /> }           
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router