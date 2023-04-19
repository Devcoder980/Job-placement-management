import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HiUser } from 'react-icons/hi';
import { HiArrowRight } from 'react-icons/hi';

function EmployerDashboard() {
    const [user, setUser] = useState({});
    const [employe, setEmploye] = useState([]);
   
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
        <div>
            <>
                <div className="flex text-white flex-col  py-16  items-center pt-4 bg-slate-900">
                    <div className="rounded-full w-24 flex justify-center items-center h-24  bg-slate-900" >
                        <HiUser className="w-20 h-20 text-white" />
                    </div>
                    <h2 className="font-medium text-xl mt-2">{user.companyName}</h2>
                    <h2 className="font-medium text-xl mt-2">{user.email}</h2>
                    {/* <h2 className="font-medium text-xl mt-2">{user.phone}</h2> */}
                    <h2 className="font-medium text-xl mt-2">{user.isHiringManager ? 'HiringManager' : 'No'}</h2>
                    <p className="text-center my-4 whitespace-break-spaces  w-80 ">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>

                </div>
                <div className='bg-blue-700 text-center text-2xl font-bold text-white h-14 flex justify-center items-center'>
                    <p className=" cursor-pointer">
                        <Link to="../employer/jobposts">Job Post Lists</Link>
                    </p>
                    <HiArrowRight className=' pl-2 mt-1 cursor-pointer' />
                </div>
                <div className="bg-gray-100 p-6">
                    <div className="flex flex-row items-center">
                        <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
                            <h1 className="text-center text-3xl py-3">Job Applied Candidate</h1>
                            {/* Add your table component here */}
                            <div>
                                <div class="flex flex-col bg-slate-900 text-white">
                                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                            <div class="overflow-hidden">
                                                <table class="min-w-full text-left text-sm font-light">
                                                    <thead class="border-b font-medium dark:border-neutral-500">
                                                        <tr>
                                                            <th scope="col" class="px-6 py-4">#</th>
                                                            <th scope="col" class="px-6 py-4">sr no.</th>
                                                            <th scope="col" class="px-6 py-4">Job title</th>
                                                            <th scope="col" class="px-6 py-4">First</th>
                                                            <th scope="col" class="px-6 py-4">Last</th>
                                                            <th scope="col" class="px-6 py-4">Email</th>
                                                            <th scope="col" class="px-6 py-4">City</th>
                                                            <th scope="col" class="px-6 py-4">State</th>
                                                            <th scope="col" class="px-6 py-4">Street Address</th>
                                                            <th scope="col" class="px-6 py-4">Country</th>
                                                            <th scope="col" class="px-6 py-4">Resume File Name</th>
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
                                                                    <td class="whitespace-nowrap px-6 py-4">{e.city}</td>
                                                                    <td class="whitespace-nowrap px-6 py-4">{e.state}</td>
                                                                    <td class="whitespace-nowrap px-6 py-4">{e.streetAddress}</td>
                                                                    <td class="whitespace-nowrap px-6 py-4">{e.country}</td>
                                                                    <td class="whitespace-nowrap px-6 py-4">{e.file}</td>
                                                                </tr>
                                                            ))

                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-yellow-400 h-full w-6"></div>
                    </div>
                </div>

            </>

        </div>
    );
}

export default EmployerDashboard