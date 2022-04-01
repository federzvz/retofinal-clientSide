import React from "react";
import TablaVentas from "../components/TablaVentas";

function Ventas({ user }) {
  return (
    <>
      <div>
        <h1 className="shadow-sm mt-5 p-3 text-center rounded">
          Historial de Ventas
        </h1>
        <TablaVentas/>
      </div>
    </>
  );
}

export default Ventas;
