import { loadCategoriesAction } from "../store/reducers/categoriesReducer"

export const getCategories = (dispatch) => {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(json => dispatch(loadCategoriesAction(json)))
}