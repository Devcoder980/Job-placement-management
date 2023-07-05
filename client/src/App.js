/**
 * The App function is the main component of a React application that sets up the routing and renders
 * different components based on the current URL path.
 * @returns The App component is returning a JSX element that contains the BrowserRouter component from
 * the react-router-dom library. Inside the BrowserRouter component, there is a Routes component that
 * defines the different routes of the application. The routes are defined using the Route component,
 * which specifies the path and the component to render for each route. The Navbar component is
 * rendered for all routes, and different components are rendered based on the path.
 */

import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import Login from './Clinet/Login';
import Register from './Clinet/Register';
import ContactUs from './component/ContactUs';
import Carrer from './component/Carrer';
import AboutUs from './component/AboutUs';

import UserDashboard from './Clinet/UserDashboard';
import ErrorPages from './component/ErrorPages';
import ApplyForm from './Clinet/ApplyForm';
import PostJob from './component/PostJob';
import EmployerRegister from './Employer/EmployerRegister';
import EmployerLogin from './Employer/EmployeLogin';
import EmployerDashboard from './Employer/EmployerDashboard'
import JobSearch from './component/JobSearch';
import ApplyJobThanks from './Clinet/ApplyJobThanks'
import JobPosts from './component/JobPosts';
function App() {
  // const [themes, settheme] = useState(styles.backgroundTheme);
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<NavbarWithCondition />}  >
            <Route index element={<Hero />} />
            <Route path="jobs" element={<JobSearch />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path='carrers' element={<Carrer />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="/*" element={<ErrorPages />} />
            <Route path='/user' element={<UserDashboard />} />
            <Route path='/apply' element={<ApplyForm />} />
            <Route path='/dashboard' element={<UserDashboard />} />
            <Route path='/post-job' element={<PostJob />} />
            <Route path='/employer/dashboard' element={<EmployerDashboard />} />
            <Route path='/employer/jobposts' element={<JobPosts />} />
            <Route path='/ApplyThankyou' element={<ApplyJobThanks />} />
          </Route>
          <Route path='/'>
            <Route path='login' element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path='/' element={<Navbar />} >
            <Route path='/employer/post-job' element={<PostJob />} />
            <Route path='/employer/register' element={<EmployerRegister />} />
            <Route path='/employer/log-in' element={<EmployerLogin />} />

          </Route>
        </Routes>


      </BrowserRouter>

    </>


  );
}
const NavbarWithCondition = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isDashboardPage = location.pathname === '/dashboard';

  if (isLoginPage || isDashboardPage) {
    return <UserDashboard />; // Return null to hide the navbar on login and dashboard pages
  }

  return <Navbar />;
};


export default App;
