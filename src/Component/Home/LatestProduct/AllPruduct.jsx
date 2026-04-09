import React, { useContext, useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import { Data } from "../../Contaxt/Contaxt";
import Title from "../Title";
import Product from "../Product";

const AllPruduct = () => {
  const { products } = useContext(Data);
  const [value, setvalue] = useState([]);

  useEffect(() => {
    setvalue(products.slice(0, 10));
  }, []);
  console.log(value);
  return (
    <div>
      <Title
        value1={"Latest"}
        value2={"Product"}
        value={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat nostrum culpa est totam ex nemo."
        }
      />

      <div className="grid gap-3 gap-y-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {value.map((item, index) => (
          <Product
            key={index}
            image={item.image[0]}
            name={item.name}
            id={item._id}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default AllPruduct;
