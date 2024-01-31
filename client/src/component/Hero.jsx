/* The above code is a React component called "Hero". It is rendering a section of a website that
includes a job search component, a section with logos, a newsletter component, and a footer
component. The component is using CSS styles and images imported from other files to style and
display the content. */
import React,{createContext,useState,useContext} from 'react'
import styles from '../style.js'
import '../App.css'
import NewsLetter from './NewsLetter'
import JobSearch from './JobSearch'
import Footer from './Footer'

import { logos } from '../style.js'
import OurParterner from './OurParterner.jsx'
import JobContext from './JobContext.js'


const Hero = () => {

    const theme=useContext(JobContext);

    return (
        <>
            <main className={`bg-${theme.ThemeContext}-900`}>

                <div className=" absolute inset-[1px] z-10 -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:left-[calc(50%+14rem)] lg:right-0 lg:-top-32 lg:-bottom-32 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
                    <svg aria-hidden="true" viewBox="0 0 389 1069" width="400" height="1469" fill="none" className="absolute top-1/2 left-40 w-[100%]  z-8 -translate-y-1/2 -translate-x-1/2 lg:left-[-20px] lg:translate-x-0 lg:translate-y-[-60%]">
                        <defs>
                            <clipPath id=":R1l6:-clipPath">
                                <path fill="#fff" transform="rotate(-180 334 534.4)" d="M0 0h668v1068.8H0z"></path>
                            </clipPath>
                        </defs>
                        <g opacity=".4" clipPath="url(#:R1l6:-clipPath)" strokeWidth="4">
                            <path opacity=".3" d="M584.5 770.4v-474M484.5 770.4v-474M384.5 770.4v-474M283.5 769.4v-474M183.5 768.4v-474M83.5 767.4v-474" stroke="#9eeabd">
                            </path>
                            <path d="M83.5 221.275v6.587a50.1 50.1 0 0 0 22.309 41.686l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M83.5 716.012v6.588a50.099 50.099 0 0 0 22.309 41.685l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M183.7 584.5v6.587a50.1 50.1 0 0 0 22.31 41.686l55.581 37.054a50.097 50.097 0 0 1 22.309 41.685v6.588M384.101 277.637v6.588a50.1 50.1 0 0 0 22.309 41.685l55.581 37.054a50.1 50.1 0 0 1 22.31 41.686v6.587M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588" stroke="#9eeabd">
                            </path>
                            <path d="M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588M484.3 594.937v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054A50.1 50.1 0 0 0 384.1 721.95v6.587M484.3 872.575v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054a50.098 50.098 0 0 0-22.309 41.686v6.582M584.501 663.824v39.988a50.099 50.099 0 0 1-22.31 41.685l-55.581 37.054a50.102 50.102 0 0 0-22.309 41.686v6.587M283.899 945.637v6.588a50.1 50.1 0 0 1-22.309 41.685l-55.581 37.05a50.12 50.12 0 0 0-22.31 41.69v6.59M384.1 277.637c0 19.946 12.763 37.655 31.686 43.962l137.028 45.676c18.923 6.308 31.686 24.016 31.686 43.962M183.7 463.425v30.69c0 21.564 13.799 40.709 34.257 47.529l134.457 44.819c18.922 6.307 31.686 24.016 31.686 43.962M83.5 102.288c0 19.515 13.554 36.412 32.604 40.645l235.391 52.309c19.05 4.234 32.605 21.13 32.605 40.646M83.5 463.425v-58.45M183.699 542.75V396.625M283.9 1068.8V945.637M83.5 363.225v-141.95M83.5 179.524v-77.237M83.5 60.537V0M384.1 630.425V277.637M484.301 830.824V594.937M584.5 1068.8V663.825M484.301 555.275V452.988M584.5 622.075V452.988M384.1 728.537v-56.362M384.1 1068.8v-20.88M384.1 1006.17V770.287M283.9 903.888V759.85M183.699 1066.71V891.362M83.5 1068.8V716.012M83.5 674.263V505.175" stroke="#9eeabd">

                            </path>
                            <circle cx="83.5" cy="384.1" r="10.438" transform="rotate(-180 83.5 384.1)" fill="#fff" stroke="#9eeabd"></circle>
                            <circle cx="83.5" cy="200.399" r="10.438" transform="rotate(-180 83.5 200.399)" stroke="#9eeabd"></circle>
                            <circle cx="83.5" cy="81.412" r="10.438" transform="rotate(-180 83.5 81.412)" stroke="#9eeabd"></circle>
                            <circle cx="183.699" cy="375.75" r="10.438" transform="rotate(-180 183.699 375.75)" fill="#fff" stroke="#9eeabd"></circle>
                            <circle cx="183.699" cy="563.625" r="10.438" transform="rotate(-180 183.699 563.625)" fill="#fff" stroke="#9eeabd"></circle>
                            <circle cx="384.1" cy="651.3" r="10.438" transform="rotate(-180 384.1 651.3)" fill="#fff" stroke="#9eeabd"></circle>
                            <circle cx="484.301" cy="574.062" r="10.438" transform="rotate(-180 484.301 574.062)" fill="#fff" fillOpacity=".42" stroke="#0EA5E9"></circle>
                            <circle cx="384.1" cy="749.412" r="10.438" transform="rotate(-180 384.1 749.412)" fill="fff" stroke="#9eeabd"></circle>
                            <circle cx="384.1" cy="1027.05" r="10.438" transform="rotate(-180 384.1 1027.05)" stroke="#9eeabd"></circle>
                            <circle cx="283.9" cy="924.763" r="10.438" transform="rotate(-180 283.9 924.763)" stroke="#9eeabd"></circle>
                            <circle cx="183.699" cy="870.487" r="10.438" transform="rotate(-180 183.699 870.487)" stroke="#9eeabd"></circle>
                            <circle cx="283.9" cy="738.975" r="10.438" transform="rotate(-180 283.9 738.975)" fill="fff" stroke="#9eeabd"></circle>
                            <circle cx="83.5" cy="695.138" r="10.438" transform="rotate(-180 83.5 695.138)" fill="fff" stroke="#fff"></circle>
                            <circle cx="83.5" cy="484.3" r="10.438" transform="rotate(-180 83.5 484.3)" fill="fff" fillOpacity=".42" stroke="#fff"></circle>
                            <circle cx="484.301" cy="432.112" r="10.438" transform="rotate(-180 484.301 432.112)" fill="#fff" stroke="#9eeabd"></circle>
                            <circle cx="584.5" cy="432.112" r="10.438" transform="rotate(-180 584.5 432.112)" fill="#fff" stroke="#9eeabd"></circle>
                            <circle cx="584.5" cy="642.95" r="10.438" transform="rotate(-180 584.5 642.95)" fill="#fff" stroke="#9eeabd"></circle>
                            <circle cx="484.301" cy="851.699" r="10.438" transform="rotate(-180 484.301 851.699)" stroke="#0000"></circle>
                            <circle cx="384.1" cy="256.763" r="10.438" transform="rotate(-180 384.1 256.763)" stroke="#9eeabd"></circle>
                        </g></svg>

                </div>

                <JobSearch  />

                <div className={`blur bg-blue-300  lg:absolute  top-16  hero-blur`}>

                </div>

                <OurParterner />

                <div className={`blur bg-blue-300 lg:left-[56rem]  lg:absolute  top-[18rem]  hero-blur`}>

                </div>

                <NewsLetter />

            </main>
            <Footer />
    </>

    )
}

export default Hero