import React, { useEffect, useState } from 'react'
import './Products.css'
import card from '../../assets/card.png'
import { productList } from './ProducList'
import { useSelector } from 'react-redux';

const Products = () => {

    const [cart, setCart] = useState([{}]);
    const filter = useSelector(store => store.filterProducts.filterValue); 
    const search = useSelector(store => store.filterProducts.searchValue); 

    const AddToCart = (e) => {
        console.log(e.target.value);
        setCart([...cart, productList[e.target.value]]);
        // Guardar cart en el DB
    }


  // funcion para buscar productos con la barra de busqueda
    function searchProducts(){
   
        //const searchProduct = inputFilter.value.toUpperCase();
        //const filteredList = productsList.filter(valor=>valor.Name.toUpperCase().includes(searchProduct));
        //printProductsList(filteredList);
    }



    useEffect(() => {
        // para debug
        console.log(cart);
    }, [cart])
    



  return (

    <div>
        {filter === null && (search === null || search === "") &&
        <section className="featured-deals">
        <h2>Featured Deals</h2>
        <div className="cards-container">
            <div className="featured-deals-container">
                <div className="card-big">
                    <img className = "card-big-img" src={productList[0].imageURL} alt="game image"/>
                    <div className="card-big-info">
                        <div className="card-big-price-container">
                            <p className="card-big-discount">-37%</p>
                            <div className="card-big-price">
                                <p className="card-big-last-price">$ 529.00</p>
                                <p className="card-big-new-price">$ {productList[0].price}</p>
                            </div>
                        </div>
                        <div className="card-big-platform">
                            {productList[0].platform.includes("Playstation") && <i className="fab fa-playstation"></i>}
                            {productList[0].platform.includes("PC") && <i className="fab fa-steam"></i>}        
                            {productList[0].platform.includes("Nintendo") && <i className="fas fa-gamepad"></i>}
                            {productList[0].platform.includes("Xbox") && <i className="fab fa-xbox"></i>}  
                        </div>                    
                    </div>
                    <div className="card-big-cart">
                        <button className="addToCart-btn-big" onClick={AddToCart}  value={0}><i className="fas fa-cart-plus"></i>Add to cart</button>
                    </div>
                </div>
    
                <div className="card-small-container">                   
                   
                    <div className="card-small-row">
                        <div className="card-small1">
                            <img className = "card-small-img" src={productList[1].imageURL} alt="card image"/>
                            <div className="card-small-info">
                                
                                <div className="card-small-price-container">
                                    <p className="card-small-discount">-37%</p>
                                    <div className="card-small-price">
                                        <p className="card-small-last-price">$ 529.00</p>
                                        <p className="card-small-new-price">$ {productList[1].price}</p>
                                    </div>
                                </div>
                                <div className="card-small-platform">
                                    {productList[1].platform.includes("Playstation") && <i className="fab fa-playstation"></i>}
                                    {productList[1].platform.includes("PC") && <i className="fab fa-steam"></i>}        
                                    {productList[1].platform.includes("Nintendo") && <i className="fas fa-gamepad"></i>}
                                    {productList[1].platform.includes("Xbox") && <i className="fab fa-xbox"></i>} 
                                </div>                    
                            </div>
                            <div className="card-small-cart">
                                <button className="addToCart-btn-small" onClick={AddToCart}  value={1}><i className="fas fa-cart-plus"></i>Add to cart</button>
                            </div>
                       </div>
        
                        <div className="card-small2">
                            <img className = "card-small-img" src={productList[2].imageURL} alt="card-image"/>
                            <div className="card-small-info">
                                <div className="card-small-price-container">
                                    <p className="card-small-discount">-37%</p>
                                    <div className="card-small-price">
                                        <p className="card-small-last-price">$ 529.00</p>
                                        <p className="card-small-new-price">$ {productList[2].price}</p>
                                    </div>
                                </div>
                                <div className="card-small-platform">
                                    {productList[2].platform.includes("Playstation") && <i className="fab fa-playstation"></i>}
                                    {productList[2].platform.includes("PC") && <i className="fab fa-steam"></i>}        
                                    {productList[2].platform.includes("Nintendo") && <i className="fas fa-gamepad"></i>}
                                    {productList[2].platform.includes("Xbox") && <i className="fab fa-xbox"></i>} 
                                </div>                    
                            </div>
                            <div className="card-small-cart">
                                <button className="addToCart-btn-small" onClick={AddToCart}  value={2}><i className="fas fa-cart-plus"></i>Add to cart</button>
                            </div>
                        </div>
                    </div>
                    
               
                    <div className="card-small-row">
                        <div className="card-small3">
                            <img className = "card-small-img" src={productList[3].imageURL} alt="card-image"/>
                            <div className="card-small-info">
                                <div className="card-small-price-container">
                                    <p className="card-small-discount">-37%</p>
                                    <div className="card-small-price">
                                        <p className="card-small-last-price">$ 529.00</p>
                                        <p className="card-small-new-price">$ {productList[3].price}</p>
                                    </div>
                                </div>
                                <div className="card-small-platform">
                                    {productList[3].platform.includes("Playstation") && <i className="fab fa-playstation"></i>}
                                    {productList[3].platform.includes("PC") && <i className="fab fa-steam"></i>}        
                                    {productList[3].platform.includes("Nintendo") && <i className="fas fa-gamepad"></i>}
                                    {productList[3].platform.includes("Xbox") && <i className="fab fa-xbox"></i>} 
                                </div>                    
                            </div>
                            <div className="card-small-cart">
                                <button className="addToCart-btn-small" onClick={AddToCart}  value={3}><i className="fas fa-cart-plus"></i>Add to cart</button>
                            </div>
                        </div>
        
                        <div className="card-small4">
                            <img className = "card-small-img" src={productList[4].imageURL} alt="card-image"/>
                            <div className="card-small-info">
                                <div className="card-small-price-container">
                                    <p className="card-small-discount">-37%</p>
                                    <div className="card-small-price">
                                        <p className="card-small-last-price">$ 529.00</p>
                                        <p className="card-small-new-price">$ {productList[4].price}</p>
                                    </div>
                                </div>
                                <div className="card-small-platform">
                                    {productList[4].platform.includes("Playstation") && <i className="fab fa-playstation"></i>}
                                    {productList[4].platform.includes("PC") && <i className="fab fa-steam"></i>}        
                                    {productList[4].platform.includes("Nintendo") && <i className="fas fa-gamepad"></i>}
                                    {productList[4].platform.includes("Xbox") && <i className="fab fa-xbox"></i>} 
                                </div>                    
                            </div>
                            <div className="card-small-cart">
                                <button className="addToCart-btn-small" onClick={AddToCart}  value={4}><i className="fas fa-cart-plus"></i>Add to cart</button>
                            </div>
                         </div> 
                    </div>                  

                </div>   
            </div>
        </div>        
    </section>
}
    
    <section>
        <h2>{filter} Games</h2>
    </section>
    <div className='product-list'>       

        {/* {productList.filter(p => filter != null ? p.platform === filter : p.platform != null).map( (p , index) => 
            
        <div className="card" key = {index} >
            <img className = "card-img" src={p.imageURL} alt="game-image"/>
            <div className="card-info">
                <div className='card-details'>
                <div className="platform">
                    {p.platform.includes("Playstation") && <i className="fab fa-playstation"></i>}
                    {p.platform.includes("PC") && <i className="fab fa-steam"></i>}        
                    {p.platform.includes("Nintendo") && <i className="fas fa-gamepad"></i>}
                    {p.platform.includes("Xbox") && <i className="fab fa-xbox"></i>}                 
                </div> 
                <p className="card-price">$ {p.price}</p>
            </div>  
            </div>            
            <div className="card-cart">
                <button className="addToCart-btn" onClick={AddToCart}  value={index + 5}><i className="fas fa-cart-plus"></i>Add to cart</button>
            </div>
            </div>
           
        )} */}

        {productList.filter(p => filter != null ? p.platform === filter : search != null ? p.name.toUpperCase().includes(search) : p.name != null).map( (p , index) => 
            
            <div className="card" key = {index} >
                <div className='card-img-container'>
                    <img className = "card-img" src={p.imageURL} alt="game-image"/>
                </div>
                <div className="card-info">
                    <div className='card-details'>
                    <div className="platform">
                        {p.platform.includes("Playstation") && <i className="fab fa-playstation"></i>}
                        {p.platform.includes("PC") && <i className="fab fa-steam"></i>}        
                        {p.platform.includes("Nintendo") && <i className="fas fa-gamepad"></i>}
                        {p.platform.includes("Xbox") && <i className="fab fa-xbox"></i>}                 
                    </div> 
                        <p className="card-price">$ {p.price}</p>
                    </div>  
                </div>            
                <div className="card-cart">
                    <button className="addToCart-btn" onClick={AddToCart}  value={index + 5}><i className="fas fa-cart-plus"></i>Add to cart</button>
                </div>
                </div>
               
            )}


        {/* {productList.filter(p => search != null ? p.name.toUpperCase().includes(search) : p.name != null).map( (p , index) => 
            
            <div className="card" key = {index} >
                <img className = "card-img" src={p.imageURL} alt="game-image"/>
                <div className="card-info">
                    <div className='card-details'>
                    <div className="platform">
                        {p.platform.includes("Playstation") && <i className="fab fa-playstation"></i>}
                        {p.platform.includes("PC") && <i className="fab fa-steam"></i>}        
                        {p.platform.includes("Nintendo") && <i className="fas fa-gamepad"></i>}
                        {p.platform.includes("Xbox") && <i className="fab fa-xbox"></i>}                 
                    </div> 
                    <p className="card-price">$ {p.price}</p>
                </div>  
                </div>            
                <div className="card-cart">
                    <button className="addToCart-btn" onClick={AddToCart}  value={index + 5}><i className="fas fa-cart-plus"></i>Add to cart</button>
                </div>
                </div>
               
        )} */}

    </div>

</div>          
       
    
  )
}

export default Products