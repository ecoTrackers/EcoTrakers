import React, {useState, useEffect } from "react";
import ProductSmall from "./productSmall";
import ProductLarge from "./productLarge";

function CarruselCompras({onAddToCart}) {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem("productosCompras"));
        if (storedProducts) {
          setProductos(storedProducts);
        }
      }, []);
    
    const firstBlock = productos.slice(0, 1);
    const secondBlock = productos.slice(1, 3);
    const thirdBlock = productos.slice(3, 5);
      
    const [productosSeleccionados, setProductosSeleccionados] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem('productosSeleccionados'));
        if (storedProducts) {
          setProductosSeleccionados(storedProducts);
        }
    }, [setProductosSeleccionados]);
    
    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = (product) => {
        setCartCount(cartCount + 1);

        const productKey = `${product.num}_${Date.now()}`;
        const updatedProductosSeleccionados = [...productosSeleccionados, { ...product, id: productKey }];
        setProductosSeleccionados(updatedProductosSeleccionados);

        localStorage.setItem("productosSeleccionados", JSON.stringify(updatedProductosSeleccionados));

        onAddToCart(product);
    };

    return (

        <div className=" row justify-content-between d-flex align-items-center">
        
                {firstBlock.map((product, index) => (
                    <ProductLarge
                        key={product.id}
                        num={product.num}
                        name={product.name}
                        cost={`$ ${product.cost.toLocaleString()}`}
                        onAddToCart={() => handleAddToCart(product)}
                    />
                ))}

            <div className="col">
                <div className="row d-flex justify-content-evenly pb-3">
                    {secondBlock.map((product, index) => (
                        <ProductSmall
                            key={product.id}
                            num={product.num}
                            name={product.name}
                            cost={`$ ${product.cost.toLocaleString()}`}
                            onAddToCart={() => handleAddToCart(product)}
                        />
                    ))}

                </div>
                <div className="row d-flex justify-content-evenly pb-3">
                    {thirdBlock.map((product, index) => (
                        <ProductSmall
                            key={product.id}
                            num={product.num}
                            name={product.name}
                            cost={`$ ${product.cost.toLocaleString()}`}
                            onAddToCart={() => handleAddToCart(product)}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default CarruselCompras;