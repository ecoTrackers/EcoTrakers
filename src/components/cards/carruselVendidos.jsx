import React from "react";
import ProductSmall from "./productSmall";

function CarruselVendidos() {

    return (
        <div id="carouselVendidos" className="carousel slide" data-ride="carousel">

            <div className="carousel-inner">

                <div className="carousel-item active px-5">
                    <div className="row">                    
                        <ProductSmall
                        num="1"
                        name="prueba1"
                        cost="$49.999"/>
                        <ProductSmall
                        num="2"
                        name="prueba3"
                        cost="$59.999"/>

                        <ProductSmall
                        num="3"
                        name="prueba3"
                        cost="$60.999"/>
                    </div>
                </div>
                
                <div className="carousel-item px-5">
                    <div className="row"> 
                        <ProductSmall
                        num="4"
                        name="prueba4"
                        cost="$49.999"/>

                        <ProductSmall
                        num="5"
                        name="prueba5"
                        cost="$59.999"/>

                        <ProductSmall
                        num="6"
                        name="prueba6"
                        cost="$60.999"/>                  
                        
                    </div>
                </div>
            </div>

            <a className="carousel-control-prev justify-content-start m-0" href="#carouselVendidos" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a className="carousel-control-next justify-content-end m-0" href="#carouselVendidos" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>  
        
    );
}

export default CarruselVendidos;