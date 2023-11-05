import React from "react";

function IndexLi(props) {

    const noOutlineStyle = {
        outline: "none",
    };

    return (
        <li 
            className="nav-item d-none d-sm-block btn">
            <a 
                className="nav-link link-light mt-2 fw-semibold fs-6"
                href={props.href}
                style={noOutlineStyle}>
                {props.text}
            </a>
        </li>   
    );
}

export default IndexLi;