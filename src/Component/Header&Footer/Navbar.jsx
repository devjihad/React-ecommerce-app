import React, { useContext, useState } from 'react';
import {assets} from '../../assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom';
import { Data } from '../Contaxt/Contaxt';
const Navbar = () => {
    const { showsearch, setshowsearch, cartcount } = useContext(Data)
    const [togle , settogle] = useState(false)
    return (
        <div className='flex justify-between items-center py-5'>
            <NavLink to={'/'}><img src={assets.logo} alt="" className='h-12 '/></NavLink>

            <ul className='hidden  md:flex gap-7 font-semibold text-[14px] text-gray-800'>
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
                {
                    showsearch? <img src={assets.cross_icon} alt="" className='w-7 h-7' onClick={()=>setshowsearch(false)}/>:<img src={assets.search_icon} alt="" className='w-7 h-7' onClick={()=>setshowsearch(true)}/>
                }
                 <Link to={'/'} className='relative'>
                    <img src={assets.cart_icon} alt="" className='w-6 h-6' />
                    <p className='bg-black text-white py-0.5 px-1 text-center rounded-full text-[8px] absolute top-4 right-0'>{cartcount()}</p>
                </Link>
                <div className='group relative'>
                    <img src={assets.profile_icon} alt="" className='w-7 h-7' />

                    <div className='hidden group-hover:block w-50 dropdowm-menu absolute top-7 -right-3 py-3 px-5 rounded-lg bg-gray-200 font-semibold text-[14px] text-gray-800'>
                        <p className='cursor-pointer'>My Profile</p>
                        <p className='cursor-pointer'>Orders</p>
                        <p className='cursor-pointer'>Logout</p>
                    </div>
                </div>

               
                <img onClick={()=>settogle(true)} className='sm:hidden w-7 h-7' src={assets.menu_icon} 
                alt=""/>
                
            </div>


            {/* SMOLL DEVICE */}

            <div className={`absolute right-0 top-0 bottom-0  overflow-hidden transition-all bg-white font-semibold  text-[14px] text-gray-800  ${ togle ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col gap-2 pl-10 pt-10 '>
                    <div onClick={()=>settogle(false)} className='flex gap-2 items-center '>
                        <img src={assets.dropdown_icon} alt="" className='w-4 h-4 '/>
                        <p>Back </p>
                    </div>

                <NavLink onClick={()=>settogle(false)} to={'/'} className=' cursor-pointer    '>
                    <p>HOME </p> 
                    <hr className=' border-0 bg-gray-400 h-0.5 rounded-xl mt-1'/>                  
                </NavLink>
                <NavLink onClick={()=>settogle(false)} to={'/collection'} className=' cursor-pointer    '>
                    <p>COLLECTION </p> 
                    <hr className=' border-0 bg-gray-400 h-0.5 rounded-xl mt-1'/>                   
                </NavLink>
                <NavLink onClick={()=>settogle(false)} to={'about'} className=' cursor-pointer     '>
                    <p>ABOUT </p>    
                    <hr className=' border-0 bg-gray-400 h-0.5 rounded-xl mt-1'/>                
                </NavLink>
                <NavLink onClick={()=>settogle(false)} to={'/contact'} className=' cursor-pointer   '>
                    <p>CONTACT </p> 
                    <hr className=' border-0 bg-gray-400 h-0.5 rounded-xl mt-1'/>                   
                </NavLink>

                </div>
            </div>
            
        </div>
    );
};

export default Navbar;