import "./cartwidget.css";
import Icon from "../../images/icons/icon.png";

import { useCart } from "../../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useCart();
  return (
    <div className="cart-widget">
      <div className="qty-display">{totalQuantity}</div>
      <img src={Icon} alt="" />
    </div>
  );
};

export default CartWidget;
