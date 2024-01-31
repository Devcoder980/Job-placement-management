import React, { useState } from 'react';
import axios from 'axios';

const EditProfile = () => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        experience: '',
        contact: '',
        skills: [],
        education: {
            institute: '',
            duration: '',
            mode: ''
        },
        summary: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Check if the input field is within the education object
        if (name.startsWith('education.')) {
            const educationField = name.split('.')[1]; // Extract the field name from the input name
            setFormData((prevFormData) => ({
                ...prevFormData,
                education: {
                    ...prevFormData.education,
                    [educationField]: value
                }
            }));
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                [name]: value
            }));
        }
    };


    const handleSkillsChange = (e) => {
        const { options } = e.target;
        const selectedSkills = Array.from(options)
            .filter((option) => option.selected)
            .map((option) => option.value);
        setFormData((prevFormData) => ({
            ...prevFormData,
            skills: selectedSkills
        }));
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Retrieve user ID from local storage
            const userId = localStorage.getItem('userId');

            // Include user ID in formData
            const dataToSend = { userId, ...formData };

            // Send request to update user
            const response = await axios.put('http://localhost:5000/api/user/update', dataToSend);
            console.log(response.data); // Handle the response as needed
        } catch (error) {
            console.error(error);
        }
    };

    return (

        <form onSubmit={handleSubmit} className='text-sm text-gray-900 bg-grey-100'>
            <div className='my-4'>
                <label className='block'>
                    Name:
                    <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        className='border border-gray-400 p-2 rounded-md w-full'
                    />
                </label>
            </div>
            <div className='my-4'>
                <label className='block'>
                    Location:
                    <input
                        type='text'
                        name='location'
                        value={formData.location}
                        onChange={handleChange}
                        className='border border-gray-400 p-2 rounded-md w-full'
                    />
                </label>
            </div>
            <div className='my-4'>
                <label className='block'>
                    Experience:
                    <input
                        type='text'
                        name='experience'
                        value={formData.experience}
                        onChange={handleChange}
                        className='border border-gray-400 p-2 rounded-md w-full'
                    />
                </label>
            </div>
            <div className='my-4'>
                <label className='block'>
                    Contact:
                    <input
                        type='text'
                        name='contact'
                        value={formData.contact}
                        onChange={handleChange}
                        className='border border-gray-400 p-2 rounded-md w-full'
                    />
                </label>
            </div>
            <div className='my-4'>
                <label className='block'>
                    Skills:
                    <select
                        multiple
                        name='skills'
                        value={formData.skills}
                        onChange={handleSkillsChange}
                        className='border border-gray-400 p-2 rounded-md w-full'
                    >
                        <option value='HTML'>HTML</option>
                        <option value='CSS'>CSS</option>
                        <option value='JavaScript'>JavaScript</option>
                        <option value='React'>React</option>
                    </select>
                </label>
            </div>
            <div className='my-4'>
                <label className='block'>
                    Institute:
                    <input
                        type='text'
                        name='education.institute'
                        value={formData.education.institute}
                        onChange={handleChange}
                        className='border border-gray-400 p-2 rounded-md w-full'
                    />
                </label>
            </div>
            <div className='my-4'>
                <label className='block'>
                    Duration:
                    <input
                        type='text'
                        name='education.duration'
                        value={formData.education.duration}
                        onChange={handleChange}
                        className='border border-gray-400 p-2 rounded-md w-full'
                    />
                </label>
            </div>
            <div className='my-4'>
                <label className='block'>
                    Mode:
                    <input
                        type='text'
                        name='education.mode'
                        value={formData.education.mode}
                        onChange={handleChange}
                        className='border border-gray-400 p-2 rounded-md w-full'
                    />
                </label>
            </div>
            <div className='my-4'>
                <label className='block'>
                    Summary:
                    <textarea
                        name='summary'
                        value={formData.summary}
                        onChange={handleChange}
                        className='border border-gray-400 p-2 rounded-md w-full'
                    />
                </label>
            </div>
            <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded-md'>
                Submit
            </button>
        </form>
    );
};

export default EditProfile;
