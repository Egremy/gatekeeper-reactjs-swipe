// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Material-UI Core
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

// Assets
import gatekeeperLogo from '../../static/assets/gatekeeper-logo.png';
import { iconToShow } from './utils';

export const TopNavigator = ({
  classes
}) => {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <Toolbar>
      <img src={gatekeeperLogo} alt="logo gatekeeper" style={{ width: '100pt' }} />
      <Divider orientation="vertical" variant="middle" />
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
            Material-UI
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
            Core
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumbs>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="on"
        indicatorColor="primary"
        textColor="primary"
        aria-label="scrollable force tabs example"
      >
        <Tab icon={iconToShow('Athena')} />
        <Tab icon={iconToShow('CartAnalytics')} />
        <Tab icon={iconToShow('Wheels')} />
        <Tab icon={iconToShow('WheelEvents')} />
        <Tab icon={iconToShow('SystemHealth')} />
        <Tab icon={iconToShow('Dashboard')} />
      </Tabs>
    </Toolbar>
  );
};

TopNavigator.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any),
};
