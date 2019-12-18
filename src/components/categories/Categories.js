import React from 'react';
import css from './Categories.module.scss';
import { Link } from 'react-router-dom';

const Categories = () => {

    const goToListingPage = (category) => {

    }

    return (
        <div className={css.categories}>

            <Link to="/listing/grocery-staples" className={css.category}>
                <div className={css.category_product_content}>
                    <h4>GROCERY & STAPLES</h4>
                    <p>12 Products</p>
                </div>
                <div className={css.category_product_thumb}>
                    <img src={require('../../assets/img/categories/grocery.jpg')} alt="grocery" />
                </div>
            </Link>

            <Link to="/listing/beverages" className={css.category}>
                <div className={css.category_product_content}>
                    <h4>BEVERAGES</h4>
                    <p>12 Products</p>
                </div>
                <div className={css.category_product_thumb}>
                    <img src={require('../../assets/img/categories/beverages.jpg')} alt="beverages" />
                </div>
            </Link>

            <Link to="/listing/fruits-vegetables" className={css.category}>
                <div className={css.category_product_content}>
                    <h4>FRUITS & VEGETABLES</h4>
                    <p>12 Products</p>
                </div>
                <div className={css.category_product_thumb}>
                    <img src={require('../../assets/img/categories/mango.jpg')} alt="mango" />
                </div>
            </Link>

            <Link to="/listing" className={css.category}>
                <div className={css.category_product_content}>
                    <h4>SNACKS & CHOCOS</h4>
                    <p>12 Products</p>
                </div>
                <div className={css.category_product_thumb}>
                    <img src={require('../../assets/img/categories/lays.jpg')} alt="lays" />
                </div>
            </Link>

            <Link to="/listing/dairy-bakery" className={css.category}>
                <div className={css.category_product_content}>
                    <h4>DAIRY & BAKERY</h4>
                    <p>12 Products</p>
                </div>
                <div className={css.category_product_thumb}>
                    <img src={require('../../assets/img/categories/milk.jpg')} alt="milk" />
                </div>
            </Link>
            <Link to="/listing/baby-care" className={css.category}>
                <div className={css.category_product_content}>
                    <h4>BABY CARE</h4>
                    <p>12 Products</p>
                </div>
                <div className={css.category_product_thumb}>
                    <img src={require('../../assets/img/categories/baby.jpg')} alt="baby" />
                </div>
            </Link>

            <Link to="/listing/beauty-personal-care" className={css.category}>
                <div className={css.category_product_content}>
                    <h4>BEAUTY CARE</h4>
                    <p>12 Products</p>
                </div>
                <div className={css.category_product_thumb}>
                    <img src={require('../../assets/img/categories/beauty.jpg')} alt="beauty" />
                </div>
            </Link>

            <Link to="/listing/home-appliances" className={css.category}>
                <div className={css.category_product_content}>
                    <h4>HOME APPLIANCES</h4>
                    <p>12 Products</p>
                </div>
                <div className={css.category_product_thumb}>
                    <img src={require('../../assets/img/categories/household.jpg')} alt="household" />
                </div>
            </Link>

            <Link to="/listing/electronics" className={css.category}>
                <div className={css.category_product_content}>
                    <h4>Electronics</h4>
                    <p>12 Products</p>
                </div>
                <div className={css.category_product_thumb}>
                    <img src={require('../../assets/img/categories/computer.jpg')} alt="computer" />
                </div>
            </Link>

            <Link to="/listing" className={css.category}>
                <div className={css.category_product_content}>
                    <h4>Cells &amp; Tablets</h4>
                    <p>12 Products</p>
                </div>
                <div className={css.category_product_thumb}>
                    <img src={require('../../assets/img/categories/computer.jpg')} alt="computer" />
                </div>
            </Link>

        </div>
    )
}

export default Categories;