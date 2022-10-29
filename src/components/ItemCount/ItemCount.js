import React from "react";
import Button from "react-bootstrap/Button";
import "./itemCount.css";

const BotonAgregar = ({ texto, botonDeClick, manejarClick }) => {
  return (
    <Button
      className={botonDeClick ? "boton-sumar" : "boton-restar"}
      onClick={manejarClick}
    >
      {texto}
    </Button>
  );
};

export default BotonAgregar;
