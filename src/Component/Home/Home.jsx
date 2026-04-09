import React from 'react';
import Hero from './Hero';
import AllPruduct from './LatestProduct/AllPruduct';
import Bestseller from './Bestseller/Bestseller';

const Home = () => {
    return (
        <div>
            <Hero/>
            <AllPruduct/>
            <Bestseller/>
        </div>
    );
};

export default Home;