import './cart.css'
import { useState } from 'react'
import CartItem from '../CartItem/CartItem'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { useOrders } from "../../services/firebase/order"

    const Cart = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const{ cart, totaly, removeItem, clearCart } = useCartContext()

    const { createOrder } = useOrders()

    const handleCreateOrder = () => {
        setLoading(true)

        createOrder().then(response => {
            if(response.result === 'orderCreated') {
                removeItem()
                clearCart()
                setOrderId(response.id)
            }
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }
    
    if(cart.length === 0){
        return(
            <>
                <p>No hay productos</p>
                <Link to='/'>Hacer Compras</Link>
            </>     
        )}
    return(
        <div>
            {
                cart.map(product => <CartItem key={product.id} product={product}/>)
            }
            <p>Total: ${totaly}</p>
            <button onClick={clearCart}>Limpiar carrito</button>
            <button onClick={handleCreateOrder}>Finalizar compra</button>
        </div>
    )
}
export default Cart