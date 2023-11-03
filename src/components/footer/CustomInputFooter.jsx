import React from "react";

function CustomInputFooter(props) {
    return (
        <div className="mb-3">
            <input 
                type={props.type} 
                placeholder={props.placeholder}
                className="form-control fs-6 bg-dark-subtle rounded-pill border border-opacity-75"
            />
        </div>
        
    );
}

export default CustomInputFooter;