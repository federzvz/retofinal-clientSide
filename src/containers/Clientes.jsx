import React from "react";
import firebaseApp from "../firebase/credentials.js";
import { getAuth, signOut } from "firebase/auth";
import TablaClientes from "../components/TablaClientes.jsx";
const auth = getAuth(firebaseApp);

function Clientes({ user }) {
  return (
    <>
      <div>
      <h1 className="shadow-sm mt-5 p-3 text-center rounded">
          Lista de Clientes
      </h1>
        <TablaClientes/>
      </div>
    </>
  );
}

export default Clientes;
