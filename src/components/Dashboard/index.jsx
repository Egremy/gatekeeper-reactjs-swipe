// Dependencies
import React from 'react';
import clsx from 'clsx';

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
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="primary"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <TopNavigator
          classes={classes}
          open={open}
          setOpen={setOpen}
        />
      </AppBar>
      <LeftDrawer
        classes={classes}
        open={open}
      />
      <MainContent
        classes={classes}
      />
    </div>
  );
};
