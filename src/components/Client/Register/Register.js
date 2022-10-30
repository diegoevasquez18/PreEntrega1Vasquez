import React, { useState } from "react";

import { Button, Input } from "@chakra-ui/react";

import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import "./register.css";

export function Register() {

  const { signUp } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

   const handleChange = ({target: {name, value}}) =>{
    setUser({ ...user, [name]:value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="formContainerRegister"> 
        {error && <p>{error}</p>}
        <form className="form" id="my-form" onSubmit={handleSubmit}>
          <p>E-mail</p>
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
        
      <Button className="buttonForm" type="submit" form="my-form">
        Save
      </Button>
      </form>
      </div>
    </>
  );
}
