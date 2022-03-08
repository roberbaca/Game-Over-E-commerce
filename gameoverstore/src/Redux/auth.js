import axiosInstance from "../utils/axiosInstance";

// valor inicial
const defaultValue = {
    token: null,
    userInfo: {},
    registered: false,      
    error: false,
}

// ACTION TYPES
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const REGISTER = 'REGISTER';
const GET_USER_INFO = 'GET_USER_INFO';
const ERROR = "ERROR";


// REDUCER
export default function AuthReducer(state = defaultValue, { type, payload }) {
    switch(type) {
        case LOGIN: return {...state, token: payload };
        case LOGOUT: return defaultValue;
        case GET_USER_INFO: return {...state, userInfo: payload};
        case ERROR: return { ...state, error: true };
        default: return state;
    }
}

//ACTIONS
export const loginAction = ( {email, password} ) => async dispatch => {
    try {
        const response = await axiosInstance.post('/login', { email, password });  // llamada al back y obtenemos el token       
        const token = response.data.token;              
        window.localStorage.setItem("token", JSON.stringify(token));        
        //console.log(token);
        dispatch({ type: LOGIN, payload: token });
        

    } catch(error) {
        //console.log("error: ", error);
        alert("Incorrect email or password");
        dispatch({ type: ERROR });
    }      
}

export const logoutAction = () => dispatch => {    
    dispatch({ type: LOGOUT });  
}


export const registerAction = ( {firstName, lastName, email, password} ) => async dispatch => {
    try {
        const response = await axiosInstance.post('/register', { firstName, lastName, email, password });              
        //console.log("register succesful");
        const registered = true;
        alert("Register succesful. Please Login with your account.");
        dispatch({ type: REGISTER, payload: registered });        

    } catch(error) {
        //console.log("error: ", error);
        alert("Something went wrong. Please try again");
        dispatch({ type: ERROR });
    }      
}

export const getUserInfoAction = ( {token} ) => async dispatch => {
    try {
        
        if (token) {
            const response = await axiosInstance.get('/userinfo', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });     
            
            const userInfo = {
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                email: response.data.email
            }
    
            //console.log(response.data);
            dispatch({ type: GET_USER_INFO, payload: userInfo });        
        }

    } catch(error) {
        console.log("error: ", error);
        dispatch({ type: ERROR });
    }      
}

