import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './navbar.styles.css';

import logo from '../../../images/method-draw-image.svg';

function Navbar(props) {
  return (
    <div>
      <nav className="white">
        <div className="nav-wrapper">
        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <Link to="/" className="brand-logo">
            <img className="nav-logo" alt="logo" src={logo}></img>
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down nav-list">
            <li>
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {};

export default Navbar;
