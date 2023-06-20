import logo_mailchimp from './images/logo_mailchimp.svg';
import logo_paypal from './images/logo_paypal.svg';
import logo_stripe from './images/logo_stripe.svg';
import logo_visa from './images/logo_visa.svg';
import logo_apple from './images/logo_apple.svg';
import logo_tinder from './images/logo_tinder.svg';
import logo_sony from './images/logo_sony.svg';
import logo_airbnb from './images/logo_airbnb.svg';

export const logos = [
  { name: 'logo_mailchimp', image: logo_mailchimp },
  { name: 'logo_paypal', image: logo_paypal },
  { name: 'logo_stripe', image: logo_stripe },
  { name: 'logo_visa', image: logo_visa },
  { name: 'logo_apple', image: logo_apple },
  { name: 'logo_tinder', image: logo_tinder },
  { name: 'logo_sony', image: logo_sony },
  { name: 'logo_airbnb', image: logo_airbnb }
];

const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
    backgroundTheme:"slate",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };


  
export default styles;


  