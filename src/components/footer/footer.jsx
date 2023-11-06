import React from "react";
import ButtonGreen from "../form/ButtonGreen";
import CustomAFooter from "./CustomAfooter";
import CustomInputFooter from "./CustomInputFooter";
import CustomPFooter from "./CustomPfooter";

function Footer () {
    return (
        <div>
             <footer id="contactanos" className="bg-dark text-white p-4">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-6 mb-4">
                            <h3 className="mt-4">Contáctanos</h3>
                            <div>
                                <CustomPFooter 
                                    text="Dirección física: Av. EcoStreet, 123, Ciudad Verde, País."
                                />
                                <CustomPFooter 
                                    text="Correo Electrónico: info@ecotracker.com"
                                />
                                <CustomPFooter 
                                    text="Teléfono: +123-456-7890 (Horario de atención: Lunes a Viernes, 9:00 AM - 5:00 PM)"
                                />
                            </div>
                        </div>

                        <hr className="d-md-none" />

                        <div className="col-md-6">
                            <form>
                                <h4 
                                    className="mt-4">
                                    ¿Cómo podemos ayudarte?
                                </h4>
                                <CustomInputFooter 
                                    type="text"
                                    placeholder="Nombre"
                                />
                                <CustomInputFooter 
                                    type="email"
                                    placeholder="ejemplo@correo.com"
                                />
                                <div className="mb-3">
                                    <textarea 
                                        className="form-control fs-6 bg-dark-subtle rounded-4 border border-opacity-75" 
                                        rows="3" 
                                        placeholder="Mensaje" 
                                    />
                                </div>

                                <ButtonGreen 
                                    text="Enviar"
                                />
                            </form>
                        </div>
                        
                    </div>

                    <hr />  

                    <div className="container d-flex justify-content-start align-items-center">
                        <h4 
                            className="fs-6 mb-0 me-3">
                            Síguenos:
                        </h4>
                        <div className="d-flex align-items-center">
                            <CustomAFooter 
                                href="#"
                                text="facebook"
                            />
                            <CustomAFooter 
                                href="#"
                                text="instagram"
                            />
                            <CustomAFooter 
                                href="#"
                                text="twitter"
                            />
                            <CustomAFooter 
                                href="#"
                                text="linkedin"
                            />
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
}

export default Footer