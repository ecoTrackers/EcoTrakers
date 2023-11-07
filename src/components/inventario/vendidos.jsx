import React, { useState, useEffect } from "react";
import ProductTable from "./productTable";

function Vendidos() {
    const [productosVendidos, setProductosVendidos] = useState([]);

    const localKey = "productosVendidos";

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem(localKey));
        if (storedProducts) {
            setProductosVendidos(storedProducts);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(localKey, JSON.stringify(productosVendidos));
    }, [productosVendidos]);


    const handleInputChange = (e, index, field) => {
        const updatedProductos = [...productosVendidos];
        updatedProductos[index][field] = e.target.value;
        setProductosVendidos(updatedProductos);
    };

    const handleToggleEditing = (index) => {
        const updatedProductos = [...productosVendidos];
        updatedProductos[index].isEditing = !updatedProductos[index].isEditing;
        setProductosVendidos(updatedProductos);
    };

    const handleGuardarProducto = (index) => {
        const editedProduct = productosVendidos[index];
        if (editedProduct.num >= 1 && editedProduct.num <= 8) {
            handleToggleEditing(index);
        } else {
            alert("El número (#) debe estar entre 1 y 8");
        }
    };

    return (
        <section id="vendidos" className="container my-4 pt-4">
            <div className="text-center  pb-3">
                <h2>Más vendidos</h2>
            </div>
        
            <ProductTable
                products={productosVendidos}
                onInputChange={handleInputChange}
                onToggleEditing={handleToggleEditing}
                onGuardarProducto={handleGuardarProducto}
            />
        </section>
    );
}

export default Vendidos;
