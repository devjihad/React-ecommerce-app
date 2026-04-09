import React from 'react';
import Hero from './Hero';
import AllPruduct from './LatestProduct/AllPruduct';
import Bestseller from './Bestseller/Bestseller';
import Policy from './Policy';
import Newsletter from './Newsletter';
import Footer from '../Header&Footer/Footer';

const Home = () => {
    return (
        <div>
            <Hero/>
            <AllPruduct/>
            <Bestseller/>
            <Policy/>
            <Newsletter/>
            <Footer/>
        </div>
    );
};

export default Home;