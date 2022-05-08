import React from "react";
import styledComponents from "styled-components"

const Over = styledComponents.div`
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.3);
    width: 100%;
    height: 100%;
    z-index: 12;
    display: ${(props )=> props.active ? 'block': 'none'};
`;

const Overlay = (props)=>{
    return (
        <Over {...props}> 
        </Over>
    )
}
export default Overlay