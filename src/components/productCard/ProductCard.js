import React from 'react';
import css from './ProductCard.module.scss';

 const ProductCard = () => {
    return (
        <div className={css.product_card}>
            <div className={`${css.label} ${css.new}`}>NEW</div>
            <div className={`${css.label} ${css.sale}`}>-51%</div>
            {/* <div className={`${css.label} ${css.outstock}`}>OUT OF STOCK</div> */}

            <div className={css.product_img}>
                <img src={require('../../assets/img/categories/mango.jpg')} alt=""/>
            </div>
            <div className={css.product_info}>
                <div className={css.category}>Category</div>
                <div className={css.name}>Mangoo</div>
                <div className={css.price}>Rs.100.00</div>
                <button className={css.add_to_cart} title="Add to cart"><i className="fa fa-shopping-cart"></i></button>
            </div>
        </div>
    )
}

export default ProductCard;