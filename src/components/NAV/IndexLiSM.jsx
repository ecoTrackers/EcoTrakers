import React from "react";

function IndexLiSM(props) {

    return (
        <li 
            className="nav-item d-block d-sm-none">
            <a 
                className="nav-link link-light ms-4 fs-6"
                href={props.href}>
                {props.text}
            </a>
        </li>   
    );
}

export default IndexLiSM;