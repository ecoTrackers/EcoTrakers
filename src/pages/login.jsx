import React, { useState } from "react";
import CustomInput from "../components/form/CustomInput";
import ButtonClose from "../components/form/buttonClose";
import TitleForm from "../components/form/TitleForm";
import ButtonGreen from "../components/form/ButtonGreen";
import ButtonWhite from "../components/form/ButtonWhite";
import { validateLogin } from "../utils/functions"; 
import { useNavigate } from 'react-router-dom';


function Login() {
        const navigate = useNavigate();

        const [formData, setFormData] = useState({
            email: "",
            password: "",
          });
        
          const handleSubmit = async (event) => {
            event.preventDefault();
        
            if (validateLogin(formData)) {
              try {
                
                const response = await fetch("http://localhost:3000 ", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(formData), 
                });
        
                if (response.ok) {
                  
                  navigate("/home");
                } else {
                  
                  alert("Inicio de sesión fallido. Verifica tus credenciales.");
                }
              } catch (error) {
                console.error("Error en la solicitud:", error);
               
              }
            }
          };
        
          const handleInputChange = (event) => {
            const { name, value } = event.target;
            setFormData({
              ...formData,
              [name]: value,
            });
          };

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary-subtle vh-100">
            <main className="bg-light rounded border-0">
                <div className="border-opacity-50 shadow-lg rounded px-5 py-4">

                    <ButtonClose />
                                            
                    <TitleForm 
                        text="Iniciar Sesión en EcoTracker"
                    />
            
                    <form onSubmit={handleSubmit}>
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
                                value={formData.email}
                                onChange={handleInputChange} 
                            />
                        </div> 
                        <div className="fw-medium pb-2">
                            <div className="d-flex justify-content-between pb-2">
                                <label 
                                    htmlFor="password">
                                    Contraseña
                                </label>
                                <a 
                                    href="/forgotPassword"
                                    className="text-end fw-light text-decoration-none d-flex justify-content-end">
                                    ¿Olvidaste tu contraseña?
                                </a>
                            </div>  
                            <div className="d-block">
                                <CustomInput 
                                    type="password" 
                                    id="password" 
                                    placeholder="********"
                                    value={formData.password}
                                    onChange={handleInputChange} 
                                />
                            </div>
                        </div>
                        <div className="py-2 fs-6 fw-lighter form-check form-switch">
                            
                            <input 
                                type="checkbox" 
                                role="switch" 
                                name="rememberMe" 
                                id="rememberMe" 
                                className="form-check-input border-success-subtle bg-success" 
                            />
                            <label 
                                htmlFor="rememberMe">
                                Recordarme
                            </label>
                        </div>
                        <div className="py-2">
                            <ButtonGreen 
                                type="submit" 
                                text="Iniciar sesión"
                            />
                        </div>
                    </form>
                    <hr />
                    <div className="mt-3 pt-2">
                        <ButtonWhite 
                            type="button" 
                            text="Iniciar sesión con Google"
                        />
                        
                    </div>    
                    
                    <div className="d-flex justify-content-start mt-2">
                        <h3 
                            className="fw-light fs-6">
                            ¿No tienes una cuenta?
                        </h3>        
                        <a 
                            href="/logup" 
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