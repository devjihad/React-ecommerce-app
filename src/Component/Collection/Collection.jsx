import React from "react";

const Collection = () => {
  return (
    <div className="container flex flex-col sm:flex-row gap-8 ">
      <div className="min-w-60">
        <h3>Filter </h3>
        <div className={`border border-gray-300 py-5 px-3 mt-6 `}>
          <p className="text-sm font-semibold mb-3">CATEGORYS</p>
          <div className="text-sm">
            <p className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" value={'Men'} />Men
            </p>
            <p className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" value={'Women'} />Women
            </p>
            <p className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" value={'Kids'} />Kids
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
