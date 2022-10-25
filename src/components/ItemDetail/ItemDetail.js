import { Link } from "react-router-dom"
import Botones from "../ItemCount/Botones"
import { useState, useContext } from "react"
import './itemsDetail.css'
import { useCartContext } from "../../context/CartContext"
import { AlertContext } from "../../Alerta/AlertContext"

const Detalle = ({id, stock, img, name, detail, price, quantity}) => {

    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem } = useCartContext()
    const { setAlert } = useContext (AlertContext) 

    const handleOnAdd = (quantity) => {

        setQuantityToAdd(quantity)

        const productToAdd ={
            id, name, price, quantity
        }
        addItem(productToAdd)
        setAlert(`Se agego ${name} correctamente. ${quantity} unidade(s)`)
        
 }  

   // const productAddedQuantity = getProductQuantity(id)

    return (
            <div className="cardDetail">
                <div className="cardDetallado">
                    <img className="imgDetail" src={img} alt=".."/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{detail}</p>
                        <h3>${price}</h3>
                        <div>
                        <div>
                            <Botones handleOnAdd={handleOnAdd} stock={stock} quantity={quantity} />
                        </div>
                        </div>
                        <Link to='/' className="btn btn-primary">Voler</Link>
                    </div>
                    </div>
            </div>
)}

export default Detalle