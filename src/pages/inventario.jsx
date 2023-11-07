import React from "react";
import Footer from "../components/footer/footer";
import LinkSection from "../components/cards/linkSection";

function Inventario() {
       
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

                    <nav className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown d-none d-sm-block">
                                <a className="nav-link " href="/home" >
                                    <i className="fas fa-sign-out fa-lg me-2 text-white"></i>
                                </a>
                            </li>
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
                        text="Lo último que viste"/>
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
                    </div>
                </section>
                <section id="lo_ultimo" className="container my-4 pt-4">
                    <div className="text-center pb-3">
                        <h2>Lo último que viste</h2>
                    </div>
                </section>
                
                <section id="compras" className="container bg-secondary bg-opacity-50" style={{ maxWidth: 'none' }}>
                    <div className="text-center">
                        <h2 className="pt-3">Según tus compras </h2> 
                    </div>
                </section>

                <section id="nuevos" className="container my-4 pt-4" >
                    <div className="text-center pb-3">
                        <h2>Nuevos Productos</h2>
                    </div>   
                </section>  

                <section id="vendidos" className="container bg-warning bg-opacity-75 p-5 w-100" style={{ maxWidth: 'none' }}>
                    <div className="text-center">
                        <h2>Más Vendidos</h2>
                    </div>    
                </section>
            </div>

            <Footer />
            
        </div>
    )
}

export default Inventario;