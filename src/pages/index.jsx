import React from "react";
import Footer from "../components/footer/footer";
import SectionIndex from "../components/sectionIndex";
import CustomNav from "../components/NAV/CustomNav";

function Index (){
    return (
        <div>
            <CustomNav />
            <section className="container">
                <div className="row">
                    <SectionIndex 
                        title="¿Quiénes Somos?"
                        num="1"
                        text="EcoTracker es mucho más que un e-commerce. Somos una comunidad apasionada por la sostenibilidad y el cambio positivo en el mundo. Nos dedicamos a promover y ofrecer productos que respetan nuestro planeta y promueven un estilo de vida responsable."
                    />
                    <SectionIndex 
                        title="Nuestra misión"
                        num="2"
                        text="Nuestra misión es proporcionar a nuestros clientes acceso a productos ecológicos y sostenibles de alta calidad. Creemos en un mundo en el que cada compra cuenta, y queremos hacer que cada compra cuente para un futuro más verde y saludable."
                    />
                    <SectionIndex 
                        title="Nuestros Valores"
                        num="3"
                        text="En EcoTracker, nos esforzamos por fomentar una comunidad comprometida con la sostenibilidad y el respeto por nuestro entorno. Creemos en la transparencia, la calidad y la innovación sostenible."
                    />
                    <SectionIndex 
                        title="Únete a nosotros"
                        num="4"
                        text="Únete a nosotros en nuestro viaje hacia un futuro más consciente y ecológico."
                    />
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Index;