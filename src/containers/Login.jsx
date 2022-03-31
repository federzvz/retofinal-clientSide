import React, { useState } from "react";
import firebaseApp from "../firebase/credentials.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, collection, setDoc } from "firebase/firestore";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
const auth = getAuth(firebaseApp);

function Login() {
  const firestore = getFirestore(firebaseApp);
  const [isRegistrando, setIsRegistrando] = useState(false);

  async function registrarUsuario(email, password, rol) {
    const infoUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });

    console.log(infoUsuario.user.uid);
    const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
    setDoc(docuRef, { correo: email, rol: rol });
  }

  function submitHandler(e) {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const rol = e.target.elements.rol.value;

    if (password.length < 6) {
      alert("La contraseña no puede ser menor a 6");
      return false;
    }

    console.log("submit", email, password, rol);

    if (isRegistrando) {
      // registrar
      registrarUsuario(email, password, rol);
    } else {
      // login
      signInWithEmailAndPassword(auth, email, password);
    }
  }

  return (
    <>
      <Container>
        <h1 className="shadow-sm mt-5 p-3 text-center rounded">
          {isRegistrando ? "Registrarse" : "Iniciar sesión"}
        </h1>
        <Row className="mt-5">
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form onSubmit={submitHandler}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  placeholder="Ingrese correo elecronico"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  placeholder="Contraseña"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Tipo de usuario</Form.Label>
                <Form.Select aria-label="Default select example" id="rol">
                  <option value="admin">Administrador</option>
                  <option value="user">Usuario</option>
                </Form.Select>
              </Form.Group>

              
              <Form.Group className="mt-4">
                <Button variant="primary" type="submit">
                  {isRegistrando ? "Registrar" : "Iniciar sesión"}
                </Button>
              </Form.Group>
            </Form>

            <Form.Group className="mt-4">
                <Button variant="dark" onClick={() => setIsRegistrando(!isRegistrando)}>
                {isRegistrando ? "Ya tengo una cuenta" : "Quiero registrarme"}
                </Button>
              </Form.Group>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;

/*
<div className="hero" >
     <div className="div-logo">

     </div>
      
      <h1 className="title" >{isRegistrando ? "Regístrate" : "Inicia sesión"}</h1>

      <form className="form-login" onSubmit={submitHandler}>
        <label className="from-login-label" >
          Correo electrónico:
          <input type="email" id="email" />
        </label>

        <label>
          Contraseña:
          <input type="password" id="password" />
        </label>

        <label>
          Rol:
          <select id="rol">
            <option value="admin">Administrador</option>
            <option value="user">Usuario</option>
          </select>
        </label>

        <input
          type="submit"
          value={isRegistrando ? "Registrar" : "Iniciar sesión"}
        />
      </form>

      <button className="form-login" onClick={() => setIsRegistrando(!isRegistrando)}>
        {isRegistrando ? "Ya tengo una cuenta" : "Quiero registrarme"}
      </button>
    </div>
*/


/*
<Form.Group className="mt-4">
                <Button variant="primary" type="submit">
                  {isRegistrando ? "Registrar" : "Iniciar sesión"}
                </Button>
              </Form.Group>
*/
