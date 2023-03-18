import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav className="bg-emerald-600 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <Link to="/" className="text-white font-bold text-lg">JobAdda</Link>
                    </div>
                    <div>
                        <ul className="flex items-center">
                            <li className="mr-6">
                                <Link className="text-white hover:text-gray-200" to="/">Home</Link>
                            </li>
                            <li className="mr-6">
                                <Link className="text-white hover:text-gray-200" to="/jobs">Jobs</Link>
                            </li>
                            <li className="mr-6">
                                <Link to="/carrers" className="text-white hover:text-gray-200" >CARRER TIPS</Link>
                            </li>
                            <li className="mr-6">
                                <Link to="/contactus" className="text-white hover:text-gray-200" > Contact Us</Link>
                            </li>

                            <li className="mr-6">
                                <button type="button" data-te-ripple-init data-te-ripple-color="light" class="inline-block bg-white text-emerald-600 shadow-lg shadow-cyan-500/50 rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                     <Link to="/login" > Login </Link>
                                </button>
                            </li>
                            <li className="mr-6">
                            <button type="button" data-te-ripple-init data-te-ripple-color="light" class="inline-block bg-white text-emerald-600 shadow-lg shadow-cyan-500/50 rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                                     <Link to="/register" > Register </Link>
                                </button>
                            </li>

                        </ul>
                    </div>


                </div>

            </nav>
            <Outlet />
        </>

    )
}

export default Navbar