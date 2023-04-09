import React, { useState } from 'react'
import { SiGooglecalendar } from 'react-icons/si';
import { HiHand } from 'react-icons/hi';
import styles from '../style';
import axios from 'axios';
// import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'
const NewsLetter = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
   
  const [fromData, setFromData] = useState({
    email: '',
    
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFromData({ ...fromData, [name]: value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/user/newsletter', fromData)
      .then((res) => {
        console.log(res);
        setIsSubmitted(true);
        // Handle succesfully
      })
      .catch((e) => {
        console.log(e);
        // handle error
      })
  }
    return (
        <>
            <div className={` relative  isolate overflow-hidden bg-${styles.backgroundTheme}-900 py-16 sm:py-24 lg:py-32 ${styles.paddingX} `}>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
                            <p className="mt-4 text-lg leading-8 text-gray-300">
                             There's nothing worse than slaving away writing awesome stuff when the numbers who subscribe to your newsletter is massively low
                            </p>
                            {isSubmitted ? (
                                <div className='text-center text-lg text-blue-600 '> Thank you for Subscribe</div>
                            ) : (

                                <form onSubmit={handleSubmit} className="mt-6 flex max-w-md gap-x-4" >
                                    
                                    <input
                                        
                                        onChange={handleInputChange}
                                        name="email"
                                        type="email"
                                        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                        placeholder="Enter your email"
                                    />
                                    
                                    <input type="submit" className="flex-none cursor-pointer  rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500" value="Subscribe" />
                                </form>
                            )}

                        </div>
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <SiGooglecalendar className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
                                <dd className="mt-2 leading-7 text-gray-400">
                                    Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                                </dd>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <HiHand className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <dt className="mt-4 font-semibold text-white">No spam</dt>
                                <dd className="mt-2 leading-7 text-gray-400">
                                    Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <svg
                    className="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6"
                    viewBox="0 0 1155 678"
                    fill="none">
                    <path
                        fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)" fillOpacity=".3"
                        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                        <linearGradient
                            id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a"
                            x1="1155.49"
                            x2="-78.208"
                            y1=".177"
                            y2="474.645"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#9089FC" />
                            <stop offset={1} stopColor="#FF80B5" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </>
    )
}

export default NewsLetter