import React, { useEffect } from "react";
import ButtonGreen from '../components/form/ButtonGreen';
import ButtonWhite from '../components/form/ButtonWhite';

function ShoppingCart({ productosSeleccionados, setProductosSeleccionados }) {
  
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('productosSeleccionados'));
    if (storedProducts) {
      setProductosSeleccionados(storedProducts);
    }
}, [setProductosSeleccionados]);


  const getTotalPrice = () => {
    return productosSeleccionados.reduce((total, product) => {
      return total + parseFloat(product.cost);
    }, 0);
  };

  const handleRemoveProduct = (productToRemove) => {
    const updatedProducts = productosSeleccionados.filter(product => product.id !== productToRemove.id);
    setProductosSeleccionados(updatedProducts); 
  
    localStorage.setItem('productosSeleccionados', JSON.stringify(updatedProducts));
  };

  console.log(productosSeleccionados);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Carrito de Compras - Eco Trackers</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productosSeleccionados.map((product, index) => (
            <tr key={product.id}>
              <td className="w-25">{product.name}</td>
              <td>${product.cost}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleRemoveProduct(product)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-right">
        <h3>Total: ${getTotalPrice().toFixed(2)}</h3>

        <div className="mt-3 d-flex justify-content-around" style={{ width: "30%" }}>
          <div style={{ flex: 1, marginRight: "10px" }}>
            <ButtonWhite text="Realizar Pago" />
          </div>
          <div style={{ flex: 1 }}>
            <a href="/home">
              <ButtonGreen text="Continuar Comprando" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
