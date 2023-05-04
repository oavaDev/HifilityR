import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar />
      <div style={{display:"flex"}}>
      <div style={{width: "6rem", height:"100vh", backgroundColor : "red"}}>producto</div>
      <div></div>
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
