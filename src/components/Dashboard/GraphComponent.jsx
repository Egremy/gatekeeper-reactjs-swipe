// Dependencies
import React, { iframe } from 'react';
import PropTypes from 'prop-types';

export const GraphComponent = ({ classes }) => (
  <div className={classes.frames}>
    <iframe
      title="Chart"
      width="100%"
      height="100%"
      src="https://datastudio.google.com/embed/reporting/10BpUDqyV2adigMPaF4w735kwEqtGaEU8/page/DjD"
      frameBorder="0"
      style={iframeStyle}
      allowFullScreen
    />
  </div>
);

const iframeStyle = {
  border: 0
};

GraphComponent.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any),
};
