import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { registerLicense } from '@syncfusion/ej2-base';
import axios from 'axios';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Customers, Kanban, ColorPicker, Editor } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import NewsLetter from './pages/Newsletter';
import PostJobForm from './Forms/PostJobForm';
import AddUserForm from './Forms/AddUserForm';
import EmployerForm from './Forms/EmployerForm';
import Employer from './pages/Employer';
import DeleteJobs from './Forms/DeleteJobs';

const App = () => {

  const [login, setlogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken'); // get the token from local storage
    if (token) {
      // set the state to indicate that the user is logged in
      console.log("user Already log in")
      setlogin(true)
    }
  }, []);
  const [fromData, setFromData] = useState({
    email: '',
    password: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFromData({ ...fromData, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/admin/login', fromData)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('authToken', res.data.token);
        alert("login succfully")
        setlogin(true);
        // Handle succesfully
      })
      .catch((e) => {
        console.log(e);
        // handle error
      })
  }



  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  registerLicense('Mgo+DSMBaFt/QHRqVVhlWFpAaV5LQmFJfFBmRGJTelZ6dV1WACFaRnZdQV1gS3pSd0ZmWnlXd3BX;Mgo+DSMBPh8sVXJ0S0J+XE9BclRGQmJAYVF2R2BJfl96cV1MYVRBJAtUQF1hSn5QdEFiWHxbc3JcTmhe;ORg4AjUWIQA/Gnt2VVhkQlFac1tJWXxId0x0RWFab19xflBOal1ZVBYiSV9jS31TdUdnWH5ddXdSRmdbUw==;MTQ1MzUxN0AzMjMwMmUzNDJlMzBlcmZaandOcUdzNDZ2K2lMNlZzTjFoVER5Z3hvdVVnd2h1cEx1N0I3RzhRPQ==;MTQ1MzUxOEAzMjMwMmUzNDJlMzBJclZSSnZGWXQ3MUtMY2lYQW1pWVA2RUNGOG9yaXdOaGZIcHIvVEI5a0lBPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFpGVmdWf1ppR2NbfE5xdV9DaFZQTGY/P1ZhSXxQdkZhXX5fc3FWQWFYVEY=;MTQ1MzUyMEAzMjMwMmUzNDJlMzBsSncxUkNZRnFUVEUycmVVT2JlRThWUjFWeHErM3hDU2JBQVFyWUEyYmJZPQ==;MTQ1MzUyMUAzMjMwMmUzNDJlMzBYbk1Sa25XNWw2MmdCNmpVRlRMUndhOTc3WitXdmE0TjU1V1VMTFZZelVnPQ==;Mgo+DSMBMAY9C3t2VVhkQlFac1tJWXxId0x0RWFab19xflBOal1ZVBYiSV9jS31TdUdnWH5ddXdSRGFUUw==;MTQ1MzUyM0AzMjMwMmUzNDJlMzBQRGFMeVNEb04wWmplVmpOTi9ZZTBDa09rY0hBdHJVd25IalhJTU5yUGJJPQ==;MTQ1MzUyNEAzMjMwMmUzNDJlMzBYamJXN2pRbnN5VHVpVXhXaDYwUFVJK3BNVXRkdTNCVTdmVXRqbE1QNEhRPQ==;MTQ1MzUyNUAzMjMwMmUzNDJlMzBsSncxUkNZRnFUVEUycmVVT2JlRThWUjFWeHErM3hDU2JBQVFyWUEyYmJZPQ==');

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      {login ?
        <BrowserRouter>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
              <TooltipComponent
                content="Settings"
                position="Top"
              >
                <button
                  type="button"
                  onClick={() => setThemeSettings(true)}
                  style={{ background: currentColor, borderRadius: '50%' }}
                  className="text-3xl cursor-pointer text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                >
                  <FiSettings />
                </button>

              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}
            <div
              className={
                activeMenu
                  ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                  : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
              }
            >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                <Navbar />
              </div>
              <div>
                {themeSettings && (<ThemeSettings />)}

                <Routes>
                  {/* dashboard  */}
                  <Route path="/" element={(<Orders />)} />
                  <Route path="/joblist" element={(<Orders />)} />

                  {/* pages  */}
                  <Route path="/jobslist" element={<Orders />} />
                  <Route path="/employer" element={<Employer />} />
                  <Route path="/employee" element={<Employees />} />
                  <Route path="/subsciber" element={<NewsLetter />} />

                  {/* forms  */}
                  <Route path="/Postjobform" element={<PostJobForm />} />
                  <Route path="/DeleteJobs" element={<DeleteJobs/>} />
                  <Route path="/AddUserForm" element={<AddUserForm />} />
                  <Route path="/EmployerForm" element={<EmployerForm />} />


                  {/* apps  */}
                  <Route path="/kanban" element={<Kanban />} />
                  <Route path="/editor" element={<Editor />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/color-picker" element={<ColorPicker />} />

                </Routes>
              </div>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
        : <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
          <div className="w-full  py-16 max-w-md p-6 space-y-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-extrabold text-center text-gray-900">Log in to your account</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="">
                <label htmlFor="email" className="mb-3 block text-sm font-medium text-gray-700">Email address</label>
                <input id="email" onChange={handleInputChange} type="email" name="email" autoComplete="email" required="" className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-emerald-500 sm:text-sm" />
              </div>
              <div className="">
                <label htmlFor="password" className="mb-3 block text-sm font-medium text-gray-700">Password</label>
                <input id="password" onChange={handleInputChange} type="password" name="password" autoComplete="current-password" required="" className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-emerald-500 sm:text-sm" />
              </div>
              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="w-full px-4 py-2  bg-slate-900 text-white bg-primary-600 rounded-md hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  );
};

export default App;
