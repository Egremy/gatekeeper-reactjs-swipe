// Dependenices
import React from 'react';
import PropTypes from 'prop-types';

// Material-UI Core
import Grid from '@material-ui/core/Grid';

// Components
import { SwipeComponent } from './SwipeComponent';

export const MainContent = ({ classes }) => (
  <div className={classes.mainContentRoot}>
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <SwipeComponent
          classes={classes}
        />
      </Grid>
    </Grid>
  </div>
);

MainContent.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any),
};
