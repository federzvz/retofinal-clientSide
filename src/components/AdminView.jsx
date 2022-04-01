import React from "react";
import Header from "../components/Header";
import TablaProductos from "./TablaProductos";

function AdminView() {
  return (
    <>
      <div>
        <h1>AdminView</h1>
        <TablaProductos/>
      </div>
    </>
  );
}

export default AdminView;
