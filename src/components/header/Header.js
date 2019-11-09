import React from 'react';
import css from './Header.module.scss';
import Menu from '../menu/Menu';

 const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.top_header}>
                <div className={css.logo}>
                    <img src={require('../../assets/img/logo.png')} alt=""/>
                </div>
                <div className={css.search}>
                    <input className={css.search_input} type="text" name="" placeholder="Search..." />
                </div>
                <div className={css.cart}>
                    
                </div>
            </div>
            <Menu/>
        </div>
    )
}

export default Header;