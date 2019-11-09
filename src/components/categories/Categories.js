import React from 'react';
import css from './Categories.module.scss';
import { Link } from 'react-router-dom';

const Categories = () => {

    const goToListingPage = (category) => {

    }

    return (
        <div className={css.categories}>

            <Link to="/listing" className={css.category}>
                <div className={css.category_product_content}>
                    <h4>GROCERY & STAPLES</h4>
                    <p>12 Products</p>
                </div>
                <div className={css.category_product_thumb}>
                    <img src={require('../../assets/img/categories/grocery.jpg')} alt="" />
                </div>
            </Link>

            <Link to="/listing" className={css.category}>
                <div className={css.category_product_content}>
                    <h4>BEVERAGES</h4>
                    <p>12 Products</p>
                </div>
                <div className={css.category_product_thumb}>
                    <img src={require('../../assets/img/categories/beverages.jpg')} alt="" />
                </div>
            </Link>

            <Link to="/listing" className={css.category}>
                <div className={css.category_product_content}>
                    <h4>FRUITS & VEGETABLES</h4>
                    <p>12 Products</p>
                </div>
                <div className={css.category_product_thumb}>
                    <img src={require('../../assets/img/categories/mango.jpg')} alt="" />
                </div>
            </Link>

            <Link to="/listing" className={css.category}>
                <div className={css.category_product_content}>
                    <h4>SNACKS & CHOCOS</h4>
                    <p>12 Products</p>
                </div>
                <div className={css.category_product_thumb}>
                    <img src={require('../../assets/img/categories/lays.jpg')} alt="" />
                </div>
            </Link>

            <Link to="/listing" className={css.category}>
                <div className={css.category_product_content}>
                    <h4>DAIRY & BAKERY</h4>
                    <p>12 Products</p>
                </div>
                <div className={css.category_product_thumb}>
                    <img src={require('../../assets/img/categories/milk.jpg')} alt="" />
                </div>
            </Link>
            <Link to="/listing" className={css.category}>
                <div className={css.category_product_content}>
                    <h4>BABY CARE</h4>
                    <p>12 Products</p>
                </div>
                <div className={css.category_product_thumb}>
                    <img src={require('../../assets/img/categories/baby.jpeg')} alt="" />
                </div>
            </Link>

            <Link to="/listing" className={css.category}>
                <div className={css.category_product_content}>
                    <h4>BEUTY CARE</h4>
                    <p>12 Products</p>
                </div>
                <div className={css.category_product_thumb}>
                    <img src={require('../../assets/img/categories/beauty.jpg')} alt="" />
                </div>
            </Link>

            <Link to="/listing" className={css.category}>
                <div className={css.category_product_content}>
                    <h4>HOME APPLIANCES</h4>
                    <p>12 Products</p>
                </div>
                <div className={css.category_product_thumb}>
                    <img src={require('../../assets/img/categories/household.jpg')} alt="" />
                </div>
            </Link>

            <Link to="/listing" className={css.category}>
                <div className={css.category_product_content}>
                    <h4>Cells &amp; Tablets</h4>
                    <p>12 Products</p>
                </div>
                <div className={css.category_product_thumb}>
                    <img src={require('../../assets/img/categories/computer.jpg')} alt="" />
                </div>
            </Link>

            <Link to="/listing" className={css.category}>
                <div className={css.category_product_content}>
                    <h4>Cells &amp; Tablets</h4>
                    <p>12 Products</p>
                </div>
                <div className={css.category_product_thumb}>
                    <img src={require('../../assets/img/categories/computer.jpg')} alt="" />
                </div>
            </Link>

        </div>
    )
}

export default Categories;