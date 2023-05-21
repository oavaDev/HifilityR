import React from 'react';

const CartInfo = ({ cartItems }) => {
  return (
    <div
      style={{
        position: 'relative',
        top: '-8px',
        left: '6px',
        backgroundColor: 'red',
        color: 'white',
        textAlign: 'center',
        fontSize: '0.8rem',
        borderRadius: '50%',
      }}
      id='dashboard__item'
    >
      {cartItems.length > 0 && cartItems.length}
    </div>
  );
};

export default CartInfo;
