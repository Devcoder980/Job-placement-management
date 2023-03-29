import React, { useState } from 'react';
import axios from 'axios';
import { SiPhotopea } from 'react-icons/si'
import { SiFiles } from 'react-icons/si';
import styles from '../style'
import { useLocation } from 'react-router-dom'
import { BsCurrencyDollar, BsCheck, BsCalendar, BsBriefcaseFill, BsPinMap, BsChevronDown } from 'react-icons/bs'
import { HiOutlineDocument } from 'react-icons/hi'

function ApplyForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [statee, setStatee] = useState('');
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!firstName.trim()) errors.firstName = 'First Name is required';
    if (!lastName.trim()) errors.lastName = 'Last Name is required';
    if (!email.trim()) errors.email = 'Email is required';
    if (!country.trim()) errors.country = 'Country is required';
    if (!streetAddress.trim()) errors.streetAddress = 'Street Address is required';
    if (!city.trim()) errors.city = 'City is required';
    if (!statee.trim()) errors.statee = 'Statee is required';
    if (!file) errors.file = 'Resume is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('country', country);
    formData.append('streetAddress', streetAddress);
    formData.append('city', city);
    formData.append('state', statee);
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/api/user/apply', formData);
      console.log(response.data);
      alert('Your application has been submitted successfully');
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again later');
    }
  };


  const { state } = useLocation();
  const { title, company, description, lastDate, location, jobType, sector, minSalary, maxSalary } = state.e;
  return (
    <>
      <div className='lg:flex justify-around '>
        <div className="relative flex min-h-full justify-center md:px-12 lg:px-0">
          <form onSubmit={handleSubmit}>
            {/* <div className="relative z-10 flex flex-1 flex-col bg-white py-4 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="block  font-bold mb-2 text-gray-900 text-3xl ">Personal Information</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
              <div className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6">
                <form onSubmit={handleSubmit}>
                  <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block  font-bold mb-2 text-gray-900">
                      First name
                    </label>
                    <div className="mt-2">
                      <input type="text"
                        value={firstName}
                        name="firstName"
                        onChange={(e) => setFirstName(e.target.value)}
                        className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {errors.firstName && <span className="error">{errors.firstName}</span>}
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block  font-bold mb-2 text-gray-900">
                      Last name
                    </label>
                    <div className="mt-2">

                      <input type="text"
                        value={lastName}
                        name="lastName"
                        onChange={(e) => setLastName(e.target.value)}
                        className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {errors.lastName && <span className="error">{errors.lastName}</span>}
                    </div>


                  </div>

                  <div className="sm:col-span-3">

                    <label htmlFor="first-name" className="block  font-bold mb-2 text-gray-900">
                      Email:
                    </label>
                    <div className="mt-2">

                      <input type="email"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      /> {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                   
                  </div>

                  <div className="sm:col-span-3">

                    <label htmlFor="first-name" className="block  font-bold mb-2 text-gray-900">
                      Country:
                    </label>
                    <div className="mt-2">

                      <input type="text"
                        value={country}
                        name="country"
                        onChange={(e) => setCountry(e.target.value)}
                        className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    {errors.country && <span className="error">{errors.country}</span>}
                    </div>

                  </div>

                  <div className="sm:col-span-3">

                    <label htmlFor="first-name" className="block  font-bold mb-2 text-gray-900">
                      Street Address
                    </label>
                    <div className="mt-2">

                      <input type="text"
                        value={streetAddress}
                        name="streetAddress"
                        onChange={(e) => setStreetAddress(e.target.value)}
                        className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    {errors.streetAddress && <span className="error">{errors.streetAddress}</span>}
                    </div>

                  </div>
                  <div className="sm:col-span-3">

                    <label htmlFor="first-name" className="block  font-bold mb-2 text-gray-900">
                      City:
                    </label>
                    <div className="mt-2">

                      <input type="text"
                        value={city}
                        name="city"
                        onChange={(e) => setCity(e.target.value)}
                        className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    {errors.city && <span className="error">{errors.city}</span>}
                    </div>

                  </div>
                  <div className="sm:col-span-3">

                    <label htmlFor="first-name" className="block  font-bold mb-2 text-gray-900">
                      State
                    </label>
                    <div className="mt-2">

                      <input type="text"
                        value={statee}
                        name="statee"
                        onChange={(e) => setStatee(e.target.value)}
                        className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                    {errors.statee && <span className="error">{errors.statee}</span>}
                    </div>

                  </div>

                  <div className="sm:col-span-3">

                    <label>
                      Resume:
                      <input type="file" name='file' onChange={(e) => setFile(e.target.files[0])} />
                      {errors.file && <span className="error">{errors.file}</span>}
                    </label>
                  </div>

                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div> */}

            <div className="relative z-10 flex flex-1 flex-col bg-white py-4 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="block  font-bold mb-2 text-gray-900 text-3xl ">Personal Information</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                <div className="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-6">

                  <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block  font-bold mb-2 text-gray-900">
                      First name
                    </label>
                    <div className="mt-2">
                      <input type="text"
                        value={firstName}
                        name="firstName"
                        onChange={(e) => setFirstName(e.target.value)}
                        className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {errors.firstName && <span className="error">{errors.firstName}</span>}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block  font-bold mb-2 text-gray-900">
                      Last name
                    </label>
                    <div className="mt-2">
                      <input type="text"
                        value={lastName}
                        name="lastName"
                        onChange={(e) => setLastName(e.target.value)}
                        className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {errors.lastName && <span className="error">{errors.lastName}</span>}
                    </div>
                  </div>

                  <div className="sm:col-span-full">
                    <label htmlFor="email" className="block  font-bold mb-2 text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input type="email"
                        value={email}
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      /> {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="sm:col-span-full">
                    <label htmlFor="country" className="block  font-bold mb-2 text-gray-900">
                      Country
                    </label>
                    <div className="mt-2">
                      <input type="text"
                        value={country}
                        name="country"
                        onChange={(e) => setCountry(e.target.value)}
                        className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {errors.country && <span className="error">{errors.country}</span>}
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label htmlFor="street-address" className="block  font-bold mb-2 text-gray-900">
                      Street address
                    </label>
                    <div className="mt-2">
                      <input type="text"
                        value={streetAddress}
                        name="streetAddress"
                        onChange={(e) => setStreetAddress(e.target.value)}
                        className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {errors.streetAddress && <span className="error">{errors.streetAddress}</span>}
                    </div>
                  </div>

                  <div className="sm:col-span-3 sm:col-start-1">
                    <label htmlFor="city" className="block  font-bold mb-2 text-gray-900">
                      City
                    </label>
                    <div className="mt-2">
                      <input type="text"
                        value={city}
                        name="city"
                        onChange={(e) => setCity(e.target.value)}
                        className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      />
                      {errors.city && <span className="error">{errors.city}</span>}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="region" className="block  font-bold mb-2 text-gray-900">
                      State / Province
                    </label>
                    <input type="text"
                      value={statee}
                      name="statee"
                      onChange={(e) => setStatee(e.target.value)}
                      className="appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {errors.statee && <span className="error">{errors.statee}</span>}
                  </div>
                </div>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <SiFiles className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input id='file' type="file" className="sr-only" name='file' onChange={(e) => setFile(e.target.files[0])} />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">PDF,WORD up to 10MB</p>
                  </div>
                </div>
              </div>
              <div>
                <button type='submit' className="w-full my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Submit
                </button>
              </div>
            </div>


          </form>
        </div>

        <div className="sm:contents lg:relative  bg-gradient-to-tr  from-teal-600 to-green-500 lg:flex-1">
          <div className=' bg-slate-900 flex  items-start py-20 justify-center lg:w-1/2'>

            <div className={` w-4/5 lg:items-center ${styles.paddingX} py-8   bg-white text-slate-900  lg:justify-between`}>
              <div >
                <h2 className="text-2xl font-bold leading-7 text-slate-900 sm:truncate sm:text-3xl sm:tracking-tight">
                  {title}
                </h2>
                <p className="  font-bold  text-gray-400 sm:truncate  sm:tracking-tight">
                  {company}
                </p>
                <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap ">
                  <div className="mt-3 mr-4 flex items-center text-sm text-gray-500">
                    <BsBriefcaseFill className=" h-5 mr-2 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    {jobType}
                  </div>
                  <div className="mt-3 mr-4   flex items-center text-sm text-gray-500">
                    <BsPinMap className=" h-5 mr-2 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    {location}
                  </div>
                  <div className="mt-3 mr-4   flex items-center text-sm text-gray-500">
                    <BsCurrencyDollar className=" h-5 mr-2 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    ${minSalary}k &ndash; ${maxSalary}k
                  </div>
                  <div className="mt-3 mr-4  flex items-center text-sm text-gray-500">
                    <BsCalendar className=" h-5 mr-2 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    {lastDate}
                  </div>
                </div>
                <div className="mt-3 mr-4   flex items-center text-lg text-gray-500">
                  <HiOutlineDocument className=" h-5 mr-2 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  {description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default ApplyForm;
