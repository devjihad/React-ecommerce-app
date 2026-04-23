import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Data } from '../Contaxt/Contaxt';

const Productdetails = () => {
    const {products } = useContext(Data)
    const {id} = useParams()
    const [productdetails, setprodductdetails] =useState( false)
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
                            <img src={index} key={item} alt="" className='w-full h-1/5 mb-2 ' onClick={()=>setshowimage(index)}/>
                        ))
                    }
                </div>
                <div className='w-3/4 '>
                    <img src={showimage} alt=""  className='w-full h-auto '/>
                </div>
                

            </div>






            <div className='w-1/2'>

            </div>
        </div>
    ): null
};

export default Productdetails;