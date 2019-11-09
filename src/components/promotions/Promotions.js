import React from 'react';
import css from './Promotions.module.scss';

const Promotions = () => {
    return (
        <div className={css.promotions}>
            <div className={css.img}>
                <img src={require('../../assets/img/promotions/banner1.jpg')} alt=""/>
            </div>
            <div className={css.img}>
                <img src={require('../../assets/img/promotions/banner2.jpg')} alt=""/>
            </div>
        </div>
    )
}

export default Promotions;