import React from "react";

import AdminView from "../components/AdminView";
import VendedorView from "../components/VendedorView";
import firebaseApp from "../firebase/credentials.js";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);

function Dashboard({ user }) {
  return (
    <div>
     <div className="title-saludo" >
      {user.rol === "admin" ? <AdminView /> : <VendedorView />}
      {console.log(user.rol)}
     </div>
    </div>
  );
}

export default Dashboard;