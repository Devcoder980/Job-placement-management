import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="bg-emerald-600 p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <a href="/" className="text-white font-bold text-lg">
                            JobAdda
                        </a>
                    </div>
                    <div>
                        <ul className="flex items-center">
                            <li className="mr-6">
                                <a href="/" className="text-white hover:text-gray-200">
                                    Home
                                </a>
                            </li>
                            <li className="mr-6">
                                <a href="/jobs" className="text-white hover:text-gray-200">
                                    Jobs
                                </a>
                            </li>
                            <li className="mr-6">
                                <a href="/jobs" className="text-white hover:text-gray-200">
                                    CARRER TIPS
                                </a>
                            </li>
                            <li className="mr-6">
                                <a href="/contact" className="text-white hover:text-gray-200">
                                    Contact Us
                                </a>
                            </li>
                            <li className="mr-6">
                                <a href="/login" className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full hover:bg-blue-200">
                                    Login
                                </a>
                            </li>
                            <li className="mr-6">
                                <a href="/register" className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full hover:bg-blue-200">
                                    Register
                                </a>
                            </li>

                        </ul>
                    </div>


                </div>
            </nav>

        </>

    )
}

export default Navbar