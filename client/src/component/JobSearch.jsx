import React, { useState, useEffect } from 'react'
import styles from '../style'
import axios from 'axios';

import JobList from './JobList';
import { useLocation } from 'react-router-dom';

const JobSearch = () => {

    const location = useLocation();

    const [searchParams, setSearchParams] = useState({ title: '', location: '', jobType: '' });
    const [data, setData] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);

    async function searchDatabase(searchParams) {
        const apiUrl = "http://localhost:5000/api/user/jobs"; // Replace with your API URL
        try {
            const response = await axios.get(apiUrl, {
                params: searchParams
            });
            setFilteredJobs(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
            throw new Error("Failed to fetch data from API.");
        }
    }
    useEffect(() => {
        searchDatabase();
        console.log('Component loaded');
    }, []);



    if (!data) {
        return <div>Loading...</div>;

    }
    const displayedJobs = location.pathname === '/' ? filteredJobs.slice(0, 5) : filteredJobs;

    return (
        <>
            {console.log(data)}
            <section className={`relative  flex ${styles.backgroundTheme} bg-slate-900 justify-center items-center md:py-20  py-24 w-full ${styles.paddingX}`}>
                <div className={`absolute inset-0 bg-${styles.backgroundTheme}-600/5 dark:bg-${styles.backgroundTheme}-600/10`}></div>
                <div className="container z-1">
                    <div className="grid z-50 z-40 grid-cols-1 text-center mt-10 relative">
                        <h4 className="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold text-white">Join us & <span className={`text-${styles.backgroundTheme}-600 font-bold`}>Explore</span>  <span className={`text-${styles.backgroundTheme}-600 font-bold`}>Thousands</span> of Jobs</h4>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto">Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.</p>
                        <div className="  d-flex" id="reserve-form">
                            <div className="md:w-5/6 mx-auto ">
                                <div className="lg:col-span-10 mt-8">
                                    <div className="bg-white  dark:bg-slate-900 border-0 shadow rounded-md p-3">
                                        <form onSubmit={(e) => {
                                            e.preventDefault();
                                            searchDatabase(searchParams);
                                        }}>
                                            <div className="registration-form text-dark text-start z-50">
                                                <div className="grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                                    <div className=" flex items-center filter-search-form relative filter-border">
                                                        <i className="uil uil-briefcase-alt icons"></i>
                                                        <input id="input"
                                                            type="text"
                                                            name="title"
                                                            onChange={(event) => setSearchParams({ ...searchParams, title: event.target.value })}
                                                            placeholder="Job title, keywords, or company" className={`w-full bg-white text-gray-700 lg:mr-4 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-${styles.backgroundTheme}-500 focus:shadow-outline-${styles.backgroundTheme}`} />
                                                    </div>
                                                    <div className=" flex items-center ">
                                                        <i className="uil uil-map-marker icons"></i>

                                                        <input
                                                            onChange={(event) =>
                                                                setSearchParams({ ...searchParams, location: event.target.value })
                                                            }
                                                            className={`w-full bg-white text-gray-700 border lg:mr-4 py-3 px-4 mb-3 leading-tight focus:outline-none focus:shadow-outline-${styles.backgroundTheme} block mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
                                                            type="text"
                                                            list="locations"
                                                            name="location"
                                                            id="location"
                                                            aria-label="Location"
                                                            placeholder="Enter location"
                                                        />

                                                        <datalist id="locations">
                                                            <option value=""></option>
                                                            <option value="Daman"></option>
                                                            <option value="Surat"></option>
                                                            <option value="valsad"></option>
                                                            <option value="vapi"></option>
                                                            <option value="Silvasa"></option>
                                                            <option value="Delhi"></option>
                                                            <option value="maharastra"></option>
                                                            <option value="ahmdabad"></option>
                                                            <option value="utter pradesh"></option>
                                                            <option value="diu"></option>
                                                            <option value="banglore"></option>
                                                            <option value="prayagraj"></option>
                                                        </datalist>

                                                    </div>
                                                    <div className=" flex items-center ">
                                                        <i className="uil uil-briefcase-alt icons"></i>
                                                        <input
                                                            list="jobTypeOptions"
                                                            onChange={(event) => setSearchParams({ ...searchParams, jobType: event.target.value })}
                                                            className={`w-full lg:mr-4 bg-white text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:shadow-outline-blue block mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
                                                            name="jobType"
                                                            id="jobType"
                                                            aria-label="Default input example"
                                                        /> 
                                                        <datalist id="jobTypeOptions">
                                                            <option value="Full Time" />
                                                            <option value="Part Time" />
                                                            <option value="intership" />
                                                            <option value="permanent" />
                                                        </datalist>
                                                    </div>
                                                    <input type="submit" id="search" name="search" className="btn cursor-pointer z-50 bg-blue-600 h-12 hover:bg-blue-700 rounded-md border-blue-600 hover:border-blue-700 text-white searchbtn submit-btn w-100" value="Search" />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {
                displayedJobs.length
                    ?
                    displayedJobs.sort((a,b)=>(a.createdDate<b.createdDate)?1:-1).map(item => (
                        <JobList
                            key={item._id} // Add a unique key 
                            title={item.title}
                            company={item.company}
                            location={item.location}
                            sector={item.sector}
                            minSalary={item.minSalary}
                            maxSalary={item.maxSalary}
                            description={item.description}
                            requirements={item.description}
                            lastDate={item.lastDate}
                            createdDate={item.createdDate}
                            jobType={item.jobType}
                        />
                    )) :
                    <>
                    </>}
        </>
    )
}

export default JobSearch