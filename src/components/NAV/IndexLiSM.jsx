import React from "react";

function IndexLiSM(props) {

    const noOutlineStyle = {
        outline: "none",
    };

    return (
        <li 
            className="nav-item d-block d-sm-none">
            <a 
                className="nav-link link-light ms-4 fs-6"
                href={props.href}
                tabIndex="-1"
                style={noOutlineStyle}>
                {props.text}
            </a>
        </li>   
    );
}

export default IndexLiSM;