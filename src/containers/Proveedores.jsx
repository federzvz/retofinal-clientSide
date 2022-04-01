import React from "react";
import TablaProveedores from "../components/TablaProveedores";
import { getAuth, signOut } from "firebase/auth";
import firebaseApp from "../firebase/credentials.js";
const auth = getAuth(firebaseApp);

function Proveedores({ user })  {
  return (
    <>
      <div>
        <h1 className="shadow-sm mt-5 p-3 text-center rounded">
          Lista de Proveedores
        </h1>
        <TablaProveedores/>
      </div>
    </>
  );
}

export default Proveedores;
