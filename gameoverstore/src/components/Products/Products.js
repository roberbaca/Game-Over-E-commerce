import React, { useEffect, useState } from 'react'
import './Products.css'
import { productList } from '../../Data/ProducList'
import { useSelector } from 'react-redux';

const Products = () => {      

    let cart = []; // carrito de compras
    const filter = useSelector(store => store.filterProducts.filterValue); 
    const search = useSelector(store => store.filterProducts.searchValue);     
    const token = useSelector(store => store.user.token);      

    // cargamos el carrito del Local Storage    
    const loadCart = () => {
        if(localStorage.getItem('cartList' + token) !== null && token !== null ){            
            cart = JSON.parse(window.localStorage.getItem('cartList' + token));                     
            //console.log("The cart is: ", cart);
            
        } else {
            //console.log("No cart found");
        }
    }   

    // guardamos el carrito en el local storage
    const saveCart = () => {
        window.localStorage.setItem('cartList' + token, JSON.stringify(cart));  
    }
  

    // agregamos un nuevo item al carrito y lo guardamos en el local Storage
    // cada carrito queda linkeado al usuario a traves del token
    const AddToCart = (e) => {                
        let id = e.target.value;
        let item = productList.find(i => i.id == id);        
        cart = [...cart, item];
        saveCart();
        //console.log(cart); // debug cart                   
    } 

    
    useEffect(() => {     
        loadCart();        
    }, [cart]) 
   

  return (

    <div>   
        <h2>{filter} Games</h2>
  
        <div className='product-list'>       

            {productList.filter(p => filter != null ? p.platform === filter : search != null ? p.name.toUpperCase().includes(search) : p.name != null).map( (p , index) => 
                
                <div className="card" key = {index} > 
                    <div className='card-img-container'>
                        <img className = "card-img" src={p.imageURL} alt="gameCard"/>
                    </div>
                    <div className="card-info">
                        <div className='card-details' id = "name" value={p.name}>
                            <div className="platform">
                                {p.platform.includes("Playstation") && <i className="fab fa-playstation"></i>}
                                {p.platform.includes("PC") && <i className="fab fa-steam"></i>}        
                                {p.platform.includes("Nintendo") && <i className="fas fa-gamepad"></i>}
                                {p.platform.includes("Xbox") && <i className="fab fa-xbox"></i>}                 
                            </div> 
                            <p className="card-price">$ { (Math.round( p.price *100 ) /100).toFixed(2) }</p>
                        </div>  
                    </div>            
                    <div className="card-cart">
                        <button className="addToCart-btn" onClick={AddToCart}  value={p.id}><i className="fas fa-cart-plus"></i>Add to cart</button>
                    </div>
                </div>               
            )}
        </div>
    </div>    
  )
}

export default Products