import { useContext } from "react"
import { CartContext } from "../../context/CartContext"



const CartItem = ({id, name, quantity, price}) =>{
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) =>{
        removeItem(id)
    }

   // const handleOnAdd = (quantity) =>{

     //   const productToAdd ={
       //     id, name, price, quantity
      //  }

      //  addItem(productToAdd)
     //   setMessage('se actualizo producto')
 //   }

    return(
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <section>
                <p>Cantidad: {quantity}</p>
                <p>Precio x unidad: ${price}</p>
            </section>
            <footer>
                <p>Subtotal: ${price * quantity}</p>
                <button onClick={()=> handleRemove(id)}>X</button>
            </footer>
        </article>

    )
}

export default CartItem