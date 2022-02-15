import Login from "../pages/Login/Login"
import Cart from "../pages/Cart/Cart"
import Register from "../pages/Register/Register"
import Home from "../pages/Home/Home"

export const PATHS = {
    
    // rutas que se puede acceder solo SI el usuario esta logueado
    private: [
        {
            path: '/cart',            
            element: <Cart/>
        },
        
        {
            path: '/home',           
            element: <Home/>
        },

        {
            path: '*',           
            element: <Home/>
        },
    ],

    
    // rutas a las que puede acceder el usuario que NO esta logueado
    noLoggedIn: [
        {
            path: '/login',            
            element: <Login/>
        },

        {
            path: '/register',        
            element: <Register/>
        },

        {
            path: '/home',           
            element: <Home/>
        },

        {
            path: '*',           
            element: <Home/>
        },

    ]
}