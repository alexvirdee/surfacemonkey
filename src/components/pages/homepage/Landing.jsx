import React from 'react';
import { ProductList } from '../../product-list/Product-list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmazon, faEbay } from '@fortawesome/free-brands-svg-icons';

import './landing.styles.scss';

import Logo from '../../../images/monkey-logo.png';

function Landing(props) {
  return (
    <div className="landing-content">
      <div className="landing-header">
        <h3 className="site-title">Surface Monkey</h3>
        <h5>Discover Our Products</h5>
        <div className="monkey-logo">
          <img alt="logo" src={Logo} />
        </div>
        <ProductList />
        {/* <div className="ecommerce-btns">
        <a className="waves-effect waves-light btn-large store-btn black">
          <FontAwesomeIcon icon={faAmazon} size="2x"></FontAwesomeIcon>
        </a>
        <a className="waves-effect waves-light btn-large store-btn black">
          <FontAwesomeIcon icon={faEbay} size="2x"></FontAwesomeIcon>
        </a>
        </div> */}
      </div>
    </div>
  );
}

Landing.propTypes = {};

export default Landing;
