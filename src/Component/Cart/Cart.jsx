import React, { useContext, useEffect, useState } from 'react';
import { Data } from '../Contaxt/Contaxt';
import Title from '../Home/Title';
import { assets } from '../../assets/frontend_assets/assets';
import CartTotal from './CartTotal';

const Cart = () => {
    const {products, cartvalue, remove, cartcount} = useContext(Data)
    const [data, setdata] =useState([])

    useEffect(()=>{

        const tempdata = []
        for(const items in cartvalue){
            for(const item in cartvalue[items]){
                if(cartvalue[items][item] >0 ){
                    tempdata.push({
                        _id : items,
                        size: item,
                        quantity: cartvalue[items][item]
                    })
                }
            }
        }
        setdata(tempdata)
    },[cartvalue])
    console.log(products)
    return (
        <div className='border-t pt-16 '>

            <div className='mb-8 '>
                <Title value1={'Your'} value2={'Cart'}/>
            </div>

            <div>
                {data.map( (item, index)=>{
                    const product = products.find((value)=>value._id ===item._id)
                return(
                   <div key={index} className='flex justify-between items-center border-t border-gray-300 py-1 font-sans'>
                     <div  className='flex items-start gap-3 col-span-2 w-[40%] '>
                        <img src={product.image[0]} alt=""  className='w-20 h-20'/>
                        <div>
                            <p className='text-lg font-semibold'>{product.name}</p>
                            <div className='flex gap-2 '>
                                <p>$ {product.price}</p>
                                <p className='px-2 bg-gray-100 rounded-lg border border-gray-300'>{item.size}</p>
                            </div>
                        </div>
                    </div>
                    <input onChange={(e)=>e.target.value ==='0' || e.target.value === '' ? null :remove(item._id, item.size, Number(e.target.value)) } type="number" min={1} defaultValue={item.quantity} className='w-16 h-8 border border-gray-400 rounded-lg px-2' />
                    <img onClick={()=> remove( item._id, item.size, 0)} src={assets.bin_icon} alt="" className='mr-5 w-4 h-4 cursor-pointer ' />
                   </div>
                ) 
                
                })}
            </div>

            <div className='flex justify-end '>
                <CartTotal />
            </div>
            
        </div>
    );
};

export default Cart;