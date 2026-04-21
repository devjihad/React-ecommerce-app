import React, { useContext } from 'react';
import { Data } from '../Contaxt/Contaxt';
import { assets } from '../../assets/frontend_assets/assets';

const Search = () => {
    const {search, setsearch, showsearch, setshowsearch} =useContext(Data)
    return showsearch? (
        <div className='container flex gap-2 items-center'>
            <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)} />
            <img src={assets.cross_icon} alt="" onClick={()=>setshowsearch(false)}/>
            
        </div>
    ) : null
};

export default Search;