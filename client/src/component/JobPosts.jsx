import React, { useState, useEffect ,useContext} from 'react'
import { ThemeContext } from './JobContext';

const JobPosts = () => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});
    const [employe, setEmploye] = useState([]);
   
    useEffect(() => {
        const token = localStorage.getItem('authTokenEmployer'); // get the token from local storage
        try {
            if (token) {
                // Make API call to get the user's information
                fetch('https://jobmanagementw.onrender.com/api/employer', {
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
                            fetch(`https://jobmanagementw.onrender.com/api/user/jobs/${data.companyName}`)
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
        console.log(user)
    }, []);

    const handleDelete = (id) => {
        setLoading(true);

        fetch(`http://localhost:5000/api/user/jobs/${id}`, { method: 'DELETE' })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete record');
                }
                return response.json();
            })
            .then(data => {
                // Remove the deleted record from the list of employees
                setEmploye(employe.filter(e => e._id !== id));
                console.log("Delted");
                console.log(employe);
                
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    let theme=useContext(ThemeContext);
    if(!theme) {
        theme='slate';
    }
    return (    
        <>

            <div className="bg-gray-100 p-6">
                <div className="flex flex-row items-center">
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
                        <h1 className="text-center text-3xl py-3">Job Posted</h1>
                        {/* Add your table component here */}
                        <div>
                            <div class={`flex flex-col bg-${theme}-900 text-white`}>
                                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                        <div class="overflow-hidden">
                                            <table class="min-w-full text-left text-sm font-light">
                                                <thead class="border-b font-medium dark:border-neutral-500">
                                                    <tr>
                                                        <th scope="col" class="px-6 py-4">Delete</th>
                                                        <th scope="col" class="px-6 py-4">#</th>
                                                        <th scope="col" class="px-6 py-4">Job title</th>
                                                        <th scope="col" class="px-6 py-4">Location</th>
                                                        <th scope="col" class="px-6 py-4">Sector</th>
                                                        <th scope="col" class="px-6 py-4">MinSalary</th>
                                                        <th scope="col" class="px-6 py-4">MaxSalary</th>
                                                        <th scope="col" class="px-6 py-4">jobType</th>
                                                        <th scope="col" class="px-6 py-4">Requirement</th>
                                                        <th scope="col" class="px-6 py-4">lastDate</th>
                                                        <th scope="col" class="px-6 py-4">Created DAte</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        employe.map((e, i) => (
                                                            <tr class="border-b transition duration-300 ease-in-out  dark:border-neutral-500 dark:hover:bg-neutral-600">
                                                                <td class="whitespace-nowrap px-6 py-4 font-bold text-2xl cursor-pointer text-red-600"
                                                                    disabled={loading}
                                                                    onClick={() => handleDelete(e._id)}
                                                                >X</td>
                                                                <td class="whitespace-nowrap px-6 py-4 font-medium">{i + 1}</td>
                                                                <td class="whitespace-nowrap px-6 py-4">{e.title}</td>
                                                                <td class="whitespace-nowrap px-6 py-4">{e.location}</td>
                                                                <td class="whitespace-nowrap px-6 py-4">{e.sector}</td>
                                                                <td class="whitespace-nowrap px-6 py-4">{e.minSalary}</td>
                                                                <td class="whitespace-nowrap px-6 py-4">{e.maxSalary}</td>
                                                                <td class="whitespace-nowrap px-6 py-4">{e.jobType}</td>
                                                                <td>{e.requirements}</td>
                                                                <td class="whitespace-nowrap px-6 py-4">{e.lastDate.substring(0,10)}</td>
                                                                <td class="whitespace-nowrap px-6 py-4">{e.createdDate.substring(0, 10)}</td>
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
    )
}

export default JobPosts