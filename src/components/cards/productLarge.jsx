import React from "react";

function ProductLarge(props) {

    return (
        <div className="col-12 col-md-6 col-lg-4 ms-1 mb-5">
            <div className="card">
                <img 
                    className="card-img-top img-fluid"
                    src={require(`../../img/Product/${props.num}.jpeg`)} 
                    alt={`Product${props.num}`}img-fluid
                />
                 <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start">
                        <div>
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.cost}</p>
                        </div>
                        <div>
                            <a href="/" className="btn btn-primary">Añadir</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductLarge;