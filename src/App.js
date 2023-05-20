import styles from './App.module.css';
import Home from './pages/Home/Home';
import FullProductCard from './components/FullProductCard/FullProductCard';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products/Products';
import { useEffect, useState } from 'react';
function App() {
  const [token, setToken] = useState();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    if (
      localStorage.getItem('token') &&
      localStorage.getItem('token') !== 'null' &&
      localStorage.getItem('token').length > 1
    ) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [token]);

  console.log(isLogged);
  console.log(token);
  return (
    <>
      <Navbar isLogged={isLogged} />

      <div className={styles.main}>
        {isLogged && <Dashboard />}
        <Routes>
          <Route path='/' element={isLogged ? <Home /> : <Login />} />
          <Route path='/login' element={isLogged ? <Home /> : <Login />} />
          <Route
            path='/register'
            element={isLogged ? <Register /> : <Login />}
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
        </Routes>
      </div>
    </>
  );
}

export default App;
