import React from 'react';
import ButtonGreen from '../components/form/ButtonGreen';
import ButtonWhite from '../components/form/ButtonWhite';

function ShoppingCart() {
    return (
        <div className="container mt-5">
            <h1 className="mb-4">Carrito de Compras - Eco Trackers</h1>

            <table className="table">

                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="w-25">Producto 1</td>
                        <td>$19.99</td>
                        <td>
                            <input type="number" className="form-control" value="1" min="1" style={{ maxWidth: '80px' }} />
                        </td>
                        <td>$19.99</td>
                        <td>
                            <button className="btn btn-danger">Eliminar</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="w-25">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut dolor corporis sunt corrupti numquam eveniet perspiciatis, animi distinctio quam nihil! Ex magnam eveniet quam nemo sed illum vel iure vero.
                        </td>
                        <td>$29.99</td>
                        <td>
                            <input type="number" className="form-control" value="1" min="1" style={{ maxWidth: '80px' }} />
                        </td>
                        <td>$29.99</td>
                        <td>
                            <button className="btn btn-danger">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="text-right">
                <h3>Total: $49.98</h3>

                <div className="mt-3 d-flex justify-content-around" style={{ width: "30%" }}>
                    <div style={{ flex: 1, marginRight: "10px" }}>
                        <ButtonWhite text="Realizar Pago "/>
                    </div>
                    <div style={{ flex: 1}}>
                        <a href="/home">
                            <ButtonGreen text ="Continuar Comprando"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
