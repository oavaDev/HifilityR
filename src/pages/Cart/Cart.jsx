import React from 'react';
import styles from './Cart.module.css';
import CartPreviewCard from '../../components/CartPreviewCard/CartPreviewCard';

const Cart = ({ token, user }) => {
  return (
    <div className={styles.cart}>
      <CartPreviewCard token={token} user={user} />
    </div>
  );
};

export default Cart;
