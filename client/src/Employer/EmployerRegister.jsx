import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';

const EmployerRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        companyName: '',
        numEmployees: '0',
        isHiringManager: false,
        phone: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const navigator = useNavigate();

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validation rules
        const errors = {};
        if (!formData.companyName) {
            errors.companyName = 'Company name is required';
        }
        if (!formData.email) {
            errors.email = 'Email is required';
        }
        if (!formData.password) {
            errors.password = 'Password is required';
        }
        if (formData.phone.length!==10) {
            errors.phone = 'Phone is required';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }
        setIsLoading(true);
        try {
            const response = await axios.post("https://jobmanagementw.onrender.com/api/employer", formData);
            setIsLoading(false);
            // alert("Employer Created Sucessfully");
            navigator('/employer/log-in')
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return (
        <div className="max-w-md mx-auto my-10 px-6 py-8 bg-white shadow-md">
            <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6">Create an Employer Account</h2>
                <div className="mb-4">
                    <label htmlFor="companyName" className="block text-gray-700 font-bold mb-2">
                        Your company's name<span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="companyName"
                        id="companyName"
                        placeholder="Enter your company name"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />

                    {errors.companyName && <div className="text-red-500">{errors.companyName}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="numEmployees" className="block text-gray-700 font-bold mb-2">
                        Your company's number of employees
                    </label>
                    <input
                        type="number"
                        name="numEmployees"
                        id="numEmployees"
                        placeholder="Enter your company's number of employees"
                        value={formData.numEmployees}
                        onChange={handleChange}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.numEmployees && <div className="text-red-500">{errors.numEmployees}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="isHiringManager" className="inline-flex items-center">
                        <input
                            type="checkbox"
                            name="isHiringManager"
                            id="isHiringManager"
                            checked={formData.isHiringManager}
                            onChange={handleChange}
                            className="form-checkbox h-5 w-5 text-gray-600"
                        />
                        <span className="ml-2 text-gray-700 font-bold">Are you a hiring manager?</span>
                    </label>
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                        Your phone number
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.phone && <div className="text-red-500">{errors.phone}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Company Email id
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your company email address"
                        value={formData.email}
                        onChange={handleChange}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.email && <div className="text-red-500">{errors.email}</div>}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.password && <div className="text-red-500">{errors.password}</div>}
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Create Account
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EmployerRegister