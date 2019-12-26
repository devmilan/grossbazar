import React from 'react';
import Categories from '../components/categories/Categories';
import Banner from '../components/banner/Banner';
import Service from '../components/serviceSection/Service';
import Offers from '../components/offers/Offers';
import Promotions from '../components/promotions/Promotions';
import CallUs from '../components/callUs/Call';
import ErrorBoundary from '../util/ErrorBoundary';

 const Home = () => {
    return (
        <>
            <ErrorBoundary><Banner/></ErrorBoundary>
            <div className="gb_container">
                <ErrorBoundary><Categories/></ErrorBoundary>
                <ErrorBoundary><Offers/></ErrorBoundary>
                <ErrorBoundary><CallUs/></ErrorBoundary>
                <ErrorBoundary><Promotions/></ErrorBoundary>
            </div>
            <Service/>
        </>
    )
}

export default Home;