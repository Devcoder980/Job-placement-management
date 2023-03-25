import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import joblogo from '../images/joblogo.png'
import styles from '../style';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom';

import { BsChevronCompactDown } from 'react-icons/bs';
const Navbar = (props) => {

    const history = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    function clearFun() {
        localStorage.clear();
        console.log("call");
        history('/');
        localStorage.clear();
        window.location.reload();
    }

    const toggleNavbar = () => {

        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className={`bg-${styles.backgroundTheme}-900 bg-slate-900 relative z-20 lg:px-1 uppercase`}>
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
                                    {localStorage.authToken ?

                                        <>

                                            <div className="ml-4 flex items-center">
                                                <div className="ml-3 relative">
                                                    <div>
                                                        <Link to="/dashboard">
                                                            <button className="max-w-xs rounded-md flex items-center hover:bg-white hover:bg-opacity-5 transition-colors px-2 py-1 text-sm focus:outline-none focus:ring" id="headlessui-menu-button-6" type="button" aria-haspopup="true" aria-expanded="false">
                                                                <span className="sr-only">Open user menu</span>
                                                                <span className="mr-4 text-white text-base"> Hi {localStorage.getItem('username')}</span>
                                                            </button>
                                                        </Link>

                                                    </div>
                                                </div>
                                            </div>
                                            <li className="mr-6">

                                                <Menu as="div" className="relative inline-block text-left">
                                                    <div>
                                                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                                            Options
                                                            <BsChevronCompactDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                        </Menu.Button>
                                                    </div>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items className="absolute text-center  right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                            <div className="py-1">

                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <Link
                                                                            to="/dashboard"
                                                                            className={classNames(
                                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                'block px-4 py-2 text-sm'
                                                                            )}
                                                                        >
                                                                            DashBoard
                                                                        </Link>
                                                                    )}
                                                                </Menu.Item>

                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <button
                                                                            type="submit"
                                                                            onClick={clearFun}
                                                                            className={classNames(
                                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                'block w-full px-4 py-2 text-left text-sm'
                                                                            )}
                                                                        >
                                                                            Sign out
                                                                        </button>
                                                                    )}
                                                                </Menu.Item>

                                                            </div>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>


                                            </li>
                                        </>

                                        :
                                        <>

                                            {
                                                localStorage.authTokenEmployer
                                                    ?
                                                    <>

                                                    </>
                                                    :
                                                    <>
                                                        <li className="mr-6">
                                                            <button type="button" data-te-ripple-init data-te-ripple-color="light" className={`inline-block bg-white text-${styles.backgroundTheme}-600  shadow-cyan-500/50 rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]`}>
                                                                <Link to="/login" > Login </Link>
                                                            </button>
                                                        </li>
                                                        <li className="mr-6">
                                                            <button type="button" data-te-ripple-init data-te-ripple-color="light" className={`inline-block bg-white text-${styles.backgroundTheme}-600  shadow-cyan-500/50 rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]`}>
                                                                <Link to="/register" > Register </Link>
                                                            </button>
                                                        </li>
                                                    </>
                                            }
                                            <li className='mr-6'>
                                                <Menu as="div" className="relative inline-block text-left">
                                                    <div>
                                                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                                            Employer
                                                            <BsChevronCompactDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                        </Menu.Button>
                                                    </div>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items className="absolute right-0 z-10 mt-2 text-center  w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                            <div className="py-1">
                                                                {
                                                                    localStorage.authTokenEmployer
                                                                        ?
                                                                        <>
                                                                            <Menu.Item>
                                                                                <Link
                                                                                    to="/employer/post-job"
                                                                                    className='bg-gray-100  text-gray-700 block px-4 py-2 text-sm'
                                                                                >
                                                                                    Post a Job
                                                                                </Link>
                                                                            </Menu.Item>
                                                                        </>
                                                                        :
                                                                        <>
                                                                        </>
                                                                }

                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <Link
                                                                            to="/employer/log-in"
                                                                            className={classNames(
                                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                'block px-4 py-2 text-sm'
                                                                            )}
                                                                        >
                                                                            Log in
                                                                        </Link>
                                                                    )}
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <Link
                                                                            to="/employer/Register"
                                                                            className={classNames(
                                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                'block px-4 py-2 text-sm'
                                                                            )}
                                                                        >
                                                                            Register
                                                                        </Link>
                                                                    )}
                                                                </Menu.Item>
                                                                {
                                                                    localStorage.authTokenEmployer
                                                                        ? <>

                                                                            <Menu.Item>

                                                                                <button type="button"
                                                                                    onClick={clearFun}
                                                                                    data-te-ripple-init data-te-ripple-color="light" className={`inline-block bg-white text-${styles.backgroundTheme}-600  shadow-cyan-500/50 rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]`}>
                                                                                    <Link to="/" > Log out </Link>
                                                                                </button>

                                                                            </Menu.Item>
                                                                        </>
                                                                        :
                                                                        <>
                                                                        </>
                                                                }
                                                            </div>
                                                        </Menu.Items>
                                                    </Transition>
                                                </Menu>
                                            </li>
                                        </>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                    <ul className="px-2 pt-2 pb-3">
                        <li className="mr-6">
                            <Link onClick={toggleNavbar} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium" to="/">Home</Link>
                        </li>
                        <li className="mr-6">
                            <Link onClick={toggleNavbar} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium" to="/jobs">Jobs</Link>
                        </li>
                        <li className="mr-6">
                            <Link onClick={toggleNavbar} to="/carrers" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium" >CARRER TIPS</Link>
                        </li>
                        <li className="mr-6">
                            <Link onClick={toggleNavbar} to="/contactus" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium" > Contact</Link>
                        </li>
                        <li className="mr-6">
                            <Link onClick={toggleNavbar} to="/aboutus" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md font-medium" > About Us</Link>
                        </li>
                        <li className="mr-6 py-2 mx-2">
                            <button type="button" data-te-ripple-init data-te-ripple-color="light" className={`inline-block py-2 bg-white text-${styles.backgroundTheme}-600  shadow-cyan-500/50 rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]`}>
                                <Link to="/login" > Login </Link>
                            </button>
                        </li>
                        <li className="mr-6 py-2 mx-2">
                            <button type="button" data-te-ripple-init data-te-ripple-color="light" className={`inline-block  bg-white text-${styles.backgroundTheme}-600  shadow-cyan-500/50 rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]`}>
                                <Link to="/register" > Register </Link>
                            </button>
                        </li>
                        <li className="mr-6">

                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                        Options
                                        <BsChevronCompactDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute text-center  right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">

                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="/dashboard"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        DashBoard
                                                    </Link>
                                                )}
                                            </Menu.Item>

                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        type="submit"
                                                        onClick={clearFun}
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block w-full px-4 py-2 text-left text-sm'
                                                        )}
                                                    >
                                                        Sign out
                                                    </button>
                                                )}
                                            </Menu.Item>

                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>


                        </li>
                        <li className='mr-6'>
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                        Employer
                                        <BsChevronCompactDown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 text-end  w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            {localStorage.authTokenEmployer
                                                ?
                                                <>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to="/employer/post-job"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm  '
                                                                )}
                                                            >
                                                                Post a Job
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                </>
                                                :
                                                <>
                                                </>
                                            }
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="/employer/log-in"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Log in
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="/employer/Register"
                                                        className={classNames(
                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        Register
                                                    </Link>
                                                )}
                                            </Menu.Item>

                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                        </li>

                    </ul>

                </div>
            </nav>
            <Outlet />
        </>

    )
}

export default Navbar