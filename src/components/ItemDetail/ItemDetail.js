import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Botones from "../ItemCount/Botones";
import { useState } from "react";
import "./itemsDetail.css";
import { useAlert } from "../../Alerta/AlertContext";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

const Detalle = ({ id, stock, img, name, detail, price, quantity }) => {
  const [quantityToAdd, setQuantityToAdd] = useState(0);

  const navigate = useNavigate();

  const { user } = useAuth();
  const { setAlert } = useAlert();
  const { addItem, getProductQuantity } = useCart();

  const prodQuantity = getProductQuantity(id);

  const handleOnAdd = (quantity) => {
    setQuantityToAdd(quantity);

    addItem({ id, name, price, quantity });
    setAlert(`Se agego ${name} correctamente. ${quantity} unidade(s)`);
  };

  // const productAddedQuantity = getProductQuantity(id)

  return (
    <div className="cardDetailContainer">
      <div className="cardDetalladoItem">
        <img className="imgDetail" src={img} alt=".." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text-detail">{detail}</p>
          <div className="card-important">
            <h3>${price}</h3>
            <p>Stock({stock})</p>
            <div>
              {!user ? (
                <Button variant="primary" className="btnLogin"
                  size="md"
                  backgroundColor="#eeeeee"
                  onClick={() => navigate("/login")}
                >
                  Login and buy
                </Button>
              ) : quantityToAdd > 0 ? (
                <h2>
                  You added {quantity} {name}
                </h2>
              ) : stock > 0 ? (
                <Botones
                  initial={prodQuantity}
                  stock={stock}
                  handleOnAdd={handleOnAdd}
                />
              ) : (
                <p fontWeight={400} fontSize={"2xl"}>
                  Out of stock{" "}
                </p>
              )}
            <Link to="/" className="btn btn-primary">
              Voler
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Detalle;
