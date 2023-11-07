import React, {useState, useEffect } from "react";
import ProductSmall from "./productSmall";

function CarruselNuevos({onAddToCart}) {

    const productos = [
        { num: "7", name: "prueba1", cost: "79.999" },
        { num: "5", name: "prueba5", cost: "19.999" },
        { num: "1", name: "prueba6", cost: "29.999" },
        { num: "3", name: "prueba4", cost: "39.999" },
        { num: "8", name: "prueba1", cost: "89.999" },
        { num: "5", name: "prueba5", cost: "19.999" },
        { num: "5", name: "prueba5", cost: "19.999" },
        { num: "1", name: "prueba6", cost: "59.999" },
        { num: "8", name: "prueba4", cost: "49.999" },
        { num: "4", name: "prueba3", cost: "69.999" }
      ];
    
    const firstBlock = productos.slice(0, 2);
    const secondBlock = productos.slice(2, 4);
    const thirdBlock = productos.slice(4, 6);
    const fourtBlock = productos.slice(6, 8);
    const fiveBlock = productos.slice(8, 10);
      
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

        <div className="col-md-9 mb-4">
            
            <div id="nuevosCarousel" className="carousel slide h-100 m-0" data-ride="carousel">

                <div className="carousel-inner h-100">

                    <div className="carousel-item active h-100">
                        <div className="row justify-content-around align-items-center h-100">
                            {firstBlock.map((product, index) => (
                                <ProductSmall
                                    key={product.id}
                                    num={product.num}
                                    name={product.name}
                                    cost={`$ ${product.cost}`}
                                    onAddToCart={() => handleAddToCart(product)}
                                />
                            ))}                    
                        </div>
                    </div>
                    
                    <div className="carousel-item h-100">
                        <div className="row justify-content-around align-items-center h-100">
                            {secondBlock.map((product, index) => (
                                <ProductSmall
                                    key={product.id}
                                    num={product.num}
                                    name={product.name}
                                    cost={`$ ${product.cost}`}
                                    onAddToCart={() => handleAddToCart(product)}
                                />
                            ))}                    
                        </div>
                    </div>

                    <div className="carousel-item h-100">
                        <div className="row justify-content-around align-items-center h-100">
                            {thirdBlock.map((product, index) => (
                                <ProductSmall
                                    key={product.id}
                                    num={product.num}
                                    name={product.name}
                                    cost={`$ ${product.cost}`}
                                    onAddToCart={() => handleAddToCart(product)}
                                />
                            ))}                    
                        </div>
                    </div>

                    <div className="carousel-item h-100">
                        <div className="row justify-content-around align-items-center h-100">
                            {fourtBlock.map((product, index) => (
                                <ProductSmall
                                    key={product.id}
                                    num={product.num}
                                    name={product.name}
                                    cost={`$ ${product.cost}`}
                                    onAddToCart={() => handleAddToCart(product)}
                                />
                            ))}                    
                        </div>
                    </div>

                    <div className="carousel-item h-100">
                        <div className="row justify-content-around align-items-center h-100">
                            {fiveBlock.map((product, index) => (
                                <ProductSmall
                                    key={product.id}
                                    num={product.num}
                                    name={product.name}
                                    cost={`$ ${product.cost}`}
                                    onAddToCart={() => handleAddToCart(product)}
                                />
                            ))}                    
                        </div>
                    </div>

                </div>  
            </div> 
        </div>
    );
}

export default CarruselNuevos;