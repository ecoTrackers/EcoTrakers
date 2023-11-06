import React from "react";

function AGroupNuevos(props) {
    
    return (
        <a 
            href="#nuevosCarousel" 
            className="list-group-item list-group-item-action category-button"
            data-slide-to={props.num}>
            {props.text}
        </a>
                
    );
}

export default AGroupNuevos;