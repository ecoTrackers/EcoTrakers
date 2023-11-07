import React, {useState, useEffect } from "react";
import ProductSmall from "./productSmall";

function CarruselPromociones({onAddToCart}) {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem("productosPromociones"));
        if (storedProducts) {
          setProductos(storedProducts);
        }
      }, []);
    
    const firstBlock = productos.slice(0, 3);
    const secondBlock = productos.slice(3, 6);
    const thirdBlock = productos.slice(6, 9);
      
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
        <div id="carouselpromociones" className="carousel slide " data-ride="carousel">
                
            <div className="carousel-indicators pt-5 align-items-end m-0">
                    <button type="button" data-bs-target="#carouselpromociones" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselpromociones" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselpromociones" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>  
                

            <div className="carousel-inner">

                <div className="carousel-item active px-5">
                    <div className="d-flex flex-wrap justify-content-around">                    
                        {firstBlock.map((product, index) => (
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
                
                <div className="carousel-item px-5">
                    <div className="d-flex flex-wrap justify-content-around">                    
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
                </div>
                
                <div className="carousel-item px-5">
                    <div className="d-flex flex-wrap justify-content-around">                    
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

            <a className="carousel-control-prev justify-content-start m-0" href="#carouselpromociones" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a className="carousel-control-next justify-content-end m-0" href="#carouselpromociones" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>  
        
    );
}

export default CarruselPromociones;