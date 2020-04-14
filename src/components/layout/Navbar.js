import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from '../../images/monkey-logo.png';

function Navbar(props) {
  return (
    <div>
      <nav className="black">
        <div class="nav-wrapper">
          <Link to="/" class="brand-logo">
            <img className="nav-logo" alt="logo" src={logo}></img>
          </Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li>
                <Link to="/about">
                    About
                    </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {};

export default Navbar;
