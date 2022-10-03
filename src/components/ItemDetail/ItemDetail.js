import { Link } from "react-router-dom"
import Botones from "../ItemCount/Botones"
import './itemsDetail.css'

const Detalle = ({product}) => {
    return (
        <div>
            <div className="cardDetail">
                <div className="card">
                    <img className="imgDetail" src={product.img} alt=".."/>
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.detail}</p>
                        <h3>{product.price}</h3>
                        <div>
                        <div>
                            <Botones />
                        </div>
                        <div>
                            <button>Comprar</button>
                        </div>
                        </div>
                        <Link to='/' className="btn btn-primary">Voler</Link>
                    </div>
                    </div>
            </div>
        
        </div>
)}

export default Detalle