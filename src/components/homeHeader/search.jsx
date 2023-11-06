import React from "react";

function Search() {
    return (
        <form className="form-inline my-2 my-lg-0 flex-grow-1 mx-3">
            <div className="input-group w-100">
                <input className="form-control rounded-start-pill" type="search" placeholder="Buscar" aria-label="Buscar"/>
                <button className="btn btn-outline-light rounded-end-pill" type="submit">
                    <i className="fas fa-search"></i> 
                </button>
            </div>
        </form>
        
    );
}

export default Search;