// Dependencies
import React from 'react';

// Material-UI Icons
import AlertsIcon from '@material-ui/icons/Error';

import { IconButton } from '@material-ui/core';
import Athena from '../../../static/assets/icons/Athena.svg';
import CartAnalytics from '../../../static/assets/icons/CartAnalytics.svg';
import Chart from '../../../static/assets/icons/Chart.svg';
import Dashboard from '../../../static/assets/icons/Dashboard.svg';
import Data from '../../../static/assets/icons/Data.svg';
import Map from '../../../static/assets/icons/Map.svg';
import Password from '../../../static/assets/icons/Password.svg';
import SystemHealth from '../../../static/assets/icons/SystemHealth.svg';
import User from '../../../static/assets/icons/User.svg';
import WheelEvents from '../../../static/assets/icons/WheelEvents.svg';
import Wheels from '../../../static/assets/icons/Wheels.svg';

export const iconToShow = (text) => {
  switch (text) {
    case 'Athena':
      return (
        <IconButton>
          <img src={Athena} alt={text} style={{ width: '24pt' }} />
        </IconButton>
      );
    case 'CartAnalytics':
      return (
        <IconButton>
          <img src={CartAnalytics} alt={text} style={{ width: '24pt' }} />
        </IconButton>
      );
    case 'Chart':
      return (
        <IconButton>
          <img src={Chart} alt={text} style={{ width: '24pt' }} />
        </IconButton>
      );
    case 'Dashboard':
      return (
        <IconButton>
          <img src={Dashboard} alt={text} style={{ width: '24pt' }} />
        </IconButton>
      );
    case 'Data':
      return (
        <IconButton>
          <img src={Data} alt={text} style={{ width: '24pt' }} />
        </IconButton>
      );
    case 'Map':
      return (
        <IconButton>
          <img src={Map} alt={text} style={{ width: '24pt' }} />
        </IconButton>
      );
    case 'Password':
      return (
        <IconButton>
          <img src={Password} alt={text} style={{ width: '24pt' }} />
        </IconButton>
      );
    case 'SystemHealth':
      return (
        <IconButton>
          <img src={SystemHealth} alt={text} style={{ width: '24pt' }} />
        </IconButton>
      );
    case 'User':
      return (
        <IconButton>
          <img src={User} alt={text} style={{ width: '24pt' }} />
        </IconButton>
      );
    case 'WheelEvents':
      return (
        <IconButton>
          <img src={WheelEvents} alt={text} style={{ width: '24pt' }} />
        </IconButton>
      );
    case 'Wheels':
      return (
        <IconButton>
          <img src={Wheels} alt={text} style={{ width: '24pt' }} />
        </IconButton>
      );
    default:
      return <AlertsIcon />;
  }
};
