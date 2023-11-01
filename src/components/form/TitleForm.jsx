import React from "react";

function TitleForm(props) {
    return (
        <h3 
            className="fw-semibold py-3 mb-2">
            {props.text}
        </h3>
    );
}

export default TitleForm;