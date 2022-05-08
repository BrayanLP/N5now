 
import ProductService from "../services/products";
import { LIST_PRODUCT } from "./type";

export const getProducts = () => async (dispatch) => {
    try {
        const res = await ProductService.getAll();
        // console.log(res, 'resultado')
        dispatch({
            type: LIST_PRODUCT,
            payload: res,
        });
    } catch (err) {
        console.log(err);
    }
};
 