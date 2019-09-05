// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

export const GraphComponent = ({ classes }) => (
  <div className={classes.frames}>
    <img
      style={{
        '-webkit-backface-visibility': 'hidden',
        '-webkit-perspective': 1000,
        display: 'block',
        height: 'auto',
        pointerEvents: 'none',
        width: '100%'
      }}
      src="https://rockcreekpizzaco.com/wp-content/uploads/2019/04/bd68ef5082a0e59e346a586f12ff520d.png"
      alt="graph"
    />
  </div>
);

GraphComponent.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any),
};
