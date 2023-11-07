import React from "react";
import LinkSection from "../components/cards/linkSection";
import Promociones from "../components/inventario/promociones";
import LoUltimo from "../components/inventario/LoUltimo";
import Compras from "../components/inventario/compras";
import Nuevos from "../components/inventario/nuevos";
import Vendidos from "../components/inventario/vendidos";


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

                    <nav className="navbar justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item  ">
                                <a className="nav-link" href="/home" >
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
                        href="#loUltimo"
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
                    </div>
                </section>
            </div>

            <div style={{ marginTop: "140px" }}>
                
                <Promociones />
                <LoUltimo />
                <Compras />
                <Nuevos />
                <Vendidos />
                
            </div>
           
        </div>
    )
}

export default Inventario;