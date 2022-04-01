import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import { getAuth, signOut } from "firebase/auth";
import firebaseApp from "../firebase/credentials.js";
const auth = getAuth(firebaseApp);

function Header({ user }) {
  return (
    <div className="header">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Nav.Link href="/">
            <h1>Ferreteria</h1>
          </Nav.Link>
        </Navbar.Brand>
        <Nav>
          {user ? (
            <>
              <Nav.Link href="ventas">Historial Ventas</Nav.Link>
              <Nav.Link href="clientes">Clientes</Nav.Link>
              <Nav.Link href="proveedores">Proveedores</Nav.Link>
              <Nav.Link href="facturacion">Facturacion</Nav.Link>
              <Nav.Link onClick={() => signOut(auth)}>Cerar Sesion</Nav.Link>
            </>
          ) : (
            <Nav.Link href="login">Iniciar Sesión</Nav.Link>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
