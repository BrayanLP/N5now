import React from 'react';
import { useDispatch } from 'react-redux';
import styledComponents from "styled-components";
import { createCart } from '../actions/cart';
import Card from "../component/card"

const Products = styledComponents.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px; 
`;
const Pos = ({products = []}) =>{
  const dispatch = useDispatch();

    const addCart = (val) =>{
      console.log(val, 'valores nuevo')
      dispatch(createCart(val))
    }
    return (
        <Products>
          {products.map( (val, index) =>{
            return(
             <Card key={index + 1} add={()=>addCart(val)} data={val}></Card>
            )
          })}
        </Products>
    )
}
export default Pos