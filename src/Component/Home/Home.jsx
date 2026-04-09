import React from 'react';
import Hero from './Hero';
import AllPruduct from './LatestProduct/AllPruduct';
import Bestseller from './Bestseller/Bestseller';
import Policy from './Policy';

const Home = () => {
    return (
        <div>
            <Hero/>
            <AllPruduct/>
            <Bestseller/>
            <Policy/>
        </div>
    );
};

export default Home;