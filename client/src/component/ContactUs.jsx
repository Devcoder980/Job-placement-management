import React, { useState } from 'react'
import styles from '../style'
import { FaUserCircle } from 'react-icons/fa'
import NewsLetter from './NewsLetter'
import Footer from './Footer'
import axios from 'axios'
import ThankYouMessage from './ThankYouMessage'
import map from '../images/google.png'



const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [fromData, setFromData] = useState({
    name: '',
    email: '',
    question: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFromData({ ...fromData, [name]: value });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/user/contactus', fromData)
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
      {isSubmitted ? (
        <ThankYouMessage />

      ) : (
        <main className={` bg-${styles.backgroundTheme}-100/`}>
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


                    <form name="et-contactform" onSubmit={handleSubmit}>
                      <div >
                        <div className="my-4">
                          <input id="input" name='name' type="text" onChange={handleInputChange} placeholder="Name" className={`w-full bg-[#6d7c901a] text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-${styles.backgroundTheme}-500 focus:shadow-outline-${styles.backgroundTheme}`} />
                        </div>
                      </div>
                      <div className=" my-4">
                        <input id="input" name='email' type="email" onChange={handleInputChange} placeholder="Email Address" className={`w-full bg-[#6d7c901a] text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-${styles.backgroundTheme}-500 focus:shadow-outline-${styles.backgroundTheme}`} />
                      </div>
                      <div>
                        <label className=' text-gray-500'>What can we help you with?</label>
                        <select tabIndex="30" name="question" onChange={handleInputChange} className={`w-full bg-[#6d7c901a] text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-${styles.backgroundTheme}-500 focus:shadow-outline-${styles.backgroundTheme}`} id="contact-department" required="">
                          <option value="sales">Sales and General Information</option><option value="accounts">Accounts and Billing</option><option value="other">Other</option> </select>

                      </div>
                      <div className=" my-4 ">
                        <textarea name="message" onChange={handleInputChange} className={`w-full bg-[#6d7c901a] text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-${styles.backgroundTheme}-500 focus:shadow-outline-${styles.backgroundTheme}`} type="text" rows="4" id="contact-message" placeholder="Your Message" autoComplete="off" tabIndex="40" required=""></textarea>
                      </div>

                      <input type="submit" className=" cursor-pointer inline-block py-5 align-middle w-[100%]  rounded-full px-[12px]   text-2xl bg-violet-600 text-white  shadow-cyan-500/50  bg-primary   font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]" name="submit" id="contact-submit" value="Submit Message" tabIndex="100" />
                    </form>



                    <p className='text-lg text-gray-500 py-5  text-center'>Data stored as outlined in our  <span className='text-violet-600 font-bold'>Privacy Privacy</span> </p>
                  </div>
                </div>
                <div className="column-container mb-4 p-4  pt-8 border-1 pb-8  rounded-lg drop-shadow-2xl bg-white shadow-gray-400 flex-wrap col-span-6 flex justify-center items-center">
                  <img src={map} className=' w-[45rem] h-[45rem]' alt="" />
                </div> 
              </div>
            </div>
          </section>

          

          <NewsLetter />
          <Footer />
        </main>
      )}
    </>

  )
}

export default ContactUs