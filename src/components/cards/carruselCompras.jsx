import React from "react";
import ProductSmall from "./productSmall";
import ProductLarge from "./productLarge";

function CarruselCompras({onAddToCart}) {

    return (

        <div className=" row justify-content-between d-flex align-items-center">
                
                <ProductLarge
                num="5"
                name="prueba5"
                cost="$49.999"
                onAddToCart={onAddToCart}/>
        
            <div className="col">
                <div className="row d-flex justify-content-evenly pb-3">
                    <ProductSmall
                        num="1"
                        name="prueba1"
                        cost="$49.999"
                        onAddToCart={onAddToCart}/>
                    <ProductSmall
                        num="2"
                        name="prueba2"
                        cost="$59.999"
                        onAddToCart={onAddToCart}/>
                </div>
                <div className="row d-flex justify-content-evenly pb-3">
                    <ProductSmall
                        num="3"
                        name="prueba3"
                        cost="$60.999"
                        onAddToCart={onAddToCart}/>
                    <ProductSmall
                        num="4"
                        name="prueba4"
                        cost="$60.999"
                        onAddToCart={onAddToCart}/>
                </div>
            </div>

        </div>
    );
}

export default CarruselCompras;