import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import sq_img_6 from '../images/sq_img_6.jpg'
const AboutUs = () => {
    return (
        <>
            <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="lg:text-center lg:items-center">
                        <div className='flex justify-center items-center'>
                            <img className="h-8 w-100 items-center" src="https://cdn.technologyadvice.com/wp-content/uploads/2019/05/JobAdder-Logo-Blue.png" alt="Logo" />
                        </div>
                        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            About Us
                        </h2>
                    </div>
                    <div className="mt-10">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                            <div>
                                <dt className="text-lg leading-6 font-medium text-gray-900">Our Mission</dt>
                                <dd className="mt-2 text-base text-gray-500">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt magna et sagittis fermentum.
                                </dd>
                            </div>
                            <div>
                                <dt className="text-lg leading-6 font-medium text-gray-900">Our Vision</dt>
                                <dd className="mt-2 text-base text-gray-500">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt magna et sagittis fermentum.
                                </dd>
                            </div>
                        </dl>
                    </div>
                    <div className="mt-10 flex justify-center">
                        <a href="#" className="mx-4 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <FaTwitter className="h-6 w-6" />
                        </a>
                        <a href="#" className="mx-4 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Instagram</span>
                            <FaInstagram className="h-6 w-6" />
                        </a>
                        <a href="#" className="mx-4 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Facebook</span>
                            <FaFacebook className="h-6 w-6" />
                        </a>
                        <a href="#" className="mx-4 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">LinkedIn</span>
                            <SiLinkedin className="h-6 w-6" />
                        </a>
                    </div>
                </div>
            </div>
            <section className="site-section pb-0 ">
                <div className="container">
                    <div className=" flex items-center flex-col mx-6">
                        <div className="flex-1 mb-5 mb-lg-0 ">
                            <a data-fancybox data-ratio="2" href="https://vimeo.com/317571768" className="block__96788">
                                <span className="play-icon"><span className="icon-play"></span></span>
                                <img src={sq_img_6} alt="Image" className="img-fluid img-shadow"/>
                            </a>
                        </div>
                        <div className="flex-1 ">
                            <h2 className="section-title mb-3 text-4xl">JobBoard For Freelancers, Web Developers</h2>
                            <p className="lead text-2xl text-gray-400 mt-4">Eveniet voluptatibus voluptates suscipit minima, cum voluptatum ut dolor, sed facere corporis qui, ea quisquam quis odit minus nulla vitae. Sit, voluptatem.</p>
                            <p className="text-lg text-gray-400 mt-4">Ipsum harum assumenda in eum vel eveniet numquam, cumque vero vitae enim cupiditate deserunt eligendi officia modi consectetur. Expedita tempora quos nobis earum hic ex asperiores quisquam optio nostrum sit!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
