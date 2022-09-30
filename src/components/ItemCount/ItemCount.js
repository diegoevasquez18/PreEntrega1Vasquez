import React from "react";

const BotonAgregar = ({ texto, botonDeClick, manejarClick}) => {
    
    return <button className={ botonDeClick ? 'boton-sumar' : 'boton-restar' }
                    onClick={ manejarClick }>
                    {texto}
           </button>
}

export default BotonAgregar