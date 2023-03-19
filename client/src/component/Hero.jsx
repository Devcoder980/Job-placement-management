import React from 'react'
import logo_mailchimp from '../images/logo_mailchimp.svg'
import logo_paypal from '../images/logo_paypal.svg'
import logo_stripe from '../images/logo_stripe.svg'
import logo_visa from '../images/logo_visa.svg'
import logo_apple from '../images/logo_apple.svg'
import logo_tinder from '../images/logo_tinder.svg'
import logo_sony from '../images/logo_sony.svg'
import logo_airbnb from '../images/logo_airbnb.svg'
import styles from '../style'
import NewsLetter from './NewsLetter'

const Hero = () => {
    return (
        <main className={` ${styles.marginX}`}>
            <section className={`relative md:py-56 py-36 w-full`}>
                <div className="absolute inset-0 bg-emerald-600/5 dark:bg-emerald-600/10"></div>
                <div className="container z-1">
                    <div className="grid grid-cols-1 text-center mt-10 relative">
                        <h4 className="lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 font-bold">Join us & <span className="text-emerald-600 font-bold">Explore</span>  <span className="text-emerald-600 font-bold">Thousands</span> of Jobs</h4>
                        <p className="text-slate-400 text-lg max-w-xl mx-auto">Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.</p>

                        <div className="d-flex" id="reserve-form">
                            <div className="md:w-5/6 mx-auto">
                                <div className="lg:col-span-10 mt-8">
                                    <div className="bg-white dark:bg-slate-900 border-0 shadow rounded-md p-3">
                                        <form action="#">
                                            <div className="registration-form text-dark text-start">
                                                <div className="grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                                    <div className=" flex items-center filter-search-form relative filter-border">
                                                        <i className="uil uil-briefcase-alt icons"></i>
                                                        <input id="input" type="text" placeholder="Job title, keywords, or company" class="w-full bg-white text-gray-700 lg:mr-4 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
                                                    </div>
                                                    <div className=" flex items-center ">
                                                        <i className="uil uil-map-marker icons"></i>
                                                        <select className=" w-full  bg-white text-gray-700 border lg:mr-4 py-3 px-4 mb-3 leading-tight focus:outline-none  focus:shadow-outline-blue block  mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" data-trigger name="choices-location" id="choices-location" aria-label="Default select example">
                                                            <option value="AF">Afghanistan</option>
                                                            <option value="AZ">Azerbaijan</option>
                                                            <option value="BS">Bahamas</option>
                                                            <option value="BH">Bahrain</option>
                                                            <option value="CA">Canada</option>
                                                            <option value="CV">Cape Verde</option>
                                                            <option value="DK">Denmark</option>
                                                            <option value="DJ">Djibouti</option>
                                                            <option value="ER">Eritrea</option>
                                                            <option value="EE">Estonia</option>
                                                            <option value="GM">Gambia</option>
                                                            <option selected defaultValue="IN">india</option>
                                                        </select>
                                                    </div>
                                                    <div className=" flex items-center ">
                                                        <i className="uil uil-briefcase-alt icons"></i>
                                                        <select className=" w-full lg:mr-4  bg-white text-gray-700 border  py-3 px-4 mb-3 leading-tight focus:outline-none  focus:shadow-outline-blue block  mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" data-trigger name="choices-location" id="choices-location" aria-label="Default select example">
                                                            <option selected="" value="1">Full Time</option>
                                                            <option value="2">Part Time</option>
                                                            <option value="3">Freelancer</option>
                                                            <option value="4">Remote Work</option>
                                                            <option value="5">Office Work</option>
                                                        </select>
                                                    </div>
                                                    <input type="submit" id="search" name="search"  className="btn bg-emerald-600 h-12 hover:bg-emerald-700 rounded-md border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn w-100" value="Search" />
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


            <section className="site-section py-4">
                <div className="container">

                    <div className="col-12 text-center mt-4 mb-5">
                        <div className="row justify-center">
                            <div className="col-md-7">
                                <h2 className="section-title mb-2 text-4xl  ">Company We've Helped</h2>
                                <p className="lead text-2xl text-gray-500">Porro error reiciendis commodi beatae omnis similique voluptate rerum ipsam fugit mollitia ipsum facilis expedita tempora suscipit iste</p>
                            </div>
                        </div>

                    </div>

                    <div className="bg-white  sm:py-32">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">

                            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                                <img
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                    src={logo_mailchimp}
                                    alt="Transistor"
                                    width={300}
                                    height={1000}
                                />
                                <img
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                    src={logo_paypal}
                                    alt="Reform"
                                    width={300}
                                    height={1000}
                                />
                                <img
                                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                    src={logo_stripe}
                                    alt="Tuple"
                                    width={300}
                                    height={100}
                                />
                                <img
                                    className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                                    src={logo_visa}
                                    alt="SavvyCal"
                                    width={300}
                                    height={100}
                                />
                                <img
                                    className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                                    src={logo_apple}
                                    alt="Statamic"
                                    width={300}
                                    height={100}
                                />
                                <img
                                    className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                                    src={logo_tinder}
                                    alt="Statamic"
                                    width={300}
                                    height={100}
                                />
                                <img
                                    className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                                    src={logo_sony}
                                    alt="Statamic"
                                    width={300}
                                    height={100}
                                />
                                <img
                                    className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                                    src={logo_airbnb}
                                    alt="Statamic"
                                    width={300}
                                    height={100}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <NewsLetter />
        </main>
    )
}

export default Hero