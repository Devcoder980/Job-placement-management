
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Register from './component/Register';
import Jobs from './component/Jobs';
import ContactUs from './component/ContactUs';
import Carrer from './component/Carrer';
import AboutUs from './component/AboutUs';

import UserDashboard from './component/UserDashboard';
function App() {
  // const [themes, settheme] = useState(styles.backgroundTheme);
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/'  element={<Navbar/>}  >
            <Route index  element={<Hero />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path='carrers' element={<Carrer />} />
            <Route path="aboutus"  element={<AboutUs />} />
          </Route>
          
          <Route path='/'>
            <Route path='login' element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path='/user' element={<UserDashboard/>}  />
          </Route>
          
       
        </Routes>

      </BrowserRouter>
      
    </>


  );
}

export default App;
