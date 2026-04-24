import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Data } from '../Contaxt/Contaxt';
import { assets } from '../../assets/frontend_assets/assets';

const Productdetails = () => {
    const {products } = useContext(Data)
    const {id} = useParams()
    const [productdetails, setprodductdetails] =useState(false)
    const [showimage, setshowimage] =useState('')
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
            <p className='text-lg font-semibold text-gray-700 my-3'> {productdetails.description}</p>
            <p className='felx  text-xl font-semibold mb-2'>Select Size</p>
            <div className='flex gap-2'>
                {
                    productdetails.sizes.map((item , index)=>(
                        <button key={index} className='bg-gray-200 py-2 px-3 rounded-sm '>{item}</button>
                    ))
                }
            </div>

            </div>
        </div>
    ): null
};

export default Productdetails;