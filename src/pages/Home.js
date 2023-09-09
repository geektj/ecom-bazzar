import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([]);
    const data = useLoaderData();
    // console.log("__data",data);
    useEffect(() => {
        setProducts(data.data)
    },[data])
    return(
        <div className='home'>
            <Banner />
            <Products products={products}/>
        </div>
    )
}

export default Home;