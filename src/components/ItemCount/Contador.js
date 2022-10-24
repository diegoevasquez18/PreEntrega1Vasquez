import React from "react";
import './contador.css'

const Contador = ({onAdd}) => {
    return (
        <div className="contador">
            {onAdd}
        </div>
    )
}

export default Contador