import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Register() {


  return (

    <form className="bg-white p-6 rounded-lg shadow-md lg:mx-72 my-11">
      <h2 className="text-2xl font-medium mb-4">Create an Account</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Name
        </label>
        <input type="text" name="name" id="name"
          className="w-full px-4 py-2 rounded-lg border  border-gray-300" />

      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <input type="email" name="email" id="email" className={`w-full px-4 py-2 rounded-lg border  border-gray-300 `} />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
          Password
        </label>
        <input type="password" name="password" id="password" className={`w-full px-4 py-2 rounded-lg border `} />

      </div>

      <button
        type="submit"
        className={`w-full bg-emerald-600 text-white py-2 px-4 rounded-lg  }`}>
            Submit
      </button>
    </form>
  );
}

export default Register;
