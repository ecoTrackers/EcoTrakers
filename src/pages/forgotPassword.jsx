import React from "react";
import CustomInput from "../components/form/CustomInput";
import ButtonClose from "../components/form/buttonClose";
import TitleForm from "../components/form/TitleForm";
import ButtonWhiteGreen from "../components/form/ButtonWhiteGreen";

function ForgotPassword() {
    return (
        <div className=" d-flex justify-content-center align-items-center bg-secondary-subtle vh-100">
            <main className="bg-light rounded border-0" style={{width: "465.234px", height:"491.781"}}>      
                <div className="border-opacity-50 shadow-lg rounded px-5 py-4">
                  
                   <ButtonClose /> 
                        
                    <TitleForm 
                        text="Recordar contraseña"
                    />    

                    <form id="forgotForm" onsubmit="return validateForgot()">
                        <p className="pb-1">
                            Ingresa el correo electrónico asociado con tu cuenta para cambiar tu contraseña
                        </p>
                        <div className="fw-medium pb-3">
                                <CustomInput
                                    type="email" 
                                    name="email" 
                                    id="emailForgot" 
                                    placeholder="ejemplo@correo.com" 
                                />
                        </div> 
                        
                        <div className="py-2">
                            <ButtonWhiteGreen 
                                type="button"
                                text="Siguiente"
                                onclick="validateForgot()"
                            />
                        </div>
                        
                    </form>
                </div>
            </main>

        </div>
    );
}
    
export default ForgotPassword;