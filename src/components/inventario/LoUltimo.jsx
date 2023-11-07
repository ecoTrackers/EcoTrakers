import React, { useState, useEffect } from "react";
import ProductTable from "./productTable";

function LoUltimo() {
    const [productosLoUltimo, setProductosLoUltimo] = useState([]);
    const localKey = "productosLoUltimo";

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem(localKey));
        if (storedProducts) {
            setProductosLoUltimo(storedProducts);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(localKey, JSON.stringify(productosLoUltimo));
    }, [productosLoUltimo]);

    const handleInputChange = (e, index, field) => {
        const updatedProductos = [...productosLoUltimo];
        updatedProductos[index][field] = e.target.value;
        setProductosLoUltimo(updatedProductos);
    };

    const handleToggleEditing = (index) => {
        const updatedProductos = [...productosLoUltimo];
        updatedProductos[index].isEditing = !updatedProductos[index].isEditing;
        setProductosLoUltimo(updatedProductos);
    };

    const handleGuardarProducto = (index) => {
        const editedProduct = productosLoUltimo[index];
        if (editedProduct.num >= 1 && editedProduct.num <= 8) {
            handleToggleEditing(index);
        } else {
            alert("El número (#) debe estar entre 1 y 8");
        }
    };

    return (
        <section id="loUltimo" className="container my-4 pt-4">
            <div className="text-center  pb-3">
                <h2>Lo último que viste</h2>
            </div>
        
            <ProductTable
                products={productosLoUltimo}
                onInputChange={handleInputChange}
                onToggleEditing={handleToggleEditing}
                onGuardarProducto={handleGuardarProducto}
            />
        </section>
    );
}

export default LoUltimo;
