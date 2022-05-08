import React, {  } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styledComponents from "styled-components";
import { deleteAll } from '../actions/cart';

const SectionSumary = styledComponents.section`
    h4{
        display: grid;
        grid-template-columns: 1fr 1fr; 
        span{
            text-align: right;
        }
    }
    button{
        background: #61DBA0;
        width: 100%;
        height: 45px;
        border-radius: 2rem;
        border: none;
        color: white;
        box-shadow: 0px 2px 10px rgb(97 219 160 / 61%);
    }
`;

const Sumary = () => {
    const dispatch = useDispatch();
    let total = useSelector(state => state.carts.total) || '0.00';
    let data = useSelector(state => state.carts.data);
    
    const pay = () => { 
        if(data.length > 0){
            dispatch(deleteAll())
            // Codigo de banco para ejecutar el pago
        }
    }
    return (
        <SectionSumary>
            <h4>Total: <span>S/{total}</span></h4>
            <button className='btn-pay' onClick={()=>pay()}>Pagar</button>
        </SectionSumary>
    )
}

export default Sumary;