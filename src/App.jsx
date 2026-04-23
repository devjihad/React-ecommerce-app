import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import Navbar from './Component/Header&Footer/Navbar';
import About from './Component/About/About';
import Collection from './Component/Collection/Collection';
import Contact from './Component/Contact/Contact';
import Search from './Component/Collection/Search';
import Productdetails from './Component/Home/Productdetails';

const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Search/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:id' element={<Productdetails/>}/>
      </Routes>
    </div>
  );
};

export default App;