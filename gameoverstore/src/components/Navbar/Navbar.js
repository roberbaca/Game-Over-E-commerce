import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/gameOverLogo2.png'
import card from '../../assets/card.png'
import coverImg from '../../assets/coverImg.jpg'
import Products from '../Products/Products'
import { useSelector } from 'react-redux'

import { Link } from "react-router-dom"
import { getUserInfoAction, logoutAction } from '../../Redux/auth'
import { useDispatch } from 'react-redux'

const Navbar = () => {

    const [searchGame, setSearchGame] = useState("");
    const [filter, setFilter] = useState("");
    const token = useSelector(store => store.user.token); 
    const userInfo = useSelector(store => store.user.userInfo); 
    const dispatch = useDispatch();

    const handleChangeInput = (e) => {
        console.log(e.target.value);
        setSearchGame(e.target.value);       
    }

    const getUserInfo = () => {
        dispatch( getUserInfoAction( {token} ));
    }

    const onLogout = () => {
        console.log("logged out");
        dispatch(logoutAction());
    }

    useEffect(() => {
        getUserInfo();
    }, [token])


  return (
    <div className='header-navbar'>
        
        
       <section className="site-header">
        <div className="logo-container">
            {/* <img src="./assets/gameOverLogo2.png" alt="" class="logo"/> */}
            <img src= {logo} alt="" className="logo"/>
            
            <div className="logo-text">
                <h1 className="site-title">GAME OVER</h1>
                <h2 className="site-description">Play more. Pay less</h2>                        
            </div>
        </div>

        <div className="login-section">                   
            {!token && <Link to ="/login" className='login-button'><i className="fas fa-user"></i>LOGIN</Link>}
            {token &&  <p className='user'>Welcome,<span>{userInfo.firstName}</span></p>} 
            {token && <Link to ="/" className='login-button' onClick={onLogout}><i className="fas fa-user"></i>LOG OUT</Link>}
            <Link to ="/cart" className='cart-button'><i className="fas fa-shopping-cart"></i>CART (17)</Link>            
        </div>                   
    </section>                   
            
            
    <section className="site-navbar">
        <div className="main-navigation">
           
            <ul className="menu">
               
                <li className="menu-item"><a href="products.html"><i className="fas fa-home"></i></a></li>
                <li className="menu-item"><a href="products.html">PC</a></li>
                <li className="menu-item"><a href="products.html">Playstation</a></li>
                <li className="menu-item"><a href="products.html">Xbox</a></li>
                <li className="menu-item"><a href="products.html">Nintendo</a></li>
                <li className="menu-item"><a href="products.html">FREE</a></li>
            </ul> 
            <div className="search-form">
                <div className="search-input"><input type="text" placeholder="Search PC and Console games..." onChange={handleChangeInput} /></div>
                <div className="search-icon"><i className="fas fa-search"></i></div>
            </div> 
        </div>
    </section>
 
    {/* <section class="site-cover">
        <div class="site-cover">
            <img src={coverImg} alt="cover"/>
        </div>
    </section> */}   

    </div>
  )
}

export default Navbar