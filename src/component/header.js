import React from 'react';

import styledComponents from "styled-components"

const Aside = styledComponents.aside`
    width: 280px;
    height: 100%;
    position: fixed;
    background: #61DBA0;
    top: 0;
    z-index: 20;
    transition: 0.3s all;
    ul {
        margin: 0;
        padding: 0;
        padding-top: 50px;
        padding-left: 40px;
    }
    ul li {
        list-style: none;
        margin-top: 10px;
        margin-bottom: 10px;
        
    }
    ul li a{
        color: white;
        padding: 15px 25px;
        display: block;
        border-radius: 2rem 0 0 2rem;
        transition: 0.3s all;
        text-decoration: none;
        text-align: left;
        font-weight: bold;
        cursor: pointer;
        &:hover{
            background: white;
            color: #61DBA0;
        }
    }
    @media screen and (max-width: 1200px){
        left: ${(props) => props.active ? "0%": "-100%"};
       
    }
`;
const Header = (props) => {
    return (

        <Aside {...props}>
            <ul>
                <li>
                    <a href="/dashboard">DASHBOARD</a>
                </li>
                <li>
                    <a href="/pos">POS</a>
                </li>
                <li>
                    <a href="/transaccion">TRANSACTION</a>
                </li>
                <li>
                    <a href="/calendar">CALENDAR</a>
                </li>
                <li>
                    <a href="/testimonio">TESTIMONIALS</a>
                </li>
            </ul>
        </Aside>
    )
}
export default Header