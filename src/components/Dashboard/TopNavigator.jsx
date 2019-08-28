// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// Material-UI Core
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

// Material-UI Icons
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Clear';

// Assets
import gatekeeperLogo from '../../static/assets/gatekeeper-logo.png';

export const TopNavigator = ({
  classes, open, setOpen
}) => {
  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <Toolbar>
      <IconButton
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, {
          [classes.hide]: open,
        })}
      >
        <MenuIcon />
      </IconButton>
      <IconButton
        onClick={handleDrawerClose}
        edge="start"
        className={clsx(classes.menuCloseButton, {
          [classes.hide]: !open,
        })}
      >
        <CloseIcon />
      </IconButton>
      <img src={gatekeeperLogo} alt="logo gatekeeper" style={{ width: '100pt' }} />
    </Toolbar>
  );
};

TopNavigator.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any),
  open: PropTypes.bool,
  setOpen: PropTypes.func,
};
