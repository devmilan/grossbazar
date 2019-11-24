import React from 'react';
import ProductCard from '../../components/productCard/ProductCard';
import css from './Listing.module.scss';

const Listing = () => {
    return (
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
    )
}

export default Listing;