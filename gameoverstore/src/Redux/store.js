import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import AuthReducer from "./auth";
import FilterReducer from "./filter";
import {persistStore, persistReducer} from "redux-persist"  
import storage from "redux-persist/lib/storage"

const rootReducer = combineReducers({
    user: AuthReducer,  
    filterProducts: FilterReducer,    
});

/*Mantengo el estado aun cuando se recarga la pagina. Esto es util para mantener las sesiones abiertas*/
const persistConfig = {
    key: "main-root",
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore( persistedReducer, composeEnhancers(applyMiddleware(thunk)));   
const Persistor = persistStore(store);

export default store;
export {Persistor};