import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../../components/productCard/ProductCard';
import css from './Listing.module.scss';
import Loader from '../../components/loader/Loader';
import Pagination from '../../components/pagination/Pagination';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const Listing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState();

  const query = useQuery();
  const { categoryid } = useParams();
  const subcategory = query.get("subcategory");
  // const page = query.get("page") || 1;
  const limit = query.get("limit") || 12;
  const sortBy = query.get("sort_by");
  const priceLessthen = query.get("price_lte");
  const priceGreterthen = query.get("price_gte");
  const location = useLocation();


  useEffect(() => {
    console.log('hello')
    window.scrollTo(0, 0);
    getProducts();
  }, [location, page]);


  const getProducts = async (option) => {

    setLoading(true);
    const url = `https://grossbazar-api.herokuapp.com/api/products`;
    let filter = '';

    if (subcategory) { filter += `&subcategory=${subcategory}` };
    if (sortBy) { filter += `&sort=${sortBy}` };
    if (priceLessthen) { filter += `&$lte=${priceLessthen}` };
    if (priceGreterthen) { filter += `&$gte=${priceGreterthen}` };

    try {
      const res = await axios.get(
        `${url}?category=${categoryid}${filter}&limit=${limit}&page=${page}`
      );
      // if (option === 'infiniteScroll') {
      //   setProducts([...products, ...res.data]);
      // }else{
      //   setProducts(res.data);
      // }
      
      if(res.data.data && res.data.data.length>0){
        setProducts(res.data.data);
        setTotalResults(res.data.total);
      }
     
      
      setLoading(false);
    } catch (err) {
      console.log('err in fetching product', err);
      setLoading(false);
    }
  };

const scrollTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


const pageClicked = (no) => {
    setPage(no);
    // getProducts()
    scrollTop();
  }



  return (
    <div className={css.product_listing} id="product-list">
      {loading && <Loader/>}
      <div className={css.product_listing_container}>
        <div className={css.left}></div>
        <div className={css.right}>
         <div className={css.sort_by}>

         </div>
         <div className={css.product_list}>
            {products && products && products.length > 0 &&
              products.map((product, i) => (
              <ProductCard product={product} key={i} />
            ))}
         </div>
         <div>
           {totalResults && totalResults > limit && <Pagination totalResults={totalResults} itemPerPage={limit} page={page} onPageClick={pageClicked}/>}
         </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
