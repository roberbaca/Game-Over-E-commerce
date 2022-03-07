import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/gameOverLogo2.png'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { getUserInfoAction, logoutAction } from '../../Redux/auth'
import { filterActionNintendo, filterActionNoFilter, filterActionPC, filterActionPS, filterActionSearch, filterActionXbox } from '../../Redux/filter'
import { useDispatch } from 'react-redux'

const Navbar = () => {
    
    const token = useSelector(store => store.user.token); 
    const userInfo = useSelector(store => store.user.userInfo);   
    const [itemCount, setItemCount] = useState(0); 
    const navigate = useNavigate();    
    const dispatch = useDispatch();   

    // barra de busqueda
    const handleChangeSearch = (e) => {         
        dispatch(filterActionSearch(e.target.value.toUpperCase()));     
    }

    // botones para filtrar el contenido del listado de productos en base a la plataforma (xbox, pc, nintendo, etc)
    const handleClick = (e) => {  
        switch(e.target.value){
            case "Home":
                dispatch(filterActionNoFilter());        
                break;
            case "PC":
                dispatch(filterActionPC());  
                break;
            case "Nintendo":
                dispatch(filterActionNintendo());  
                break;
            case "Xbox":
                dispatch(filterActionXbox());  
                break;
            case "Playstation":
                dispatch(filterActionPS());  
                break;
            default:
                break
        }
    }

    const onLogout = () => {       
        dispatch(logoutAction());
    }  

    const onLogin = () => {
        navigate('/login');
    }  


    // Al presionar el boton del carrito, chequeamos que el usuario este logueado (buscamos el token)
    // Si es asi, buscamos un carrito asociado a ese usuario
    // Si el usuario no esta logueado, lo enviamos a la pagina de login
    const handleCart = () => {        
        if(token) {
            if(localStorage.getItem('cartList' + token) !== null){
                const cartList = JSON.parse(window.localStorage.getItem('cartList' + token));
                console.log("El carrito es: ", cartList);
            }
            navigate('/cart');             
        } else {
            navigate('/login');            
        }
    }

    // conteo de la cantidad de item en el carrito de compras
    const countItems = () => {
        if(token) {
            if(localStorage.getItem('cartList' + token) !== null){
                const cartList = JSON.parse(window.localStorage.getItem('cartList' + token));
                setItemCount(cartList.length);                
            }
                      
        } else {
            setItemCount(0);            
        }
    }

    useEffect(() => {
        dispatch( getUserInfoAction( {token} ));
        countItems();
    }, [token])


  return (
    <div className='header-navbar'>        
        
       <section className="site-header">
        <div className="logo-container">         
            <img src= {logo} alt="" className="logo"/>
            
            <div className="logo-text">
                <h1 className="site-title">GAME OVER</h1>
                <h2 className="site-description">Play more. Pay less</h2>                        
            </div>
        </div>

        <div className="login-section">             
            
            {!token && <button className='login-button' onClick={onLogin}><i className="fas fa-user"></i>LOGIN</button>}
            {token &&  <p className='user'>Welcome,<span>{userInfo.firstName}</span></p>}             
            {token && <button className='login-button' onClick={onLogout}><i className="fas fa-user"></i>LOG OUT</button>}
            <button className='cart-button' onClick={handleCart}><i className="fas fa-shopping-cart"></i>CART ({itemCount})</button>
            
        </div>                   
    </section>                   
            
            
    <section className="site-navbar">
        <div className="main-navigation">
           
            <ul className="menu">        
                <button className="menu-item" value={"Home"} onClick={handleClick}><i className="fas fa-home"></i></button>
                <button className="menu-item" value={"PC"} onClick={handleClick}>PC</button>
                <button className="menu-item" value={"Playstation"} onClick={handleClick}>Playstation</button>
                <button className="menu-item" value={"Xbox"} onClick={handleClick}>Xbox</button>
                <button className="menu-item" value={"Nintendo"} onClick={handleClick}>Nintendo</button>         
            </ul> 
            <div className="search-form">
                <div className="search-input"><input type="text" placeholder="Search PC and Console games..." onChange={handleChangeSearch} /></div>
                <div className="search-icon"><i className="fas fa-search"></i></div>
            </div> 
        </div>
    </section> 

    </div>
  )
}

export default Navbar