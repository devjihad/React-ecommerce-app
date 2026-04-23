import React from 'react';
import { useParams } from 'react-router-dom';

const Productdetails = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <div>
            <h2>this is dynamic product</h2>
        </div>
    );
};

export default Productdetails;