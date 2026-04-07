import React from 'react';
import { assets } from '../../assets/frontend_assets/assets';
const Hero = () => {
    return (
        <div className='container flex flex-col md:flex-row border border-gray-500  '>
            <div className='w-full h-100 md:w-1/2 flex flex-col items-center justify-center '>
                <div>
                    <div className='flex gap-2 items-center'>
                    <hr className='h-0.5 border-0 bg-gray-500 w-8 rounded-lg'/>
                    <p className='text-[14px] font-semibold text-gray-600'>OUR BESTSELLERS</p>
                </div>
                <h3 className='text-[32px] font-semibold font-playfair'>Latest Arrivals </h3>
                <div className='flex gap-2 items-center'>
                    <p className='text-[14px] font-semibold text-gray-600'>SHOP NOW </p>
                    <hr className='h-0.5 border-0 bg-gray-500 w-8 rounded-lg'/>
                    
                </div>
                </div>

            </div>
            <div className='w-full md:w-1/2'>
                <img src={assets.hero_img} className='w-full h-100' alt="" />
            </div>
        </div>
    );
};

export default Hero;