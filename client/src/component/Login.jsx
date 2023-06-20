import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import jobadda from '../images/joblogo.png'
import axios from 'axios'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('authToken'); // get the token from local storage
        if (token) {
            setIsLoggedIn(true); // set the state to indicate that the user is logged in
            console.log("user Already log in")
            navigate('/user');
        }
    }, [navigate]);
    const [fromData, setFromData] = useState({
        email: '',
        password: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFromData({ ...fromData, [name]: value });
    }

    const validateForm = (data) => {
        const errors = {};
        if (!data.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
        }
        if (!data.password) {
            errors.password = 'Password is required';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm(fromData);
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }
        axios.post('https://jobmanagementw.onrender.com/api/user/login', fromData)
            .then((res) => {
                console.log(res.data);
                localStorage.setItem('authToken', res.data.token);
                alert("login succfully")
                setIsLoggedIn(true);
                // Handle succesfully
            })
            .catch((e) => {
                console.log(e);
                alert("Please Enter Valid Email id or Password");
                // handle error
            })
    }
    return (
        <>
            {isLoggedIn ?
                navigate('/dashboard')
                : (
                    <div className="relative h-full flex min-h-full  justify-center md:px-12 lg:px-0">
                        <div className="relative z-10 h-[100vh] flex flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28">
                            <div className="mx-auto  w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
                                <div className="flex flex-col">
                                    <a aria-label="Home" className='flex items-center bg-blue-600 px-2' href="/">
                                        <svg aria-hidden="true" viewBox="0 0 109 40" className="h-10 w-auto">
                                            <path fillRule="evenodd" clip-rule="evenodd" d="M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Zm20 16c-7.264 0-13.321-5.163-14.704-12.02C4.97 22.358 6.343 21 8 21h24c1.657 0 3.031 1.357 2.704 2.98C33.32 30.838 27.264 36 20 36Z" fill="#fff">
                                            </path>
                                        </svg>
                                        <img src={jobadda} className="h-14 w-50 rounded-sm" alt="" />
                                    </a>
                                    <div className="mt-20">
                                        <h2 className="text-lg font-semibold text-gray-900">Sign in to your account</h2>
                                        <p className="mt-2 text-sm text-gray-700">Don’t have an account?
                                            <Link className="font-medium  text-blue-600 hover:underline" to="/register">
                                                <b className=' text-lg'> Sign up </b>  </Link> for a free trial.</p>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-y-8">
                                    <div className="">
                                        <label htmlFor="email" className="mb-3 block text-sm font-medium text-gray-700">Email address</label>
                                        <input id="email" onChange={handleInputChange} type="email" name="email" autoComplete="email" required=""
                                            className="block disabled:bg-blue-50 disabled:text-blue-500 disabled:border-blue-200 disabled:shadow-none
                                        invalid:border-red-500 invalid:text-red-600
                                        focus:invalid:border-red-500 focus:invalid:ring-red-500 w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm" />
                                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                    </div>
                                    <div className="">
                                        <label htmlFor="password" className="mb-3 block text-sm font-medium text-gray-700">Password</label>
                                        <input id="password" onChange={handleInputChange} type="password" name="password" autoComplete="current-password" required=""
                                            className="block disabled:bg-blue-50 disabled:text-blue-500 disabled:border-blue-200 disabled:shadow-none
                                         invalid:border-red-500 invalid:text-red-600
                                         focus:invalid:border-red-500 focus:invalid:ring-red-500 w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm" />
                                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                                    </div>
                                    <div>
                                        <button className="group cursor-pointer inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white  hover:text-blue-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 w-full" type="submit">
                                            <span>Sign in </span>
                                        </button>
                                    </div>
                                    <div >
                                        <Link
                                            to="/"
                                            className=" flex  items-center justify-center  text-center bg-blue-700 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300"
                                        >
                                            <span aria-hidden="true">  <BsArrowLeft /></span>
                                            <span style={{ marginLeft: "5px" }}>Go Back Home</span>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="hidden sm:contents lg:relative lg:block bg-gradient-to-tr  from-blue-600 to-blue-500 lg:flex-1">
                            <img src="https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className=" w-1400  h-[100vh]" alt="" />
                        </div>
                    </div>
                )
            }
            <Outlet />
        </>
    )
}

export default Login