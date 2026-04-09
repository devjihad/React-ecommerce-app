import React from 'react';

const Newsletter = () => {
    const submit = (e)=>{
        e.preventDefault()
    }
    return (
        <div className='container text-center mt-10'>
            <h3 className='text-[38px] font-semibold mb-1'>Subscribe & get 20% off</h3>
            <p className='text-gray-700 mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, maxime?</p>
            <form onSubmit={submit} className=' relative w-150 mx-auto '> 
                <input type="email" className='w-full border border-gray-400 outline-0 rounded-lg px-5 py-2 pr-25' placeholder='Enter your email' required/>
                <input type="submit" className='bg-black text-white px-5 py-2 rounded-lg absolute right-0' />
            </form>
        </div>
    );
};

export default Newsletter;