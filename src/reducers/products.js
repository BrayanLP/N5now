import {  LIST_PRODUCT  } from "../actions/type";
  const initialState = [];
  function productReducer(products = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case LIST_PRODUCT:
        return payload; 
      default:
        return products;
    }
  };
  export default productReducer;