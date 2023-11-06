import React from "react";
import ProductSmall from "./productSmall";

function CarruselNuevos({onAddToCart}) {

    return (

        <div className="col-md-9 mb-4">
            
            <div id="nuevosCarousel" className="carousel slide h-100 m-0" data-ride="carousel">

                <div className="carousel-inner h-100">

                    <div className="carousel-item active h-100">
                        <div className="row justify-content-around align-items-center h-100">                    
                            <ProductSmall
                            num="1"
                            name="prueba1"
                            cost="$49.999"
                            onAddToCart={onAddToCart}/>
                            <ProductSmall
                            num="1"
                            name="prueba1"
                            cost="$59.999"
                            onAddToCart={onAddToCart}/>
                        </div>
                    </div>
                    
                    <div className="carousel-item h-100">
                        <div className="row justify-content-around align-items-center h-100">                    
                            <ProductSmall
                            num="2"
                            name="prueba2"
                            cost="$49.999"
                            onAddToCart={onAddToCart}/>
                            <ProductSmall
                            num="2"
                            name="prueba2"
                            cost="$59.999"
                            onAddToCart={onAddToCart}/>
                        </div>
                    </div>

                    <div className="carousel-item h-100">
                        <div className="row justify-content-around align-items-center h-100">                    
                            <ProductSmall
                            num="3"
                            name="prueba3"
                            cost="$49.999"
                            onAddToCart={onAddToCart}/>
                            <ProductSmall
                            num="3"
                            name="prueba3"
                            cost="$59.999"
                            onAddToCart={onAddToCart}/>
                        </div>
                    </div>

                    <div className="carousel-item h-100">
                        <div className="row justify-content-around align-items-center h-100">                    
                            <ProductSmall
                            num="4"
                            name="prueba4"
                            cost="$49.999"
                            onAddToCart={onAddToCart}/>
                            <ProductSmall
                            num="4"
                            name="prueba4"
                            cost="$59.999"
                            onAddToCart={onAddToCart}/>
                        </div>
                    </div>

                    <div className="carousel-item h-100">
                        <div className="row justify-content-around align-items-center h-100">                    
                            <ProductSmall
                            num="5"
                            name="prueba5"
                            cost="$49.999"
                            onAddToCart={onAddToCart}/>
                            <ProductSmall
                            num="5"
                            name="prueba5"
                            cost="$59.999"
                            onAddToCart={onAddToCart}/>
                        </div>
                    </div>
                </div>  
            </div> 
        </div>
    );
}

export default CarruselNuevos;