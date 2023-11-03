import React from "react";

function ButtonGreen(props) {
    return (
        <button 
            type={props.type}
            className="btn btn-success mw-100 rounded-pill" 
            style={{width: "200%"}}>
            {props.text}
        </button>
        
    );
}

export default ButtonGreen;