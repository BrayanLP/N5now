import React, { } from 'react';

const HeaderMobile = (props) => {

    return (
        <header className='header-mobile'>
            <span onClick={props.openLeft}>
                MENU
            </span>
            N5NOW
            <span onClick={props.openRight}>
                CART
            </span>
        </header>
    )
}

export default HeaderMobile