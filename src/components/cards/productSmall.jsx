import React, { useState }  from "react";

function ProductSmall(props) {

    const [quantity, setQuantity] = useState(0);

    const addToCart = () => {
        setQuantity(quantity + 1);
        props.onAddToCart();
    };

    const imageStyle = {
        maxWidth: "100%",
        height: "200px"
    };

    const [cardBodyStyle, setCardBodyStyle] = useState({}); 

    const handleMouseEnter = () => {
        const newCardBodyStyle = { ...cardBodyStyle, cursor: "pointer" };
        setCardBodyStyle(newCardBodyStyle);
    };

    return (
        <div className="col-lg-4 col-md-4 mb-3" style={{width: "300px"}}>
            <div className="card ">
                <img 
                    className="img-fluid rounded"
                    src={require(`../../img/Product/${props.num}.jpeg`)} 
                    alt={`Product${props.num}`}
                    style={imageStyle}
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

export default ProductSmall;