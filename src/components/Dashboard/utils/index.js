// Dependencies
import React from 'react';

// Material-UI Icons
import AlertsIcon from '@material-ui/icons/Error';

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
        <img src={Athena} alt={text} style={{ width: '24pt' }} />
      );
    case 'CartAnalytics':
      return (
        <img src={CartAnalytics} alt={text} style={{ width: '24pt' }} />
      );
    case 'Chart':
      return (
        <img src={Chart} alt={text} style={{ width: '24pt' }} />
      );
    case 'Dashboard':
      return (
        <img src={Dashboard} alt={text} style={{ width: '24pt' }} />
      );
    case 'Data':
      return (
        <img src={Data} alt={text} style={{ width: '24pt' }} />
      );
    case 'Map':
      return (
        <img src={Map} alt={text} style={{ width: '24pt' }} />
      );
    case 'Password':
      return (
        <img src={Password} alt={text} style={{ width: '24pt' }} />
      );
    case 'SystemHealth':
      return (
        <img src={SystemHealth} alt={text} style={{ width: '24pt' }} />
      );
    case 'User':
      return (
        <img src={User} alt={text} style={{ width: '24pt' }} />
      );
    case 'WheelEvents':
      return (
        <img src={WheelEvents} alt={text} style={{ width: '24pt' }} />
      );
    case 'Wheels':
      return (
        <img src={Wheels} alt={text} style={{ width: '24pt' }} />
      );
    default:
      return <AlertsIcon />;
  }
};
