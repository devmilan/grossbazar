import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Menu.module.scss';
import categories from '../../config/categories.json'


 const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto mr-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/" exact>Home</NavLink></li>
            {categories && categories.length > 0 && categories.map(category =>
              <li className="nav-item" key={category.id}><NavLink className="nav-link" to={`/listing/${category.id}`}>{category.name}</NavLink></li>
            )};
          </ul>
        </div>
      </nav>
    )
}

export default Menu;