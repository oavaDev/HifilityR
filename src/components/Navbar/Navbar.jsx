import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
const Navbar = () => {
  const navbar = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
  ];
  return (
    <div className={styles.navbar}>
      Hifility
      <ul className={styles.ul}>
        {navbar.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
