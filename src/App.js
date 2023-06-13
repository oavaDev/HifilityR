import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useJwt } from 'react-jwt';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import styles from './App.module.css';
import FullProductCard from './components/FullProductCard/FullProductCard';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Register from './pages/Register/Register';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';
import Orders from './pages/orders/Orders';
import { selectAllIds } from './store/slices/orderSlice';
import { useSelector } from 'react-redux';
function App() {
  const [token, setToken] = useState();
  const { decodedToken, isExpired } = useJwt(token);
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    setToken(localStorage.getItem('token'));
    if (
      localStorage.getItem('token') &&
      localStorage.getItem('token') !== 'null' &&
      localStorage.getItem('token').length > 1
    ) {
      setToken(localStorage.getItem('token'));
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [token]);
  const location = useLocation().pathname;
  return (
    <>
      <Navbar islogged={isLogged} location={location} />

      <div className={styles.main}>
        {isLogged && <Dashboard user={decodedToken} />}
        <Routes>
          <Route path='/' element={isLogged ? <Home /> : <Login />} />
          <Route path='/login' element={isLogged ? <Home /> : <Login />} />
          <Route
            path='/register'
            element={isLogged ? <Home /> : <Register />}
          />
          <Route
            path='/products'
            element={isLogged ? <Products token={token && token} /> : <Login />}
          />
          <Route
            path='/products/:id'
            element={
              isLogged ? <FullProductCard token={token && token} /> : <Login />
            }
          />
          <Route
            path='/cart'
            element={
              isLogged ? (
                <Cart
                  user={decodedToken && decodedToken}
                  token={token && token}
                />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path='/orders'
            element={isLogged ? <Orders token={token && token} /> : <Login />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
