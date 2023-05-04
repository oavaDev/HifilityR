import styles from './App.module.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <Dashboard />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
