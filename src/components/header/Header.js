import React from 'react';
import css from './Header.module.scss';
import Menu from '../menu/Menu';
import { Link } from 'react-router-dom';

 const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.top_header}>
                <Link to="/" className={css.logo}>
                    <img src={require('../../assets/img/logo.png')} alt="GrossBazar"/>
                </Link>
                <div className={css.search}>
                  <label id="lbl-main-menu-mob">Select Item</label>
                  <input className={css.search_input} type="text" name="" placeholder="Search..." aria-labelledby="lbl-main-menu-mob"/>
                </div>
                <div className={css.account}>
                      <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#login">
                       Login & Signup
                      </button>
                      <button type="button" className="btn btn-primary  btn-sm">
                         <i className="fa fa-shopping-cart"></i> cart <span className="badge badge-light">4</span>
                      </button>
                </div>
            </div>
            <Menu/>



            <div className="modal fade" id="login" tabIndex="-1" role="dialog" aria-labelledby="loginLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="loginLabel">Login</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Header;