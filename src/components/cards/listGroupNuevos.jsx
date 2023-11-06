import React from "react";
import AGroupNuevos from "./aGroupNuevos";

function ListGroupNuevos() {
    
    return (
        <div className="col-md-3 mb-4 mt-5">
            <nav id="sidebar" >
                <div className="list-group">
                    <AGroupNuevos
                        num="0"
                        text="Hogar Sostenible"/>
                    <AGroupNuevos
                        num="1"
                        text="Moda Ética"/>
                    <AGroupNuevos
                        num="2"
                        text="Bienestar Natural"/>
                    <AGroupNuevos
                        num="3"
                        text="Tecnología Sostenible"/>
                    <AGroupNuevos
                        num="4"
                        text="Alimentos y Bebidas Ecológicas"/>
                </div>
            </nav>
        </div>
    );
}

export default ListGroupNuevos;