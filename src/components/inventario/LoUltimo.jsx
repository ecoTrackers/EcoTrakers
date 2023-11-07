import React, { useState } from "react";
import ProductTable from "./productTable";

function LoUltimo() {
    const [productosLoUltimo, setProductosLoUltimo] = useState([
        { num: "7", name: "prueba1", cost: 79999 },
        { num: "6", name: "prueba1", cost: 79999 },
        { num: "5", name: "prueba5", cost: 19999 }
    ]);

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
        <section id="LoUltimo" className="container my-4 pt-4">
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
