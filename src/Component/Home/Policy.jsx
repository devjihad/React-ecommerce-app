import React from 'react';
import { assets } from '../../assets/frontend_assets/assets';
const Policy = () => {
    return (
        <div className='container flex flex-col justify-around sm:flex-row my-10  '>
            <div className='flex flex-col items-center '>
                <img src={assets.exchange_icon} alt="" className='w-25 h-25' />
                <h3 className='text-[16px] font-semibold text-gray-700 '>Exchence Policy</h3>
                <p className='text-[14px] text-gray-700'>We offer hassle free exchance policy</p>
            </div>
            <div className='flex flex-col items-center '>
                <img src={assets.quality_icon} alt="" className='w-25 h-25' />
                <h3 className='text-[16px] font-semibold text-gray-700 '>7 Days return policy </h3>
                <p className='text-[14px] text-gray-700'>We provide 7 days free return policy</p>
            </div>
            <div className='flex flex-col items-center '>
                <img src={assets.support_img} alt="" className='w-25 h-25' />
                <h3 className='text-[16px] font-semibold text-gray-700 '>Best customar support </h3>
                <p className='text-[14px] text-gray-700'>We provide 24/7 customar support</p>
            </div>
        </div>
    );
};

export default Policy;