import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PATHS } from './paths'
import { useSelector } from 'react-redux'

const Router = () => {

  const token = useSelector(store => store.user.token);

  return (
    <div>
      <BrowserRouter>
        <Routes>          
          {token ? PATHS.private.map( (r,index) => <Route {...r} key = {index}/>) : PATHS.noLoggedIn.map( (r,index) => <Route {...r} key = {index}/> )}
          {/* {PATHS.paths.map( (r,index) => <Route {...r} key = {index}/>) } */}
          
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