import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmazon, faEbay } from '@fortawesome/free-brands-svg-icons'

import Hero from '../../images/epoxy-swirl.jpg';

function Landing(props) {
    return (
        <div className="landing-content">
            <h3>Surface Monkey</h3>
            <h5>Discover Our Products</h5>
            <a className="waves-effect waves-light btn-large store-btn black"><FontAwesomeIcon icon={faAmazon} size="2x"></FontAwesomeIcon></a>
            <a className="waves-effect waves-light btn-large store-btn black"><FontAwesomeIcon icon={faEbay} size="2x"></FontAwesomeIcon></a>
            <section className="hero">
            </section>
        </div>
    )
}

Landing.propTypes = {

}

export default Landing

