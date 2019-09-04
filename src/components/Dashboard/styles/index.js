// Material-UI Core
import { makeStyles } from '@material-ui/core/styles';

// Constants
import { COLOR_STYLE_GUIDE } from '../constants';

const {
  CORAL_PINK,
  DARK_BLUE_GRAY,
  LIGHT_GRAY,
  LIGHT_PINK,
  SLATE_TWO,
  WARM_GRAY
} = COLOR_STYLE_GUIDE;

const drawerWidth = 320;

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginTop: 60
  },
  appBar: {
    backgroundColor: LIGHT_GRAY,
    zIndex: theme.zIndex.drawer + 1
  },
  appBarShift: {
  },
  menuButton: {
    marginRight: 8,
    backgroundColor: DARK_BLUE_GRAY,
    '&:hover': {
      backgroundColor: SLATE_TWO
    },
    color: LIGHT_GRAY
  },
  menuCloseButton: {
    marginRight: 8,
    backgroundColor: CORAL_PINK,
    '&:hover': {
      backgroundColor: LIGHT_PINK
    },
    color: LIGHT_GRAY
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    backgroundColor: WARM_GRAY,
    color: LIGHT_GRAY,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginTop: 58
  },
  drawerClose: {
    backgroundColor: WARM_GRAY,
    color: LIGHT_GRAY,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    marginTop: 58
  },
  toolbar: {
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  iconAlertBackground: {
    backgroundColor: DARK_BLUE_GRAY,
    '&:hover': {
      backgroundColor: SLATE_TWO
    }
  },
  iconAlertColor: {
    color: CORAL_PINK
  },
  iconBasicColor: {
    color: DARK_BLUE_GRAY
  },
  listTextFont: {
    fontWeight: 500
  },
  input: {
    padding: '4px 8px'
  }
}));
