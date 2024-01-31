import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiUser } from 'react-icons/hi';
import { HiArrowRight } from 'react-icons/hi';
import JobPosts from '../component/JobPosts.jsx';
import { HiOutlineX } from 'react-icons/hi';
import axios from 'axios';
import styles from '../style.js'
function EmployerDashboard() {
    const [user, setUser] = useState({});
    const [employe, setEmploye] = useState([]);

    // State variables
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [id, setId] = useState('');
    const [emailSend, setEmail] = useState('');
    // Function to open the popover
    const openPopover = (e) => {
        setIsPopoverOpen(true);
        setId(e._id);
        setEmail(e.email);
    };

    // Function to close the popover
    const closePopover = () => {
        setIsPopoverOpen(false);
    };

    // Function to handle dropdown change
    const handleDropdownChange = (e) => {
        setSelectedOption(e.target.value);
    };

    // Function to handle subscription
    const handleSubscription = () => {
        if (id) {
            axios.post(`http://localhost:5000/api/email/updateStatus/${id}`, { selectedOption: selectedOption,emailSend:emailSend })
                .then((response) => {
                    console.log(response.data);
                    // Handle success if needed
                })
                .catch((error) => {
                    console.log(error);
                    // Handle error if needed
                });

            closePopover();
        }
        else {
            console.log(id);
        }

    };


    useEffect(() => {
        const token = localStorage.getItem('authTokenEmployer'); // get the token from local storage
        try {
            if (token) {
                // Make API call to get the user's information
                fetch('http://localhost:5000/api/employer', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        setUser(data)
                        localStorage.setItem('companyName', data.companyName)
                        try {

                            // Make API call to get the user's information
                            console.log(data.companyName)
                            fetch(`http://localhost:5000/api/user/apply/${data.companyName}`)
                                .then(response => response.json())
                                .then(data => {
                                    setEmploye(data)
                                    console.log(data)
                                }
                                )
                                .catch(error => console.error(error));

                        } catch (error) {
                            console.log(error)
                        }
                    }
                    )
                    .catch(error => console.error(error));
            }
        } catch (error) {
            console.log(error)
        }


    }, []);



    if (!user) {
        return (<p>user not her</p>); // don't show anything if the user is not logged in or the data is not loaded yet
    }

    return (
        <div className={`${styles.paddingX}`}>
            <>
                <div className="flex items-center justify-center w-full py-8">
                    {/* Card code block start */}
                    <div className="bg-white dark:bg-gray-800 shadow rounded">
                        <div className="relative">
                            <img className="h-56 shadow rounded-t w-full object-cover object-center" src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_29.png" alt />
                            <div className="inset-0 m-auto w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10 rounded border-2 shadow border-white">
                                <img className="w-full h-full  object-cover rounded" src="https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg" alt />
                            </div>
                        </div>

                        <div className="flex text-slate-900 flex-col items-center md:items-start md:flex-start justify-center  py-16 mt-10 pl-10 pt-4 ">

                            <h2 className="font-medium text-xl mt-2">{user.companyName}</h2>
                            <h2 className="font-medium text-xl mt-2">{user.email}</h2>
                            <h2 className="font-medium text-xl mt-2">{user.phone}</h2>
                            <h2 className="font-medium text-xl mt-2">{user.isHiringManager ? 'HiringManager' : 'No'}</h2>
                            <p className="text-center my-4 whitespace-break-spaces  w-80 ">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>

                        </div>
                    </div>
                    {/* Card code block end */}
                </div>

                <JobPosts />

                {isPopoverOpen && (
                    <div className="absolute  md:right-[40%] z-[999] w-96 whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none" role="dialog" aria-labelledby="label" aria-describedby="label">
                        <button className="absolute top-0 right-0 p-2" onClick={closePopover}>
                            <HiOutlineX className="h-5 w-5 text-blue-gray-400" />
                        </button>
                        <div className="mb-4">
                            <label htmlFor="subscription-option" className="block mb-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900">Application Status Option</label>
                            <select
                                id="subscription-option"
                                className="w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all focus:border-gray-900 focus:outline-0"
                                value={selectedOption}
                                onChange={handleDropdownChange}
                            >
                                <option value="">Select an option</option>
                                <option value="reject">Reject</option>
                                <option value="accept">Accept</option>
                                <option value="pending">Pending</option>
                            </select>
                        </div>
                        <button
                            className="w-full mt-4 select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            onClick={handleSubscription}
                        >
                            Update
                        </button>
                    </div>
                )}
                <div className="container p-2 mt-7 mx-auto sm:p-4 text-gray-800">
                    <h1 className="mb-4 text-2xl font-semibold  leading-3">Job Applied Candidate</h1>

                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <thead className="bg-gray-300" >
                                <tr className="text-left">
                                    <th scope="col" className="p-3">#</th>
                                    <th scope="col" className="p-3">sr no.</th>
                                    <th scope="col" className="p-3">Job title</th>
                                    <th scope="col" className="p-3">First</th>
                                    <th scope="col" className="p-3">Last</th>
                                    <th scope="col" className="p-3">Email</th>
                                    <th scope="col" className="p-3">State</th>
                                    <th scope="col" className="p-3">City</th>
                                    <th scope="col" className="p-3">Status</th>
                                    <th scope="col" className="p-3">Street Address</th>
                                    <th scope="col" className="p-3">Country</th>
                                    <th scope="col" className="p-3">Resume File Name</th>
                                    <th scope="col" className="p-3">Action</th>
                                    <th scope="col" className="p-3">Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employe.map((e, i) => (
                                        <tr class="border-b transition duration-300 ease-in-out  dark:border-neutral-500 dark:hover:bg-neutral-600">

                                            <td class="whitespace-nowrap px-6 py-4 font-medium">

                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4 font-medium">{i + 1}</td>
                                            <td class="whitespace-nowrap px-6 py-4">{e.title}</td>
                                            <td class="whitespace-nowrap px-6 py-4">{e.firstName}</td>
                                            <td class="whitespace-nowrap px-6 py-4">{e.lastName}</td>
                                            <td class="whitespace-nowrap px-6 py-4">{e.email}</td>
                                            <td class="whitespace-nowrap px-6 py-4">{e.state}</td>
                                            <td class="whitespace-nowrap px-6 py-4">{e.city}</td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                <span className={`h-10 rounded-lg p-2 ${e.status === 'reject' ? 'bg-red-400' : e.status === 'pending' ? 'bg-yellow-400' : 'bg-green-400'}`}>
                                                    {e.status}
                                                </span>
                                            </td>
                                            <td class="whitespace-nowrap px-6 py-4">{e.streetAddress}</td>
                                            <td class="whitespace-nowrap px-6 py-4">{e.country}</td>
                                            <td class="whitespace-nowrap px-6 py-4">{e.file}</td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                <button
                                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                    onClick={() => openPopover(e)}
                                                >
                                                    Edit Status
                                                </button>
                                            </td>
                                            <th className="whitespace-nowrap px-6 py-4">
                                                <a href={`http://localhost:5000/api/user/apply/download/${e.file}`}>
                                                    <button
                                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                    >
                                                        Download Resume
                                                    </button>
                                                </a>
                                            </th>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                    </div>

                </div>

            </>

        </div>
    );
}

export default EmployerDashboard