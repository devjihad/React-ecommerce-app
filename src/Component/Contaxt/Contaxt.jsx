import React, { createContext, useState } from 'react';
import { products } from '../../assets/frontend_assets/assets';
import { toast, ToastContainer } from 'react-toastify';
export const Data = createContext()

const Contaxt = (props) => {

    const currency = '$'
    const delivery_fee = 10
    const [search , setsearch] =useState('')
    const [showsearch , setshowsearch] = useState(false)
    const [cartvalue , setcartvalue] = useState({})
    const addtocart =async(id , size)=>{
        let cartdata = structuredClone(cartvalue)

        if(!size){
            
            toast.error('Please select size')
            return
        }
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

   const cartcount =()=>{
    let count = 0 
    for(const id in cartvalue){
        for(const value in cartvalue[id]){
            try{
                if(cartvalue[id][value]>0){
                    count += cartvalue[id][value] 
                }
            }
            catch(error){
                console.log(error)
            }
        }
    }
     return count
   }

   const remove =(id, size, quantity)=>{
    let value = structuredClone(cartvalue)
    value[id][size] = quantity
    setcartvalue(value)

   }

   const cartPrice = () =>{
    let amount = 0 
    for(const items in cartvalue){
        let iteminfo = products.find((product)=> product._id === items)
        for(const item in cartvalue[items]){
            try{
                if(cartvalue[items][item] > 0){
                    amount += iteminfo.price * cartvalue[items][item];
                }

            }catch(error){

            }
        }
    }
    return amount
   }

    const value ={
    products,
    currency,
    delivery_fee,
    search,
    setsearch,
    showsearch,
    setshowsearch,
    addtocart,
    cartvalue,
    cartcount,
    remove,
    cartPrice
    }
    
    return (
        <Data.Provider value={value}>
            {props.children}
            <ToastContainer/>
        </Data.Provider>
    );
};

export default Contaxt;