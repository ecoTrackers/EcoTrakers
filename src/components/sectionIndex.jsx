import React from "react";

function SectionIndex(props) {
    return (
            <div className="col-lg-6 col-md-12 mb-4">
                <article className="p-4 bg-light rounded h-100"> 
                    <div className="row align-items-center">
                        <h2 className="text-success">
                            {props.title}
                        </h2>
                        <div className="col-md-4 text-center mb-3">
                            <img 
                                className="img-fluid rounded"
                                src={require(`../img/${props.num}.png`)}
                                alt={`Imagen${props.num}`} />
                        </div>
                        <div className="col-md-8">
                            <p className="lead fs-6">
                                {props.text}
                            </p>
                        </div>
                    </div>
                </article>
            </div>
    );
}

export default SectionIndex;