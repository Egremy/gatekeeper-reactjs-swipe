// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

// Material-UI Core
import Drawer from '@material-ui/core/Drawer';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Constants
import { GATEKEEPER_DRAWER_OPTIONS } from './constants';

export const LeftDrawer = ({ classes, open }) => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

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

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
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
      <Grid container>
        <Grid item xs={12}>
          FILTER
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <InputBase
              className={classes.input}
              placeholder="Type to search"
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
      <List>
        {createTwidgetsFromData(GATEKEEPER_DRAWER_OPTIONS).map((item) => (
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={item.checked}
                    onChange={handleChange(item)}
                    value="checkedF"
                    indeterminate
                  />
                )}
                label={item.title}
              />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )
        )}
      </List>
    </Drawer>
  );
};

LeftDrawer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any),
  open: PropTypes.bool,
};
