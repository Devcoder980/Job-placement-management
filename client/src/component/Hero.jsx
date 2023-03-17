import React from 'react'

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
                                                    <input name="name" type="text" id="job-keyword" className="form-input filter-input-box bg-gray-50 dark:bg-slate-800 border-0" placeholder="Search your Keywords"/>
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
                                                <input type="submit" id="search" name="search" style={{height:"60px"}} className="btn bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white searchbtn submit-btn w-100" value="Search"/>
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
    </>
  )
}

export default Hero