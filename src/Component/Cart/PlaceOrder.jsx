import React from 'react';
import Title from '../Home/Title';
import CartTotal from './CartTotal';
import { assets } from '../../assets/frontend_assets/assets';

const PlaceOrder = () => {
    return (
        <div className='flex justify-between'>
            
            <div className='w-[50%]'>
                <div className='my-5 '>
                    <Title value1={'DELIVERY'} value2={'INFORMATION'}/>
                </div>
                <div className='flex flex-col gap-1.5'>
                    <div className='flex gap-1'>
                        <input type="text" name="" id="" placeholder='First Name' className='w-full border border-gray-300 rounded-lg  px-5 py-1 '/>
                        <input type="text" name="" id="" placeholder='Last Name' className='w-full border border-gray-300 rounded-lg  px-5 py-1 '/>
                    </div>
                    <input type="email" name="" id="" placeholder='Email Address ' className='w-full border border-gray-300 rounded-lg  px-5 py-1 '/>
                    <input type="text" name="" id="" placeholder='Street' className='w-full border border-gray-300 rounded-lg  px-5 py-1 '/>
                    <div className='flex gap-1'>
                        <input type="text" name="" id="" placeholder='City ' className='w-full border border-gray-300 rounded-lg  px-5 py-1 '/>
                        <input type="text" name="" id="" placeholder='Steet' className='w-full border border-gray-300 rounded-lg  px-5 py-1 '/>
                    </div>
                    <div className='flex gap-1'>
                        <input type="number" name="" id="" placeholder='Zip Code' className='w-full border border-gray-300 rounded-lg  px-5 py-1 '/>
                        <input type="text" name="" id="" placeholder='Country' className='w-full border border-gray-300 rounded-lg  px-5 py-1 '/>
                    </div>
                     <input type="number" name="" id="" placeholder='Phone' className='w-full border border-gray-300 rounded-lg  px-5 py-1 '/>
                </div>
            </div>
            <div className='w-[50%] '>
                <div className='flex justify-end'>
                    <CartTotal/>
                </div>
               <div className='text-xl'>
                 <h1 className='pl-28 py-5'>PAYMENT METHOD </h1>

                 <div className='flex pl-28 gap-2'>
                    <img src={assets.razorpay_logo} alt=""  className='w-20 px-4 py-1 border border-gray-300 rounded-lg '/>
                    <img src={assets.stripe_logo} alt="" className='w-20 px-4 py-1  border border-gray-300 rounded-lg '/>
                    <p className='text-lg px-4 py-1 border border-gray-300 rounded-lg'>CASH ON DELIVERY </p>
                 </div>
               </div>
            </div>
        </div>
    );
};

export default PlaceOrder;