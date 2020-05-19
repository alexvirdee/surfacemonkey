import React from 'react';
import M from 'materialize-css';
import "materialize-css/dist/css/materialize.min.css";
import { Link } from 'react-router-dom';

import './navbar.styles.css';

import logo from '../../../images/method-draw-image.svg';

class Navbar extends React.Component {
  // componentDidMount() {
  //   const options = {
  //     inDuration: 250,
  //     outDuration: 200
  //   }

  //   M.Sidenav.init(this.sidenav);

  //   let instance = M.Sidenav.getInstance(this.Sidenav);
  //   instance.open();
  //   console.log(instance.isOpen);
  // };

  render() {
    return (
      <div>
        <nav className="white">
          <div className="nav-wrapper">
          <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <Link to="/" className="brand-logo">
              <img className="nav-logo" alt="logo" src={logo}></img>
            </Link>
            <ul className="right hide-on-med-and-down nav-list">
              <li>
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav" id="nav-mobile">
          <li><Link className="nav-link" to="/about">About</Link></li>
        </ul>
      </div>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
