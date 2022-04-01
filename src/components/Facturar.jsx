import React, { useState, initialState } from "react";

function Facturar() {
    const [data, setData] = useState(initialState);

    const obtenerCarritos = async () => {
      fetch("http://localhost:8080/carrito/")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
        });
    };

  return (
    <div className="container">
      {data ? (
        <div className="row">
          <div className="col-xs-12">
            <div className="table-responsive">
              <button
                className="btn btn-secondary mb-2"
                onClick={obtenerCarritos}
              >
                Actualizar
              </button>
              <table className="table table-striped">
                <thead colspan="3">
                  <td>ID</td>
                  <td>Fecha</td>
                  <td>Cliente</td>
                  <td>Nombre Empleado</td>
                  <td>Productos Comprados</td>
                  <td>Precio Total</td>
                </thead>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.fecha}</td>
                    <td><table className="table table-striped">
                        <thead colspan="3">
                          <td>CI</td>
                          <td>Nombre</td>
                          <td>Celular</td>
                        </thead>
                          <tr>
                            <td>{item.cliente.documento}</td>
                            <td>{item.cliente.nombre}</td>
                            <td>{item.cliente.celular}</td>
                          </tr>
                      </table></td>
                    <td>{item.nombreEmpleado}</td>
                    <td>
                      <table className="table table-striped">
                        <thead colspan="3">
                          <td>ID</td>
                          <td>Nombre</td>
                          <td>Descripcion</td>
                          <td>Precio</td>
                        </thead>
                        {item.productosComprados.map((p) => (
                          <tr>
                            <td>{p.id}</td>
                            <td>{p.nombre}</td>
                            <td>{p.descripcion}</td>
                            <td>{p.precio}</td>
                          </tr>
                        ))}
                      </table>
                    </td>
                    <td>{item.precioTotalAPagar}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      ) : (
        <button className="btn btn-secondary mb-2" onClick={obtenerCarritos}>
          Actualizar
        </button>
      )}
    </div>
  );
}

export default Facturar;
