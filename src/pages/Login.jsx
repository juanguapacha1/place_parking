import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Boton from '../components/Boton';
import { useNavigate } from 'react-router-dom';
import { alertaError, alertaRedireccion, generarToken } from '../helpers/funciones';

let urlUsuarios = "https://back-json-fkj4.onrender.com/usuarios";

const Login = () => {
  const [getName, setName] = useState("");
  const [getPassword, setPassword] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const redireccion = useNavigate();

  useEffect(() => {
    fetch(urlUsuarios)
      .then(response => {
        if (!response.ok) {
          throw new Error("Error al obtener usuarios");
        }
        return response.json();
      })
      .then(data => setUsuarios(data))
      .catch(error => console.error("Error en fetch:", error));
  }, []);

  function buscarUsuario() {
    const auth = usuarios.find(
      (item) => item.usuario === getName && item.password === getPassword
    );

    if (auth) {
      localStorage.setItem("usuario", auth.nombre);
      console.log("Usuario autenticado:", auth);
    }

    return auth;
  }

  function iniciarSesion() {
    console.log("Login.jsx: Iniciando sesión..."); // <--- AÑADE ESTE LOG
    const usuario = buscarUsuario();

    if (usuario) {
        console.log("Login.jsx: Usuario autenticado, procediendo a generar token."); // <--- AÑADE ESTE LOG
        const tokenGenerado = generarToken();
        localStorage.setItem("token", tokenGenerado); // Guardar token ANTES de redirigir
        console.log("Login.jsx: Token guardado en localStorage:", tokenGenerado); // <--- AÑADE ESTE LOG
        console.log("Login.jsx: Llamando a alertaRedireccion con ruta: /home"); // <--- AÑADE ESTE LOG
        // Pasamos 'redireccion' que es el hook useNavigate
        alertaRedireccion(redireccion, "/home", `Bienvenido ${usuario.nombre || 'a la aplicación'}`);
    } else {
        console.log("Login.jsx: Autenticación fallida."); // <--- AÑADE ESTE LOG
        alertaError("Error de credenciales");
    }
}


  return (
    <StyledWrapper>
      <div className="container">
        <div className="heading">Sign In</div>
        <form className="form">
          <input
            onChange={(e) => setName(e.target.value)}
            required
            className="input"
            id="email"
            placeholder="E-mail"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input"
            type="password"
            id="password"
            placeholder="Password"
          />
          <Boton type="button" onClick={iniciarSesion} text="Sign In" />
        </form>
        <span className="agreement">
          <a href="#">Learn user licence agreement</a>
        </span>
      </div>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  .container {
    max-width: 350px;
    background: #F8F9FD;
    background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(244, 247, 251) 100%);
    border-radius: 40px;
    padding: 25px 35px;
    border: 5px solid rgb(255, 255, 255);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 30px 30px -20px;
    margin: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .heading {
    text-align: center;
    font-weight: 900;
    font-size: 30px;
    color: #000000;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form .input {
    width: 90%;
    background: white;
    border: none;
    padding: 15px 20px;
    border-radius: 20px;
    margin-top: 15px;
    box-shadow: #cff0ff 0px 10px 10px -5px;
    border-inline: 2px solid transparent;
  }

  .form .input::-moz-placeholder {
    color: rgb(170, 170, 170);
  }

  .form .input::placeholder {
    color: rgb(170, 170, 170);
  }

  .form .input:focus {
    outline: none;
    border-inline: 2px solid #12B1D1;
  }

  .form .forgot-password {
    display: block;
    margin-top: 10px;
    margin-left: 10px;
  }

  .form .forgot-password a {
    font-size: 11px;
    color: #0099ff;
    text-decoration: none;
  }

  .form .login-button {
    display: block;
    width: 100%;
    font-weight: bold;
    background: linear-gradient(45deg, rgb(16, 137, 211) 0%, rgb(18, 177, 209) 100%);
    color: white;
    padding-block: 15px;
    margin: 20px auto;
    border-radius: 20px;
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 20px 10px -15px;
    border: none;
    transition: all 0.2s ease-in-out;
  }

  .form .login-button:hover {
    transform: scale(1.03);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 23px 10px -20px;
  }

  .form .login-button:active {
    transform: scale(0.95);
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 15px 10px -10px;
  }

  .social-account-container {
    margin-top: 25px;
  }

  .social-account-container .title {
    display: block;
    text-align: center;
    font-size: 10px;
    color: rgb(170, 170, 170);
  }

  .social-account-container .social-accounts {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 5px;
  }

  .social-account-container .social-accounts .social-button {
    background: linear-gradient(45deg, rgb(0, 0, 0) 0%, rgb(112, 112, 112) 100%);
    border: 5px solid white;
    padding: 5px;
    border-radius: 50%;
    width: 40px;
    aspect-ratio: 1;
    display: grid;
    place-content: center;
    box-shadow: rgba(133, 189, 215, 0.8784313725) 0px 12px 10px -8px;
    transition: all 0.2s ease-in-out;
  }

  .social-account-container .social-accounts .social-button .svg {
    fill: white;
    margin: auto;
  }

  .social-account-container .social-accounts .social-button:hover {
    transform: scale(1.2);
  }

  .social-account-container .social-accounts .social-button:active {
    transform: scale(0.9);
  }

  .agreement {
    display: block;
    text-align: center;
    margin-top: 15px;
  }

  .agreement a {
    text-decoration: none;
    color: #0099ff;
    font-size: 9px;
  }`;



export default Login;