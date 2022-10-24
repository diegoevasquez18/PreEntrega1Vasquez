import React, { useContext } from 'react';
import './cartwidget.css'
import { CartContext } from '../../context/CartContext';
import Cart from '../Cart/Cart'

const CartWidget = () => {

  const { totalQuantity } = useContext (CartContext)
  return (
    <div className="cart-widget">
      <div className="qty-display">{totalQuantity}</div>
      <Cart />
    </div>
  );
};
  

export default CartWidget;
