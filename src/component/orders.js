import React, { } from 'react';
import { countLess, countPlus, deleteOne } from '../actions/cart'
import { useDispatch } from "react-redux";
import CardList from './cart-list';
import Sumary from './sumary';
import styledComponents from 'styled-components';

const Wrapper = styledComponents.div`
 
    width: 340px;
    background-color: #FBFBFB;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    padding: 1rem;
    box-sizing: border-box;
    overflow-y: auto; 
    z-index: 20;
    transition: 0.3s all;

    @media screen and (max-width: 1200px){
     
      position: fixed;
      right: ${(props) => props.active ? "0%": "-100%"};
      
    }
    @media screen and (max-width: 600px){
      width: 80%;
    }
`
const Orders = (props) => {
  const dispatch = useDispatch();

  return (
    <Wrapper {...props}>
      <h2>Mis Ordenes</h2>
      <section className='cart'>
        {props.carts.map((val, index) => {
          return (
            <CardList
              key={index + 1}
              countLess={() => dispatch(countLess(val))}
              countPlus={() => dispatch(countPlus(val))}
              deleteOne={() => dispatch(deleteOne(val))}
              data={val}
            ></CardList>
          )
        })}
        {props.carts.length < 1 && (
          <div className="message-info">
            El carrito de compras esta vacio.
          </div>
        )}
      </section>
      <div className="divider"></div>
      <Sumary></Sumary>
    </Wrapper>
  )
}
export default Orders