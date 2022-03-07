import React, { useEffect, useState } from 'react'
import './Cart.css'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';

const Cart = () => {   
    
    const token = useSelector(store => store.user.token);  
    const [userCart, setUserCart] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [purchased, setPurchased] = useState(false);

    // cargamos el carrito del Local Storage    
    const loadCart = () => {
        if(localStorage.getItem('cartList' + token) !== null && token !== null ){            
            setUserCart(JSON.parse(window.localStorage.getItem('cartList' + token)));                     
            //console.log("The cart is: ", userCart)
            
        } else {
            //console.log("No cart found");
        }
    }   

    // guardamos el carrito en el Local Storage    
    const saveCart = () => {
        window.localStorage.setItem('cartList' + token, JSON.stringify(userCart));  
    }

    // sumamos el total a pagar
    const sumTotal = () => {        
        let total = 0;     

        for (let i = 0; i < userCart.length; i++) {            
            total += userCart[i].price;
        }

        setTotalCost( (Math.round( total *100 ) /100).toFixed(2) );        
    }

    // Usamos el metodo de arrays Splice, pasamos por parametro el indice donde comenzamos a borrar 
    // elementos y la cantidad de elementos a eliminar        
    const deleteItem = (e) => {             
        userCart.splice(e.target.value, 1);
        setUserCart([...userCart]);
        //console.log("new cart", userCart);                     
    }

    // Al tocar el boton de checkout, limpiamos el carrito de compras, y se muestra un msj de confirmacion en pantalla
    const handleCheckout = () => {
        setUserCart([]);
        setPurchased(true);
    }

    useEffect(() => {
      loadCart();         
    }, [])
    
  
    useEffect(() => {        
        sumTotal(); 
        saveCart();       
      }, [userCart])
      

  return (
    <div className="site-cart">    
        
        <div className='cart-container'>
            <div className="shopping-cart-title">
                <h1>Shopping Cart</h1>
                <h2>{userCart.length> 0 && userCart.length} Items</h2>
            </div>

            <div className='cards-container'>
                { userCart.map( (c , index) => 
                    <div className="product-card" key={index}>
                        <div className="product-img">
                            <img src={c.imageURL} alt="card"/>
                        </div>
                        <div className='product-container'>
                            <div className="product-info">                       
                                <p className="product-title">{c.name}</p>                        
                                <div className="product-data">
                                {c.platform.includes("Playstation") && <i className="fab fa-playstation"></i>}
                                    {c.platform.includes("PC") && <i className="fab fa-steam"></i>}        
                                    {c.platform.includes("Nintendo") && <i className="fas fa-gamepad"></i>}
                                    {c.platform.includes("Xbox") && <i className="fab fa-xbox"></i>} 
                                    <p className="product-genre">{c.genre}</p>                                                                 
                                </div>
                            </div>
                            
                            <div className="product-subtotal">
                                <p className='product-price'>${ (Math.round( c.price *100 ) /100).toFixed(2) }</p>
                                <button className="product-remove-btn" onClick={deleteItem} value={index}><i className="fas fa-trash"></i></button>
                            </div>        
                        </div>                
                    </div>
                        
                )}        
            </div>
            
            <div className="order-summary">          
                {!purchased && <p>Total Cost</p>}
                {!purchased && <p>{totalCost}</p>}
                
                <div className="buttons-container">
                    {!purchased && userCart.length > 0 && <button className="checkout-btn" onClick={handleCheckout}>checkout</button>}
                    {purchased && <p className='checkout-msg-title'>THANK YOU !</p>}
                    {purchased && <p className='checkout-msg-content'>An email receipt has been sent to you.</p>}
                    <Link to ="/home" className='continue-btn'>continue shopping</Link>  
                </div>
            </div> 

        </div>   
    </div>
  )
}

export default Cart