import React from "react";
import CustomInput from "../components/form/CustomInput";
import ButtonClose from "../components/form/buttonClose";
import TitleForm from "../components/form/TitleForm";
import ButtonWhiteGreen from "../components/form/ButtonWhiteGreen";

function Logup() {
    return (
        <div className=" d-flex justify-content-center align-items-center bg-secondary-subtle vh-100">
            <main className="bg-light rounded border-0">
                <div className="border-opacity-50 shadow-lg rounded px-5 py-4">
                
                    <ButtonClose />

                    <TitleForm 
                        text="Registrarse en EcoTracker"
                    />

                    <form id="logupForm" onsubmit="return validateLogup()">
                        <div className="fw-medium pb-2">
                                <label 
                                    htmlFor="name" 
                                    className="d-block pb-2">
                                    Nombre
                                </label>
                                <CustomInput 
                                    type="text" 
                                    name="name"
                                    id="name"
                                    placeholder="Ingresa tu nombre"
                                />
                        </div>
                        <div className="fw-medium pb-2">
                                <label 
                                    htmlFor="lastname" 
                                    className="d-block pb-2">
                                    Apellido
                                </label>
                                <CustomInput 
                                    type="text" 
                                    name="lastname" 
                                    id="lastname" 
                                    placeholder="Ingresa tu apellido"
                                />
                        </div>
                        <div className="fw-medium pb-2">
                                <label 
                                    htmlFor="email" 
                                    className="d-block pb-2">
                                    Correo electrónico
                                </label>
                                <CustomInput 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="ejemplo@correo.com" 
                                />
                        </div> 
                        <div className="fw-medium pb-2">
                                <div className="pb-2">
                                    <label 
                                        htmlFor="password">
                                        Contraseña
                                    </label>
                                </div>  
                                <div className="d-block ">
                                    <CustomInput
                                        type="password" 
                                        name="password"
                                        id="password" 
                                        placeholder="********"
                                    />
                                </div>
                        </div>
                        <div className="fw-medium pb-2">
                            <div className="pb-2">
                                <label 
                                    htmlFor="confirmPassword" >
                                    Confirmar contraseña
                                </label>
                            </div>  
                            <div className="d-block ">
                                <CustomInput 
                                    type="password" 
                                    name="confirmPassword"
                                    id="confirmPassword" 
                                    placeholder="********" 
                                />
                            </div>
                        </div>
                        <div className="fw-medium pb-2">
                                <label 
                                    htmlFor="date" 
                                    className="d-block pb-2">
                                    Fecha de nacimiento
                                </label>
                                <CustomInput 
                                    type="date" 
                                    name="date" 
                                    id="date" 
                                />
                        </div>
                        
                        <div className="py-2">
                                <ButtonWhiteGreen 
                                    type="button" 
                                    text="Registrarse" 
                                    onclick="validateLogup()"
                                />
                        </div>
                        
                    </form>

                    <div className="d-flex justify-content-start mt-2">
                        <h3 className="fw-light fs-6 ">¿Ya tienes una cuenta?</h3>        
                        <a 
                            href="/pages/login" 
                            className=" fw-light fs-6 ms-1 ps-1 text-decoration-none">
                            Iniciar sesión
                        </a>
                    </div>

                </div>

            </main>
        </div>
        
    );
}
    
export default Logup;