/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-string-refs */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import burgerImg from '../../static/assets/menu.svg';

export class GatekeeperTableDropdown extends Component {
  constructor() {
    super();

    this.state = {
      open: false
    };
  }

  componentDidMount() {
    window.addEventListener('click', this.hideDropdown.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.hide);
  }

  hideDropdown(event) {
    this.setState({ open: false });
  }

  toggleDropdown(e) {
    e.stopPropagation();
    this.setState(
      prevState => ({ open: !prevState.open })
    );
  }

  toogleCheckbok(e, index) {
    const { columns, onChange } = this.props;
    e.stopPropagation();
    const newValColumns = [...columns];
    newValColumns[index].show = !newValColumns[index].show;
    onChange(newValColumns);
  }

  render() {
    const { columns } = this.props;
    const { open } = this.state;
    return (
      <div style={{ position: 'relative' }}>
        <img
          ref="burgerBtn"
          src={burgerImg}
          alt="Table options"
          onClick={event => this.toggleDropdown(event)}
          style={{ cursor: 'pointer' }}
        />
        {open ? (
          <div style={dropdownStyles.optionsMenu}>
            <span style={{ ...dropdownStyles.item, borderBottom: 'solid 1px #dfe6e9' }}>
              Columns to see:
            </span>
            <div style={dropdownStyles.selectContainer}>
              {
                columns.map((col, index) => (
                  <div
                    style={dropdownStyles.item}
                    key={String(index)}
                    onClick={event => this.toogleCheckbok(event, index)}
                  >
                    <input
                      type="checkbox"
                      name={col.columnName}
                      checked={col.show}
                      onChange={() => {}}
                      style={dropdownStyles.itemCheckbox}
                    />
                    { col.label }
                  </div>
                ))
              }
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

GatekeeperTableDropdown.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func
};

const dropdownStyles = {
  optionsMenu: {
    position: 'absolute',
    right: 0,
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1000,
    border: '1px solid rgba(0,0,0,.15)',
    borderRadius: '0.25rem',
    backgroundColor: 'white',
    padding: '0.5rem 0',
    minWidth: '10rem',
    margin: '.125rem 0 0',
    whiteSpace: 'nowrap',
    overflowX: 'hidden'
  },
  item: {
    width: '100%',
    padding: '.25rem 1rem',
    display: 'block',
    alignItems: 'center',
    cursor: 'pointer'
  },
  itemCheckbox: {
    marginRight: 5,
    verticalAlign: 'middle',
    marginTop: 0
  },
  selectContainer: {
    maxHeight: 160,
    overflowY: 'scroll'
  }
};
