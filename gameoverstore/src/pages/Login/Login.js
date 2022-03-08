import React from 'react'
import './Login.css'
import logo from '../../assets/gameOverLogo.png'
import { Link } from "react-router-dom"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../Redux/auth';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  

    const dispatch = useDispatch(); 

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onLogin = () => {
        dispatch( loginAction( {email, password} ));        
    }

  return (
    <div>
        <section className="site-login">
            <form action="" className="form-login">
                <div className="logo">
                    <img src={logo} alt="logo" className="logo-img"/>               
                </div>
                <h1>Sign in with a Game Over Account</h1>
                <input type="text" className="login-email" placeholder="Email Adress" value={email} onChange={handleChangeEmail}/>
                <input type="password" className="login-password" placeholder="Password" value={password} onChange={handleChangePassword}/>
                <div className="rememberme">
                    <div className="left">
                        <input type="checkbox" name = "remember" className="check"/>
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <div className="right">                     
                        <a>Forgot Your Password?</a>
                    </div>
                </div>
                <button className="login-btn" type='button' onClick={onLogin}>Log in now</button>                
                <a className="privacy">Privacy Policy</a>            
                <p className="register-link">Don´t have a Game Over Account yet?<Link to ="/register" className='register-link'>Sign Up</Link></p>    
                

            </form>
        </section>
    </div>
  )
}

export default Login