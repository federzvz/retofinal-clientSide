import React, { useState, initialState } from "react";

function TablaClientes() {

    const [data, setData] = useState(initialState);

    const obtenerProductos = async () => {
        fetch("http://localhost:8080/cliente/")
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setData(json);
        });
    };

    return (
        <div>
          {data ? (
            <div className="container">
              <button className="btn btn-success mb-2" onClick={obtenerProductos}>Actualizar Productos</button>
              <table className="table table-striped">
                <thead>
                  <td>Documento</td>
                  <td>Nombre</td>
                  <td>Celular</td>
                </thead>
                <tbody>
                  {data.map((item) => (
                    <tr key={item.id}>
                      <td>{item.documento}</td>
                      <td>{item.nombre}</td>
                      <td>{item.celular}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <ul></ul>
            </div>
          ) : (
            <button className="btn btn-success" onClick={obtenerProductos}>Actualizar Productos</button>
          )}
        </div>
      );
}

export default TablaClientes
