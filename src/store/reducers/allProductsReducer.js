const LOAD_ALL_PRODUCTS = 'LOAD_ALL_PRODUCTS';
const SORT_PRODUCTS = 'SORT_PRODUCTS';
const GET_CHEAP_PRODUCTS = 'GET_CHEAP_PRODUCTS';
const FILTER_PRODUCTS = 'FILTER_PRODUCTS';

export const loadAllProductsAction = products => ({ type: LOAD_ALL_PRODUCTS, payload: products });
export const sortProductsAction = value => ({ type: SORT_PRODUCTS, payload: value });
export const getCheapProductsAction = value => ({ type: GET_CHEAP_PRODUCTS, payload: value });
export const filterProductsAction = values => ({ type: FILTER_PRODUCTS, payload: values });

export const allProductsReducer = (state = [], action) => {
    if(action.type === LOAD_ALL_PRODUCTS){
        return action.payload.map(el => {
            el.visible = true;
            return el
        })
    } else if(action.type === SORT_PRODUCTS){
        if(action.payload === 'price_asc'){
            state.sort((a, b) => a.price - b.price);
        } else if(action.payload === 'price_desc'){
            state.sort((a, b) => b.price - a.price);
        } else if(action.payload === 'title'){
            state.sort((a, b) => a.title.localeCompare(b.title))
        }
        return [...state]
    } else if(action.type === GET_CHEAP_PRODUCTS){
        if(action.payload){
            state.map(el => {
                if(el.price >= 100){
                    el.visible = false
                }
                return el
            })
        } else {
            state.map(el => {
                el.visible = true;
                return el
            })
        }
        return [...state]
    } else if(action.type === FILTER_PRODUCTS){
        const { min, max } = action.payload;

        state.map(el => {
            el.visible = el.price >= min && el.price <= max ? true : false;
            return el
        });

        return [...state]
    }
    return state
}