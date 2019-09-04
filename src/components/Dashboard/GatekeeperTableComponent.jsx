import React from 'react';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import PropTypes from 'prop-types';
import ApolloService from './services/apolloServices';
import RowTableComponent from './RowTableComponent';
import { GatekeeperTableDropdown } from './GatekeeperTableDropdown';
import loadingImg from '../../static/assets/loading.svg';
// import './styles.css';

const elementResizeDetectorMaker = require('element-resize-detector');

export class GatekeeperTableComponent extends React.Component {
  constructor(props) {
    super(props);

    this.apolloService = new ApolloService(props.url);

    // Hold the table query
    this.dataQuery = '';

    // Table data
    this.tableData = [];

    // Column widths
    this.widthArr = [];

    // Size of table container
    this.sizeTableContainer = { width: 0, height: 0 };

    this.state = {
      // Indicates if the columns are selected
      selectedColumns: [],

      // Name of the selected columns
      selectedColumnNames: [],

      // Width of the selected columns
      selectedWidthArr: [],

      // Table data of the selected columns
      selectedTableData: [],

      // Indicates if there was an error with something
      thereWasAnError: false,

      // Real table width (Sum of the width of the columns)
      columnsWidth: 0,

      // Table height
      tableHeight: 0,

      // Indicates if there is more data to load
      hasNextPage: true, // eslint-disable-line

      // Indicates if the next page is loading
      isNextPageLoading: false
    };
  }

  componentDidMount() {
    // Indicates the number of rows that have to be visibles to load more data
    this.threshold = (this.props.pageSize / 2) > 50 ? 50 : this.props.pageSize / 2;

    // Listen When the table container resize to resize the table too.
    this.erd = elementResizeDetectorMaker({
      strategy: 'scroll'
    });
    this.erd.listenTo(
      document.getElementById('App-table-container'),
      element => {
        this.sizeTableContainer = { width: element.offsetWidth, height: element.offsetHeight };
        this.setState({
          columnsWidth: this.state.selectedWidthArr.reduce((acc, n) => acc + n, 0), tableHeight: element.offsetHeight // eslint-disable-line
        });
      }
    );
  }

  componentWillUnmount() {
    this.erd.uninstall(document.getElementById('App-table-container'));
  }

  /**
   * Parse the columms info, in order to retrive a string with the column names.
   */
  getGraphQLColumns(columnsInfo) {
    let strCols = '';
    for (let i = 0; i < columnsInfo.length; i += 1) {
      const colsWithSameName = columnsInfo.filter(colInfo => colInfo.name === columnsInfo[i].name);
      if (colsWithSameName.length === 1) { strCols += `${columnsInfo[i].name} `; } else {
        strCols += `${columnsInfo[i].table}_${columnsInfo[i].name} `;
      }
    }

    return strCols.trim();
  }

  loadNextPage() {
    console.log('>>> LOAD MORE DATA...'); // eslint-disable-line
    this.setState({ isNextPageLoading: true });

    this.waitForColumnsInfo()
      .then(
        () => this.apolloService.query(this.dataQuery.replace('%dfrom', this.state.selectedTableData.length)),
        error => {
          this.setState({ thereWasAnError: true });
          console.log('>>>>>>>>>>>>>>>>>>>'); // eslint-disable-line
          console.log('>> Error:', error); // eslint-disable-line
          console.log('<<<<<<<<<<<<<<<<<<<'); // eslint-disable-line
        }
      ).then(
        gqlData => {
          const renderFn = this.props.renderData ? this.props.renderData : this.renderData;
          const { tableData } = renderFn(gqlData, this.props.queryName, this.state.selectedTableData.length);
          this.tableData = [...this.tableData, ...tableData];

          // Filter columns not visibles of the new data chunk
          const dataChunkFiltered = new Array(tableData.length);
          for (let i = 0; i < tableData.length; i += 1) {
            dataChunkFiltered[i] = {
              bgColor: tableData[i].bgColor,
              rowData: tableData[i].rowData.filter((col, index) => this.state.selectedColumns[index].show)
            };
          }

          this.setState({
            isNextPageLoading: false,
            selectedTableData: [...this.state.selectedTableData, ...dataChunkFiltered] // eslint-disable-line
          });
        },
        error => {
          this.setState({ thereWasAnError: true });
          console.log('>>>>>>>>>>>>>>>>>>>'); // eslint-disable-line
          console.log('>> Error:', error); // eslint-disable-line
          console.log('<<<<<<<<<<<<<<<<<<<'); // eslint-disable-line
        }
      );
  }

  waitForColumnsInfo() {
    if (this.dataQuery) { return Promise.resolve(); }

    const columnNamesQuery = `{
        tableStructQuery {
          table
          name
          label
          size
          type
        }
      }`;
    return this.apolloService.query(columnNamesQuery)
      .then(
        data => {
          this.widthArr = data.tableStructQuery.map(colInfo => colInfo.size);
          // Show all columns
          this.setState({
            selectedColumns: data.tableStructQuery.map(
              colInfo => ({
                columnName: colInfo.name, label: colInfo.label, show: true
              })
            ),
            selectedColumnNames: data.tableStructQuery.map(colInfo => colInfo.label),
            selectedWidthArr: this.widthArr,
            columnsWidth: this.widthArr.reduce((acc, n) => acc + n, 0)
          });
          const columnsInfo = data.tableStructQuery;
          const strColumns = this.getGraphQLColumns(columnsInfo);
          this.dataQuery = `{ %queryName(size: %dsize, from: %dfrom){ ${strColumns} }}`
            .replace('%queryName', this.props.queryName)
            .replace('%dsize', this.props.pageSize);
          return Promise.resolve();
        },
        error => Promise.reject(error)
      );
  }

  updateSelectedColumns(newValColumns) {
    const selectedTableData = new Array(this.tableData.length);
    for (let i = 0; i < this.tableData.length; i += 1) {
      selectedTableData[i] = {
        bgColor: this.tableData[i].bgColor,
        rowData: this.tableData[i].rowData.filter((col, index) => newValColumns[index].show)
      };
    }

    const selectedWidthArr = this.widthArr.filter((width, index) => newValColumns[index].show);
    this.setState({
      selectedColumns: newValColumns,
      selectedColumnNames: newValColumns.filter(col => col.show).map(col => col.label),
      columnsWidth: selectedWidthArr.reduce((acc, n) => acc + n, 0),
      selectedWidthArr,
      selectedTableData
    });
  }

  /**
   * Default render table function
   *
   * @param {any} gqlData Response of graphql server
   * @param {string} queryName Query name
   * @param {number} prevIndex Last index on the table
   */
  renderData(gqlData, queryName, prevIndex = 0) {
    const alerts = gqlData[queryName];
    const rowsInfo = alerts.map(
      (alert, index) => ({
        bgColor: index === 6 || index === 2 ? '#ff7675' : undefined,
        rowData: Object.values(alert)
      })
    );

    return {
      tableData: rowsInfo
    };
  }

  render() {
    const { styles, pageSize } = this.props;

    // If there are more items to be loaded then add an extra row to hold a loading indicator.
    const itemCount = this.state.selectedTableData.length + 1;

    // Only load 1 page of items at a time.
    const loadMoreItems = this.state.isNextPageLoading ? () => {} : this.loadNextPage.bind(this);

    // Every row is loaded except for our loading indicator row.
    const isItemLoaded = index => index < this.state.selectedTableData.length;

    // Render an item or a loading indicator.
    const Item = ({ index, style }) => {
      if (!isItemLoaded(index)) {
        return (
          <div
            style={{
              ...style,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: this.sizeTableContainer.width
            }}
          >
            <img
              src={loadingImg}
              alt="Select columns to see"
              style={{ animation: 'animationSpinner infinite 0.5s linear' }}
            />
          </div>
        );
      }
      const rowInfo = this.state.selectedTableData[index];
      const rowStyles = styles.row;

      return (
        <div style={style}>
          <RowTableComponent
            key={Number(index)}
            data={rowInfo.rowData}
            width={this.state.columnsWidth}
            widthArr={this.state.selectedWidthArr}
            styles={rowStyles}
            bgColor={rowInfo.bgColor}
            cellStyles={styles.cellRow}
            borderStyle={this.props.styles.border}
          />
        </div>
      );
    };

    if (!this.state.thereWasAnError) {
      return (
        <div style={componentStyles.tableContainer}>
          {/* Table options */}
          <div style={{ ...componentStyles.tableOptions, ...styles.header }}>
            <div style={{ paddingRight: 10, paddingLeft: 10, position: 'relative' }}>
              <GatekeeperTableDropdown
                columns={this.state.selectedColumns}
                onChange={newValColumns => this.updateSelectedColumns(newValColumns)}
              />
            </div>
          </div>
          <div style={componentStyles.tableMovContent}>
            <RowTableComponent
              data={this.state.selectedColumnNames}
              width={this.state.columnsWidth}
              widthArr={this.state.selectedWidthArr}
              styles={styles.header}
              cellStyles={styles.cellHeader} // eslint-disable-line
              borderStyle={styles.borderStyles} // eslint-disable-line
            />
            <InfiniteLoader
              isItemLoaded={isItemLoaded}
              itemCount={itemCount}
              loadMoreItems={loadMoreItems} // eslint-disable-line
              minimumBatchSize={pageSize}
              threshold={this.threshold}
            >
              {({ onItemsRendered, ref }) => (
                <List
                  style={{ overflowX: 'hidden' }}
                  height={this.state.tableHeight}
                  itemCount={itemCount}
                  itemSize={this.props.styles.row.height}
                  onItemsRendered={onItemsRendered}
                  ref={ref}
                  width={this.state.columnsWidth}
                >
                  { Item }
                </List>
              )}
            </InfiniteLoader>
          </div>
        </div>
      );
    }
    return (
      <div style={componentStyles.errorStyles.container}>
        <span style={componentStyles.errorStyles.title}>Uppss!, there was an error.</span>
        <span style={componentStyles.errorStyles.subtitle}>Check the console for more information.</span>
      </div>
    );
  }
}

const componentStyles = {
  tableOptions: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  tableContainer: {
    backgroundColor: '#f5f5f5',
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    overflowX: 'hidden'
  },
  tableMovContent: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    overflowX: 'scroll'
  },
  errorStyles: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#ff7675',
      padding: 5
    },
    title: {
      color: 'white',
      fontSize: 14
    },
    subtitle: {
      color: 'white',
      fontSize: 11
    }
  }
};

GatekeeperTableComponent.propTypes = {
  /**
   * Graphql server url
   */
  url: PropTypes.string.isRequired,

  /**
   * Graphql query name
   */
  queryName: PropTypes.string,

  /**
   * Function that build the table.
   * Note: The return of this function will be: { tableData: { bgColor: string, rowData: any[] }[] }
   * that holds the table body data.
   */
  renderData: PropTypes.func,

  /**
   * Number of rows that fetch from the graphql server
   */
  pageSize: PropTypes.number.isRequired,

  /**
   * Table styles
   */
  styles: PropTypes.shape({
    border: PropTypes.object.isRequired,
    header: PropTypes.object.isRequired,
    row: PropTypes.object.isRequired,
    cellRow: PropTypes.object.isRequired,
    oddRow: PropTypes.object.isRequired,
  })
};
