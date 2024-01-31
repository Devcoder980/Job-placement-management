import React,{useContext} from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import sq_img_6 from '../images/sq_img_6.jpg';
import sq_img_7 from '../images/sq_img_7.png';
import person_6 from '../images/person_6.jpeg';
import person_5 from '../images/person_5.jpg';
import styles from '../style.js';
import NumberCounter from 'number-counter';
import Footer from '../component/Footer.jsx';
import { Link } from 'react-router-dom';
import JobContext from './JobContext';


const AboutUs = () => {
    const theme = useContext(JobContext);
    return (
        <>
            <div className={`${styles.flexCenter}    flex-col`}>
                <div className="text-center lg:items-center my-8">
                    <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        About Us
                    </h2>
                </div>
                <section className={` bg-hero_1 `}>
                    <div className={` bg-${theme.ThemeContext}-600/60  text-white m-0 py-10 px-4 lg:px-24 lg:py-20 `}>
                        <div className='text-center   text-3xl my-8'>
                            <h1>JobAdda Site Stats</h1>
                        </div>
                        <div className='text-center text-xl my-8'>
                            <p>A technology-based recruitment marketplace for blue and gray-collar hiring with a singular purpose: To provide meaningful livelihoods to the 250 million blue-collar workers of India, enabling 30 mn job seekers and 100k businesses to get connected every month. We have built a recruitment ecosystem that eliminates middlemen, fraudulent jobs, and vulgar jobs, ensuring genuine employees and employers.</p>
                        </div>
                        <div>
                            <div className="row flex  flex-wrap justify-center gap-10  my-9">
                                <div className=' flex flex-col  items-center '>
                                    <strong className='text-5xl'>
                                        <NumberCounter start={900} end={1123} delay={2} preFix="+" />
                                    </strong>
                                    <span className='text-base'>Candidate</span>
                                </div>
                                <div className=' flex flex-col  items-center ' >
                                    <strong className='text-5xl'>
                                        <NumberCounter start={1} end={54} delay={2} preFix="+" />
                                    </strong>
                                    <span className='text-base'>Jobs Posted</span>
                                </div>
                                <div className=' flex flex-col  items-center ' >
                                    <strong className='text-5xl'>
                                        <NumberCounter start={10} end={120} delay={2} preFix="+" />
                                    </strong>
                                    <span className='text-base'>Jobs Filled</span>
                                </div>
                                <div className=' flex flex-col  items-center '>
                                    <strong className='text-5xl'>
                                        <NumberCounter start={220} end={550} delay={2} preFix="+" />
                                    </strong>
                                    <span className='text-base'>Companies</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>



                <section className="site-section pb-0 my-8">
                    <div className="container">
                        <div className=" flex lg:grid grid-cols-12 items-center flex-col mx-6 lg:flex-row">
                            <div className="flex-1  col-span-6 mb-5 mb-lg-0 lg:mx-2">
                                <a data-fancybox data-ratio="2" href="https://vimeo.com/317571768" className="block__96788">
                                    <span className="play-icon"><span className="icon-play"></span></span>
                                    <img src={sq_img_6} alt="person" className="img-fluid lg:w-800 lg:h-[100vh] md:w-400 md:h-auto img-shadow rounded-md" />
                                </a>
                            </div>
                            <div className="flex-1 col-span-6  lg:ml-28">
                                <h2 className="section-title mb-3 text-3xl lg:mb-10">JobAdda For Freelancers, Web Developers</h2>
                                <p className="lead text-[20px] text-gray-400 lg:mb-10 lg:tracking-[1px]">We will help you make sure your current systems are up and running and up-to-date, with the latest security updates. We also help you migrate current systems, so you can save money.</p>
                                <p className=" text-base text-gray-400 mt-4 lg:mb-10 lg:tracking-[1px] ">With Development we will your help team getting backlogs finished and making sure deadlines are meet. We will supply anyhing from a single Developer to a Team of Developers</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="site-section pb-0 my-8">
                    <div className="container">
                        <div className=" flex  grid-cols-12 items-center flex-col  mx-6 lg:flex lg:flex-row-reverse ">
                            <div className="flex-1  col-span-6 mb-5 mb-lg-0 lg:mx-2">
                                <a data-fancybox data-ratio="2" href="https://vimeo.com/317571768" className="block__96788">
                                    <span className="play-icon"><span className="icon-play"></span></span>
                                    <img src={sq_img_7} alt="sqimt" className=" lg:w-800 lg:h-[100vh] md:w-400 md:h-auto img-shadow rounded-md" />
                                </a>
                            </div>
                            <div className="flex-1 col-span-6  lg:mr-28">
                                <h2 className="section-title mb-3 text-3xl lg:mb-10">Technology Management</h2>
                                <p className="lead text-[20px] text-gray-400 lg:mb-10 lg:tracking-[1px]">We will help you make sure your current systems are up and running and up-to-date, with the latest security updates. We also help you migrate current systems, so you can save money.</p>

                            </div>
                        </div>
                    </div>
                </section>


                <div className="text-center lg:items-center my-4">
                    <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Our Team
                    </h2>
                </div>
                <section className="site-section pb-0   my-8">
                    <div className="container">
                        <div className=" lg:grid grid-cols-12 flex items-center flex-col mx-6">
                            <div className="flex-1 mb-5 col-span-6 mb-lg-0 ">
                                <a data-fancybox data-ratio="2" href="https://vimeo.com/317571768" className="block__96788">
                                    <span className="play-icon"><span className="icon-play"></span></span>
                                    <img src={person_6} alt="persong" className="lg:w-800 lg:h-[100vh] md:w-400 md:h-auto img-shadow rounded-md" />
                                </a>
                            </div>
                            <div className=" col-span-6 lg:ml-20">
                                <h3 className=' text-3xl py-4'>Dilip kushwaha</h3>
                                <p className="text-muted text-lg text-[#ced4da] py-4">Creative Director</p>
                                <p className='text-lg text-gray-400 py-4'>Dilip has more than 15 years of experience in Online Education, Recruitments, & eCommerce space. He has been associated with Freshersworld since its early days. He defines & drives technology initiatives for Freshersworld.</p>
                                <div className={`social mt-4 flex text-${theme.ThemeContext}-600 gap-3`}>
                                    <Link to="#"><FaFacebook className="h-10 w-10" /></Link>
                                    <Link to="#"><FaInstagram className="h-10 w-10 " /></Link>
                                    <Link to="#"><FaLinkedin className="h-10 w-10 " /></Link>
                                    <Link to="#"><FaTwitter className="h-10 w-10 " /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="site-section pb-0 my-8">
                    <div className="container">
                        <div className=" flex  grid-cols-12 items-center flex-col  mx-6 lg:flex lg:flex-row-reverse ">
                            <div className="flex-1  col-span-6 mb-5 mb-lg-0 lg:ml-28">
                                <a data-fancybox data-ratio="2" href="https://vimeo.com/317571768" className="block__96788">
                                    <span className="play-icon"><span className="icon-play"></span></span>
                                    <img src={person_5} alt="person" className="img-fluid img-shadow rounded-md" />
                                </a>
                            </div>
                            <div className="flex-1 col-span-6 lg:mx-3">
                                <h3 className=' text-3xl'>Chintan Patel</h3>
                                <p className="text-muted text-lg text-[#ced4da]">Creative Director</p>
                                <p className='text-lg text-gray-400'>We work with some of the biggest organizations in the world, who use the HackerOne platform for their vulnerability coordination, bug bounty programs, and penetration testing, and the list keeps growing.</p>
                                <div className={`social mt-4 flex text-${theme.ThemeContext}-600 gap-3`}>
                                    <Link to="#"><FaFacebook className="h-10 w-10" /></Link>
                                    <Link to="#"><FaInstagram className="h-10 w-10 " /></Link>
                                    <Link to="#"><FaLinkedin className="h-10 w-10 " /></Link>
                                    <Link to="#"><FaTwitter className="h-10 w-10 " /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-[4.5rem]">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">

                        <div className="mt-10">
                            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 ">
                                <div>
                                    <dt className="text-lg leading-6 font-medium text-gray-900 text-center p-3">Our Mission</dt>
                                    <dd className="mt-2 text-base text-gray-500 text-center">
                                        Giving companies
                                        around the global,
                                        the performance and
                                        quality of Scandinavia
                                        work culture
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-lg leading-6 font-medium text-gray-900 text-center p-3">Our Vision</dt>
                                    <dd className="mt-2 text-base text-gray-500 text-center">
                                        Our vision is for to help our client grow better and more dynamic, making sure a timezone, limited office space and language differences is not an issue, but a opportunity for growth.
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div className="mt-10 flex justify-center">
                            <Link to="#" className="mx-4 text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Twitter</span>
                                <FaTwitter className="h-8 w-8" />
                            </Link>
                            <Link to="#" className="mx-4 text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Instagram</span>
                                <FaInstagram className="h-8 w-8" />
                            </Link>
                            <Link to="#" className="mx-4 text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Facebook</span>
                                <FaFacebook className="h-8 w-8" />
                            </Link>
                            <Link to="#" className="mx-4 text-gray-400 hover:text-gray-500">
                                <span className="sr-only">LinkedIn</span>
                                <SiLinkedin className="h-8 w-8" />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />

        </>
    );
};

export default AboutUs;
