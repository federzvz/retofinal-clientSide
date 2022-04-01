import { Button } from "bootstrap";
import React, { useState, initialState } from "react";
import { FormLabel } from "react-bootstrap";

function TablaProductos() {
  const [data, setData] = useState(initialState);

  const obtenerProductos = async () => {
    fetch("http://localhost:8080/bodega/")
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
          <h2 className="text-center rounded">Inventario de productos</h2>
          <button className="btn btn-success mb-2" onClick={obtenerProductos}>Actualizar Productos</button>
          <table className="table table-striped">
            <thead>
              <td>ID</td>
              <td>Nombre</td>
              <td>Descripcion</td>
              <td>Precio</td>
              <td>Stock</td>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.producto.nombre}</td>
                  <td>{item.producto.descripcion}</td>
                  <td>{item.producto.precio}</td>
                  <td>{item.stock}</td>
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
