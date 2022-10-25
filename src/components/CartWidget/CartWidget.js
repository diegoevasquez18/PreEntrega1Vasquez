import React, { useContext } from 'react';
import './cartwidget.css'
import { useCartContext } from '../../context/CartContext';
import Icon from '../../images/icons/icon.png'

const CartWidget = () => {

  const { totalQuantity } = useCartContext ()
  return (
    <div className="cart-widget">
      <div className="qty-display">{totalQuantity}</div>
      <img src={ Icon } alt=''/>
    </div>
  );
};
  

export default CartWidget;
