import React from "react";
import TablaProductos from "./TablaProductos";

function VendedorView() {
  return (
    <>
      <div>
      <h1 className="shadow-sm mt-5 p-3 text-center rounded">
          Client Dashboard
      </h1>
        <TablaProductos/>
      </div>
    </>
  );
}

export default VendedorView;
