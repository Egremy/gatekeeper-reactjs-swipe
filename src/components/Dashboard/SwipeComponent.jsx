// Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import ReactSlidy from 'react-slidy';

// Components
import { GatekeeperMapComponent } from './GatekeeperMapComponent';
// import { TableComponent } from './TableComponent';
import { GraphComponent } from './GraphComponent';
import { GatekeeperTableComponent } from './GatekeeperTableComponent';

// Constants
import { gqlConfig } from './constants';

export const SwipeComponent = ({ classes }) => (
  <ReactSlidy>
    <GatekeeperMapComponent
      classes={classes}
    />
    <div className={classes.frames}>
      <div
        className="App-table-container"
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#dfe6e9'
        }}
        id="App-table-container"
      >
        <GatekeeperTableComponent
          url={gqlConfig.url}
          queryName={gqlConfig.queryName}
          pageSize={100}
          styles={tableStyles}
        />
      </div>
      {/* <TableComponent
        classes={classes}
      /> */}
    </div>
    <GraphComponent
      classes={classes}
    />
  </ReactSlidy>
);

SwipeComponent.propTypes = {
  classes: PropTypes.objectOf(PropTypes.any),
};

const tableStyles = {
  border: {
    boxSizing: 'border-box',
    border: '1px solid #dee2e6'
  },
  header: {
    height: 40,
    backgroundColor: 'white',
  },
  cellHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '100',
    // fontSize: 14,
    boxSizing: 'border-box',
    border: '1px solid #dee2e6',
    textAlign: 'center'
  },
  row: {
    height: 40,
    backgroundColor: '#454d55'
  },
  cellRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'white',
    fontWeight: '100',
    overflow: 'hidden',
    height: 40,
    // fontSize: 12
  },
  oddRow: {
    backgroundColor: '#F7F6E7'
  }
};
