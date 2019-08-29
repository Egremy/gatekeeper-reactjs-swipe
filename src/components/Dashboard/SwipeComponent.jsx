// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import ReactSlidy from 'react-slidy';

// Components
import { MapComponent } from './MapComponent';
import { TableComponent } from './TableComponent';
import { GraphComponent } from './GraphComponent';

export const SwipeComponent = ({ classes }) => (
  <ReactSlidy>
    <MapComponent
      classes={classes}
    />
    <div className={classes.frames}>
      <TableComponent
        classes={classes}
      />
    </div>
    <GraphComponent
      classes={classes}
    />
  </ReactSlidy>
);

SwipeComponent.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any),
};
