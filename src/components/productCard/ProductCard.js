import React from 'react';
import css from './ProductCard.module.scss';

 const ProductCard = ({product}) => {
    return (
        <div className={css.product_card}>
            <div className={`${css.label} ${css.new}`}>NEW</div>
            {product.price < product.mrp && <div className={`${css.label} ${css.sale}`}>-{Math.ceil((product.price / product.mrp) * 100)}%</div>}
            {/* <div className={`${css.label} ${css.outstock}`}>OUT OF STOCK</div> */}

            <div className={css.product_img}>
                <img src={require(`../../assets/img/${product.image}`)} alt=""/>
            </div>
            <div className={css.product_info}>
                {/* <div className={css.category}>{product.category}</div> */}
                <div className={css.name}>{product.name}</div>
                <div className={css.price_list}>
                  {product.price < product.mrp && <span className={css.mrp}>Rs.{product.mrp}</span>}
                  <span className={css.price}>Rs.{product.price}</span>
                </div>
                <button className={css.add_to_cart} title="Add to cart"><i className="fa fa-shopping-cart"></i></button>
            </div>
        </div>
    )
}

export default ProductCard;