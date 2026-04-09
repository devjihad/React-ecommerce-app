import React, { useContext, useEffect, useState } from 'react';
import { data, Link } from 'react-router-dom';
import { Data } from '../../Contaxt/Contaxt';
import Title from '../Title';


const AllPruduct = () => {
    const {products} = useContext(Data)
    const [value,setvalue] =useState([])
    
    useEffect(()=>{
        setvalue(products.slice(0,10))
    },[])
    console.log(value)
    return (
        <div>
            {/* <h3 className='text-[38px] font-semibold font-playfair text-center mt-16 ' >Latest Product </h3>
            <p className='text-[14px] font-semibold text-gray-600 text-center mt-1 mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat nostrum culpa est totam ex nemo.</p> */}
            <Title value1={'Latest'} value2={'Product'} value={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat nostrum culpa est totam ex nemo.'}/>
            <div className='grid gap-3 gap-y-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
                {
                    value.map((item, index)=>(
                        <Link key={index} to={`product${item._id}`}>
                            <div >
                                <img src={item.image[0]} alt="" />
                                <h3 className='text-[16px] font-semibold'>{item.name}</h3>
                                <p className='text-[14px] font-semibold'> $ {item.price}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
            
        </div>
    );
};

export default AllPruduct;