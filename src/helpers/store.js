import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import productService from "../services/product.service";
 

const loggerMiddleware = createLogger();

export const store = createStore( 
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

//store.dispatch(productService());
