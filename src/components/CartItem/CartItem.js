import { useCartContext } from "../../context/CartContext"



const CartItem = ({ product }) =>{
    const { removeItem } = useCartContext()

    return(
        <article>
            <header>
                <h2>
                    {product.name}
                </h2>
            </header>
            <section>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio x unidad: ${product.price}</p>
            </section>
            <footer>
                <p>Subtotal: ${product.price * product.quantity}</p>
                <button onClick={()=> removeItem(product.id)}>X</button>
            </footer>
        </article>

    )
}

export default CartItem