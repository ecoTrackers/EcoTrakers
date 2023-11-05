import React from "react";
import Hamburger from "./hamburger";
import IndexUl from "./indexUl";

function IndexNav() {
    return (
        <header className="navbar navbar-expand-sm d-flex justify-content-between align-items-center mb-5" style={{background: "linear-gradient(to right, #198754, #96dfbd)"}}>
            <h1 
                className="text-sm-start m-4 text-white fw-bold fs-1">
                Eco Trackers
            </h1>
            <Hamburger/>
            <nav className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <IndexUl/>
            </nav>
        </header>
    );
}

export default IndexNav;