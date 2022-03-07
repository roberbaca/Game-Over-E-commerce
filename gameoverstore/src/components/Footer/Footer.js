import React from 'react'
import './Footer.css';
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../Redux/auth';

const Footer = () => {

    const dispatch = useDispatch();

    const onLogout = () => {
        console.log("logged out");
        dispatch(logoutAction());
    }

    return (
    <div>
        <section className="site-footer">
        <div className="site-footer-container">
            <div className="widget-container">
                <div className="widget-links">
                    <div className="widget">
                        <h3 className="widget-title">Information</h3>
                        <ul className="no-bullet">
                            <li><a href="#">Site map</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div> 
          
                    <div className="widget">
                        <h3 className="widget-title">Consumer Service</h3>
                        <ul className="no-bullet">
                            <li><a href="#">Secure</a></li>
                            <li><a href="#">Shipping &amp; Returns</a></li>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Orders &amp; Returns</a></li>
                            <li><a href="#">Group Sales</a></li>
                        </ul>
                    </div>         
                
                    <div className="widget">
                        <h3 className="widget-title">My Account</h3>
                        <ul className="no-bullet">
                            <li><Link to ="/login">Login/Register</Link></li>
                            <li><a>Profile</a></li>
                            <li><a>Cart</a></li>                        
                            <li><a onClick={onLogout}>Logout</a></li>
                        </ul>
                    </div>      
                </div>

                <div className="widget-newsletter">
                    <div className="widget">
                        <h3 className="widget-title">Join our newsletter</h3>
                        <form action="#" className="newsletter-form">
                            <input type="text" placeholder="Enter your email..."/>
                            <input type="submit" value="Subsribe"/>
                        </form>              
                    </div> 

                    <div className="social-links">
                        <a href="#"><i className="fab fa-facebook-square"></i></a>
                        <a href="#"><i className="fab fa-twitter-square"></i></a>
                        <a href="#"><i className="fab fa-instagram-square"></i></a>                
                    </div>
                </div>                
            </div>

            <div className="copyright-container">
                <div className="copy">Copyright 2022. Designed by<a href="https://www.linkedin.com/in/roberto-baca" target="_blank">Rober Baca</a>. All rights reserved.</div>
            </div>               
        </div>      
    </section>
    </div>
  )
}

export default Footer