import { Button } from "bootstrap";
import React, { useState, initialState } from "react";
import { FormLabel } from "react-bootstrap";

function TablaProductos() {
  const [data, setData] = useState(initialState);

  const obtenerProductos = async () => {
    fetch("http://localhost:8080/producto/")
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
          <button className="btn btn-success" onClick={obtenerProductos}>Actualizar Productos</button>
          <table className="table table-striped">
            <thead>
              <td>ID</td>
              <td>Nombre</td>
              <td>Descripcion</td>
              <td>Precio</td>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.nombre}</td>
                  <td>{item.descripcion}</td>
                  <td>{item.precio}</td>
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

export default TablaProductos;

/*

<div>
        <ul>
          {data.map((item) => (
            <li>{item.id}</li>
          ))}
        </ul>
      </div>

*/
