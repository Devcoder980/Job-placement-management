
import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Register from './component/Register';
import Footer from './component/Footer';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Navbar/>} >
            <Route index element={<Hero />} />
            <Route path='login' element={<Login />} />
            <Route path="register" element={<Register/>}/>
          </Route>

        </Routes>

      </BrowserRouter>
      <Footer />
    </>


  );
}

export default App;
