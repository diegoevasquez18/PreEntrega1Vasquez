import React from 'react';
import Icon from '../../images/icons/icon.png'
import './cartwidget.css'

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src={ Icon } size="2x" alt=''/>
      <div className="qty-display">0</div>
    </div>
  );
};

export default CartWidget;
