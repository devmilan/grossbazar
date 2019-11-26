import React from 'react';
import css from './Header.module.scss';
import Menu from '../menu/Menu';
import { Link } from 'react-router-dom';

 const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.top_header}>
                <Link to="/" className={css.logo}>
                    <img src={require('../../assets/img/logo.png')} alt=""/>
                </Link>
                <div className={css.search}>
                    <input className={css.search_input} type="text" name="" placeholder="Search..." />
                </div>
                <div className={css.cart}>
                    <i className="fa fa-shopping-cart"></i>
                </div>
            </div>
            <Menu/>
        </div>
    )
}

export default Header;