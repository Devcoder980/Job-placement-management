import React from 'react'
import { Link ,Outlet } from 'react-router-dom'
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
                                <Link to="/login" className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full hover:bg-blue-200"> Login </Link>
                            </li>
                            <li className="mr-6">
                                <Link to="/register"  className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full hover:bg-blue-200">Register</Link>
                            </li>

                        </ul>
                    </div>


                </div>
              
            </nav>
            <Outlet/>
        </>

    )
}

export default Navbar