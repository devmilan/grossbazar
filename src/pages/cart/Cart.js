import React from 'react';
import css from './Cart.module.scss';

const Cart = () => {
    return (
        <div className={css.cart_page}>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th className="product_remove">Delete</th>
                            <th className="product_thumb">Image</th>
                            <th className="product_name">Product</th>
                            <th className="product-price">Price</th>
                            <th className="product_quantity">Quantity</th>
                            <th className="product_total">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={css.product_remove}><a href="#"><i className="fa fa-trash-o"></i></a></td>
                            <td className={css.product_thumb}><a href="#"><img src="https://placehold.it/100" alt=""/></a></td>
                            <td className={css.product_name}><a href="#">Handbag fringilla</a></td>
                            <td className={css.product_price}>£65.00</td>
                            <td className={css.product_quantity}><label>Quantity</label> <input min="1" max="100" value="1" type="number"/></td>
                            <td className={css.product_total}>£130.00</td>
                        </tr>
                        <tr>
                            <td className={css.product_remove}><a href="#"><i className="fa fa-trash-o"></i></a></td>
                            <td className={css.product_thumb}><a href="#"><img src="https://placehold.it/100" alt=""/></a></td>
                            <td className={css.product_name}><a href="#">Handbag fringilla</a></td>
                            <td className={css.product_price}>£65.00</td>
                            <td className={css.product_quantity}><label>Quantity</label> <input min="1" max="100" value="1" type="number"/></td>
                            <td className={css.product_total}>£130.00</td>
                        </tr>
                        <tr>
                            <td colspan="6"><button class="btn btn-primary" type="button">update cart</button></td>
                        </tr>
                    </tbody>
                </table>   
            </div>
        </div>
    )
}
export default Cart;