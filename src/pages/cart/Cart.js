import React, { useEffect, useState } from 'react';
import css from './Cart.module.scss';
import { getCartData } from '../../Api';
import { getFromCart } from '../../Storage';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const containerVariant = {
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1,
  }
}

const Cart = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0);
    getCartproducts()
  }, [])


  const getCartproducts = async () => {
    const items = getFromCart();
    if (items) {
      const ids = Object.keys(items).join(',');
      const data = await getCartData(ids);
      setItems(data.data)
    }
  };


// Your cart is empty!


  return (
    <motion.div className={css.cart_page} variants={containerVariant} initial="hidden" animate="visible" >
      {items && items.length > 0 &&
        <motion.div className="table-responsive" variants={containerVariant} initial="hidden" animate="visible">
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
              {items.map(item =>
                <tr key={item._id}> 
                  <td className={css.product_remove}><a href="#"><i className="fa fa-trash-o"></i></a></td>
                  <td className={css.product_thumb}><a href="#"><img src={ item.image === "no-image.jpg" ? require(`../../assets/img/${item.image}`) : item.image} alt={item.name} width="50"/></a></td>
                  <td className={css.product_name}><a href="#">{item.name}</a></td>
                  <td className={css.product_price}>Rs.{item.price}/-</td>
                  <td className={css.product_quantity}><label>Quantity</label> <input min="1" max="100" value="1" type="number" /></td>
                  <td className={css.product_total}>£130.00</td>
                </tr>
              )}
              <tr>
                <td colSpan="6"><Link to="/checkout" className={`btn btn-primary ${css.checkout_btn}`} type="button">Place Order</Link></td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      }
    </motion.div>
  )
}
export default Cart;