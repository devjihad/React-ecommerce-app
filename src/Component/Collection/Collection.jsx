import React, { useContext, useEffect, useState } from "react";
import {assets} from '../../assets/frontend_assets/assets'
import Title from '../Home/Title'
import Product from '../Home/Product'
import { Data } from "../Contaxt/Contaxt";
const Collection = () => {
  const {products, setshowsearch} =useContext(Data)
  const [togle, settogle] =useState(false)
  const [category, setcategory] = useState([])
  const [subcategory, setsubcategory] = useState([])
  const [show , setshow] = useState([])
  const [sortproduct, setsortproduct]= useState([])
  // CATEGORY FILTER
  const categoryvalue=(e)=>{
    if(category.includes(e.target.value)) {
      setcategory(prev => prev.filter(item=> item !== e.target.value))
    }
    else{
      setcategory(prev => [...prev,e.target.value])
    }
  }

  // SUBCATEGORY FILTER

  const subcategoryvalue =(e)=>{
    if(subcategory.includes(e.target.value)){
      setsubcategory(prev => prev.filter(item => item !== e.target.value))
    }

    else{
      setsubcategory(prev => [...prev, e.target.value])
    }
  }

  // FILTER APPLY
  const filterapply = () =>{
    let filterproduct = products.slice()
    if(category.length>0 ){
      filterproduct = filterproduct.filter( item => category.includes(item.category))
    }
     
    if(subcategory.length ){
      filterproduct = filterproduct.filter(item => subcategory.includes(item.subCategory))
    }
    setshow(filterproduct)


  }
   
  const SortProductValue =()=>{
    let reserv = show.slice()

    switch(sortproduct){
      case 'low-high':
        setshow(reserv.sort((a,b)=>( a.price - b.price )))
        break
      case 'high-low' :
        setshow(reserv.sort((a, b)=>(b.price - a.price)))
        break

      default:
        filterapply() 
        break
    }
    
  }

  useEffect(()=>{
    filterapply()
  },[category , subcategory])

  useEffect(()=>{
    SortProductValue()
  },[sortproduct])
 

 
  return (
    <div className="container flex flex-col sm:flex-row gap-8 ">
      {/* left side  */}
      <div className="min-w-60 ">
        <h3 onClick={()=>settogle(!togle)} className="text-xl font-semibold flex items-center gap-1 ">Filter <img src={assets.dropdown_icon} alt="" className={`h-3 sm:hidden ${togle ? 'rotate-90' : ''}`}/></h3>
        <div className={`border border-gray-300 py-5 px-3 mt-6  ${togle ? '' : 'hidden'} sm:block`}>
          <p className="text-sm font-semibold mb-3">CATEGORYS</p>
          <div className="text-sm text-gray-700">
            <p className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" value={'Men'} onChange={categoryvalue} />Men
            </p>
            <p className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" value={'Women'}  onChange={categoryvalue}/>Women
            </p>
            <p className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" value={'Kids'} onChange={categoryvalue} />Kids
            </p>
          </div>
        </div>

        <div className={`border border-gray-300 py-5 px-3 mt-6   ${togle ? '' : 'hidden'} sm:block`}>
          <p className="text-sm font-semibold mb-3">Type</p>
          <div className="text-sm text-gray-700">
            <p className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" value={'Topwear'} onChange={subcategoryvalue}/>Topwear
            </p>
            <p className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" value={'Bottomwear'} onChange={subcategoryvalue} />Bottomwear
            </p>
            <p className="flex gap-2 items-center">
              <input type="checkbox" name="" id="" value={'Winterwear'} onChange={subcategoryvalue} />Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right side */}

      <div className="flex-1">
       

        <div className="flex justify-between text-base  mb-2">
             <Title value1={'ALL'} value2={'COLLECTION'}></Title>
             <select onChange={(e)=>setsortproduct(e.target.value)} className=" px-3 outline-0 h-8 font-semibold border-2 border-gray-300 ">
              <option value="relevent" >Sort by : Relevent</option>
              <option value="low-high">Sort by : Low to High</option>
              <option value="high-low">Sort by : High to low</option>
             </select>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 gap-y-5">
          {
            show.map((item, index)=>(
              <Product key={index} name={item.name} image={item.image[0]} id={item._id} price={item.price} />
             
            ))
          }
        </div>

      </div>
    </div>
  );
};

export default Collection;
