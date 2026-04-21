import React, { useContext, useEffect, useState } from 'react';
import { Data } from '../Contaxt/Contaxt';
import { assets } from '../../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';

const Search = () => {
    const {search, setsearch, showsearch, setshowsearch} =useContext(Data)
    const location =useLocation()
    const [visible, setvisible]= useState(false)

    useEffect(()=>{
        if (location.pathname.includes('collection')){
            setvisible(true)
        }
        else{
            setvisible(false)
        }
    },[location])

    console.log(location.pathname)
    return showsearch && visible? (
        <div className='container flex gap-2 items-center justify-center py-3 bg-zinc-300  rounded-t-lg relative'>
            <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)} className='w-1/2 border outline-0 border-gray-400 bg-gray-100 py-2 px-5 pr-12 rounded-lg' />
            <img src={assets.search_icon} alt=""  className='w-4 h-4 absolute right-80'/>
            
        </div>
    ) : null
};

export default Search;