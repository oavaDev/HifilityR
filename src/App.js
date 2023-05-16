import styles from './App.module.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products/Products';
function App() {
  const isLogged =
    localStorage.getItem('token') &&
    localStorage.getItem('token') !== 'null' &&
    localStorage.getItem('token').length > 1
      ? true
      : false;

  console.log(isLogged);
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
            element={isLogged ? <Products /> : <Login />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
