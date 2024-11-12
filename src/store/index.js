import { createStore, combineReducers, applyMiddleware } from 'redux'
import { allProductsReducer } from './reducers/allProductsReducer';
import { thunk } from 'redux-thunk'
import { categoriesReducer } from './reducers/categoriesReducer';
import { productsByCategoryReducer } from './reducers/productsByCategoryReducer';
import { singleProductReducer } from './reducers/singleProductReducer';
import { cartReducer } from './reducers/cartReducer';

const rootReducer = combineReducers({
    allProducts: allProductsReducer,
    categories: categoriesReducer,
    productsByCategory: productsByCategoryReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));