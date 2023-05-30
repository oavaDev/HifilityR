import React, { useState, useRef } from 'react';
import styles from './Dashboard.module.css';
import { Link } from 'react-router-dom';
import {
  AiOutlineHome,
  AiFillHdd,
  AiOutlineShoppingCart,
  AiFillBook,
} from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { BsHeadphones } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { itemsInCart } from '../../store/slices/orderSlice';
import CartInfo from '../Cart/CartInfo/CartInfo';
const Dashboard = () => {
  const cartItems = useSelector(itemsInCart);
  
  const [open, setOpen] = useState(false);
  const handleOpen = (id) => {
    let item = id;
    if (item === 'dashboard__item' && open) {
      setOpen(false);
    }
    if (item === 'dashboard__item' && !open) {
      setOpen(true);
    }
    if (item === 'dashboard' && !open) {
      setOpen(true);
    }
    if (item === 'dashboard' && open) {
      setOpen(false);
    }
  };

  const ref = useRef(null);
  const items = [
    {
      name: 'Inicio',
      path: '/',
      icon: <AiOutlineHome />,
    },
    {
      name: 'Productos',
      path: '/products',
      icon: <BsHeadphones />,
    },
    {
      name: 'Pedidos',
      path: '/orders',
      icon: <AiFillHdd />,
    },
    {
      name: 'Carrito',
      path: '/cart',
      icon: <AiOutlineShoppingCart />,
    },
  ];
  return (
    <div
      onClick={(e) => handleOpen(e.target.id)}
      style={{
        transition: 'all .5s linear',
      }}
      id='dashboard'
      className={styles.dashboard}
    >
      <div
        style={{
          width: `${open ? 'auto' : '3rem'}`,
          transition: 'all .5s linear',
        }}
        id='dashboard__item'
        ref={ref}
        className={styles.items}
      >
        {!open ? (
          <AiFillBook size={25} onClick={(e) => handleOpen(e.target.id)} />
        ) : (
          <BsBook size={25} onClick={(e) => handleOpen(e.target.id)} />
        )}
        {open ? (
          <div>Username</div>
        ) : (
          <div>
            <BiUser size={25} />
          </div>
        )}
        {open
          ? items.map((item, i) => {
              return (
                <Link
                  id='dashboard__item'
                  style={{ display: 'flex', gap: '1rem' }}
                  key={i}
                  to={item.path}
                >
                  <div id='dashboard__item'>{item.icon}</div>
                  <div id='dashboard__item'>{item.name}</div>
                </Link>
              );
            })
          : items.map((item) => {
              return (
                <Link id='dashboard__item' key={item.name} to={item.path}>
                  <div id='dashboard__item'>{item.icon}</div>
                  {item.name === 'Carrito' && (
                    <CartInfo cartItems={cartItems} />
                  )}
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default Dashboard;
