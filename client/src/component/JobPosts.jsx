import React, { useState, useEffect, useContext } from 'react';
import JobContext from './JobContext';

const JobPosts = () => {
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({});
    const [employe, setEmploye] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('authTokenEmployer');

        try {
            if (token) {
                fetch('http://localhost:5000/api/employer', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {
                        setUser(data);
                        localStorage.setItem('companyName', data.companyName);
                        try {
                            fetch(`http://localhost:5000/api/user/jobs/${data.companyName}`)
                                .then((response) => response.json())
                                .then((data) => {
                                    setEmploye(data);
                                })
                                .catch((error) => console.error(error));
                        } catch (error) {
                            console.log(error);
                        }
                    })
                    .catch((error) => console.error(error));
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    const handleDelete = (id) => {
        setLoading(true);

        fetch(`http://localhost:5000/api/user/jobs/${id}`, { method: 'DELETE' })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to delete record');
                }
                return response.json();
            })
            .then((data) => {
                setEmploye(employe.filter((e) => e._id !== id));
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    let theme = useContext(JobContext);

    if (!theme) {
        theme = 'slate';
    }

    return (
        <>
            <div className="container p-2 mx-auto sm:p-4   text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leadi">Job Posted</h2>
                <div className="overflow-x-auto">
                    <table className={`w-full p-6 text-xs text-left whitespace-nowrap `}>
                        <colgroup>
                            <col className="w-1/12" />
                            <col className="w-1/12" />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead>
                            <tr className="bg-gray-300">
                                <th className="p-3">Delete</th>
                                <th className="p-3">#</th>
                                <th className="p-3">Job title</th>
                                <th className="p-3">Location</th>
                                <th className="p-3">Sector</th>
                                <th className="p-3">MinSalary</th>
                                <th className="p-3">MaxSalary</th>
                                <th className="p-3">jobType</th>
                                <th className="p-3">Requirement</th>
                                <th className="p-3">lastDate</th>
                                <th className="p-3">Created DAte</th>
                            </tr>
                        </thead>
                        <tbody className="border-b bg-gray-50 border-gray-300">
                            {employe.map((e, i) => (
                                <tr key={e._id} className="border-b transition duration-300 ease-in-out  dark:border-neutral-500 dark:hover:bg-neutral-600">
                                    <td className="px-3 py-2 font-bold text-2xl cursor-pointer text-red-600" disabled={loading} onClick={() => handleDelete(e._id)}>X</td>
                                    <td className="px-3 py-2">{i + 1}</td>
                                    <td className="px-3 py-2">{e.title}</td>
                                    <td className="px-3 py-2">{e.location}</td>
                                    <td className="px-3 py-2">{e.sector}</td>
                                    <td className="px-3 py-2">{e.minSalary}</td>
                                    <td className="px-3 py-2">{e.maxSalary}</td>
                                    <td className="px-3 py-2">{e.jobType}</td>
                                    <td className="px-3 py-2">{e.requirements}</td>
                                    <td className="px-3 py-2">{e.lastDate.substring(0, 10)}</td>
                                    <td className="px-3 py-2">{e.createdDate.substring(0, 10)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default JobPosts;
