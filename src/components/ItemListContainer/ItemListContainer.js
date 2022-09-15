import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './itemlistcontainer.css';

const Productos = () => {
    return(
        <div className='container'>
            <h2 className='subTitle'>
                Aqui podra seleccionar los productos que desee.
            </h2>
            <div className='cartWidget'>
                <CartWidget/>
            </div>
            </div>
    )
}

export default Productos