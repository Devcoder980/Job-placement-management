import React from 'react'
import styles from '../style'
import { FaUserCircle } from 'react-icons/fa'
import { BsTools } from 'react-icons/bs'

const ContactUs = () => {
  return (
    <main className=' bg-emerald-100/'>
      <section className={`${styles.marginX}  `}>
        <div className="row-container narrow my-5">
          <div className="row">
            <div className={`column-container ${styles.paddingY}`}>
              <div className="column centered text-center">
                <h1 className="text-[34px] py-2 font-extrabold">Contact Us</h1>
                <p className="lead font-serif text-lg text-gray-400  font-medium ">Please get in touch if you have any questions about Sales, Billing, or Technical Support</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row-container narrow my-5 ">
          <div id="contact-cards" className="row  lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="column-container mb-4 p-4  border-1  rounded-lg drop-shadow-2xl bg-white shadow-gray-400 flex-wrap col-span-6 flex justify-center items-center">
              <div className=" items-center flex justify-center flex-col centered">
                <FaUserCircle className='w-20 text-base h-20  text-violet-500 after:my-2' />
                <h2 className="card-title uppercase text-base font-extrabold my-5 text-violet-700">Sales, Accounts & Billing</h2>
                <p className='text-center text-[#6d7c90] mb-[15px] text-base '>Send us an email if you have any questions about billing or your Elegant Themes account</p>
                <form name="et-contactform" id="et_manage_form" action="#" method="post">
                  <div >
                    <div className="my-4">
                      <input id="input" type="text" placeholder="Name" className="w-full bg-[#6d7c901a] text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
                    </div>
                  </div>
                  <div className=" my-4">
                    <input id="input" type="email" placeholder="Email Address" className="w-full bg-[#6d7c901a] text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" />
                  </div>
                  <div>
                    <label className=' text-gray-500'>What can we help you with?</label>
                    <select tabindex="30" className='w-full bg-[#6d7c901a] text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"' id="contact-department" name="department" required="">
                      <option value="sales">Sales and General Information</option><option value="accounts">Accounts and Billing</option><option value="other">Other</option> </select>

                  </div>
                  <div className=" my-4 ">
                    <textarea className='w-full bg-[#6d7c901a] text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"' type="text" rows="4" id="contact-message" placeholder="Your Message" autocomplete="off" name="message" tabindex="40" required=""></textarea>
                  </div>
                  <div >
                    <div className="flex gap-3 py-3 ">
                      <div className='flex-2'>
                        <input tabindex="50" className="w-full bg-[#6d7c901a] text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue" id="contact-captcha" type="text" name="verif_box" value="" placeholder="Enter Code" autocomplete="off" required="" />
                      </div>
                      <div id="captcha" className='flex-1'>
                        <span>
                          <img src="https://www.elegantthemes.com/contact/verificationimage.php?5011" alt="verification image, type it in the box" width="100" height="48" className="verify_img" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <input className="inline-block py-5 align-middle w-[100%]  rounded-full px-[12px]   text-2xl bg-violet-600 text-white  shadow-cyan-500/50  bg-primary   font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]" type="submit" name="submit" id="contact-submit" value="Submit Message" tabindex="100" />
                </form>
                <p className='text-lg text-gray-500 py-5  text-center'>Data stored as outlined in our  <span className='text-violet-600 font-bold'>Privacy Privacy</span> </p>
              </div>
            </div>
            <div className="column-container mb-4 p-4  pt-8 border-1 pb-8  rounded-lg drop-shadow-2xl bg-white shadow-gray-400 flex-wrap col-span-6 flex justify-center items-center">
              <div className="">
                <div className=" flex items-center justify-center text-center flex-col">
                  <BsTools className="w-20 h-20  text-blue-500  my-10 bg-white" />
                  <h2 className="card-title uppercase text-lg pb-4 text-blue-400">Technical Support</h2>
                  <p className='font-serif text-base my-2 text-gray-400 font-bold'>If you ever need help, you can chat directly with our support team!</p>
                  <button className="inline-block text-lg py-5  my-4 align-middle w-[100%]  rounded-full px-[12px]   bg-blue-400 text-white  shadow-cyan-500/50  bg-primary   font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">Chat with support</button>
                  <h4 className='text-center  text-blue-400 font-semibold text-lg' >You must be an active Elegant Themes customer to receive support.</h4>
                </div>
                <a className='text-blue-400 w-full rounded-full bg-gray-100 text-center justify-center py-5 my-4 font-bold flex ' >Ask The Community</a>
                <a className='text-blue-400 w-full rounded-full bg-gray-100 text-center justify-center py-5 my-4 font-bold flex' >Browse Documentation</a>
                <a className='text-blue-400 w-full rounded-full bg-gray-100 text-center justify-center py-5 my-4 font-bold  flex' target="_blank">Join the Divi Facebook Group</a>
                <a className='text-blue-400 w-full rounded-full bg-gray-100 text-center justify-center py-5 my-4 font-bold flex ' >Explore the Blog</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-7">
          <div className="max-w-3xl mx-auto mt-12">
            <h2 className="text-3xl leading-9  text-center font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
              Frequently Asked Questions
            </h2>
            <div className="mt-6 border-t border-gray-200 pt-6">
              <dl>
                <div>
                  <dt className="text-lg leading-7">
                    <button className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                      <span className="font-medium text-gray-900">How do I negotiate a salary?</span>
                      <span className="ml-6 h-7 flex items-center">
                        <svg className="rotate-0 h-6 w-6 transform transition-transform duration-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.75 16.5L14.25 12L9.75 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd className="mt-2 pr-12">
                    <p className="text-base leading-6 text-gray-500">
                      To negotiate a salary, research the typical salary range for the position and your level of experience, and prepare to explain why you are worth a higher salary. You can also ask the employer about the salary range for the position or if there is any flexibility in the offered salary.
                    </p>
                  </dd>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <dt className="text-lg leading-7">
                    <button className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                      <span className="font-medium text-gray-900">What is the best way to prepare for a job interview?</span>
                      <span className="ml-6 h-7 flex items-center">
                        <svg className="rotate-0 h-6 w-6 transform transition-transform duration-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.75 16.5L14.25 12L9.75 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd className="mt-2 pr-12">
                    <p className="text-base leading-6 text-gray-500">
                      To prepare for a job interview, research the company and the position, review common interview questions, and practice your answers. It can also be helpful to dress professionally, arrive early, and bring a copy of your resume and any relevant documents.
                    </p>

                  </dd>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <dt className="text-lg leading-7">
                    <button className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                      <span className="font-medium text-gray-900">How do I write a resume?</span>
                      <span className="ml-6 h-7 flex items-center">
                        <svg className="rotate-0 h-6 w-6 transform transition-transform duration-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.75 16.5L14.25 12L9.75 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd className="mt-2 pr-12">
                    <p className="text-base leading-6 text-gray-500">
                      To write a resume, start with a header that includes your name and contact information. Then, include a summary or objective statement, followed by sections on your work experience, education, and skills. Be sure to tailor your resume to the specific job you are applying for and use action verbs and quantifiable achievements to describe your experience.
                    </p>

                  </dd>
                </div>

                <div className="mt-8 border-t border-gray-200 pt-6">
                  <dt className="text-lg leading-7">
                    <button className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                      <span className="font-medium text-gray-900">What is the best way to prepare for a job interview?</span>
                      <span className="ml-6 h-7 flex items-center">
                        <svg className="rotate-0 h-6 w-6 transform transition-transform duration-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.75 16.5L14.25 12L9.75 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd className="mt-2 pr-12">
                    <p className="text-base leading-6 text-gray-500">
                      To prepare for a job interview, research the company and the position, review common interview questions, and practice your answers. It can also be helpful to dress professionally, arrive early, and bring a copy of your resume and any relevant documents.
                    </p>

                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}

export default ContactUs