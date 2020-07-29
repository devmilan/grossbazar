import React from 'react';
import Categories from '../components/categories/Categories';
import Banner from '../components/banner/Banner';
import Service from '../components/serviceSection/Service';
import Offers from '../components/offers/Offers';
import Promotions from '../components/promotions/Promotions';
import CallUs from '../components/callUs/Call';
import ErrorBoundary from '../util/ErrorBoundary';
import { motion } from 'framer-motion';

const containerVariant = {
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1,
  }
}

 const Home = () => {
    return (
        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible" >
            <ErrorBoundary><Banner/></ErrorBoundary>
            <div className="gb_container">
                <ErrorBoundary><Categories/></ErrorBoundary>
                <ErrorBoundary><Offers/></ErrorBoundary>
                <ErrorBoundary><CallUs/></ErrorBoundary>
                <ErrorBoundary><Promotions/></ErrorBoundary>
            </div>
            <Service/>
        </motion.div>
    )
}

export default Home;