import React, { useState, useEffect } from "react";
import ProductTable from "./productTable";

function Nuevos() {
    const [productosNuevos, setProductosNuevos] = useState([]);
    const localKey = "productosNuevos";

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem(localKey));
        if (storedProducts) {
            setProductosNuevos(storedProducts);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(localKey, JSON.stringify(productosNuevos));
    }, [productosNuevos]);

    const handleInputChange = (e, index, field) => {
        const updatedProductos = [...productosNuevos];
        updatedProductos[index][field] = e.target.value;
        setProductosNuevos(updatedProductos);
    };

    const handleToggleEditing = (index) => {
        const updatedProductos = [...productosNuevos];
        updatedProductos[index].isEditing = !updatedProductos[index].isEditing;
        setProductosNuevos(updatedProductos);
    };

    const handleGuardarProducto = (index) => {
        const editedProduct = productosNuevos[index];
        if (editedProduct.num >= 1 && editedProduct.num <= 8) {
            handleToggleEditing(index);
        } else {
            alert("El número (#) debe estar entre 1 y 8");
        }
    };

    return (
        <section id="nuevos" className="container my-4 pt-4">
            <div className="text-center  pb-3">
                <h2>Nuevos productos</h2>
            </div>
        
            <ProductTable
                products={productosNuevos}
                onInputChange={handleInputChange}
                onToggleEditing={handleToggleEditing}
                onGuardarProducto={handleGuardarProducto}
            />
        </section>
    );
}

export default Nuevos;
