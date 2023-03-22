import React, { useState ,useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import jobadda from '../images/joblogo.png'
import axios from 'axios'
const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('authToken'); // get the token from local storage
        if (token) {
          setIsLoggedIn(true); // set the state to indicate that the user is logged in
          console.log("user Already log in")
        }
      }, []);
    
    //   if (!isLoggedIn) {
    //     return <p>Please log in to see this component.</p>; // show a message if the user is not logged in
    //   }



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
        axios.post('http://localhost:5000/api/user/login', fromData)
            .then((res) => {
                console.log(res.data);
                localStorage.setItem('authToken',res.data.token);
                alert("login succfully")
              
                // setIsSubmitted(true);
                // Handle succesfully
            })
            .catch((e) => {
                console.log(e);
                // handle error
            })
    }

    return (
        <>

            <div className="relative h-full flex min-h-full justify-center md:px-12 lg:px-0">
                <div className="relative z-10 h-[100vh] flex flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28">
                    <div className="mx-auto  w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
                        <div className="flex flex-col">
                            <a aria-label="Home" className='flex items-center bg-emerald-600 px-2' href="/">

                                <svg aria-hidden="true" viewBox="0 0 109 40" className="h-10 w-auto">
                                    <path fillRule="evenodd" clip-rule="evenodd" d="M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Zm20 16c-7.264 0-13.321-5.163-14.704-12.02C4.97 22.358 6.343 21 8 21h24c1.657 0 3.031 1.357 2.704 2.98C33.32 30.838 27.264 36 20 36Z" fill="#fff">
                                    </path>
                                </svg>
                                <img src={jobadda} className="h-14 w-50 rounded-sm" alt="" />
                            </a>

                            <div className="mt-20">
                                <h2 className="text-lg font-semibold text-gray-900">Sign in to your account</h2>
                                <p className="mt-2 text-sm text-gray-700">Don’t have an account?
                                    <Link className="font-medium  text-emerald-600 hover:underline" to="/register">
                                        Sign up</Link> for a free trial.</p>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-y-8">
                            <div className="">
                                <label for="email" className="mb-3 block text-sm font-medium text-gray-700">Email address</label>
                                <input id="email" onChange={handleInputChange} type="email" name="email" autoComplete="email" required="" className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-emerald-500 sm:text-sm" />
                            </div>
                            <div className="">
                                <label for="password" className="mb-3 block text-sm font-medium text-gray-700">Password</label>
                                <input id="password" onChange={handleInputChange} type="password" name="password" autoComplete="current-password" required="" className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-emerald-500 sm:text-sm" />
                            </div>
                            <div>
                                <button className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-emerald-600 text-white  hover:text-slate-100 hover:bg-emerald-500 active:bg-emerald-800 active:text-emerald-100 focus-visible:outline-emerald-600 w-full" type="submit">
                                    <span>Sign in <span aria-hidden="true">→</span></span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="hidden sm:contents lg:relative lg:block bg-gradient-to-tr  from-slate-600 to-emerald-500 lg:flex-1">

                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Login