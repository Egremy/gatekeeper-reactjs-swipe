// Dependencies
import React from 'react';
import clsx from 'clsx';

// Material-UI Core
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// Material-UI Icons
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Clear';

// Utils
import { iconToShow } from './utils';

// Constants
import { gatekeeperDrawerOptions } from './constants';

// Assets
import gatekeeperLogo from '../../static/assets/gatekeeper-logo.png';

const drawerWidth = 320;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginTop: 60
  },
  appBar: {
    backgroundColor: 'white',
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarShift: {
  },
  menuButton: {
    marginRight: 8,
    backgroundColor: '#454D66',
    '&:hover': {
      backgroundColor: '#7c8293'
    },
    color: 'white'
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
    whiteSpace: 'nowrap',
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
    padding: theme.spacing(3),
  },
  iconAlertBackground: {
    backgroundColor: '#454D66',
    '&:hover': {
      backgroundColor: '#7c8293'
    },
  },
  iconAlertColor: {
    color: '#EF6C6C',
  },
  iconBasicColor: {
    color: '#454D66'
  },
}));

export const AppDrawer = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

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
      </AppBar>
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
              className={text === 'Alerts' && classes.iconAlertBackground}
            >
              <ListItemIcon
                className={text === 'Alerts' ? classes.iconAlertColor : classes.iconBasicColor}
              >
                {iconToShow(text)}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
};
