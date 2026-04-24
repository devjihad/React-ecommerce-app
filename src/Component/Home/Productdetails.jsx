import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Data } from '../Contaxt/Contaxt';
import { assets } from '../../assets/frontend_assets/assets';

const Productdetails = () => {
    const {products } = useContext(Data)
    const {id} = useParams()
    const [productdetails, setprodductdetails] =useState(false)
    const [showimage, setshowimage] =useState('')
    const [size, setsize] = useState('')
    console.log(productdetails)

    const showdata =async () =>{
        {
            products.map((item)=>{
                if(item._id === id){
                    setprodductdetails(item)
                    setshowimage(item.image[0])
                    return null
                }
            })
        }
    }


    useEffect(()=>{
        showdata()
    }, [id, products])


    return productdetails ? (
        <div className='container flex gap-5'>
            <div className='w-1/2 flex gap-2'>
                <div className='w-1/5'>
                
                    {
                         productdetails.image.map((index, item )=>(
                            <img src={index} key={item} alt="" className='w-full h-1/5 mb-2' onClick={()=>setshowimage(index)} />
                        ))
                    }
                </div>
                <div className='w-3/4 '>
                    <img src={showimage} alt=""  className='w-full h-125 '/>
                </div>
                

            </div>






            <div className='w-1/2 font-serif'>
            <h2 className='text-4xl font-semibold my-2 '>{productdetails.name}</h2>
            <div className='flex items-center gap-2 my-4'>
                <div className='flex gap-1 '>
                    <img src={assets.star_icon} alt="" className='w-4 h-4' />
                    <img src={assets.star_icon} alt="" className='w-4 h-4'/>
                    <img src={assets.star_icon} alt="" className='w-4 h-4'/>
                    <img src={assets.star_icon} alt="" className='w-4 h-4'/>
                    <img src={assets.star_icon} alt="" className='w-4 h-4'/>
                </div>
                <p>(130)</p>
            </div>
            <p className='felx  text-xl font-semibold'> $ {productdetails.price}</p>
            <p className='text-lg font-medium text-gray-700 my-3'> {productdetails.description}</p>
            <p className='felx  text-xl font-semibold mb-2'>Select Size</p>
            <div className='flex gap-2'>
                {
                    productdetails.sizes.map((item , index)=>(
                        <button onClick={()=>setsize(item)} key={index} className={`bg-gray-200 py-2 px-3 rounded-sm ${size === item ? 'border border-zinc-500':''}`}>{item}</button>
                    ))
                }
            </div>
            <button className='bg-black text-white py-2 px-5 rounded-sm my-5 active:bg-zinc-700'>ADD TO CART </button>
            
            <hr className='w-4/5 text-gray-500 outline-0 mb-5'/>
            <p className='text-[16px] font-medium text-gray-700'>100% Original Product</p>
            <p className='text-[16px] font-medium text-gray-700'>Cash on delivery is available on this product</p>
            <p className='text-[16px] font-medium text-gray-700'> Easy return & exchence policy within 7 days</p>
            </div>
        </div>
    ): null
};

export default Productdetails;