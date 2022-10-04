import React from "react";
import BotonAgregar from "../ItemCount/ItemCount";
import Contador from "../ItemCount/Contador";
import { useState } from "react";
import './botones.css'


const Botones = () => {

    const [numContador, setNumContador] = useState (0); 

    const agregar = () => {
        setNumContador( numContador + 1);
    }
    const retirar = () => {
        setNumContador (numContador - 1);
    }
    return(
        <div className="botonesItems">
        <BotonAgregar 
        texto="-"
        botonDeClick={false}
        manejarClick={retirar}
        />
        <Contador  numContador={numContador}/>
        <BotonAgregar 
        texto="+" 
        botonDeClick={true}
        manejarClick={agregar}/>
        </div>
    )
}

export default Botones