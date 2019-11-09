import React from 'react';
import { Link } from 'react-router-dom';
import css from './Menu.module.scss';

 const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: 'rgb(245, 99, 2)'}}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/listing">Baby Care</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/listing">Beauty Personal Care</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/listing">Beverages</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/listing">Dairy Bakery</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/listing">Fruits Vegetables</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/listing">Grocery Staples</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/listing">Home Appliances</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/listing">IT Solution</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/listing">Party Planner</Link></li>
          </ul>
        </div>
      </nav>
    )
}

export default Menu;