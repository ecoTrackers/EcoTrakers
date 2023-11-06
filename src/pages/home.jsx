import React from "react";
import Footer from "../components/footer/footer";
import CarruselVendidos from "../components/cards/carruselVendidos";
import ListGroupNuevos from "../components/cards/listGroupNuevos";
import CarruselNuevos from "../components/cards/carruselNuevos";
import CarruselCompras from "../components/cards/carruselCompras";
import CarruselUltimo from "../components/cards/carruselUltimo";
import CarruselPromociones from "../components/cards/carruselPromociones";


function Home (){
    return (
        <div>
            <div class="header_home ">
            </div>
            
            <section id="promociones" className="container bg-secondary bg-opacity-50 w-100 m-0 py-3" style={{ maxWidth: 'none' }}>
                <div className="text-center">
                    <h2 className="text-white">Promoción Especial</h2>
                    <p className="text-white">Descubre nuestras increíbles promociones y ahorra en tus compras. ¡No te lo pierdas! <br/> 
                    Aprovecha esta oferta especial y ahorra en tu compra.</p>
                </div>

                <CarruselPromociones />   

            </section>

            <section id="lo_ultimo" className="container my-4">
                <div className="text-center pb-3">
                    <h2 className="">Lo ultimo que viste</h2>
                </div>

                <CarruselUltimo />

            </section>
            
            <section id="compras" class="container bg-secondary bg-opacity-50" style={{ maxWidth: 'none' }}>
                <div class="text-center">
                    <h2 class="pt-3">Según tus compras </h2>
                    <p>"¡Eres único(a)! Basándonos en tus compras anteriores, te presentamos una selección especial de productos que creemos que te encantarán. 
                    </p>
                </div>

                <CarruselCompras />
                    
            </section>

            <section id="nuevos" className="container my-4" >
                <div className="text-center pb-3">
                    <h2>Nuevos Productos</h2>
                    <p>¡Descubre lo último en EcoTracker! Hemos agregado emocionantes nuevos productos que te llevarán a un viaje sostenible y único.</p>
                    <p>¡No te pierdas nuestras últimas incorporaciones, tu próximo favorito te está esperando!</p>
                </div>
                <div className="row justify-content-between">      
                    <ListGroupNuevos/>
                    <CarruselNuevos />
                </div>
            </section>  

            <section id="vendidos" className="container bg-warning bg-opacity-75 p-5 w-100" style={{ maxWidth: 'none' }}>
                <div className="text-center">
                    <h2>Más Vendidos</h2>
                    <p>Descubre nuestros productos más populares</p>
                </div>
                <CarruselVendidos/>
            </section>

            <Footer />
        </div>
    )
}

export default Home;