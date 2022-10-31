import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import './login.css'
import { Button, Input } from "@chakra-ui/react";
 
import { useAuth } from "../../../context/AuthContext";


export function Login() {
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/internal-error") {
        setError("Correo no valido");
      }
    }
  };
  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
    <div className="textRegis">
      <h2>INGRESA CON EMAIL O CON TU CUENTA DE GOOGLE</h2>
      </div>
      <div className="formContainer">
        {error && <p>{error}</p>}
        <form  className="form" id="my-form" onSubmit={handleSubmit}>
          <p className="textForm">E-mail</p>
          <Input
            className="inputForm"
            type="text"
            name="email"
            placeholder="Type here..."
            onChange={handleChange}
          />
          <p>Password</p>
          <Input
            className="inputForm"
            type="password"
            name="password"
            placeholder="Type here..."
            onChange={handleChange}
          />
        <div className="btnLog">
        <Button  className="buttonForm" type="submit" form="my-form">Login</Button>
      <Button className="buttonForm" onClick={handleGoogleSignin}>Google</Button>
      </div>
        </form>
     </div>
      <div className="textRegis">
         <h2>NO TENES CUENTA? <NavLink to='/register'>REGISTRATE!</NavLink></h2>
     </div>
    </>
  );
}
