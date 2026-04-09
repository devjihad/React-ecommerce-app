


import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { TfiFacebook, TfiGoogle } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { assets } from '../../assets/frontend_assets/assets';

const Footer = () => {
   
    return (
        <div >
            <div className='container flex flex-col md:flex-row py-30 px-5 md:px-0'>
                <div className='w-full md:w-1/2'>

                   <img src={assets.logo} alt="" />
                    <h4 className='text-[50px] font-rajdhani font-bold mt-5.5'>Get Ready <span className='font-normal'> to <br /> Create Great </span></h4>

                    
                </div>

                <div className='w-full md:w-1/2  flex flex-col md:flex-row justify-between'>
                    <div >
                        <h4 className='font-rajdhani font-bold text-[24px] mb-10'>Quick Link </h4>
                        <p className='text-[16px] font-rubik mb-2'>About Me </p>
                        <p className='text-[16px] font-rubik mb-2'>Contact Us</p>
                        <p className='text-[16px] font-rubik mb-2'>Pricing</p>
                        <p className='text-[16px] font-rubik mb-2'>Blog</p>
                        <p className='text-[16px] font-rubik mb-2'>Service</p>
                    </div>

                    <div>
                        <h4 className='font-rajdhani font-bold text-[24px] mb-10'>Contact</h4>
                        <p className='flex gap-2 items-center mb-4'><IoMdMail/> mdhajihad609@gmail.com</p>
                        <p className='flex gap-2 items-center mb-4'><FaLocationDot/> Dhanmondi 15, Dhaka</p>
                        <p className='flex gap-2 items-center mb-6'><FaPhone/> 01966078899</p>
                        <div className='flex items-center gap-2 '>
                            <FaInstagram className= 'rounded-full w-8 h-8 p-1.5'/>
                            <TfiFacebook className= 'rounded-full w-8 h-8 p-1.5'/>
                            <FaLinkedinIn className= 'rounded-full w-8 h-8 p-1.5'/>
                            <FaTwitter  className= 'rounded-full w-8 h-8 p-1.5'/>
               
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Footer;