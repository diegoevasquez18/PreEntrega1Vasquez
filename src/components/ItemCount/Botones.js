import React from "react";
import Button from 'react-bootstrap/Button';
import BotonAgregar from "../ItemCount/ItemCount";
import Contador from "../ItemCount/Contador";
import { useState } from "react";
import './botones.css'


const Botones = ({stock = 0 , initial = 1, handleOnAdd}) => {

    const [numContador, setNumContador] = useState (initial); 

    const agregar = () => {
        if(numContador < stock){
        setNumContador( numContador + 1);
    }}
    const retirar = () => {
        if(numContador !== initial){
        setNumContador (numContador - 1);
    }}

    return(
        <div className="botonesItems">
        <BotonAgregar 
        texto="-"
        botonDeClick={false}
        manejarClick={retirar}
        />
        <Contador  onAdd={numContador} />
        <BotonAgregar 
        texto="+" 
        botonDeClick={true}
        manejarClick={agregar}/>
        <div className="comprar">
        <Button variant="success" onClick={() => handleOnAdd(numContador)}>Comprar</Button>
        </div>
        </div>
    )
}

export default Botones