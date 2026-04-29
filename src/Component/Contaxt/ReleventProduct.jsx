import React, { useContext, useEffect, useState } from 'react';
import { Data } from './Contaxt';
import Product from '../Home/Product';


const ReleventProduct = ({category, subcategory}) => {
    const {products}=  useContext(Data)
    const [filterdata , setfilterdata] = useState([])
 
   

    useEffect(()=>{
        if(products.length >0){
            let productcopy =products.slice()
            productcopy = productcopy.filter((item)=> item.category ===category)
            productcopy = productcopy.filter((value)=> value.subCategory === subcategory)
            setfilterdata(productcopy.slice(0,5))
        } 
    },[products])


    return (
        <div className='grid grid-cols-5 gap-3 mt-10'>
            {
                filterdata.map((item, index)=> (
                   <Product key={index} image={item.image[0]} name={item.name} price={item.price} id={item._id}/>
                ))
            }
        </div>
    );
};

export default ReleventProduct;