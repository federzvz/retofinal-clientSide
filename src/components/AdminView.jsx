import React from "react";
import TablaProductos from "./TablaProductos";

function AdminView() {
  return (
    <>
      <div>
      <h1 className="shadow-sm mt-5 p-3 text-center rounded">
          Admin Dashboard
      </h1>
        <TablaProductos/>
      </div>
    </>
  );
}

export default AdminView;
