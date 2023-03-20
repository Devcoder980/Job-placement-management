import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import joblogo from '../images/joblogo.png'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="bg-emerald-600 lg:px-[4.5rem] uppercase">
                <div className="max-w-7xl mx-auto px-2 md:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                       
                        <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                            <button
                                className="inline-flex text-white items-center justify-center p-2 rounded-md  hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                                aria-label="Main menu"
                                aria-expanded="false"
                                onClick={toggleNavbar}
                            >
                                <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center  justify-center md:items-stretch md:justify-between">
                            <div className="flex items-center text-3xl">
                                <a href="/" className="text-white font-bold">
                                    <img src={joblogo} className="w-30 h-10" alt="" />
                                </a>
                            </div>
                            <div className="hidden md:block md:ml-6">
                                <ul className="flex items-center">
                                    <li className={` mr-6`} >
                                        <Link className="text-gray-300 hover:text-white block  px-3 py-2 rounded-md font-medium" to="/">Home</Link>
                                    </li>
                                    <li className="mr-6">
                                        <Link className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium" to="/jobs">Jobs</Link>
                                    </li>
                                    <li className="mr-6">
                                        <Link to="/carrers" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium" >CARRER TIPS</Link>
                                    </li>
                                    <li className="mr-6">
                                        <Link to="/contactus" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium" > Contact</Link>
                                    </li>
                                    <li className="mr-6">
                                        <Link to="/aboutus" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium" > About Us</Link>
                                    </li>
                                    <li className="mr-6">
                                        <button type="button" data-te-ripple-init data-te-ripple-color="light" class="inline-block bg-white text-emerald-600  shadow-cyan-500/50 rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                            <Link to="/login" > Login </Link>
                                        </button>
                                    </li>
                                    <li className="mr-6">
                                        <button type="button" data-te-ripple-init data-te-ripple-color="light" class="inline-block bg-white text-emerald-600  shadow-cyan-500/50 rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                            <Link to="/register" > Register </Link>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                    <ul className="px-2 pt-2 pb-3">
                        <li className="mr-6">
                            <Link className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium" to="/">Home</Link>
                        </li>
                        <li className="mr-6">
                            <Link className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium" to="/jobs">Jobs</Link>
                        </li>
                        <li className="mr-6">
                            <Link to="/carrers" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium" >CARRER TIPS</Link>
                        </li>
                        <li className="mr-6">
                            <Link to="/contactus" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium" > Contact</Link>
                        </li>
                        <li className="mr-6">
                            <Link to="/aboutus" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium" > About Us</Link>
                        </li>
                        <li className="mr-6 py-2 mx-2">
                            <button type="button" data-te-ripple-init data-te-ripple-color="light" class="inline-block py-2 bg-white text-emerald-600  shadow-cyan-500/50 rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                <Link to="/login" > Login </Link>
                            </button>
                        </li>
                        <li className="mr-6 py-2 mx-2">
                            <button type="button" data-te-ripple-init data-te-ripple-color="light" class="inline-block  bg-white text-emerald-600  shadow-cyan-500/50 rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                <Link to="/register" > Register </Link>
                            </button>
                        </li>
                    </ul>

                </div>
            </nav>
            <Outlet />
        </>

    )
}

export default Navbar