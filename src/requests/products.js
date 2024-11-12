import { loadAllProductsAction } from "../store/reducers/allProductsReducer"
import { loadProductsByCategoryAction } from "../store/reducers/productsByCategoryReducer"
import { loadSingleProductAction } from "../store/reducers/singleProductReducer"

export const getAllProducts = (dispatch) => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => dispatch(loadAllProductsAction(json)))
}

export const getProductsByCategory = (category_name) => {
    return dispatch => {
        fetch(`https://fakestoreapi.com/products/category/${category_name}`)
            .then(res => res.json())
            .then(json => dispatch(loadProductsByCategoryAction(json)))
    }  
}

export const getSingleProduct = (product_id) => {
    return dispatch => {
        fetch(`https://fakestoreapi.com/products/${product_id}`)
            .then(res => res.json())
            .then(json => dispatch(loadSingleProductAction(json)))
    }  
}