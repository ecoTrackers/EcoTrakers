import React from "react";
import CustomInput from "../components/form/CustomInput";
import ButtonClose from "../components/form/buttonClose";
import TitleForm from "../components/form/TitleForm";
import ButtonGreen from "../components/form/ButtonGreen";
import ButtonWhite from "../components/form/ButtonWhite";

function Login() {
    return (

        <div className="d-flex justify-content-center align-items-center bg-secondary-subtle vh-100">
            <main className="bg-light rounded border-0">
                <div className="border-opacity-50 shadow-lg rounded px-5 py-4">
                    <a 
                        href="/index.html" 
                        className="d-flex justify-content-end">
                        <ButtonClose />
                    </a>
                    
                    <TitleForm 
                        text="Iniciar Sesión en EcoTracker"
                    />
            
                    <form id="loginForm" onsubmit="return validateLogin()">
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
                            <div className="d-flex justify-content-between pb-2">
                                <label 
                                    htmlFor="password">
                                    Contraseña
                                </label>
                                <a 
                                    href="/login/forgot-password.html"
                                    className="text-end fw-light text-decoration-none d-flex justify-content-end">
                                    ¿Olvidaste tu contraseña?
                                </a> 
                            </div>  
                            <div className="d-block">
                                <CustomInput 
                                    type="password" 
                                    id="password" 
                                    placeholder="********" 
                                    />
                            </div>
                        </div>
                        <div className="py-2 fs-6 fw-lighter form-check form-switch">
                            
                            <input 
                                type="checkbox" 
                                role="switch" 
                                name="rememberMe" 
                                id="rememberMe" 
                                className="form-check-input border-success-subtle bg-success" />
                            <label 
                                htmlFor="rememberMe">
                                Recordarme
                            </label>
                        </div>
                        <div className="py-2">
                            <ButtonGreen 
                                type="submit" 
                                text="Iniciar sesión"
                                onclick="validateLogin()"
                            />
                        </div>
                    </form>
                    <hr />
                    <div className="mt-3 pt-2">
                        <ButtonWhite 
                            type="button" 
                            text="Inicia sesión con Google"
                        />
                        
                    </div>    
                    
                    <div className="d-flex justify-content-start mt-2">
                        <h3 
                            className="fw-light fs-6">
                            ¿No tienes una cuenta?
                        </h3>        
                        <a 
                            href="/logup/logup.html" 
                            className="fw-light fs-6 ms-1 ps-1 text-decoration-none">
                            Regístrate
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Login;