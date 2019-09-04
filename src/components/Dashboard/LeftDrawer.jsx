// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Material-UI Core
import Drawer from '@material-ui/core/Drawer';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

// Constants

import { GATEKEEPER_DRAWER_OPTIONS } from './constants';

const myStyles = makeStyles(theme => ({
  expansionPanelSummary: {
    minHeight: 0,
    margin: 0,
    marginRight: -12,
    '&.Mui-expanded': {
      minHeight: 0,
      margin: 0,
      marginRight: -12,
    },
  },
  expansionPanelDetails: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 12,
  },
  listItemIcon: {
    minWidth: 0,
  },
  labelBold: {
    fontWeight: 'bold',
  }
}));

export const LeftDrawer = ({ classes }) => {
  const myClasses = myStyles();

  const createTwidgetsFromData = (data) => {
    let twidgets = [...new Set(data.map(item => item.twidget))];
    twidgets = twidgets.map((item) => ({
      title: item,
      isActive: false,
      checked: false,
      indeterminate: false,
      collapsed: true,
      items: data
        .filter(twidget => twidget.twidget === item && twidget.level === 1)
        .map(twidget => ({
          id: twidget.id,
          parent_id: twidget.parent_id,
          title: twidget.title,
          isActive: false,
          checked: false,
          indeterminate: false,
          collapsed: true,
          count: Math.floor(Math.random() * 1000),
          items: data
            .filter(inner => inner.parent_id === twidget.id)
            .map(inner => {
              inner.checked = false;
              return inner;
            }),
        }))
    })
    );
    return twidgets;
  };

  const toogleCheckBox = (changedCheckBox, parent) => event => {
    // setState({ ...state, [name]: event.target.checked });
    changedCheckBox.checked = !changedCheckBox.checked;

    if (changedCheckBox.items && changedCheckBox.items.length > 0) {
      // eslint-disable-next-line no-return-assign
      changedCheckBox.items.map((cb) => (cb.checked = changedCheckBox.checked));
      changedCheckBox.indeterminate = false;
    }

    if (parent != null) {
      // check siblings
      const siblings = parent.items.filter(
        item => item.parent_id === changedCheckBox.parent_id,
      );
      if (siblings.every(item => item.checked === true)) {
        parent.checked = true;
        parent.indeterminate = false;
      } else if (siblings.every(item => item.checked === false)) {
        parent.checked = false;
        parent.indeterminate = false;
      } else {
        parent.checked = true;
        parent.indeterminate = true;
      }
    }

    // Updating the state
    const newtwidgetsData = [...twidgetsData];
    setTwidgetsData(newtwidgetsData);
  };

  // initial state
  const [twidgetsData, setTwidgetsData] = React.useState(createTwidgetsFromData(GATEKEEPER_DRAWER_OPTIONS));

  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: classes.drawerOpen,
      }}
    >
      <List>
        <Paper square>
          <ListItem key="searchLabel">
            <ListItemText classes={{ primary: myClasses.labelBold }}>FILTER</ListItemText>
          </ListItem>
          <ListItem key="searchBox">
            <ListItemText>
              <Paper square>
                <InputBase
                  fullWidth
                  className={classes.input}
                  placeholder="Type to search"
                  inputProps={{ 'aria-label': 'search' }}
                  endAdornment={(
                    <IconButton className={classes.iconButton} aria-label="search">
                      <SearchIcon />
                    </IconButton>
                  )}
                />
              </Paper>
            </ListItemText>
          </ListItem>
        </Paper>
      </List>
      <List disablePadding>
        {twidgetsData.map((item) => (
          <ExpansionPanel key={item.title} square>
            <ExpansionPanelSummary
              classes={{
                root: myClasses.expansionPanelSummary,
                content: myClasses.expansionPanelSummary,
                expanded: myClasses.expansionPanelSummary,
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel-content"
            >
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={item.checked}
                    onChange={toogleCheckBox(item, null)}
                    value={item.title}
                    indeterminate={item.indeterminate}
                  />
                )}
                label={item.title}
                classes={{ label: myClasses.labelBold }}
              />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails classes={{ root: myClasses.expansionPanelDetails }}>
              <List dense disablePadding>
                {item.items.map((cb) => (
                  <ListItem key={cb.id} divider button disableGutters onClick={toogleCheckBox(cb, item)}>
                    <ListItemIcon classes={{ root: myClasses.listItemIcon }}>
                      <Checkbox
                        checked={cb.checked}
                        value={cb.title}
                        indeterminate={cb.indeterminate}
                      />
                    </ListItemIcon>
                    <ListItemText primary={cb.title} />
                    <Typography>{cb.count}</Typography>
                    {cb.items.length > 0 ? (
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="comments">
                          {cb.items.collapsed ? <ExpandLess /> : <ExpandMoreIcon />}
                        </IconButton>
                      </ListItemSecondaryAction>
                    ) : ''}
                  </ListItem>
                ))}
              </List>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
      </List>
    </Drawer>
  );
};

LeftDrawer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any),
};
