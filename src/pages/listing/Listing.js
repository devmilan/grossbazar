import React from 'react';
import ProductCard from '../../components/productCard/ProductCard';
import css from './Listing.module.scss';
import Layout from '../Layout';

const Listing = () => {
    return (
        <Layout>
            <div className={css.product_listing}>
                <div className={css.left}>

                </div>
                <div className={css.right}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </Layout>
    )
}

export default Listing;