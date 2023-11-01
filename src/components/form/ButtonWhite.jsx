import React from "react";

function ButtonWhite(props) {
    return (
        <button 
            type={props.type}
            className="btn btn-outline-dark mw-100 rounded-pill border border-opacity-75" 
            style={{width: "200%"}}>
            {props.text}
        </button>
        
    );
}

export default ButtonWhite;