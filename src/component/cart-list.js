import React from 'react';

import styledComponents from "styled-components"

const CartItem = styledComponents.div`
    // background: red;
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 120px 1fr 1fr;
    align-items: center;
    h5{
        font-weight: 300;
        font-size: 13px;
        padding: 0 5px;
    }
    .price{
        font-weight: bold;
        font-size: 13px;
    }
    .close{
        color: gray;
        padding: 10px;
        font-size: 13px;
        cursor: pointer;
    }
    .group-inline{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        padding: 0 5px;
        box-sizing: border-box;
    }
    .counterQuantity{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        // background: red;
        border: 1px solid #61DBA0;
        // gap: 5px;
        border-radius: 1rem;
        justify-content: center;
        padding: 0 6px;
        height: 30px;
        align-items: center;
        span{
            display: block;
            font-size: 14px;
            text-align: center;
            padding: 0 3px;
            box-sizing: border-box; 
            font-weight: bold;
            cursor: pointer;
        }
    }
`;

const CardList = ({data, countLess,countPlus, deleteOne}) => {
    return (
        <CartItem >
            <img width="35" src="https://casachinaar.com/wp-content/uploads/2020/06/graphic_product_tangible.png" alt="" />
            <h5>
                {data.name}
            </h5>
            <div className="counterQuantity">
                <span onClick={countLess}>-</span>
                <span>{data.quantity}</span>
                <span onClick={countPlus}>+</span>
            </div>
            <div className="group-inline">
                <div className="price">
                    S/{data.price * data.quantity}
                </div>
                <div className="close" onClick={deleteOne}>X</div>
            </div>
        </CartItem>
    )
}

export default CardList