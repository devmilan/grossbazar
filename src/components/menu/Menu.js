import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Menu.module.scss';

 const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto mr-auto">
            <li className="nav-item"><NavLink className="nav-link" to="/" exact>Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/listing/baby-care">Baby Care</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/listing/beauty-personal-care">Beauty Personal Care</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/listing/beverages">Beverages</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/listing/dairy-bakery">Dairy Bakery</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/listing/fruits_and_vegitables">Fruits Vegetables</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/listing/grocery_and_staples">Grocery Staples</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/listing/home-appliances">Home Appliances</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/listing/electronics">Electronics</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/listing/party-planner">Party Planner</NavLink></li>
          </ul>
        </div>
      </nav>
    )
}

export default Menu;