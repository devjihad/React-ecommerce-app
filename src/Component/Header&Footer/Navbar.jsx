import React from 'react';
import {assets} from '../../assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-5'>
            <NavLink to={'/'}><img src={assets.logo} alt="" className='h-12 '/></NavLink>

            <ul className='flex gap-7 font-semibold text-[14px] text-gray-800'>
                <NavLink to={'/'} className='flex flex-col items-center '>
                    <p>Home </p>
                    <hr className='w-7 border-0 bg-gray-400 h-0.5 rounded-xl hidden'/>
                </NavLink>
                <NavLink to={'/collection'} className='flex flex-col items-center '>
                    <p>Collection  </p>
                    <hr className='w-7 border-0 bg-gray-400 h-0.5 rounded-xl hidden'/>
                </NavLink>

                <NavLink to={'/about'} className='flex flex-col items-center '>
                    <p>About </p>
                    <hr className='w-7 border-0 bg-gray-400 h-0.5 rounded-xl hidden'/>
                </NavLink>
                <NavLink to={'/contact'} className='flex flex-col items-center '>
                    <p>Contact </p>
                    <hr className='w-7 border-0 bg-gray-400 h-0.5 rounded-xl hidden'/>
                </NavLink>
            </ul>

            <div className='flex gap-7 '>
                <img src={assets.search_icon} alt="" className='w-7 h-7'/>
                <div className='group relative'>
                    <img src={assets.profile_icon} alt="" className='w-7 h-7' />

                    <div className='hidden group-hover:block w-50 dropdowm-menu absolute top-7 -right-3 py-3 px-5 rounded-lg bg-gray-200 font-semibold text-[14px] text-gray-800'>
                        <p className='cursor-pointer'>My Profile</p>
                        <p className='cursor-pointer'>Orders</p>
                        <p className='cursor-pointer'>Logout</p>
                    </div>
                </div>

                <Link to={'/'}>
                    <img src={assets.cart_icon} alt="" className='w-7 h-7' />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;