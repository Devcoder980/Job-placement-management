import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { registerLicense } from '@syncfusion/ej2-base';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Customers, Kanban, ColorPicker, Editor } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import NewsLetter from './pages/Newsletter';
import PostJobForm from './Forms/PostJobForm';
import AddUserForm from './Forms/AddUserForm';
import EmployerForm from './Forms/EmployerForm';
import Employer from './pages/Employer';

const App = () => {
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
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
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
                <Route path="/employer" element={<Employer/>} />
                <Route path="/employee" element={<Employees />} />
                <Route path="/subsciber" element={<NewsLetter />} />

                {/* forms  */}
                <Route path="/Postjobform" element={<PostJobForm />} />
                <Route path="/AddUserForm" element={<AddUserForm/>} />
                <Route path="/EmployerForm" element={<EmployerForm/>} />


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
    </div>
  );
};

export default App;
