import React, { useState }  from "react";
import Footer from "../components/footer/footer";
import CarruselVendidos from "../components/cards/carruselVendidos";
import ListGroupNuevos from "../components/cards/listGroupNuevos";
import CarruselNuevos from "../components/cards/carruselNuevos";
import CarruselCompras from "../components/cards/carruselCompras";
import CarruselUltimo from "../components/cards/carruselUltimo";
import CarruselPromociones from "../components/cards/carruselPromociones";
import LinkSection from "../components/cards/linkSection";
import Search from "../components/homeHeader/search";
import Hamburger from "../components/NAV/hamburger";
import IndexLiSM from "../components/NAV/IndexLiSM";


function Home ({scrollToSection}){
    const [cartCount, setCartCount] = useState(0);

    const handleAddToCart = () => {
        setCartCount(cartCount + 1);
    };

    
    return (
        <div>
            <div 
            style={{ 
                background: "linear-gradient(to right, #198754, #96dfbd)", 
                position: "fixed", 
                top: 0, 
                width: "100%", 
                zIndex: 100
                }}>
  
                <header className="navbar navbar-expand-sm d-flex justify-content-between align-items-center">
                    <h1 className="text-sm-start m-4 text-white fw-bold fs-1">Eco Trackers</h1>

                    <Search/> 

                    <Hamburger />

                    <nav className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item d-none d-sm-block">
                                <a className="nav-link text-white " href="/cart"> <i className ="fas fa-shopping-cart fa-lg me-2" ></i>
                                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                                </a>
                            </li>
                            <li className="nav-item dropdown d-none d-sm-block">
                                <a className="nav-link dropdown-toggle text-white" href="/home" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-user fa-lg me-2"></i>
                                </a>
                                <div className="dropdown-menu border-success-subtle border-3" aria-labelledby="navbarDropdown"  style={{ left: 'auto', right: 0 }}>
                                    <a className="dropdown-header text-decoration-none fs-4 fw-semibold" href="/home">Perfil</a>
                                    <a className="dropdown-item fw-light fs-6" href="/home">Historial de compras</a>
                                    <a className="dropdown-item fw-light fs-6" href="/home">Configuración</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item fw-light fs-6" href="/">Cerrar sesión</a>
                                </div>
                            </li>

                            <IndexLiSM href="/cart" text="Tu carrito">
                                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                            </IndexLiSM>
                            <hr className="d-block d-sm-none"/>
                            <IndexLiSM href="/home" text="Historial de compras"/>
                            <IndexLiSM href="/home" text="Configuración"/>
                            <hr className="d-block d-sm-none"/>
                            <IndexLiSM href="/" text="Cerrar sesión"/>
                        </ul>
                    </nav>


                </header>

                <section className="container text-center pb-3">
                    <div className="row flex-nowrap" style={{ overflowX: "auto" }}>
                        <LinkSection 
                        href="#Promociones"
                        text="Promociones"/>
                        <LinkSection 
                        href="#lo_ultimo"
                        text="Lo ultimo que viste"/>
                        <LinkSection 
                        href="#compras"
                        text="Según tus comprar"/>
                        <LinkSection 
                        href="#nuevos"
                        text="Nuevos productos"/>
                        <LinkSection 
                        href="#vendidos"
                        text="Más vendidos"/>
                        <LinkSection 
                        href="#contactanos"
                        text="Contáctanos"/>
                    </div>
                </section>
            </div>
            
            <div style={{ marginTop: "140px" }}>
                <section id="Promociones" className="container bg-secondary bg-opacity-50 w-100 m-0 py-3" style={{ maxWidth: 'none'}}>
                    <div className="text-center">
                        <h2 className="text-white">Promoción Especial</h2>
                        <p className="text-white">Descubre nuestras increíbles promociones y ahorra en tus compras. ¡No te lo pierdas! <br/> 
                        Aprovecha esta oferta especial y ahorra en tu compra.</p>
                    </div>

                    <CarruselPromociones onAddToCart={handleAddToCart} />   

                </section>

                <section id="lo_ultimo" className="container my-4 pt-4">
                    <div className="text-center pb-3">
                        <h2>Lo ultimo que viste</h2>
                    </div>

                    <CarruselUltimo onAddToCart={handleAddToCart} />

                </section>
                
                <section id="compras" className="container bg-secondary bg-opacity-50" style={{ maxWidth: 'none' }}>
                    <div className="text-center">
                        <h2 className="pt-3">Según tus compras </h2>
                        <p>"¡Eres único(a)! Basándonos en tus compras anteriores, te presentamos una selección especial de productos que creemos que te encantarán. 
                        </p>
                    </div>

                    <CarruselCompras onAddToCart={handleAddToCart} />
                        
                </section>

                <section id="nuevos" className="container my-4 pt-4" >
                    <div className="text-center pb-3">
                        <h2>Nuevos Productos</h2>
                        <p>¡Descubre lo último en EcoTracker! Hemos agregado emocionantes nuevos productos que te llevarán a un viaje sostenible y único.</p>
                        <p>¡No te pierdas nuestras últimas incorporaciones, tu próximo favorito te está esperando!</p>
                    </div>
                    <div className="row justify-content-between">      
                        <ListGroupNuevos/>
                        <CarruselNuevos onAddToCart={handleAddToCart} />
                    </div>
                </section>  

                <section id="vendidos" className="container bg-warning bg-opacity-75 p-5 w-100" style={{ maxWidth: 'none' }}>
                    <div className="text-center">
                        <h2>Más Vendidos</h2>
                        <p>Descubre nuestros productos más populares</p>
                    </div>
                    <CarruselVendidos onAddToCart={handleAddToCart} />
                </section>
            </div>

            <Footer />
            
        </div>
    )
}

export default Home;