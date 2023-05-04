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
const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const items = [
    {
      name: 'Home',
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
      style={{
        transition: 'all .5s linear',
      }}
      className={styles.dashboard}
    >
      <div
        style={{
          width: `${open ? 'auto' : '3rem'}`,
          transition: 'all .5s linear',
        }}
        ref={ref}
        className={styles.items}
      >
        {!open ? (
          <AiFillBook
            size={25}
            onClick={() => (open === false ? setOpen(true) : setOpen(false))}
          />
        ) : (
          <BsBook
            size={25}
            onClick={() => (open === false ? setOpen(true) : setOpen(false))}
          />
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
                  style={{ display: 'flex', gap: '1rem' }}
                  key={i}
                  to={item.path}
                >
                  <div>{item.icon}</div>
                  <div>{item.name}</div>
                </Link>
              );
            })
          : items.map((item) => {
              return (
                <Link key={item.name} to={item.path}>
                  <div>{item.icon}</div>
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default Dashboard;
