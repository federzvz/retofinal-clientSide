import React from "react";
import TablaClientes from "../components/TablaClientes.jsx";

function Clientes({ user }) {
  return (
    <>
      <div>
        <h1 className="shadow-sm mt-5 p-3 text-center rounded">
          Lista de Clientes
        </h1>
        <TablaClientes />
      </div>
    </>
  );
}

export default Clientes;
