import React from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';

const Home = () => {
    return(
        <div className='home'>
            <Banner />
            <Products />
        </div>
    )
}

export default Home;