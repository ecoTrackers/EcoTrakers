import React from "react";
import IndexLiSM from "./IndexLiSM";
import IndexLi from "./IndexLi";

function IndexUl() {
    return (
        <ul className="navbar-nav">
            <IndexLi
                href="/logup"
                text="Registrarse"
            />
            <IndexLi
                href="/login"
                text="Iniciar sesión"
            />
            <IndexLiSM
                href="/logup"
                text="Registrarse"
            />
            <IndexLiSM
                href="/login"
                text="Iniciar sesión"
            />
    </ul>
    );
}

export default IndexUl;