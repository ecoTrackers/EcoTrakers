import React, {useState, useEffect } from "react";
import ProductSmall from "./productSmall";

function CarruselUltimo({onAddToCart}) {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem("productosLoUltimo"));
        if (storedProducts) {
          setProductos(storedProducts);
        }
      }, []);

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