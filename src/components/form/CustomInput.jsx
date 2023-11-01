import React from "react";

function CustomInput(props) {
    return (
        <input 
            type={props.type} 
            name={props.name}
            id={props.id}
            placeholder={props.placeholder}
            className="d-block mw-100 rounded-3 border border-opacity-75" 
            style={{width: "200%" }}
        />
    );
}

export default CustomInput;