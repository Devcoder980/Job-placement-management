import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsLoggedIn(true);
            console.log("User already logged in");
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
        setIsLoading(true);

        // Simulate asynchronous operation (e.g., API call)

        const errors = validateForm(fromData);
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }
    
            // Set loading state back to false after a delay
        axios.post('http://localhost:5000/api/user/login', fromData)
            .then((res) => {
                console.log(res.data);
                localStorage.setItem('authToken', res.data.token);
                // localStorage.setItem('userId', res.data._id);
                alert("login succfully")
                setIsLoading(false);
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
                        <div className="relative z-10 h-[100vh] flex flex-1 flex-col bg-white justify-center  shadow-2xl sm:justify-center">
                            <div className="mx-auto w-[21rem] lg:w-[24rem] md:px-0">
                                <div className="flex flex-col">
                                    <a aria-label="Home" className=' flex justify-center items-center px-2' href="/">
                                        <svg aria-hidden="true" viewBox="0 0 40 40" className=" w-11 h-11">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Zm20 16c-7.264 0-13.321-5.163-14.704-12.02C4.97 22.358 6.343 21 8 21h24c1.657 0 3.031 1.357 2.704 2.98C33.32 30.838 27.264 36 20 36Z" fill="#00f">
                                            </path>
                                        </svg>
                                        <span className="text-4xl font-bold pl-2">jobAdda</span>
                                    </a>
                                    <div className="mt-10">
                                        <h2 className=" text-3xl  text-center font-semibold text-gray-900">Sign in to JobAdda</h2>
                                    </div>
                                    <hr className=' mt-4' />
                                </div>
                                <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-y-8 ">
                                    <div className="bg-gray-100  rounded-full flex flex-col items-center py-2 ">
                                        <label htmlFor="email" className=" relative bottom-1   self-start text-md pl-5  text-gray-400">Email{errors.email && <span className=" text-red-700 pl-1">*</span>}</label>
                                        <input id="email" placeholder='example@gmail.com' onChange={handleInputChange} type="email" name="email" autoComplete="email" required=""
                                            className=" relative bottom-1  w-[87%] disabled:bg-blue-50 rounded-sm  focus:bg-gray-100 border-t-0 disabled:shadow-none
                                        invalid:border-red-500 invalid:text-red-600
                                        focus:invalid:border-red-500   focus:invalid:ring-red-500  appearance-none   bg-gray-100   text-gray-700   border-none  focus:outline-none text-md" />
                                    </div>
                                    <div className="bg-gray-100  rounded-full flex mt-5 flex-col items-center py-2 ">
                                        <label htmlFor="email" className=" relative bottom-1   self-start text-md pl-5  text-gray-400">Password{errors.password && <span className=" text-red-700 pl-1">*</span>}</label>
                                        <input id="password" onChange={handleInputChange} type="password" name="password" autoComplete="current-password" placeholder='*************' required=""
                                            className=" relative bottom-1  w-[87%] disabled:bg-blue-50 rounded-sm  focus:bg-gray-100 border-t-0 disabled:shadow-none
                                        invalid:border-red-500 invalid:text-red-600
                                        focus:invalid:border-red-500   focus:invalid:ring-red-500  appearance-none   bg-gray-100   text-gray-700   border-none  focus:outline-none text-md" />
                                    </div>
                                    <div className='flex  items-center px-2'>
                                        <label htmlFor="rememberMe" className="text-gray-500 flex items-center font-semibold flex-1 text-md">
                                            <input type="checkbox" id="rememberMe" className="mr-2 w-6 h-6 font-extrabold" />
                                            Remember Me
                                        </label>
                                        <button
                                            className="group flex-1 py-5 cursor-pointer inline-flex items-center justify-center rounded-full px-1 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-blue-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 w-full"
                                            type="submit"
                                            disabled={isLoading} // Disable the button while loading
                                        >
                                            {isLoading ? (
                                                <>
                                                    <FaSpinner className="animate-spin mr-2" />
                                                    Loading...
                                                </>
                                            ) : (
                                                <span>Sign in</span>
                                            )}
                                        </button>
                                    </div>
                                    <div>
                                        <div className="mt-4 text-center">
                                            Don't have an account?
                                            <Link to="/register" className="text-blue-600 ml-1 font-extrabold">Sign up</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="hidden  sm:hidden lg:block bg-gradient-to-tr  from-blue-600 to-blue-500 lg:flex-1">
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