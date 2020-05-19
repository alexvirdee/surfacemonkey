import React from 'react';
import PropTypes from 'prop-types';

import './about.styles.scss';

function About(props) {
  return (
    <div className="about-content">
      <h2>Surface Monkey Company</h2>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        malesuada justo eget fringilla gravida. Sed interdum, ante eget
        vestibulum euismod, metus massa ultrices nisl, ut maximus mi ipsum ac
        nisi. Sed feugiat nulla gravida ultricies vehicula. Nullam lacinia
        cursus ipsum, quis aliquet orci aliquam et. Nullam consectetur, magna
        quis sagittis fermentum, ligula lacus venenatis ante, eu efficitur
        mauris ex ut tellus. Ut eleifend ut lectus et semper. Curabitur
        molestie, lectus ac consectetur laoreet, diam libero tempor neque, at
        accumsan mi nisl semper leo. Mauris at semper felis. Fusce odio justo,
        vulputate sed elit et, scelerisque congue massa. Pellentesque ac mattis
        est, sed fringilla sem. Fusce non lacinia elit. Proin vehicula imperdiet
        condimentum. Vivamus semper tellus in quam aliquam mattis. Aliquam massa
        est, dignissim pretium dictum id, ullamcorper quis massa. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Donec elementum ipsum sit amet libero dapibus aliquam.
        Vestibulum non porta nunc. Proin condimentum fringilla mi, ac suscipit
        arcu consequat at. Vivamus sodales, libero quis fermentum pulvinar, dui
        tellus tempus risus, in tincidunt nisi ipsum ac felis. Vestibulum vitae
        sem non velit sodales vulputate eu laoreet nibh. Nunc suscipit vulputate
        lacinia. Cras non ornare mauris, ut dictum felis. Curabitur id tempor
        tortor.
      </div>
    </div>
  );
}

About.propTypes = {};

export default About;
