import React from "react";
import Facturar from "../components/Facturar";

function Facturacion({ user }) {
  return (
    <>
      <div>
        <h1 className="shadow-sm mt-5 p-3 text-center rounded">
          Facturacion
        </h1>
        <Facturar/>
      </div>
    </>
  );
}

export default Facturacion;
