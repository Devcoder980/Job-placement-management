import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import jobadda from '../images/joblogo.png';
import { BsArrowLeft } from 'react-icons/bs';

function Register() {
  const history = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateInputs = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.firstname) {
      newErrors.firstname = 'First name is required';
      valid = false;
    } else {
      newErrors.firstname = '';
    }

    if (!formData.lastname) {
      newErrors.lastname = 'Last name is required';
      valid = false;
    } else {
      newErrors.lastname = '';
    }

    if (!formData.email) {
      newErrors.email = 'Email address is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      valid = false;
    } else {
      newErrors.email = '';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
      valid = false;
    } else {
      newErrors.password = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateInputs()) {
      // Generate and send OTP
      axios
        .post('http://localhost:5000/api/otp/register/otp', {
          email: formData.email,
        })
        .then((res) => {
          // Assuming OTP generation is successful
          const otp = prompt('Please enter the OTP');
          if (otp) {
            // Verify OTP and register the user
            axios
              .post('https://jobmanagementw.onrender.com/api/user/register', {
                ...formData,
                otp,
              })
              .then((res) => {
                console.log(res);
                alert('Registration successful');
                history('/login');
              })
              .catch((error) => {
                console.error(error);
                // Handle registration error
              });
          }
        })
        .catch((error) => {
          console.error(error);
          // Handle OTP generation error
        });
    }
  };

  return (
    <div className="relative flex min-h-full justify-center md:px-12 lg:px-0">
      <div className="relative z-10 flex flex-1 flex-col bg-white py-4 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28">
        <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
          <div className="flex flex-col">
            <a aria-label="Home" className='flex bg-blue-600 items-center bg-c-600 px-2' href="/">

              <svg aria-hidden="true" viewBox="0 0 109 40" className="h-10 w-auto">
                <path fillRule="evenodd" clipRule="evenodd" d="M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Zm20 16c-7.264 0-13.321-5.163-14.704-12.02C4.97 22.358 6.343 21 8 21h24c1.657 0 3.031 1.357 2.704 2.98C33.32 30.838 27.264 36 20 36Z" fill="#fff">
                </path>
              </svg>
              <img src={jobadda} className="h-14 w-50 rounded-sm" alt="" />
            </a>
            <div className="mt-20"><h2 className="text-lg font-semibold text-gray-900">Get started for free</h2><p className="mt-2 text-sm text-gray-700">Already registered?
              <Link className="font-medium text-blue-600 hover:underline" to="/login"><b className=' text-lg'> Sign in </b></Link> to your account.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2">
            <div className="">

              <label htmlFor="first_name" className="mb-3 block text-sm font-medium text-gray-700">First name</label>

              <input id="first_name" type="text" onChange={handleInputChange} name="firstname" autoComplete="given-name" required="" className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm" />
              {errors.firstname && <span className="text-red-500 text-sm">{errors.firstname}</span>}
            </div>
            <div className="">
              <label htmlFor="last_name" className="mb-3 block text-sm font-medium text-gray-700">Last name</label>
              <input id="last_name" onChange={handleInputChange} type="text" name="lastname" autoComplete="family-name" required="" className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm" />
              {errors.lastname && <span className="text-red-500 text-sm">{errors.lastname}</span>}
            </div>
            <div className="col-span-full">
              <label htmlFor="email" className="mb-3 block text-sm font-medium text-gray-700">Email address</label>
              <input id="email" onChange={handleInputChange} type="email" name="email" autoComplete="email" required="" className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm" />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>
            <div className="col-span-full">
              <label htmlFor="password" className="mb-3 block text-sm font-medium text-gray-700">Password</label>
              <input id="password" onChange={handleInputChange} type="password" name="password" autoComplete="new-password" required="" className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm" aria-autoComplete="list" />
            </div>
            {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
            <div className="col-span-full">
              <button type="submit" className="group inline-flex items-center justify-center rounded-full py-4 px-4 text-md font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600 w-full" >
                <span>Sign up <span aria-hidden="true">→</span></span>
              </button>
            </div>
            <div className='col-span-full'>
              <Link
                to="/"
                className="flex items-center justify-center text-center bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 text-white py-2 px-6 rounded-full hover:bg-slate-600 transition duration-300"
              >
                <span aria-hidden="true">  <BsArrowLeft /></span>
                <span style={{ marginLeft: "5px" }}>Go Back Home</span>
              </Link>
            </div>


          </form>
        </div>
      </div>
      <div className="hidden sm:contents lg:relative lg:block bg-gradient-to-tr  from-blue-600 to-slate-500 lg:flex-1">

      </div>
    </div>

  );
}

export default Register;
