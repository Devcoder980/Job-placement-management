import React, { useState } from 'react'
import { Fragment } from 'react'
import ApplyForm from './ApplyForm'
import { BsCurrencyDollar, BsCheck, BsCalendar, BsBriefcaseFill, BsPinMap, BsChevronDown } from 'react-icons/bs'
import { HiOutlineDocument } from 'react-icons/hi'

import styles from '../style'
import { Link } from 'react-router-dom'
const JobList = (props) => {

    const [showApplyForm, setShowApplyForm] = useState(false);
    const toggleApplyForm = () => {
        setShowApplyForm(!showApplyForm);
    }


    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>


            <div className={` lg:flex lg:items-center ${styles.paddingX} py-8 my-4  bg-slate-900  lg:justify-between`}>
                <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
                        {props.title}
                    </h2>
                    <p className="  font-bold  text-gray-400 sm:truncate  sm:tracking-tight">
                        {props.company}
                    </p>
                    <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                        <div className="mt-3 flex items-center text-sm text-gray-500">
                            <BsBriefcaseFill className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            {props.jobType}
                        </div>
                        <div className="mt-3 flex items-center text-sm text-gray-500">
                            <BsPinMap className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            {props.location}
                        </div>
                        <div className="mt-3 flex items-center text-sm text-gray-500">
                            <BsCurrencyDollar className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            ${props.minSalary}k &ndash; ${props.maxSalary}k
                        </div>
                        <div className="mt-3 flex items-center text-sm text-gray-500">
                            <BsCalendar className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            {props.lastDate}
                        </div>
                    </div>
                    <div className="mt-3 flex items-center text-lg text-gray-500">
                        <HiOutlineDocument className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        {props.description}
                    </div>
                </div>

                <div className="mt-5 flex lg:mt-0 lg:ml-4">
                    {
                        localStorage.length ?
                            <>
                                <Link to="/apply"
                                    className="sm:ml-3">
                                    <button
                                        type="button"
                                        onClick={toggleApplyForm}
                                        className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                                        Apply
                                    </button>
                                </Link>
                            </>
                            :
                            <>
                                <Link to="/login"
                                    className="sm:ml-3">
                                    <button
                                        type="button"
                                        onClick={toggleApplyForm}
                                        className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >
                                        Apply
                                    </button>
                                </Link>
                            </>
                    }


                    {showApplyForm
                        ? <ApplyForm
                            jobTitle={props.title}
                            jobCompany={props.company}
                            jobLocation={props.location}
                            showForm={showApplyForm}
                            toggleForm={toggleApplyForm}
                        /> : <></>
                    }

                </div>
            </div>


        </>
    )
}

export default JobList