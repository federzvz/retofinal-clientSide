import React, { useState } from "react";

import Dashboard from "./containers/Dashboard";
import Header from "./components/Header";
import Login from "./containers/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import firebaseApp from "./firebase/credentials.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Register from "./containers/Register";
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

function App() {
  const [user, setUser] = useState(null);

  async function getRol(uid) {
    const docuRef = doc(firestore, `usuarios/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = docuCifrada.data().rol;
    return infoFinal;
  }

  function setUserWithFirebaseAndRol(usuarioFirebase) {
    getRol(usuarioFirebase.uid).then((rol) => {
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        rol: rol,
      };
      setUser(userData);
      console.log("userData fianl", userData);
    });
  }

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      //funcion final

      if (!user) {
        setUserWithFirebaseAndRol(usuarioFirebase);
      }
    } else {
      setUser(null);
    }
  });

  return (
    <>
      {
        <div className="app">
          <Header />

          <Router>
          <div className="container">
              <Routes>
            {user ? (
              <>
                <Route path="/" element={<Dashboard user={user} />} />
              </>
            ) : (
              <>
                <Route path="*" element={<Login />} />
              </>
            )}
              </Routes>
            </div>
          </Router>
        </div>
      }
    </>
  );
}

export default App;

/*
return <>{ 
  
    <div className="app">
      <Router>
        <Header/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
      </Router>
    </div>
  }</>;
*/

/* {user ? <Dashboard user={user} /> : <>{<Navigate to="/login" replace />}</>}*/
