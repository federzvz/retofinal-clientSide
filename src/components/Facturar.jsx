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

  obtenerCarritos();

  function procesarFactura(idFactura, type) {
    if (type == 1) {
      fetch(`http://localhost:8080/carrito/${idFactura}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then(() => obtenerCarritos());
    }
    if (type == 2) {
      fetch(`http://localhost:8080/carrito/rechazar/${idFactura}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then(() => obtenerCarritos());
    }
  }

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
              <table className="table table-striped text-center">
                <thead colspan="3">
                  <td>Consecutivo</td>
                  <td>Fecha</td>
                  <td>Cliente</td>
                  <td>Nombre Empleado</td>
                  <td>Productos Comprados</td>
                  <td>Precio Total</td>
                  <td>Aceptar</td>
                  <td>Rechazar</td>
                </thead>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.fecha}</td>
                    <td>
                      <table className="table table-striped">
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
                      </table>
                    </td>
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
                    <td>
                      <button
                        className="btn btn-lg"
                        type="submit"
                        onClick={() => {
                            procesarFactura(item.id,1);
                        }}
                      >
                        Generar Factura
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-lg"
                        type="submit"
                        onClick={() => {
                            procesarFactura(item.id,2);
                        }}
                      >
                        Eliminar
                      </button>
                    </td>
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
