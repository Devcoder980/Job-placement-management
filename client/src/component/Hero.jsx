import React from 'react'
import logo_mailchimp from '../images/logo_mailchimp.svg'
import logo_paypal from '../images/logo_paypal.svg'
import logo_stripe from '../images/logo_stripe.svg'
import logo_visa from '../images/logo_visa.svg'
import logo_apple from '../images/logo_apple.svg'
import logo_tinder from '../images/logo_tinder.svg'
import logo_sony from '../images/logo_sony.svg'
import logo_airbnb from '../images/logo_airbnb.svg'
import styles from '../style.js'

import NewsLetter from './NewsLetter'
import JobSearch from './JobSearch'
import Footer from './Footer'

const Hero = () => {
    return (
        <>
            <main className={`bg-${styles.backgroundTheme}-900`}>
                
                <div className="absolute inset-[1px] z-10 -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:left-[calc(50%+14rem)] lg:right-0 lg:-top-32 lg:-bottom-32 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
                    <svg aria-hidden="true" viewBox="0 0 400 1069" width="400" height="1469" fill="none" className="absolute top-1/2 left-40  z-8 -translate-y-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]">
                        <defs>
                            <clipPath id=":R1l6:-clip-path">
                                <path fill="#fff" transform="rotate(-180 334 534.4)" d="M0 0h668v1068.8H0z"></path>
                            </clipPath>
                        </defs>
                        <g opacity=".4" clip-path="url(#:R1l6:-clip-path)" stroke-width="4">
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
                            <circle cx="484.301" cy="574.062" r="10.438" transform="rotate(-180 484.301 574.062)" fill="#fff" fill-opacity=".42" stroke="#0EA5E9"></circle>
                            <circle cx="384.1" cy="749.412" r="10.438" transform="rotate(-180 384.1 749.412)" fill="fff" stroke="#9eeabd"></circle>
                            <circle cx="384.1" cy="1027.05" r="10.438" transform="rotate(-180 384.1 1027.05)" stroke="#9eeabd"></circle>
                            <circle cx="283.9" cy="924.763" r="10.438" transform="rotate(-180 283.9 924.763)" stroke="#9eeabd"></circle>
                            <circle cx="183.699" cy="870.487" r="10.438" transform="rotate(-180 183.699 870.487)" stroke="#9eeabd"></circle>
                            <circle cx="283.9" cy="738.975" r="10.438" transform="rotate(-180 283.9 738.975)" fill="fff" stroke="#9eeabd"></circle>
                            <circle cx="83.5" cy="695.138" r="10.438" transform="rotate(-180 83.5 695.138)" fill="fff" stroke="#fff"></circle>
                            <circle cx="83.5" cy="484.3" r="10.438" transform="rotate(-180 83.5 484.3)" fill="fff" fill-opacity=".42" stroke="#fff"></circle>
                            <circle cx="484.301" cy="432.112" r="10.438" transform="rotate(-180 484.301 432.112)" fill="#fff" stroke="#9eeabd"></circle>
                            <circle cx="584.5" cy="432.112" r="10.438" transform="rotate(-180 584.5 432.112)" fill="#fff" stroke="#9eeabd"></circle>
                            <circle cx="584.5" cy="642.95" r="10.438" transform="rotate(-180 584.5 642.95)" fill="#fff" stroke="#9eeabd"></circle>
                            <circle cx="484.301" cy="851.699" r="10.438" transform="rotate(-180 484.301 851.699)" stroke="#0000"></circle>
                            <circle cx="384.1" cy="256.763" r="10.438" transform="rotate(-180 384.1 256.763)" stroke="#9eeabd"></circle>
                        </g></svg>

                </div>

                <JobSearch />

                <div className={`blur bg-blue-300  top-16  hero-blur`}>

                </div>
                <section className={`site-section py-4 ${styles.paddingX}`}>
                    <div className="container">

                        <div className="col-12 text-center mt-4 mb-5">
                            <div className="row justify-center">
                                <div className="col-md-7">
                                    <h2 className="section-title mb-2 text-4xl text-white ">Company We've Helped</h2>
                                    <p className="lead text-2xl text-gray-500">Porro error reiciendis commodi beatae omnis similique voluptate rerum ipsam fugit mollitia ipsum facilis expedita tempora suscipit iste</p>
                                </div>
                            </div>

                        </div>

                        <div className="bg-white py-8  sm:py-32">
                            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                                    <img
                                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                        src={logo_mailchimp}
                                        alt="Transistor"
                                        width={300}
                                        height={1000}
                                    />
                                    <img
                                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                        src={logo_paypal}
                                        alt="Reform"
                                        width={300}
                                        height={1000}
                                    />
                                    <img
                                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                        src={logo_stripe}
                                        alt="Tuple"
                                        width={300}
                                        height={100}
                                    />
                                    <img
                                        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                                        src={logo_visa}
                                        alt="SavvyCal"
                                        width={300}
                                        height={100}
                                    />
                                    <img
                                        className="col-span-2  max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                                        src={logo_apple}
                                        alt="Statamic"
                                        width={300}
                                        height={100}
                                    />
                                    <img
                                        className="col-span-2  max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                                        src={logo_tinder}
                                        alt="Statamic"
                                        width={300}
                                        height={100}
                                    />
                                    <img
                                        className="col-span-2  max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                                        src={logo_sony}
                                        alt="Statamic"
                                        width={300}
                                        height={100}
                                    />
                                    <img
                                        className="col-span-2  max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                                        src={logo_airbnb}
                                        alt="Statamic"
                                        width={300}
                                        height={100}
                                    />
                                </div>
                            </div>
                        </div>


                    </div>
                </section>

                <div className={`blur bg-blue-300 left-[56rem]  top-[18rem]  hero-blur`}>
                    
                </div>

                <NewsLetter />

            </main>
            <Footer />
        </>

    )
}

export default Hero