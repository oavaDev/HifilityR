import React from 'react';
import styles from './Cart.module.css';

import CartPreviewCard from '../../components/CartPreviewCard/CartPreviewCard';

const Cart = () => {
  return (
    <div className={styles.cart}>
      <CartPreviewCard />
    </div>
  );
};

export default Cart;
