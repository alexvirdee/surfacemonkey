import React from 'react';
import PropTypes from 'prop-types';

import './footer.styles.css';

function Footer(props) {
  return (
    <footer>
        <svg className="footer-vector wave wave1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8e9eab" fillOpacity="0.7" d="M0,160L30,165.3C60,171,120,181,180,197.3C240,213,300,235,360,234.7C420,235,480,213,540,181.3C600,149,660,107,720,101.3C780,96,840,128,900,154.7C960,181,1020,203,1080,224C1140,245,1200,267,1260,245.3C1320,224,1380,160,1410,128L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
