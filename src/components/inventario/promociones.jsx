import React, { useState } from "react";
import ProductTable from "./productTable";

function Promociones() {
    const [productosPromociones, setProductosPromociones] = useState([
        { num: "7", name: "prueba1", cost: 79999 },
        { num: "5", name: "prueba5", cost: 19999 }
    ]);

    const handleInputChange = (e, index, field) => {
        const updatedProductos = [...productosPromociones];
        updatedProductos[index][field] = e.target.value;
        setProductosPromociones(updatedProductos);
    };

    const handleToggleEditing = (index) => {
        const updatedProductos = [...productosPromociones];
        updatedProductos[index].isEditing = !updatedProductos[index].isEditing;
        setProductosPromociones(updatedProductos);
    };

    const handleGuardarProducto = (index) => {
        const editedProduct = productosPromociones[index];
        if (editedProduct.num >= 1 && editedProduct.num <= 8) {
            handleToggleEditing(index);
        } else {
            alert("El número (#) debe estar entre 1 y 8");
        }
    };

    return (
        <section id="Promociones" className="container my-4 pt-4">
            <div className="text-center  pb-3">
                <h2>Promoción Especial</h2>
            </div>
        
            <ProductTable
                products={productosPromociones}
                onInputChange={handleInputChange}
                onToggleEditing={handleToggleEditing}
                onGuardarProducto={handleGuardarProducto}
            />
        </section>
    );
}

export default Promociones;
