import React from "react";

function ProductTable({ products, onInputChange, onToggleEditing, onGuardarProducto }) {
  return (
    <div className="table-responsive">
      <table className="table table-hover table-sm table-bordered">
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {products.map((product, index) => (
            <tr key={index}>
              <td>
                <input
                  className="d-block mw-100 rounded-3 border border-opacity-75"
                  type="number"
                  value={product.num}
                  onChange={(e) => onInputChange(e, index, "num")}
                  min="1"
                  max="8"
                  readOnly={!product.isEditing}
                />
              </td>
              <td>
                <input
                  className="d-block mw-100 rounded-3 border border-opacity-75"
                  type="text"
                  value={product.name}
                  onChange={(e) => onInputChange(e, index, "name")}
                  readOnly={!product.isEditing}
                />
              </td>
              <td>
                <input
                  className="d-block mw-100 rounded-3 border border-opacity-75"
                  type="number"
                  value={product.cost}
                  onChange={(e) => onInputChange(e, index, "cost")}
                  readOnly={!product.isEditing}
                />
              </td>
              <td>
                {product.isEditing ? (
                  <button
                    onClick={() => onGuardarProducto(index)}
                    className="btn btn-outline-success border-0 btn-lg d-flex justify-content-center btn-block"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <div className="d-flex align-items-center">
                      <span className="fa-regular fa-floppy-disk"></span>
                    </div>
                  </button>
                ) : (
                  <button
                    onClick={() => onToggleEditing(index)}
                    className="btn btn-outline-primary border-0 btn-lg d-flex justify-content-center btn-block"
                    style={{ backgroundColor: "transparent" }}
                  >
                    <div className="d-flex align-items-center">
                      <span className="fas fa-edit me-2"></span>
                    </div>
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
