import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../../components/productCard/ProductCard';
import css from './Listing.module.scss';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const Listing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryid } = useParams();
  const subcategory = query.get("subcategory");
  const query = useQuery();
  const page = query.get("page") || 1 ;
  const limit = query.get("limit") || 12 ; 
  const sortBy = query.get("sort_by");



  useEffect(() => {
    getProduct();
  }, []);


  const getProduct = async () => {

    const url = `https://grossbazar-api.herokuapp.com/api/products`;

    let filter;
    if(subcategory){
      filter += `&subcategory=${subcategory}`
    }
    if(sortBy){
      filter += `&sort=${subcategory}`
    }


    try {
      setLoading(true);
      const res = await axios.get(
        `${url}?category=${categoryid}${filter}&limit=${limit}&page=${page}`
      );
      setProducts(res.data);
      setLoading(false);
    } catch (err) {
      console.log('err in fetching producta', err);
      setLoading(false);
    }
  };



  return (
    <div className={css.product_listing}>
      {loading && <div> Loading..</div>}
      <div className={css.product_listing_container}>
        <div className={css.left}></div>
        <div className={css.right}>
          {products &&
            products.data &&
            products.data.length > 0 &&
            products.data.map((product, i) => (
              <ProductCard product={product} key={i} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Listing;
