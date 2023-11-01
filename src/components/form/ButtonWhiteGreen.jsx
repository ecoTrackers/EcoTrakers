import React from "react";

function ButtonWhiteGreen(props) {
    return (
        <button 
            type={props.type}
            className="btn btn-outline-success mw-100 rounded-pill border border-opacity-75" 
            style={{width: "200%"}}>
            {props.text}
        </button>
        
    );
}

export default ButtonWhiteGreen;