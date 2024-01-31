import React, { useState, useEffect } from 'react';
import axios from 'axios';

const History = () => {
    const [jobDetails, setJobDetails] = useState([]); // State to store job details
    const  [jobs,setJobs]=useState([]); // State to store
    const userEmail = localStorage.getItem('useremail'); // Retrieve email from local storage

    useEffect(() => {
        // Function to fetch user data based on the email
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/user/apply/email/${userEmail}`);
                setJobDetails(response.data.jobDetails); // Set the retrieved job details in state
                setJobs(response.data.jobs);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        // Call the function to fetch user data
        fetchUserData();
    }, [userEmail]); // Fetch data when email changes or component mounts

    return (
        <div className="container p-2 mx-auto sm:p-4 text-gray-800">
            <h2 className="mb-4 text-2xl font-semibold leading">Job Apply History</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full text-xs">
                    <colgroup>
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className="w-24" />
                    </colgroup>
                    <thead className="bg-gray-300">
                        <tr className="text-left">
                            <th className="p-3">Job ID</th>
                            <th className="p-3">Title</th>
                            <th className="p-3">Company</th>
                            <th className="p-3">Location</th>
                            <th className="p-3 text-right">Amount</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobDetails.map((job, index) => {
                            const correspondingJob = jobs.find(j => j._id === job.jobId);
                            return (
                                <tr key={index} className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                                    <td className="p-3">{job.jobId}</td>
                                    <td className="p-3">{correspondingJob.title}</td>
                                    <td className="p-3">{correspondingJob.company}</td>
                                    <td className="p-3">{correspondingJob.location}</td>
                                    <td className="p-3 text-right">{correspondingJob.maxSalary}</td>
                                    <td className="p-3 text-right">
                                        <span className="px-3 py-1 font-semibold rounded-md bg-violet-600 text-gray-50">
                                            <span>{job.status}</span>
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default History;
