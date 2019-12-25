import React from 'react';
import css from './Categories.module.scss';
import { Link } from 'react-router-dom';
import categories from '../../config/categories.json'

const Categories = () => {
  return (
    <>
      {categories && categories.length > 0 &&
        <div className={css.categories}>
          {categories.map(category =>
            <Link to={`/listing/${category.id}`} className={css.category} key={category.id}>
              <div className={css.category_product_content}>
                <h4>{category.name}</h4>
                {/* <p>12 Products</p> */}
              </div>
              <div className={css.category_product_thumb}>
                <img src={require(`../../assets/img/categories/${category.image}`)} alt="grocery" />
              </div>
            </Link>
          )}
          </div>
      }
    </>
  )
}

export default Categories;