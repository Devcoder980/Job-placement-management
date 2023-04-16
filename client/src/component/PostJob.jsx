import { useState } from 'react';
import axios from 'axios';

const PostJob = () => {
    const jobTypes = ['part time', 'full time', 'internship', 'freelancer', 'permanent'];
    const [formData, setFormData] = useState({
        title: '',
        company: localStorage.getItem("companyName"),
        location: '',
        sector: '',
        minSalary: '',
        maxSalary: '',
        description: '',
        requirements: '',
        lastDate: '',
        jobType: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        // Send form data to server or perform other actions
        axios.post('http://localhost:5000/api/user/jobs', formData)
            .then(response => {
                alert("posted succesfully");
                console.log('Job posted successfully', response.data);
            })
            .catch(error => {
                console.error('Error posting job', error);
            });
    };

    return (
        <div className="flex mt-28 justify-center items-center h-screen">
            <form className="w-full max-w-lg bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <h2 className="text-xl font-bold mb-4 text-center">Post a Job</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="title"
                            name="title"
                            type="text"
                            placeholder="Enter job title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="location">
                            Location
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="location"
                            name="location"
                            type="text"
                            placeholder="Enter job location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="sector">
                            Sector
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="sector"
                            name="sector"
                            type="text"
                            placeholder="Enter job sector"
                            value={formData.sector}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 font-bold mb-2"
                            htmlFor="minSalary"
                        >
                            Minimum Salary
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="minSalary"
                            name="minSalary"
                            type="text"
                            placeholder="Enter minimum salary"
                            value={formData.minSalary}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="minSalary">
                            Maximum Salary
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="maxSalary"
                            name="maxSalary"
                            type="text"
                            placeholder="Enter maximum salary"
                            value={formData.maxSalary}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="company">
                            description
                        </label>
                        <textarea
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="description"
                            name="description"
                            type="text"
                            placeholder="Enter description "
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="company">
                            requirements
                        </label>
                        <textarea
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="requirements"
                            name="requirements"
                            type="text"
                            placeholder="Enter requirements "
                            value={formData.requirements}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="company">
                            Last Date
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="lastdate"
                            name="lastdate"
                            type="text"
                            placeholder="Enter company name"
                            value={formData.lastdate}
                            onChange={handleChange}
                            required
                        />

                    </div>
                    <div className='mb-4'>
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="company">
                            JobType
                        </label>
                        <select value={formData.jobType} onChange={handleChange}  name="jobType" id="" className=' border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                            <option value="Part-time">Part time</option>
                            <option value="Full-time">Full time</option>
                            <option value="Intership">Intership</option>
                            <option value="Permanent">Permanent</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button type='submit' className="w-full my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PostJob;