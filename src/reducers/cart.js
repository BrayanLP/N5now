import { CREATE_CART, DELETE_ALL_CART, DELETE_CART, LIST_CART, TOTAL_CART, UPDATE_CART } from "../actions/type";
const initialState = {
    data: [],
    total: ""
};
function cartReducer(carts = initialState, action) {
    const { type, payload } = action;
    const total = 0;
    if(localStorage.getItem('products')){
        total = JSON.parse(localStorage.getItem('products')).reduce((result, snap) => result + snap.price*snap.quantity, 0);
    }
    switch (type) {
        case LIST_CART:

            return {...carts , total, ...payload};
        case CREATE_CART:
            console.log('reducer' , payload) 
            return {...carts , total, ...payload};
        case UPDATE_CART:
            return {...carts , total, ...payload}; 
        case TOTAL_CART:
            // payload.total;
            console.log('total', payload)
            return {...carts , total, ...payload}
        case DELETE_CART:
            return {...carts , total, ...payload}
        case DELETE_ALL_CART:
            return {...initialState};
        default:
            return carts;
    }
};
export default cartReducer;