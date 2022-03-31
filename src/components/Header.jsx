import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <div className="header">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>
            <Nav.Link href="/">
              <h1>Ferreteria</h1>
            </Nav.Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="ventas">Historial Ventas</Nav.Link>
            <Nav.Link href="clientes">Clientes</Nav.Link>
            <Nav.Link href="proveedores">Proveedores</Nav.Link>
            <Nav.Link href="login">Cerar Sesion</Nav.Link>
          </Nav>
        </Navbar>
    </div>
  );
}

export default Header;
