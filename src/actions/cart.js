
import CartService from "../services/cart"; 
import { CREATE_CART, DELETE_ALL_CART, DELETE_CART, LIST_CART, TOTAL_CART, UPDATE_CART } from "./type";

export const createCart = (data) => async (dispatch) => {
    try {
        const res = CartService.create(data)
        // console.log(res , 'action')
        dispatch({
            type: CREATE_CART,
            payload:  {"data":res},
        });
        return Promise.resolve(res);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const getAllCart = () => async (dispatch)=> {
    try{

        const res = await CartService.getAll()
        // console.log('list', res)
        dispatch({
            type: LIST_CART,
            payload:  {"data":res},
        });
        return Promise.resolve(res);
    }
    catch(e){
        return Promise.reject(e);

    }
}

export const countLess = (data) => async (dispatch) =>{
    try {
        const res = await CartService.countLess(data);
        // console.log(res, 'lesssss')
        dispatch({
            type: UPDATE_CART,
            payload: {"data":res}
        })
        return Promise.resolve(res);

    } catch (e) {
        return Promise.reject(e); 
    }
} 
export const countPlus = (data) => async (dispatch) =>{
    try {
        const res = await CartService.countPlus(data); 
        dispatch({
            type: UPDATE_CART,
            payload: {"data":res}
        })
        return Promise.resolve(res);

    } catch (e) {
        return Promise.reject(e); 
    }
} 
export const deleteOne = (data) => async (dispatch) =>{
    try {
        const res = await CartService.deleteOne(data); 
        console.log(res , 'res')
        dispatch({
            type: DELETE_CART,
            payload: {"data":res}
        })
        return Promise.resolve(res);

    } catch (e) {
        return Promise.reject(e); 
    }
}

export const deleteAll = () => async (dispatch) =>{
    try { 
        console.log('delete all')
        const res = await CartService.deleteAll(); 

        dispatch({
            type: DELETE_ALL_CART,
            payload: res
        })
        return Promise.resolve(res);

    } catch (e) {
        return Promise.reject(e); 
    }
}

export const totalProduct = () => async (dispatch) =>{
    try {
        const res = await CartService.totalProduct();
        // console.log(res , 'res')
        dispatch({
            type: TOTAL_CART,
            payload: {"total": res}
        }) 
        return Promise.resolve(res);

    } catch (e) {
        return Promise.reject(e); 
        
    }
} 