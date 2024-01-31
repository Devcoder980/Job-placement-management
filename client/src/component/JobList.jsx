import React ,{useContext}from 'react'
import { BsCurrencyDollar, BsCalendar, BsBriefcaseFill, BsPinMap } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import JobContext from './JobContext'

const JobList = (props) => {
    const navigate = useNavigate();
    const toggleApplyForm = (e) => {
        if (localStorage.length) {
            navigate('/apply', { state: { e } });
        }
        else {
            navigate('/apply');
        }
    }
    let theme=useContext(JobContext);


    if(!theme){
        theme="slate";
    }
    return (
        <>
            <div className=' pt-10 lg:w-[40%] sm:mx-5 rounded-sm '>
                <div key={props._id} className={`  bg-slate-800 md:w-[430px]   rounded-md  text-white  p-4 px-10  font-['Inter'] flex flex-col justify-start`}>
                    <div >
                        <h1 className="  font-body  mix-blend-screen text-3xl " >{props.title}</h1>
                    </div>
                    <div>
                        <span className="font-normal    text-base  leading-5"> {props.company}</span>
                    </div>
                    <div className='flex mt-2 '>
                        <span>
                            <BsBriefcaseFill className='mr-3' width={20} height={20} />
                        </span>
                        <span className='font-normal text-base leading-5' > {props.jobType}</span>
                    </div>
                    <div className='flex mt-2 '>
                        <span>
                            <BsCalendar className='mr-3' width={20} height={20} />
                        </span>
                        <span className='font-normal text-base leading-5' >{props.lastDate.substring(0, 10)}</span>
                    </div>
                    <div className='flex mt-2 '>
                        <span>
                            <BsPinMap className='mr-3' width={20} height={20} />
                        </span>
                        <span className='font-normal text-base leading-5' >  {props.location}</span>
                    </div>
                    <div className='flex mt-2 '>
                        <span>
                            <BsCurrencyDollar className='mr-3' width={20} height={20} />
                        </span>
                        <span className='font-normal text-base leading-5' > ${props.minSalary}k &ndash; ${props.maxSalary}k</span>
                    </div>
                    <div>
                        <div className='mt-2 '>
                            <div className=' italic text-gray-400 '>Requiremnt</div>
                            <div className='font-normal flex flex-wrap text-base leading-5 gap-2'>
                                {props.requirements.split(',').map((item, index) => {
                                    if (item) {
                                        return (
                                            <span
                                                key={index}
                                                className=' text-gray-900 px-3 bg-blend-color-burn rounded-sm bg-gray-400'
                                                style={{ wordWrap: 'break-word' }} // add this line
                                            >
                                                {item}
                                            </span>
                                        );
                                    } else {
                                        return null;
                                    }
                                })}
                            </div>

                        </div>
                        <div>
                            <div className='mt-2 '>
                                <div className='italic text-gray-400'>Description</div>
                                <div className='font-normal text-base leading-5 flex gap-2'>
                                    <ol className=' pl-8' style={{ listStyle: "circle" }}>
                                        {props.description.split('.').map((item, index) => {
                                            if (item) {
                                                return <li key={index}>{item}</li>;
                                            } else {
                                                return null;
                                            }
                                        })}
                                    </ol>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className='flex  justify-between items-center my-5'>
                        <div className='self-end'>
                            <span className='text-sm pt-5   '>
                                Created {Math.floor((new Date(props.lastDate).getTime() - new Date(props.createdDate).getTime()) / (1000 * 60 * 60 * 24))} Days Ago
                            </span>
                        </div>
                        {
                            localStorage.length ?
                                <button
                                    onClick={() => toggleApplyForm(props)}
                                    className="relative inline-flex items-center  justify-center   mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                    <span className="relative px-5 w-32 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-bold ">
                                        Apply
                                    </span>
                                </button>
                                :

                                <Link to="/login">
                                    <button
                                        onClick={() => toggleApplyForm(props)}
                                        className="relative inline-flex items-center  justify-center  mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                        <span className="relative px-5 w-32 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-bold ">
                                            Apply
                                        </span>
                                    </button>
                                </Link>


                        }

                    </div>



                </div>
            </div>
        </>
    )
}

export default JobList