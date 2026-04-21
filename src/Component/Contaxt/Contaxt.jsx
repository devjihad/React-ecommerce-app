import React, { createContext, useState } from 'react';
import { products } from '../../assets/frontend_assets/assets';
export const Data = createContext()

const Contaxt = (props) => {

    const currency = '$'
    const delivery_fee = 10
    const [search , setsearch] =useState('')
    const [showsearch , setshowsearch] = useState(true)
    const value ={
    products,
    currency,
    delivery_fee,
    search,
    setsearch,
    showsearch,
    setshowsearch
    }
    
    return (
        <Data.Provider value={value}>
            {props.children}
        </Data.Provider>
    );
};

export default Contaxt;