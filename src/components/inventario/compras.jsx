import React, { useState, useEffect } from "react";
import ProductTable from "./productTable";

function Compras() {
    const [productosCompras, setProductosCompras] = useState([]);
    const localKey = "productosCompras";

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem(localKey));
        if (storedProducts) {
            setProductosCompras(storedProducts);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(localKey, JSON.stringify(productosCompras));
    }, [productosCompras]);

    const handleInputChange = (e, index, field) => {
        const updatedProductos = [...productosCompras];
        updatedProductos[index][field] = e.target.value;
        setProductosCompras(updatedProductos);
    };

    const handleToggleEditing = (index) => {
        const updatedProductos = [...productosCompras];
        updatedProductos[index].isEditing = !updatedProductos[index].isEditing;
        setProductosCompras(updatedProductos);
    };

    const handleGuardarProducto = (index) => {
        const editedProduct = productosCompras[index];
        if (editedProduct.num >= 1 && editedProduct.num <= 8) {
            handleToggleEditing(index);
        } else {
            alert("El número (#) debe estar entre 1 y 8");
        }
    };

    return (
        <section id="compras" className="container my-4 pt-4">
            <div className="text-center  pb-3">
                <h2>Según tus comprar</h2>
            </div>
        
            <ProductTable
                products={productosCompras}
                onInputChange={handleInputChange}
                onToggleEditing={handleToggleEditing}
                onGuardarProducto={handleGuardarProducto}
            />
        </section>
    );
}

export default Compras;
