import React, { useContext, useEffect, useState } from 'react';
import { Data } from '../../Contaxt/Contaxt';
import Title from '../Title';
import Product from '../Product';

const Bestseller = () => {
    const {products} = useContext(Data)
    const [seller, setseller] = useState([])
    useEffect(()=>{
        const bestseller = products.filter((item)=>(item.bestseller))
        setseller(bestseller.slice(0,5))
    },[])
    console.log(seller)
    return (
        <div>
            <Title  value={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat nostrum culpa est totam ex nemo'} value1={'Best'} value2={'Seller'}/>

            <div className='grid gap-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>
                {
                    seller.map((item, index)=>(<Product key={index} image={item.image[0]} name={item.name} price={item.price} id={item._id}/>))
                }
            </div>
            
        </div>
    );
};

export default Bestseller;