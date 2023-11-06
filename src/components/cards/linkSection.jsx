import React from "react";

function LinkSection(props) {

    return (
        <div className="col">
            <a  href={props.href}
                className=" text-white text-decoration-none" 
                style={{whiteSpace: "nowrap"}}>
                {props.text}
            </a>
        </div>
    );
}

export default LinkSection;