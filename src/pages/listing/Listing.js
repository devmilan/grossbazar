import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../../components/productCard/ProductCard';
import css from './Listing.module.scss';

const Listing = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
          try {
            setLoading("true");
            const res = await axios.get(`https://grossbazar-api.herokuapp.com/api/products`);
            setProducts(res.data);
          } catch (err) {
              console.log('err in fetching producta', err)
            setLoading("null");
          }
        }
        getProduct();
    },[]);


    return (
        <div className={css.product_listing}>
            <div className={css.left}>

            </div>
            <div className={css.right}>
                {products && products.data && products.data.length>0 && products.data.map((product,i)=>
                    <ProductCard product={product} key={i}/>
                )}
            </div>
        </div>
    )
}

export default Listing;