import axiosInstance from "../utils/axiosInstance";

// valor inicial
const defaultValue = {
    token: null,
    userInfo: {},
    error: false,
}

// ACTION TYPES
const GETCART = 'GETCART';
const CHECKOUT = 'CHECKOUT';


// REDUCER
export default function CartReducer(state = defaultValue, { type, payload }) {
    switch(type) {
        case GETCART: return {...state, token: payload };
        case CHECKOUT: return defaultValue;        
        default: return defaultValue
    }
}

//ACTIONS
export const getCartAction = ( {token} ) => async dispatch => {
    try {
        const response = await axiosInstance.get('/login', { email, password });  // llamada al back y obtenemos el token       
        const token = response.data.token;
        console.log(response);
        console.log(token);
        dispatch({ type: LOGIN, payload: token });
        

    } catch(error) {
        console.log("error: ", error);
        dispatch({ type: ERROR });
    }      
}



