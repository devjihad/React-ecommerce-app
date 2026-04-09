import React from 'react';

const Title = ({value1, value2 , value}) => {
    return (
        <div className='text-center mt-10 mb-10'>
           <div className='flex gap-1 items-center justify-center'>
                 <h3 className='text-[28px] md:text-[38px] font-semibold font-playfair  '>{value1} <span className='text-gray-700'>{value2}</span></h3>
                <hr className='h-0.5 border-0 bg-gray-500 w-8 rounded-lg'/>
           </div>
           <p className='text-[14px] text-gray-600 '>{value}</p>
            
        </div>
    );
};

export default Title;