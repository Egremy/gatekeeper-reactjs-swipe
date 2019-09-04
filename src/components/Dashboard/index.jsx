// Dependencies
import React from 'react';

// Material-UI Core
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';

// Components
import { TopNavigator } from './TopNavigator';
import { LeftDrawer } from './LeftDrawer';
import { MainContent } from './MainContent';

// Styles
import { useStyles } from './styles';

export const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="primary"
        position="fixed"
        className={classes.appBar}
      >
        <TopNavigator
          classes={classes}
        />
      </AppBar>
      <LeftDrawer
        classes={classes}
      />
      <MainContent
        classes={classes}
      />
    </div>
  );
};
