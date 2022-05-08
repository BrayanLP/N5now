import React from 'react';

import styledComponents from "styled-components"
 
const colors = ['#E9F7FF',
'#F6FFE9',
'#ECF0FF',
'#FFE9E9',
'#FFFEE9',
'#FFE9F6'] 
const CardList = styledComponents.div`
    background: ${colors[1]};
    max-width: 300px;
    width: 100%;
    border-radius: 10px;
    margin: 0 auto;
    text-align: center;
    padding: 1rem;
    box-sizing: border-box;
    min-height: 200px;
    max-height: 300px;
    box-shadow: 0px 0 8px rgba(0,0,0,0.2);
    position: relative;
    img{
        margin: 0 auto;
        width: 80px;
    }
    
    h5 , p {
        text-align: left;
        margin: 0;
        padding: 0;
    }
    h5{
        font-weight: 300;
        font-size: 15px;
        margin-top: 10px;
        display: block;
    }
    .price{
        font-weight: bold;
    }
    .amount{
        position: absolute;
        top: 10px;
        left: 10px;
        background: black;
        color: white;
        padding: 5px 8px;
        border-radius: 20px;
        font-size: 12px;
    }
` ;  
const Card = ({data, add}) =>{
    return (
        <CardList onClick={add}>
        <img width="100" alt="productos" src="https://casachinaar.com/wp-content/uploads/2020/06/graphic_product_tangible.png"></img>
        <h5>{data.name}</h5>
        <p className='price'>
          {data.price}
        </p>
        <p className="amount">{data.amount}</p>
      </CardList>
    )
}

export default Card