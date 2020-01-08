
import React, { Component } from 'react';
import axios from 'axios';
import { getQueryStringValue, setQueryStringValue } from '../../util/queryString';

import ProductCard from '../../components/productCard/ProductCard';
import css from './Listing.module.scss';
import Loader from '../../components/loader/Loader';
import Pagination from '../../components/pagination/Pagination';
import SideFilter from '../../components/sideFilter/SideFilter';
import ErrorBoundary from '../../util/ErrorBoundary';

class Listing extends Component {

  state = {
    products: [],
    loading: false,
    page: getQueryStringValue('page') || 1,
    subcategory: getQueryStringValue('subcategory') || '',
    limit: getQueryStringValue('limit') || 12,
    sortBy: getQueryStringValue('sort_by') || '',
    priceLessthen: getQueryStringValue('price_lte') || '',
    totalResults: '',
    filters: '',
    filterChip:[]
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.getProducts();
  };

  scrollTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  pageClicked = (no) => {
    setQueryStringValue('page', no);
    this.setState({ page: no },
      () => this.scrollTop());
  };

  onFilterclicked = (type, value) => {
    setQueryStringValue(type, value);
    type === 'subcategory' && this.setState({ subcategory: value, page: 0 }, () => this.getProducts() );
  };

  onSortByChange = (e) => {
    setQueryStringValue('sort_by', e.target.value)
  };


  makeChip = () => {  
    this.setState({
      filterChip: {'subcategory': this.state.subcategory}
    })
  }

  getProducts = async () => {
    this.setState({ loading: true });
    const { subcategory, sortBy, priceLessthen, priceGreterthen, limit, page } = this.state;
    const { categoryid } = this.props.match.params

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
        this.setState({
          products: res.data.data,
          totalResults: res.data.total,
          filters: res.data.filters,
          loading: false
        });
      } else {
        this.setState({
          products: [],
          totalResults: 0,
          loading: false
        })
      }
    } catch (err) {
      console.log('err in fetching product', err);
      this.setState({ loading: false })
    }
  };


  render() {
    const { loading, limit, page, products, filters, totalResults } = this.state;
    return (
      <div className={css.product_listing} id="product-list">
        {loading && <Loader />}
        {!loading && products.length === 0 && <div className={css.no_product}> <h1>No products available</h1></div>}
        {products && products.length > 0 &&
          <div className={css.product_listing_container}>
            <div className={css.left}>
              {filters && <SideFilter onFilterclicked={this.onFilterclicked} filters={filters} />}
            </div>
            <div className={css.right}>
              <div className={css.top_bar}>
                <div>
                  {totalResults && <h4>{totalResults} Products Found</h4>}
                </div>
                <div className={css.sort_by}>
                  <select id="inputState" className="form-control" onChange={this.onSortByChange} defaultValue="price_asc">
                    <option value="price_asc">Price low to high</option>
                    <option value="price_dsc">Price high to low</option>
                    <option value="name">By Name</option>
                  </select>
                </div>

              </div>
              <div className={css.product_list}>
                {products.map((product, i) => (
                  <ErrorBoundary key={i}><ProductCard product={product} /></ErrorBoundary>
                ))}
              </div>
              <div>
                {totalResults && totalResults > limit && <Pagination totalResults={totalResults} itemPerPage={limit} page={page} onPageClick={this.pageClicked} />}
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Listing;
