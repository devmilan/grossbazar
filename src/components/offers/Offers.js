import React from 'react';
import css from './Offers.module.scss';

const Offers = () => {
    return (
        <div className={css.offers}>
            <div className={css.img}>
                <img src="https://demo.hasthemes.com/antomi-preview/antomi/assets/img/bg/banner6.jpg" alt="banner6"/>
            </div>
            <div className={css.img}>
                <img src="https://demo.hasthemes.com/antomi-preview/antomi/assets/img/bg/banner7.jpg" alt="banner7"/>
            </div>
            <div className={css.img}>
                <img src="https://demo.hasthemes.com/antomi-preview/antomi/assets/img/bg/banner8.jpg" alt="banner8"/>
            </div>
        </div>
    )
}

export default Offers;