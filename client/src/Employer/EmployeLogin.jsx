import React, { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import axios from 'axios'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

const EmployerLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
    });
    const [fromData, setFromData] = useState({
        email: '',
        password: '',
    });
    const history = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken'); // get the token from local storage
        if (token) {
            setIsLoggedIn(true); // set the state to indicate that the user is logged in
            console.log("user Already log in")
            history('/user');
        }
    }, [history]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFromData({ ...fromData, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors({ email: '', password: '' }); // reset form errors
        const { email, password } = fromData;

        // Perform validation
        if (!email) {
            setFormErrors({ ...formErrors, email: 'Please enter an email address.' });
            return;
        }
        if (!password) {
            setFormErrors({ ...formErrors, password: 'Please enter a password.' });
            return;
        }
        setIsLoading(true);
        axios.post('http://localhost:5000/api/employer/login', fromData)
            .then((res) => {
                console.log(res.data);
                localStorage.setItem('authTokenEmployer', res.data.token);
                setIsLoading(false);
                // alert("EmployerLogin succfully")
                setIsLoggedIn(true);
                // Handle succesfully
            })
            .catch((e) => {
                console.log(e);
                setIsLoggedIn(false);
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
                                        <h2 className="text-lg font-semibold text-gray-900">Sign in as <span className='text-green-600 text-xl'>Employer</span> </h2>
                                    </div>
                                </div>
                                <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-y-8">
                                    <div className="">
                                        <label for="email" className="mb-3 block text-sm font-medium text-gray-700">Email address</label>
                                        <input id="email" onChange={handleInputChange} type="email" name="email" autoComplete="email" required="" className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-emerald-500 sm:text-sm" />
                                        {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                                    </div>
                                    <div className="">
                                        <label for="password" className="mb-3 block text-sm font-medium text-gray-700">Password</label>
                                        <input id="password" onChange={handleInputChange} type="password" name="password" autoComplete="current-password" required="" className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-emerald-500 sm:text-sm" />
                                        {formErrors.password && <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>}
                                    </div>

                                    <div>
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
                                            <Link className="font-bold text-xl px-2 text-emerald-600 hover:underline" to="/employer/register">Sign up</Link>
                                        </div>
                                    </div>

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