// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// Material-UI Core
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Utils
import { iconToShow } from './utils';

// Constants
import { gatekeeperDrawerOptions } from './constants';

export const LeftDrawer = ({ classes, open }) => (
  <Drawer
    variant="permanent"
    className={clsx(classes.drawer, {
      [classes.drawerOpen]: open,
      [classes.drawerClose]: !open,
    })}
    classes={{
      paper: clsx({
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })
    }}
    open={open}
  >
    <List>
      {gatekeeperDrawerOptions.map((text, index) => (
        <ListItem
          button
          key={text}
          className={clsx({ [classes.iconAlertBackground]: text === 'Alerts' })}
        >
          <ListItemIcon
            className={text === 'Alerts' ? classes.iconAlertColor : classes.iconBasicColor}
          >
            {iconToShow(text)}
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.listTextFont }} primary={text} />
        </ListItem>
      ))}
    </List>
  </Drawer>
);

LeftDrawer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any),
  open: PropTypes.bool,
};
