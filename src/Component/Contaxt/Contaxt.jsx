import React, { createContext } from 'react';
export const data = createContext()
const Contaxt = ({props}) => {
    const value ={

    }
    return (
        <data.Provider value={value}>
            {props.children}
        </data.Provider>
    );
};

export default Contaxt;