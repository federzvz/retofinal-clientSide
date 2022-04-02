import React, { useState } from "react";

function TablaProductos() {

  const [data, setData] = useState();

  const obtenerProductos = async () => {
    fetch("https://ferreteria-sofka.herokuapp.com/bodega/")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  obtenerProductos();

  return (
    <div>
      {data ? (
        <div className="container">
          <h2 className="text-center rounded">Inventario de productos</h2>
          <button className="btn btn-secondary mb-2" onClick={obtenerProductos}>Actualizar</button>
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
        <button className="btn btn-secondary mb-2" onClick={obtenerProductos}>Actualizar</button>
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
