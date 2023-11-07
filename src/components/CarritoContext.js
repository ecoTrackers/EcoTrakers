import React, { createContext, useContext, useState, useEffect } from "react";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("productosSeleccionados"));
    if (storedProducts) {
      setProductosSeleccionados(storedProducts);
    }
  }, []);

  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (product) => {
    setCartCount(cartCount + 1);
    const productKey = `${product.num}_${Date.now()}`;
    const updatedProductosSeleccionados = [...productosSeleccionados, { ...product, id: productKey }];
    setProductosSeleccionados(updatedProductosSeleccionados);
    localStorage.setItem("productosSeleccionados", JSON.stringify(updatedProductosSeleccionados));
  };

  const handleRemoveFromCart = (productId) => {
    const updatedProducts = productosSeleccionados.filter((product) => product.id !== productId);
    setProductosSeleccionados(updatedProducts);
    localStorage.setItem("productosSeleccionados", JSON.stringify(updatedProducts));
  };

  return (
    <CarritoContext.Provider
      value={{
        productosSeleccionados,
        handleAddToCart,
        handleRemoveFromCart,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  return useContext(CarritoContext);
};
