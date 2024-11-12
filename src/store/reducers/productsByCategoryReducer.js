const defaultState = {
    data: [],
    status: 'loading'
}

const LOAD_PRODUCTS_BY_CATEGORY = 'LOAD_PRODUCTS_BY_CATEGORY';
const CHANGE_STATUS_TO_LOADING = 'CHANGE_STATUS_TO_LOADING';

export const loadProductsByCategoryAction = products => ({ type: LOAD_PRODUCTS_BY_CATEGORY, payload: products });
export const changeStatusAction = () => ({ type: CHANGE_STATUS_TO_LOADING });


export const productsByCategoryReducer = (state = defaultState, action) => {
    if(action.type === LOAD_PRODUCTS_BY_CATEGORY){
        return {
            data: action.payload,
            status: 'ready'
        }
    } else if (action.type === CHANGE_STATUS_TO_LOADING) {
        return {
            ...state,
            status: 'loading'
        }
    }
    return state
}