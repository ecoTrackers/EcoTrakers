import React from "react";
import ProductSmall from "./productSmall";

function CarruselUltimo({onAddToCart}) {

    return (

        <div className="row d-flex justify-content-between px-3">
                               
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
            <ProductSmall
                num="5"
                name="prueba5"
                cost="$49.999"
                onAddToCart={onAddToCart}/>
            <ProductSmall
                num="6"
                name="prueba6"
                cost="$49.999"
                onAddToCart={onAddToCart}/>
            <ProductSmall
                num="4"
                name="prueba4"
                cost="$59.999"
                onAddToCart={onAddToCart}/>
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
             <ProductSmall
                num="2"
                name="prueba2"
                cost="$59.999"
                onAddToCart={onAddToCart}/> 
        </div>
    
    );
}

export default CarruselUltimo;