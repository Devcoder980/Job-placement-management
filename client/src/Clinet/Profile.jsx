import React, { useState, useEffect } from 'react';
import person1 from '../images/person_1.jpg';
import { GoLocation } from 'react-icons/go';
import { MdWorkOutline } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import axios from 'axios';

const Profile = () => {
    const [profile, setProfile] = useState([]);
    const token = localStorage.getItem('authToken');

  
    useEffect(() => {
        try {
            if (token) {
                // Make API call to get the user's information
                fetch('http://localhost:5000/api/user', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        setProfile(data)
                        console.log(data);
                        localStorage.setItem('username', data.firstName);
                        localStorage.setItem('useremail', data.email);
                        localStorage.setItem('usercontact', data.lastName);
                        localStorage.setItem('userId', data._id);
                    }
                    )
                    .catch(error => console.error(error));
            }
        } catch (error) {
            console.log(error)
        }
        console.log(profile);
    }, []);

    if (!profile) {
        return <div>Loading...</div>;
    }


    return (
        <div className="dashboard-component text-black">
            <div className="dashboard">
                <div className="mb-0">
                    <div className="col p-0">
                        <div className="sm:flex h-[50vh] sm:h-[40vh] rounded-md shadow-2xl">
                            <div className="flex justify-center mt-7 items-center flex-1" data-ga-track="spa-event|EditProfile|UploadPhoto|EditOpen">
                                <img src={person1} width={100} className="rounded-full" height={100} alt="" />
                            </div>
                            <div className="flex-[2]">
                                <div className="text-center sm:text-start mt-4 text-2xl">
                                    <div>
                                        <div className="">
                                            <span className="px-2 capitalize">{profile.firstName} {profile.lastName}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-8 sm:mx-2 mt-5 sm:mt-9 flex justify-between  gap-5 text-base">
                                    <div>
                                        <div className="mb-3">
                                            <div className="flex justify-center items-center">
                                                <GoLocation width={5} height={5} />
                                                <span className="txt px-2 text-gray-400" name="Location" title={profile.location}>{profile.location ? profile.location : 'N/A' }</span>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="flex justify-start items-center">
                                                <MdWorkOutline width={5} height={5} />
                                                <span className="txt px-2 text-gray-400" name="Experience" title={profile.experience ? profile.experience : 'N/A'}>{profile.experience ? profile.experience : 'N/A'}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col right- col-7">
                                        <div className="mb-3">
                                            <div className="mb-3">
                                                <div className="flex justify-start items-center">
                                                    <FiPhoneCall width={5} height={5} />
                                                    <span className="px-2 text-gray-400" name="Mobile" title={profile.contact ? profile.contact : 'N/A'}>{profile.contact ? profile.contact : 'N/A'}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3 ">
                                            <div className="mb-3">
                                                <div className="flex justify-start items-center">
                                                    <AiOutlineMail width={5} height={5} />
                                                    <span className="px-2 text-gray-400" name="Email" title={profile.email}>{profile.email ? profile.email : 'N/A' }</span>
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
                    {/* <div className='gap-2 py-2'>
                        {profile.skills.map((skill, index) => (
                            <span key={index} className='bg-gray-100 mx-1'>{skill}</span>
                        ))}
                    </div> */}
                </div>
                <div className='bg-white my-6 px-4'>
                    <div>
                        <span className='text-2xl'>Education Skill</span>
                    </div>
                    <div className='gap-2 flex justify-between py-2'>
                        {profile.education ? (
                            <>
                                <span className='bg-gray-100 mx-1'>{profile.education.institute}</span>
                                <span className='bg-gray-100 mx-1'>{profile.education.duration}</span>
                                <span>{profile.education.mode}</span>
                            </>
                        ) : (
                            <span>No education information available</span>
                        )}
                    </div>
                </div>

                <div className='bg-white my-6 px-4'>
                    <div>
                        <span className='text-2xl'>Profile Summary</span>
                    </div>
                    <div className='gap-2 flex justify-between py-2'>
                        <span className='bg-gray-100 mx-1'>{profile.summary}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
