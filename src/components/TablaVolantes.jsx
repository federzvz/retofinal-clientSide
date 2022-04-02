import React, { useState } from 'react'

function TablaVolantes() {
    const [data, setData] = useState();

  const obtenerVolantes = async () => {
    fetch("https://ferreteria-sofka.herokuapp.com/volante/")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  obtenerVolantes();
    
  return (
    <div className="container">
      {data ? (
        <div className="row">
          <div className="col-xs-12">
            <div className="table-responsive">
              <button
                className="btn btn-secondary mb-2"
                onClick={obtenerVolantes}
              >
                Actualizar
              </button>
              <table className="table table-striped">
                <thead colspan="3">
                  <td>Nombre Proveedor</td>
                  <td>Productos a Ingresar</td>
                  <td>Fecha de Ingreso</td>
                  <td>Documento Proveedor</td>
                </thead>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.nombreProveedor}</td>
                    <td>
                    <table className="table table-striped">
                        <thead colspan="3">
                          <td>ID</td>
                          <td>Nombre</td>
                          <td>Descripcion</td>
                          <td>Precio</td>
                        </thead>
                        {item.productoListAIngresar.map((p) => (
                          <tr>
                            <td>{p.id}</td>
                            <td>{p.nombre}</td>
                            <td>{p.descripcion}</td>
                            <td>{p.precio}</td>
                          </tr>
                        ))}
                      </table>
                    </td>
                    <td>{item.fecha}</td>
                    <td>{item.documentoProveedor}</td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      ) : (
        <button className="btn btn-secondary mb-2" onClick={obtenerVolantes}>
          Actualizar
        </button>
      )}
    </div>
  );
}

export default TablaVolantes
