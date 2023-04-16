import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import jobadda from '../images/joblogo.png'
import axios from 'axios'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import UserDashboard from './UserDashboard'
import Navbar from './Navbar'
const EmployerLogin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const history = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('authToken'); // get the token from local storage
        if (token) {
            setIsLoggedIn(true); // set the state to indicate that the user is logged in
            console.log("user Already log in")
            history('/user');
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
        axios.post('http://localhost:5000/api/employer/login', fromData)
            .then((res) => {
                console.log(res.data);
                localStorage.setItem('authTokenEmployer', res.data.token);
                alert("EmployerLogin succfully")

                setIsLoggedIn(true);
                // Handle succesfully
            })
            .catch((e) => {
                console.log(e);
                alert("Please Enter A Valid Email id or Password")
                // handle error
            })
    }

    return (
        <>
            {isLoggedIn ?
                history('/employer/dashboard')
                : (
                    <div className="relative  bg-slate-900 h-[100vh] flex min-h-full justify-center md:px-12 lg:px-0">
                        <div className="relative  rounded-md  z-10 my-10 flex flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-12">
                            <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
                                <div className="flex flex-col">
                                    <div className="mt-2">
                                        <h2 className="text-lg font-semibold text-gray-900">Sign in as Employer</h2>
                                        <p className="mt-2 text-sm text-gray-700">Don’t have an account?
                                            <Link className="font-bold text-xl px-2 text-emerald-600 hover:underline" to="/employer/register">
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
                                        <button className="group inline-flex cursor-pointer items-center justify-center rounded-full py-3 px-4 text-md font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-emerald-600 text-white  hover:text-slate-100 hover:bg-emerald-500 active:bg-emerald-800 active:text-emerald-100 focus-visible:outline-emerald-600 w-full" type="submit">
                                            <span>Sign in </span>
                                        </button>
                                    </div>
                                        <Link
                                            to="/"
                                            className=" flex  items-center justify-center  text-center bg-slate-700 text-white py-3 px-6 rounded-full hover:bg-slate-600 transition duration-300"
                                        >
                                            <span aria-hidden="true">  <BsArrowLeft /></span>
                                            <span style={{ marginLeft: "5px" }}>Go Back Home</span>
                                        </Link>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            }
            <Outlet />
        </>
    )
}

export default EmployerLogin