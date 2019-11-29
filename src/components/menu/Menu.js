import React from 'react';
import { Link } from 'react-router-dom';
import css from './Menu.module.scss';

 const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/listing/baby-care">Baby Care</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/listing/beauty-personal-care">Beauty Personal Care</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/listing/beverages">Beverages</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/listing/dairy-bakery">Dairy Bakery</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/listing/fruits_and_vegitables">Fruits Vegetables</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/listing/grocery_and_staples">Grocery Staples</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/listing/home-appliances">Home Appliances</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/listing/electronics">Electronics</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/listing/party-planner">Party Planner</Link></li>
          </ul>
        </div>
      </nav>
    )
}

export default Menu;