import React, { useContext, useEffect, useState } from 'react';
import { Data } from '../Contaxt/Contaxt';

const Cart = () => {
    const {products, cartvalue} = useContext(Data)
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
        console.log(tempdata)
    },[cartvalue])
    return (
        <div>
            
        </div>
    );
};

export default Cart;