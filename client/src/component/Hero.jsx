import React from 'react'
import logo_mailchimp from '../images/logo_mailchimp.svg'
import logo_paypal from '../images/logo_paypal.svg'
import logo_stripe from '../images/logo_stripe.svg'
import logo_visa from '../images/logo_visa.svg'
import logo_apple from '../images/logo_apple.svg'
import logo_tinder from '../images/logo_tinder.svg'
import logo_sony from '../images/logo_sony.svg'
import logo_airbnb from '../images/logo_airbnb.svg'
const Hero = () => {
    return (
        <>
            <section className="relative md:py-56 py-36 w-full">
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
                                                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-6">
                                                    <div className=" flex items-center filter-search-form relative filter-border">
                                                        <i className="uil uil-briefcase-alt icons"></i>
                                                        <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your Keywords" />
                                                    </div>
                                                    <div className=" flex items-center filter-search-form relative filter-border">
                                                        <i className="uil uil-map-marker icons"></i>
                                                        <select className="form-select" data-trigger name="choices-location" id="choices-location" aria-label="Default select example">
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
                                                    <div className=" flex items-center filter-search-form relative filter-border">
                                                        <i className="uil uil-briefcase-alt icons"></i>
                                                        <select className="form-select" data-trigger name="choices-type" id="choices-type" aria-label="Default select example">
                                                            <option selected="" value="1">Full Time</option>
                                                            <option value="2">Part Time</option>
                                                            <option value="3">Freelancer</option>
                                                            <option value="4">Remote Work</option>
                                                            <option value="5">Office Work</option>
                                                        </select>
                                                    </div>
                                                    <input type="submit" id="search" name="search" style={{ height: "60px" }} className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn w-100" value="Search" />
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
                    <div className="row align-items-center   xl:mx-20 my-20 ">
                        <div className="row flex  flex-wrap justify-between">
                            <div className='Companyslogo' >
                                <img src={logo_mailchimp} alt="Image" className="img-fluid logo-1" />
                            </div>
                            <div className='Companyslogo' >
                                <img src={logo_paypal} alt="Image" className="img-fluid logo-2" />
                            </div>
                            <div className='Companyslogo' >
                                <img src={logo_stripe} alt="Image" className="img-fluid logo-3" />
                            </div>
                            <div className='Companyslogo' >
                                <img src={logo_visa} alt="Image" className="img-fluid logo-4" />
                            </div>
                        </div>
                        <div className="row flex flex-wrap justify-between ">
                            <div className='Companyslogo' >
                                <img src={logo_apple} alt="Image" className="img-fluid logo-5" />
                            </div>
                            <div className='Companyslogo' >
                                <img src={logo_tinder} alt="Image" className="img-fluid logo-6" />
                            </div>
                            <div className='Companyslogo' >
                                <img src={logo_sony} alt="Image" className="img-fluid logo-7" />
                            </div>
                            <div className='Companyslogo' >
                                <img src={logo_airbnb} alt="Image" className="img-fluid logo-8" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero