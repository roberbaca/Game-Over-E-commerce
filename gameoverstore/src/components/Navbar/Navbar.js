import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/gameOverLogo2.png'
import card from '../../assets/card.png'
import coverImg from '../../assets/coverImg.jpg'
import Products from '../Products/Products'
import { useSelector } from 'react-redux'

import { Link } from "react-router-dom"
import { getUserInfoAction, logoutAction } from '../../Redux/auth'
import { filterActionFree, filterActionNintendo, filterActionNoFilter, filterActionPC, filterActionPS, filterActionSearch, filterActionXbox } from '../../Redux/filter'
import { useDispatch } from 'react-redux'

const Navbar = () => {
    
    const token = useSelector(store => store.user.token); 
    const userInfo = useSelector(store => store.user.userInfo);     

    const dispatch = useDispatch();  

    const getUserInfo = () => {
        dispatch( getUserInfoAction( {token} ));
    }

    const onLogout = () => {
        console.log("logged out");
        dispatch(logoutAction());
    }

    const handleClickFree = (e) => { 
        console.log(e.target.value)
        dispatch(filterActionFree());  
    }

    const handleClickNintendo = (e) => { 
        console.log(e.target.value)
        dispatch(filterActionNintendo());  
    }

    const handleClickXbox = (e) => { 
        console.log(e.target.value)
        dispatch(filterActionXbox());  
    }
    

    const handleClickPS = (e) => { 
        console.log(e.target.value)
        dispatch(filterActionPS());  
    }
    

    const handleClickPC = (e) => { 
        console.log(e.target.value)
        dispatch(filterActionPC());  
    }
    
    const handleClickNofilter = (e) => { 
        console.log(e.target.value)
        dispatch(filterActionNoFilter());        
    }

    const handleChangeSearch = (e) => { 
        console.log(e.target.value);
        dispatch(filterActionSearch(e.target.value.toUpperCase()));        

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
               
                <button className="menu-item" value={"Home"} onClick={handleClickNofilter}><i className="fas fa-home"></i></button>
                <button className="menu-item" value={"PC"} onClick={handleClickPC}>PC</button>
                <button className="menu-item" value={"Playstation"} onClick={handleClickPS}>Playstation</button>
                <button className="menu-item" value={"Xbox"} onClick={handleClickXbox}>Xbox</button>
                <button className="menu-item" value={"Nintendo"} onClick={handleClickNintendo}>Nintendo</button>
                <button className="menu-item" value={"Free"} onClick={handleClickFree}>FREE</button>
      
            </ul> 
            <div className="search-form">
                <div className="search-input"><input type="text" placeholder="Search PC and Console games..." onChange={handleChangeSearch} /></div>
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