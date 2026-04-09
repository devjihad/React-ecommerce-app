import React from "react";
import { Link } from "react-router-dom";

const Product = ({ image, name, price, id }) => {
  return (
    <div>
      <Link to={`/product/${id}`}>
        <div>
            <img src={image} alt="" />
            <h3 className='text-[16px] font-semibold'>{name}</h3>
            <h5 className='text-[14px] font-semibold'>$ {price}</h5>
        </div>
      </Link>
    </div>
  );
};

export default Product;
