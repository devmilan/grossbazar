import React from 'react';
import Categories from '../components/categories/Categories';
import Banner from '../components/banner/Banner';
import Service from '../components/serviceSection/Service';
import Offers from '../components/offers/Offers';
import Promotions from '../components/promotions/Promotions';

 const Home = () => {
    return (
        <>
            <Banner/>
            <div className="gb_container">
                <Categories/>
                <Offers/>
                <Promotions/>
            </div>
            
            <Service/>
        </>
    )
}

export default Home;