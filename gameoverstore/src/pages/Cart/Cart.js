import React from 'react'
import './Cart.css'
import card from '../../assets/card.png'
import { Link } from "react-router-dom"

const Cart = () => {
  return (
    <div>
        <section className="site-cart">
        <div className="shopping-cart-title">
            <h1>Shopping Cart</h1>
            <h2>3 Items</h2>
        </div>

        <div className="product-list-title">
            <div className="title1">
                <p>product</p>
            </div>
            <div className="title2">
                <p>quantity</p> 
            </div>
            <div className="title3">
                <p>subtotal</p>
            </div>          
        </div>    

        {/* <div class="product-card">
            <div class="product-info">
                <div class="product-img">
                    <img src={card} alt=""/>
                </div>
                <div class="product-data">
                    <p class="product-title">Horizon Chase Turbo</p>
                    <p class="product-platform">XBOX</p>
                    <p class="product-price">$399.99</p>
                    <button class="product-remove-btn">Remove</button>
                </div>
            </div>
            <div class="product-quantity">
                <input type="number" placeholder="0"/>
            </div>
            <div class="product-subtotal">
                <p>$399.99</p>
            </div>        
        </div>

        <div class="product-card">
            <div class="product-info">
                <div class="product-img">
                    <img src={card} alt=""/>
                </div>
                <div class="product-data">
                    <p class="product-title">Horizon Chase Turbo</p>
                    <p class="product-platform">XBOX</p>
                    <p class="product-price">$399.99</p>
                    <button class="product-remove-btn">Remove</button>
                </div>
            </div>
            <div class="product-quantity">
                <input type="number" placeholder="0"/>
            </div>
            <div class="product-subtotal">
                <p>$399.99</p>
            </div>        
        </div>

        <div class="product-card">
            <div class="product-info">
                <div class="product-img">
                    <img src={card} alt=""/>
                </div>
                <div class="product-data">
                    <p class="product-title">Horizon Chase Turbo</p>
                    <p class="product-platform">XBOX</p>
                    <p class="product-price">$399.99</p>
                    <button class="product-remove-btn">Remove</button>
                </div>
            </div>
            <div class="product-quantity">
                <input type="number" placeholder="0"/>
            </div>
            <div class="product-subtotal">
                <p>$399.99</p>
            </div>        
        </div> */}

        <div className="order-summary-title">          
            <p>Total Cost</p>
            <p>$462.99</p>
           
            <div className="buttons-container">
                <button className="checkout-btn">checkout</button>
                {/* <button class="continue-btn">continue shopping</button>   */}
                <Link to ="/home" className='continue-btn'>continue shopping</Link>  

            </div>
        </div>
    </section>

    </div>
  )
}

export default Cart