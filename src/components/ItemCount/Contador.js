import React from "react";
import './contador.css'

const Contador = ({numContador}) => {
    return (
        <div className="contador">
            {numContador}
        </div>
    )
}

export default Contador