import React from "react";

function ProductSmall(props) {

    const imageStyle = {
        maxWidth: "100%",
        height: "300px"
    };

    return (
        <div className="col-lg-4 col-md-4 mb-4">
            <div className="card ">
                <img 
                    className="img-fluid rounded"
                    src={require(`../../img/Product/${props.num}.jpeg`)} 
                    alt={`Product${props.num}`}
                    style={imageStyle}
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

export default ProductSmall;