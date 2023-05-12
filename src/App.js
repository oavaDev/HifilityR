import styles from './App.module.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { Route, Routes, useLocation } from 'react-router-dom';
import Products from './pages/Products/Products';
function App() {
  const location = useLocation();
  const path = location.pathname;
  console.log(path);
  return (
    <>
      <Navbar />
      <div className={styles.main}>
        {path === '/login' || path === '/register' ? null : <Dashboard />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
