import React, { useState, useEffect ,useContext} from 'react'
import styles from '../style'
import axios from 'axios';

import JobList from './JobList';
import { useLocation } from 'react-router-dom';
import { LineWave } from 'react-loader-spinner';
import Footer from './Footer';
import { ThemeContext } from './JobContext';

const JobSearch = () => {

    const theme=useContext(ThemeContext);
    const location = useLocation();

    const [searchParams, setSearchParams] = useState({ title: '', location: '', jobType: '' });
    const [data,] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);

    async function searchDatabase(searchParams) {
        const apiUrl = "https://jobmanagementw.onrender.com/api/user/jobs"; // Replace with your API URL
        try {
            const response = await axios.get(apiUrl, {
                params: searchParams
            });
            setFilteredJobs(response.data);
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
            <section className={`   bg-${theme}-900 justify-center items-center md:py-20  py-24 w-full ${styles.paddingX}`}>
                <div className={` inset-0 bg-${theme}-600/5 dark:bg-${theme}-600/10`}></div>
                <div className="container z-1">
                    <div className="grid z-50 grid-cols-1 text-center mt-10 relative">
                        <h4 className="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold text-white">Join us & <span className={`text-white font-bold`}>Explore</span>  <span className={`text-white font-bold`}>Thousands</span> of Jobs</h4>
                        <p className={`text-${theme}-200 text-lg max-w-xl mx-auto`}>Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.</p>
                        <div className="  d-flex" id="reserve-form">
                            <div className="  md:w-11/12 mx-auto ">
                                <div className="lg:col-span-10 mt-8">
                                    <div className={`  dark:bg-${theme}-900 border-0 shadow rounded-md p-3`}>
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
                                                            placeholder="Job title, keywords, or company" className={`w-full bg-[#0f172a] outline-[#475569]  text-gray-700 lg:mr-4 border border-gray-300 rounded py-3 px-4  leading-tight focus:outline-none focus:border-${theme}-500 focus:shadow-outline-${theme}`} />
                                                    </div>
                                                    <div className=" flex items-center ">
                                                        <i className="uil uil-map-marker icons"></i>
                                                        <input
                                                            onChange={(event) =>
                                                                setSearchParams({ ...searchParams, location: event.target.value })
                                                            }
                                                            className={`w-full  text-gray-700 bg-[#0f172a] outline-[#475569] border lg:mr-4 py-3 px-4  leading-tight focus:outline-none focus:shadow-outline-${theme} block  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
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
                                                            className={`w-full lg:mr-4 bg-[#0f172a] outline-[#475569] text-gray-700 border py-3 px-4  leading-tight focus:outline-none focus:shadow-outline-blue block  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
                                                            name="jobType"
                                                            id="jobType"
                                                            placeholder='JobType'
                                                            aria-label="Default input example"
                                                        />
                                                        <datalist id="jobTypeOptions">
                                                            <option value="Full Time" />
                                                            <option value="Part Time" />
                                                            <option value="intership" />
                                                            <option value="permanent" />
                                                        </datalist>
                                                    </div>
                                                    <button
                                                        type='submit'
                                                        id="search" name="search"
                                                        value="Search"
                                                        className="relative inline-flex items-center  justify-center  mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                                        <span className="relative px-5 w-32 py-2.5 transition-all ease-in duration-75 text-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-bold ">
                                                            Search
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-wrap justify-center'>
                    {filteredJobs.length === 0 ? (
                        <div className="flex justify-center  h-screen">
                            <LineWave type="TailSpin" color="#fff" height={170} width={170} />
                        </div>
                    ) : (
                        displayedJobs.length
                            ?
                            displayedJobs.sort((a, b) => (a.createdDate < b.createdDate) ? 1 : -1).map(item => (
                                <JobList
                                    key={item._id} // Add a unique key 
                                    title={item.title}
                                    company={item.company}
                                    location={item.location}
                                    sector={item.sector}
                                    minSalary={item.minSalary}
                                    maxSalary={item.maxSalary}
                                    description={item.description}
                                    requirements={item.requirements}
                                    lastDate={item.lastDate}
                                    createdDate={item.createdDate}
                                    jobType={item.jobType}
                                />
                            )) :
                            <>
                            </>
                    )}

                    {location.pathname === '/jobs' && <Footer />}
                </div>

            </section>
        </>
    )
}

export default JobSearch