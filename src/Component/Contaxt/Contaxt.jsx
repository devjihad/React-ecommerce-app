import React, { createContext, useEffect, useState } from 'react';
import { products } from '../../assets/frontend_assets/assets';
export const Data = createContext()

const Contaxt = (props) => {

    const currency = '$'
    const delivery_fee = 10
    const [search , setsearch] =useState('')
    const [showsearch , setshowsearch] = useState(false)
    const [cartvalue , setcartvalue] = useState({})
    const addtocart =async(id , size)=>{
        let cartdata = structuredClone(cartvalue)
        if(cartdata[id]){             
            if(cartdata[id][size]){
                cartdata[id][size] +=1
            }
            else{
                cartdata[id][size] = 1
            }
            }

        else{
            cartdata[id] ={}
            cartdata[id][size] =1
        }  
        setcartvalue(cartdata)  
        
    
    }

    useEffect(()=>{
        console.log(cartvalue)
    },[cartvalue])


    const value ={
    products,
    currency,
    delivery_fee,
    search,
    setsearch,
    showsearch,
    setshowsearch,
    addtocart,
    cartvalue
    }
    
    return (
        <Data.Provider value={value}>
            {props.children}
        </Data.Provider>
    );
};

export default Contaxt;