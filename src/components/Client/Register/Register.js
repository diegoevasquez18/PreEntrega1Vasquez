import React, { useState } from "react";

import { Button, Input } from "@chakra-ui/react";

import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import "./register.css";

export function Form() {
  const { singUp } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const [user, setUser] = useState({
    email: "",
    name: "",
    address: "",
    phone: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await singUp(user.email, user.password);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/internal-error") {
        setError("Correo no existe");
      }
    }
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
          <p>User</p>
          <Input
            type="text"
            name="name"
            placeholder="Type here..."
            onChange={handleChange}
          />
          <p>Address</p>
          <Input
            type="text"
            name="address"
            placeholder="Type here..."
            onChange={handleChange}
          />
          <p>Phone</p>
          <Input
            type="numbre"
            name="phone"
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
        Save
      </Button>
    </>
  );
}
