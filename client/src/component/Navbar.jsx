import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
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
        // window.location.reload();
    }

    const toggleNavbar = () => {

        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className={`bg-${styles.backgroundTheme}-900 bg-slate-900 relative z-50 lg:px-1 uppercase`}>
                <div className="w-[90%] mx-auto px-2 md:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">

                        <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                            <button
                                className="inline-flex text-white cursor-pointer items-center justify-center p-2 rounded-md  hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
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
                                <a aria-label="Home" className=' flex justify-center items-center px-2' href="/">
                                    <svg aria-hidden="true" viewBox="0 0 40 40" className=" w-11 h-11">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Zm20 16c-7.264 0-13.321-5.163-14.704-12.02C4.97 22.358 6.343 21 8 21h24c1.657 0 3.031 1.357 2.704 2.98C33.32 30.838 27.264 36 20 36Z" fill="#fff">
                                        </path>
                                    </svg>
                                    <span className="text-2xl text-white font-bold pl-2">jobAdda</span>
                                </a>

                            </div>
                            <div className="hidden md:block md:ml-6">
                                <ul className="flex items-center text-sm">
                                    <li className={` mr-1`} >
                                        <Link className="text-gray-300 cursor-pointer hover:text-white block  px-3 py-2 rounded-md font-medium" to="/">Home</Link>
                                    </li>
                                    <li className="mr-1">
                                        <Link className="text-gray-300 cursor-pointer hover:text-white block px-3 py-2 rounded-md font-medium" to="/jobs">Jobs</Link>
                                    </li>
                                    <li className="mr-1">
                                        <Link to="/carrers" className="text-gray-300 cursor-pointer hover:text-white block px-3 py-2 rounded-md font-medium" >CARRER TIPS</Link>
                                    </li>
                                    <li className="mr-1">
                                        <Link to="/contactus" className="text-gray-300 cursor-pointer hover:text-white block px-3 py-2 rounded-md font-medium" > Contact</Link>
                                    </li>
                                    <li className="mr-1">
                                        <Link to="/aboutus" className="text-gray-300 cursor-pointer hover:text-white block px-3 py-2 rounded-md font-medium" > About Us</Link>
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
                                            <li className="mr-4">
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
                                                                                'block w-full text-center px-4 py-2  text-sm'
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
                                                        <li className="mr-4">
                                                            <button type="button" data-te-ripple-init data-te-ripple-color="light" className={`inline-block bg-white text-${styles.backgroundTheme}-600  shadow-cyan-500/50 rounded bg-primary px-5 py-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]`}>
                                                                <Link to="/login" > Login </Link>
                                                            </button>
                                                        </li>
                                                        <li className="mr-4">
                                                            <button type="button" data-te-ripple-init data-te-ripple-color="light" className={`inline-block bg-white text-${styles.backgroundTheme}-600  shadow-cyan-500/50 rounded bg-primary px-5 py-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]`}>
                                                                <Link to="/register" > Register </Link>
                                                            </button>
                                                        </li>
                                                    </>
                                            }
                                            <li className='mr-4   '>
                                                <Menu as="div" className="relative  inline-block text-left">
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
                                                        <Menu.Items className="absolute -right-12 mt-2 text-center  w-28 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                                                                                <Link
                                                                                    className="bg-gray-100 text-gray-900 text-gray-700
                                                                                    block px-4 py-2 text-sm"
                                                                                    to="/employer/dashboard">
                                                                                    Dashboard
                                                                                </Link>
                                                                            </Menu.Item>
                                                                            <Menu.Item>
                                                                                <button type="button"
                                                                                    onClick={clearFun}
                                                                                    data-te-ripple-init data-te-ripple-color="light" className={`inline-block bg-white text-${styles.backgroundTheme}-600  shadow-cyan-500/50 rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]`}>
                                                                                    Log out
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
                        <li className="mr-4">
                            <Link onClick={toggleNavbar} className="text-gray-300 cursor-pointer hover:text-white block px-3 py-2 rounded-md font-medium" to="/">Home</Link>
                        </li>
                        <li className="mr-4">
                            <Link onClick={toggleNavbar} className="text-gray-300 cursor-pointer hover:text-white block px-3 py-2 rounded-md font-medium" to="/jobs">Jobs</Link>
                        </li>
                        {/* <li className="mr-4">
                            <Link onClick={toggleNavbar} to="/carrers" className="text-gray-300 cursor-pointer hover:text-white block px-3 py-2 rounded-md font-medium" >CARRER TIPS</Link>
                        </li> */}
                        <li className="mr-4">
                            <Link onClick={toggleNavbar} to="/contactus" className="text-gray-300 cursor-pointer hover:text-white block px-3 py-2 rounded-md font-medium" > Contact</Link>
                        </li>
                        <li className="mr-4">
                            <Link onClick={toggleNavbar} to="/aboutus" className="text-gray-300 cursor-pointer hover:text-white block px-3 py-2 rounded-md font-medium" > About Us</Link>
                        </li>
                        <li className="mr-4 py-2 mx-2">
                            <button type="button" data-te-ripple-init data-te-ripple-color="light" className={`inline-block py-2 bg-white text-${styles.backgroundTheme}-600  shadow-cyan-500/50 rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]`}>
                                <Link to="/login" > Login </Link>
                            </button>
                        </li>
                        <li className="mr-4 py-2 mx-2">
                            <button type="button" data-te-ripple-init data-te-ripple-color="light" className={`inline-block  bg-white text-${styles.backgroundTheme}-600  shadow-cyan-500/50 rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]`}>
                                <Link to="/register" > Register </Link>
                            </button>
                        </li>
                        <li className="mr-4 ">
                            <Menu as="div" className="relative inline-block text-left  py-2 pl-2 ">
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
                                    <Menu.Items className="absolute text-center  lg:right-0 z-10 mt-2 lg:w-56  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to="/dashboard"
                                                        onClick={toggleNavbar}
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
                                                            'block w-full px-4 text-center py-2  text-sm'
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
                        <li className='mr-4'>
                            <Menu as="div" className="relative inline-block text-left pl-2 py-2">
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
                                    <Menu.Items className="absolute right-0 z-10  mt-2 text-end  w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            {localStorage.authTokenEmployer
                                                ?
                                                <>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <Link
                                                                to="/employer/post-job"
                                                                onClick={toggleNavbar}
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
                                                        onClick={toggleNavbar}
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
                                                        onClick={toggleNavbar}
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