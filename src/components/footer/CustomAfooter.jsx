import React from "react";

function CustomAFooter(props) {
    return (
        <a 
            href={props.href} 
            className="text-white">
            <i 
                className={`fab fa-${props.text} fa-lg me-2`}>

            </i>
        </a>
    );
}

export default CustomAFooter;