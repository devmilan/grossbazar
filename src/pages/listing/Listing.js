import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { getQueryStringValue, setQueryStringValue } from '../../util/queryString';

import ProductCard from '../../components/productCard/ProductCard';
import css from './Listing.module.scss';
import Loader from '../../components/loader/Loader';
import Pagination from '../../components/pagination/Pagination';
import SideFilter from '../../components/sideFilter/SideFilter';

// const useQuery = () => {
//   return new URLSearchParams(useLocation().search);
// }

const Listing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(getQueryStringValue('page') || 1);
  const [subcategory, setSubcategory] = useState(getQueryStringValue('subcategory') || '');
  const [limit, setLimit] = useState(getQueryStringValue('limit') || 12);
  const [sortBy, setSortBy] = useState(getQueryStringValue('sort_by') || '');
  const [priceLessthen, setPriceLessthen] = useState(getQueryStringValue('price_lte') || '');
  const [priceGreterthen, setPriceGreterthen] = useState(getQueryStringValue('price_gte') || '');
  const [totalResults, setTotalResults] = useState();
  const [filters, setFilters] = useState();


  // const query = useQuery();
  const { categoryid } = useParams();
  const location = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
    getProducts();
  }, [location, page, sortBy, priceLessthen, priceGreterthen]);

  const scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  const pageClicked = (no) => {
    setQueryStringValue('page', no)
    setPage(no);
    // scrollTop();
  }

  const onFilterclicked = (type, value) => {
    setQueryStringValue(type, value)
  }

  const onSortByChange = (e) => {
    setQueryStringValue('sort_by', e.target.value)
  }


  const getProducts = async () => {

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

      if (res.data.data && res.data.data.length > 0) {
        setProducts(res.data.data);
        setTotalResults(res.data.total);
        setFilters(res.data.filters[0]);
      } else {
        setProducts([]);
        setTotalResults(0);
      }

      setLoading(false);
    } catch (err) {
      console.log('err in fetching product', err);
      setLoading(false);
    }
  };


  return (
    <div className={css.product_listing} id="product-list">
      {loading && <Loader />}
      {!loading && products.length === 0 && <div className={css.no_product}> <h1>No products available</h1></div>}
      {products && products.length > 0 &&
        <div className={css.product_listing_container}>
          <div className={css.left}>
            {filters && <SideFilter onFilterclicked={onFilterclicked} filters={filters} />}
          </div>
          <div className={css.right}>
            <div className={css.top_bar}>
              <div>
                {totalResults && <h4>{totalResults} Products Found</h4>}
              </div>
              <div className={css.sort_by}>
                <select id="inputState" className="form-control" onChange={onSortByChange} defaultValue="price_asc">
                  <option value="price_asc">Price low to high</option>
                  <option value="price_dsc">Price high to low</option>
                  <option value="name">By Name</option>
                </select>
              </div>

            </div>
            <div className={css.product_list}>
              {products.map((product, i) => (
                <ProductCard product={product} key={i} />
              ))}
            </div>
            <div>
              {totalResults && totalResults > limit && <Pagination totalResults={totalResults} itemPerPage={limit} page={page} onPageClick={pageClicked} />}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Listing;
