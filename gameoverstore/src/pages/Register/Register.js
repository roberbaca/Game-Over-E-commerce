import React from 'react'
import './Register.css'
import logo from '../../assets/gameOverLogo.png'
import { Link } from "react-router-dom"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerAction } from '../../Redux/auth'

const Register = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   

    const dispatch = useDispatch();

    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }   

    const onRegister = () => {
        dispatch( registerAction( {firstName, lastName, email, password} ));                    
    }



  return (
    <div>
        <section className="site-register">
            <form action="" className="form-register">
                <div className="logo">
                    <img src={logo} alt="logo" className="logo-img"/>               
                </div>              
                <div className='form-container'>
                    <h1>Sign Up</h1>
                    <div className="input-names">
                        <div className="input-left">
                            <input type="text" className="input-firstname" placeholder="Firt Name" value={firstName} onChange={handleChangeFirstName}/>
                        </div>
                        <div className="input-right">
                            <input type="text" className="input-lastname" placeholder="Last Name" value={lastName} onChange={handleChangeLastName}/>
                        </div>               
                    </div>                
                    <input type="text" className="input-email" placeholder="Email Adress" value={email} onChange={handleChangeEmail}/>
                    <input type="password" className="input-password" placeholder="Password" value={password} onChange={handleChangePassword}/>
                    <button className="register-btn" type='button' onClick={onRegister}>Register</button>
                </div>       
                 <a className="privacy">Privacy Policy</a>
                 <p className="register-link">Have a Game Over Account?<Link to ="/login" className='register-link'>Sign In</Link></p>
           
            </form>
        </section>
    </div>
  )
}

export default Register