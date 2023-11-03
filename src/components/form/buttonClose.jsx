import React from "react";

function ButtonClose(props) {
    return (
        <a 
            href="/pages/index" 
            className="d-flex justify-content-end">
            <button 
                type="button" 
                className="btn-close"  
                aria-label="Close">
            </button>
        </a>
        
    );
}

export default ButtonClose;