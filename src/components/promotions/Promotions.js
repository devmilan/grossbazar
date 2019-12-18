import React from 'react';
import css from './Promotions.module.scss';

const Promotions = () => {
    return (
        <div className={css.promotions}>
            <div className={css.img}>
                <img src={require('../../assets/img/promotions/banner1.jpg')} alt="banner1"/>
            </div>
            <div className={css.img}>
                <img src={require('../../assets/img/promotions/banner2.jpg')} alt="banner2"/>
            </div>
        </div>
    )
}

export default Promotions;