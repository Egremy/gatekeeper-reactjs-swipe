// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

export const MapComponent = ({ classes }) => (
  <div className={classes.frames}>
    <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" alt="map" />
  </div>
);

MapComponent.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any),
};
