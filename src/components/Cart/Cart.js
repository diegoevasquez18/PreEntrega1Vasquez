import './cart.css'

const Cart = ({name, price, products}) => {
    return(
        <div className="container">
        <h3>{name}</h3>
        <p>${price}</p>
        {products ? 
        (
            <button className="btn" onClick={() => console.log('hola')}>Agregar</button>
        ) : 
        (
            <button className="btn del" onClick={() => console.log('chau')}>Eliminar</button>
        )
        }
    </div>
    )

}

export default Cart