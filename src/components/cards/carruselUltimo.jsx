import React, {useState, useEffect } from "react";
import ProductSmall from "./productSmall";

function CarruselUltimo({onAddToCart}) {

    const productos = [
        { num: "1", name: "prueba1", cost: 49999 },
        { num: "2", name: "prueba1", cost: 59999 },
        { num: "3", name: "prueba5", cost: 49999 },

        { num: "4", name: "prueba6", cost: 49999 },
        { num: "5", name: "prueba4", cost: 59999 },
        { num: "6", name: "prueba3", cost: 49999 }
      ];

   const [productosSeleccionados, setProductosSeleccionados] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('productosSeleccionados'));
        if (storedProducts) {
          setProductosSeleccionados(storedProducts);
        }
    }, [setProductosSeleccionados]);
    

    const handleAddToCart = (product) => {

        const productKey = `${product.num}_${Date.now()}`;
        
        const updatedProductosSeleccionados = [...productosSeleccionados, { ...product, id: productKey }];
        setProductosSeleccionados(updatedProductosSeleccionados);

        localStorage.setItem("productosSeleccionados", JSON.stringify(updatedProductosSeleccionados));

        onAddToCart(product);
    };


    return (
        <div className="row d-flex justify-content-between px-3">
                                
            {productos.map((product, index) => (
                <ProductSmall
                    key={product.id}
                    num={product.num}
                    name={product.name}
                    cost={`$ ${product.cost.toLocaleString()}`}
                    onAddToCart={() => handleAddToCart(product)}
                />
            ))}
        </div>
    
    );
}

export default CarruselUltimo;