import React, { useEffect } from "react";
import ButtonGreen from '../components/form/ButtonGreen';
import ButtonWhite from '../components/form/ButtonWhite';

function ShoppingCart( { productosSeleccionados, setProductosSeleccionados } ) {
    
    
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


  return (
    <div className="container mt-5">

        <h1 className="mb-4">Carrito de Compras - Eco Trackers</h1>

        <div className="table-responsive mx-5 px-5" style={{ maxHeight: '380px', minHeight: '380px', overflowY: 'auto' }}>
            <table className="table table-hover ">
                <thead >
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody className="table-group-divider">
                {productosSeleccionados.map((product, index) => (
                    <tr key={product.id}>
                    <td className="w-25">{product.name}</td>
                    <td>${product.cost.toLocaleString()}</td>
                    <td>
                        <button className="btn btn-danger" onClick={() => handleRemoveProduct(product)}>
                        Eliminar
                        </button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
      

        <div className="d-flex justify-content-between align-items-center">

            
            <div className="me-3" style={{ flex: 1}}>
                <ButtonWhite text="Realizar Pago" />
            </div>
            
            <div className="me-3" style={{ flex: 1}}>
                <a href="/home">
                <ButtonGreen text="Continuar Comprando" />
                </a>
            </div>
            
            <div className=" text-end" style={{ flex: 1 }}>
                <h3>Total: ${getTotalPrice().toLocaleString()}</h3>
            </div>

        </div>
    </div>
  );
}

export default ShoppingCart;
