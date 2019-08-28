// Material-UI Core
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 320;

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginTop: 60
  },
  appBar: {
    backgroundColor: '#f3f3ef',
    zIndex: theme.zIndex.drawer + 1
  },
  appBarShift: {
  },
  menuButton: {
    marginRight: 8,
    backgroundColor: '#454D66',
    '&:hover': {
      backgroundColor: '#7c8293'
    },
    color: '#f3f3ef'
  },
  menuCloseButton: {
    marginRight: 8,
    backgroundColor: '#EF6C6C',
    '&:hover': {
      backgroundColor: '#f39898'
    },
    color: 'white'
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
    backgroundColor: '#9E9E9E',
    color: 'white',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginTop: 58
  },
  drawerClose: {
    backgroundColor: '#9E9E9E',
    color: 'white',
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
    backgroundColor: '#454D66',
    '&:hover': {
      backgroundColor: '#7c8293'
    }
  },
  iconAlertColor: {
    color: '#EF6C6C'
  },
  iconBasicColor: {
    color: '#454D66'
  },
  listTextFont: {
    fontWeight: 500
  }
}));
