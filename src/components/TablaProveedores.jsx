import React, {useState } from "react";

function TablaProveedores() {
  const [data, setData] = useState(null);

  const obtenerProveedores = async () => {
    fetch("https://ferreteria-sofka.herokuapp.com/proveedor/")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  obtenerProveedores();

  return (
    <div>
      {data ? (
        <div className="container">
          <button className="btn btn-secondary mb-2" onClick={obtenerProveedores}>Actualizar</button>
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
        <button className="btn btn-secondary mb-2" onClick={obtenerProveedores}>Actualizar</button>
      )}
    </div>
  );
}

export default TablaProveedores;
