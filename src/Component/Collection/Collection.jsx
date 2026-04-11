import React, { useState } from "react";
import {assets} from '../../assets/frontend_assets/assets'
const Collection = () => {
  const [togle, settogle] =useState(false)
  return (
    <div className="container flex flex-col sm:flex-row gap-8 ">
      <div className="min-w-60">
        <h3 onClick={()=>settogle(!togle)} className="text-xl font-semibold flex items-center gap-1 ">Filter <img src={assets.dropdown_icon} alt="" className={`h-3 sm:hidden ${togle ? 'rotate-90' : ''}`}/></h3>
        <div className={`border border-gray-300 py-5 px-3 mt-6  ${togle ? '' : 'hidden'} sm:block`}>
          <p className="text-sm font-semibold mb-3">CATEGORYS</p>
          <div className="text-sm text-gray-700">
            <p className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" value={'Men'} />Men
            </p>
            <p className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" value={'Women'} />Women
            </p>
            <p className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" value={'Kids'} />Kids
            </p>
          </div>
        </div>

        <div className={`border border-gray-300 py-5 px-3 mt-6   ${togle ? '' : 'hidden'} sm:block`}>
          <p className="text-sm font-semibold mb-3">Type</p>
          <div className="text-sm text-gray-700">
            <p className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" value={'Topwear'} />Topwear
            </p>
            <p className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" value={'Bottomwear'} />Bottomwear
            </p>
            <p className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" value={'Winterwear'} />Winterwear
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
