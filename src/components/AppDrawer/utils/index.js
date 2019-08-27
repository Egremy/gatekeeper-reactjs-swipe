// Dependencies
import React from 'react';

// Material-UI Icons
import AlertsIcon from '@material-ui/icons/Error';
import StoresIcon from '@material-ui/icons/Store';
import DevicesIcon from '@material-ui/icons/PhonelinkRing';
import WheelEventsIcon from '@material-ui/icons/NotificationImportant';
import WheelHealthIcon from '@material-ui/icons/AddAlert';

export const iconToShow = (text) => {
  switch (text) {
    case 'Stores':
      return <StoresIcon />;
    case 'Devices':
      return <DevicesIcon />;
    case 'Wheel Events':
      return <WheelEventsIcon />;
    case 'Wheel Health':
      return <WheelHealthIcon />;
    default:
      return <AlertsIcon />;
  }
};
