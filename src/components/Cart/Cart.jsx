import React from 'react';
import { useDispatch } from 'react-redux';
import { addToOrder } from '../../store/slices/orderSlice';
import styles from '../ProductCard/ProductCard.module.css';
import { Button } from '@nextui-org/react';
import CartIcon from './CartIcon/CartIcon';

const Cart = ({ data }) => {
  const dispatch = useDispatch();
  const addOrderHandler = () => {
    dispatch(addToOrder({ ...data, quantity: 1 }));
  };
  return (
    <div className={styles.cart_button}>
      <Button
        onClick={addOrderHandler}
        className={styles.cart_button_button}
        color={'black'}
        auto
        flat
      >
        <CartIcon />
      </Button>
    </div>
  );
};

export default Cart;
