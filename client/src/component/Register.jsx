import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import jobadda from '../images/joblogo.png'
function Register() {


  return (
    <div class="relative flex min-h-full justify-center md:px-12 lg:px-0">
      <div class="relative z-10 flex flex-1 flex-col bg-white py-4 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28">
        <div class="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
          <div class="flex flex-col">
            <a aria-label="Home"  className='flex items-center bg-emerald-600 px-2' href="/">

              <svg aria-hidden="true" viewBox="0 0 109 40" className="h-10 w-auto">
                <path fillRule="evenodd" clip-rule="evenodd" d="M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Zm20 16c-7.264 0-13.321-5.163-14.704-12.02C4.97 22.358 6.343 21 8 21h24c1.657 0 3.031 1.357 2.704 2.98C33.32 30.838 27.264 36 20 36Z" fill="#fff">
                </path>
              </svg>
              <img src={jobadda} className="h-14 w-50 rounded-sm" alt="" />
            </a>
            <div class="mt-20"><h2 class="text-lg font-semibold text-gray-900">Get started for free</h2><p class="mt-2 text-sm text-gray-700">Already registered?
              <Link class="font-medium text-emerald-600 hover:underline" to="/login">Sign in</Link> to your account.</p>
            </div>
          </div>

          <form action="#" class="mt-10 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2">
            <div class="">

              <label for="first_name" class="mb-3 block text-sm font-medium text-gray-700">First name</label>

              <input id="first_name" type="text" name="first_name" autocomplete="given-name" required="" class="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-emerald-500 sm:text-sm" />

            </div>
            <div class="">
              <label for="last_name" class="mb-3 block text-sm font-medium text-gray-700">Last name</label>
              <input id="last_name" type="text" name="last_name" autocomplete="family-name" required="" class="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-emerald-500 sm:text-sm" />

            </div>
            <div class="col-span-full">
              <label for="email" class="mb-3 block text-sm font-medium text-gray-700">Email address</label>
              <input id="email" type="email" name="email" autocomplete="email" required="" class="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-emerald-500 sm:text-sm" />

            </div>
            <div class="col-span-full">
              <label for="password" class="mb-3 block text-sm font-medium text-gray-700">Password</label>
              <input id="password" type="password" name="password" autocomplete="new-password" required="" class="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-emerald-500 sm:text-sm" aria-autocomplete="list" />
            </div>

            <div class="col-span-full">
              <button class="group inline-flex items-center justify-center rounded-full py-4 px-4 text-md font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-emerald-600 text-white hover:text-slate-100 hover:bg-emerald-500 active:bg-emerald-800 active:text-emerald-100 focus-visible:outline-emerald-600 w-full" type="submit">
                <span>Sign up <span aria-hidden="true">→</span></span>
              </button>
            </div>
          </form></div>
      </div>
      <div className="hidden sm:contents lg:relative lg:block bg-gradient-to-tr  from-teal-600 to-green-500 lg:flex-1">

      </div>
    </div>

  );
}

export default Register;
