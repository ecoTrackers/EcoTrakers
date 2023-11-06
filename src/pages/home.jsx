import React from "react";
import Footer from "../components/footer/footer";
import CarruselVendidos from "../components/cards/carruselVendidos";


function Home (){
    return (
        <div>
            
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