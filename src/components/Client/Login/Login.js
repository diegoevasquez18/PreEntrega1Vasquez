import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    await loginWithGoogle();
    navigate("/");
  };

  return (
    <>
      <div>
        {error && <p>{error}</p>}
        <form id="my-form" onSubmit={handleSubmit}>
          <p>E-mail</p>
          <Input
            type="text"
            name="email"
            placeholder="Type here..."
            onChange={handleChange}
          />
          <p>Password</p>
          <Input
            type="password"
            name="password"
            placeholder="Type here..."
            onChange={handleChange}
          />
        </form>
      </div>
      <Button type="submit" form="my-form">
        Login
      </Button>
      <div>
        <button onClick={handleGoogleSignin}>Entra con google!</button>
      </div>
    </>
  );
}
