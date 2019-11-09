import React from 'react';
import css from './Offers.module.scss';

const Offers = () => {
    return (
        <div className={css.offers}>
            <div className={css.img}>
                <img src="https://demo.hasthemes.com/antomi-preview/antomi/assets/img/bg/banner6.jpg" alt=""/>
            </div>
            <div className={css.img}>
                <img src="https://demo.hasthemes.com/antomi-preview/antomi/assets/img/bg/banner7.jpg" alt=""/>
            </div>
            <div className={css.img}>
                <img src="https://demo.hasthemes.com/antomi-preview/antomi/assets/img/bg/banner8.jpg" alt=""/>
            </div>
        </div>
    )
}

export default Offers;