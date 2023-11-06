import React, { useState }  from "react";

function ProductLarge(props) {

    const [quantity, setQuantity] = useState(0);

    const addToCart = () => {
        setQuantity(quantity + 1);
        props.onAddToCart();
    };

    const [cardBodyStyle, setCardBodyStyle] = useState({}); 

    const handleMouseEnter = () => {
        const newCardBodyStyle = { ...cardBodyStyle, cursor: "pointer" };
        setCardBodyStyle(newCardBodyStyle);
    };

    return (
        <div className="col-12 col-md-6 col-lg-4 ms-1 mb-5">
            <div className="card">
                <img 
                    className="card-img-top img-fluid"
                    src={require(`../../img/Product/${props.num}.jpeg`)} 
                    alt={`Product${props.num}`}img-fluid
                />
                 <div className="card-body" style={cardBodyStyle} onMouseEnter={handleMouseEnter} onClick={addToCart}>
                    <div className="d-flex justify-content-between align-items-start">
                        <div>
                            <h5 className="card-title">{props.name}</h5>
                            <p className="card-text">{props.cost}</p>
                        </div>
                        <div>
                            <button  className="btn btn-primary">Añadir</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductLarge;