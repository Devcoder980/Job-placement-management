import React from 'react';
import person1 from '../images/person_1.jpg';
import { GoLocation } from 'react-icons/go';
import { MdWorkOutline } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
const Profile = () => {

    return (
        <div className="dashboard-component text-black">
            <div className="dashboard">
                <div className=" mb-0">
                    <div className="col p-0">
                        <div className="sm:flex  h-[50vh] sm:h-[40vh]  rounded-md shadow-2xl ">
                            <div className=" flex justify-center mt-7 items-center flex-1  " data-ga-track="spa-event|EditProfile|UploadPhoto|EditOpen">
                                <img src={person1} width={100} className=' rounded-full' height={100} alt="" />
                            </div>
                            <div className=" flex-[2] ">
                                <div className=" text-center sm:text-start mt-4 text-2xl ">
                                    <div className="">
                                        <div className=" ">
                                            <span className="px-2 capitalize ">devcoder</span>
                                        </div>
                                    </div>
                                </div>
                                <div className=" mx-8 sm:mx-2 mt-5 sm:mt-9 flex justify-between  gap-5 text-base ">
                                    <div >
                                        <div className=" mb-3">
                                            <div className='flex justify-center items-center' >
                                                <GoLocation width={5} height={5} />
                                                <span className="txt px-2" name="Location" title="Vapi, INDIA">Vapi, INDIA</span>
                                            </div>
                                        </div>
                                        <div className=" mb-3">
                                            <div className='flex justify-start items-center' >
                                                <MdWorkOutline width={5} height={5} />
                                                <span className="txt px-2" name="Experience" title="Fresher">Fresher</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col right- col-7">
                                        <div className=" mb-3">
                                            <div className='mb-3' >
                                                <div className="flex justify-start items-center">
                                                    <FiPhoneCall width={5} height={5} />
                                                    <span className="px-2" name="Mobile" title="9898341346">9898341346</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" mb-3 ">
                                            <div className='mb-3' >
                                                <div className="flex justify-start items-center">
                                                    <AiOutlineMail width={5} height={5} />
                                                    <span className="px-2" name="Email" title="devcoder2323@gmail.com">devcoder2323@gmail.com</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white my-6 px-4'>
                <div>
                    <span className='text-2xl'>Key Skill</span>
                </div>
                <div className='gap-2 py-2'>
                    <span className='bg-gray-100 mx-1'>React Developer</span>
                    <span className='bg-gray-100 mx-1'>React Developer</span>
                    <span className='bg-gray-100 mx-1'>Node Developer</span>
                    <span className='bg-gray-100 mx-1'>Express Developer</span>
                    <span className='bg-gray-100 mx-1'>Frontedn Developer</span>
                    <span className='bg-gray-100 mx-1'>BAckend Developer</span>
                </div>
            </div>
            <div className='bg-white my-6 px-4'>
                <div>
                    <span className='text-2xl'>Education Skill</span>
                </div>
                <div className='gap-2 flex justify-between py-2'>
                    <span className='bg-gray-100 mx-1'>Veer Nervad South Gujrat Univesity</span>
                    <span className='bg-gray-100 mx-1'>2022-2025</span>
                    <span>Full Time</span>
                </div>
            </div>
            <div className='bg-white my-6 px-4'>
                <div>
                    <span className='text-2xl'>Profile Summary</span>
                </div>
                <div className='gap-2 flex justify-between py-2'>
                    <span className='bg-gray-100 mx-1'>Your Profile Summary should mention the highlights of your career and education, what your professional interests are, and what kind of a career you are looking for. Write a meaningful summary of more than 50 characters.</span>
                </div>
            </div>

        </div>
    );
};

export default Profile;
