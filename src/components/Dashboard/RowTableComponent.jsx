/* eslint-disable react/prop-types */
// Dependencies
import React from 'react';

// Components
import Cell from './CellTableComponent';

export default React.memo((props) => {
  const {
    data, styles, cellStyles, width, widthArr, height, borderStyle, bgColor
  } = props;
  const rowContainerStyle = {
    ...structRowstyles.row,
    ...styles,
    width
  };
  if (height) { rowContainerStyle.height = height; }

  if (bgColor) { rowContainerStyle.backgroundColor = bgColor; }

  return data ? (
    <div style={rowContainerStyle}>
      {
        data.map(
          (item, i) => {
            const wth = widthArr && widthArr[i];
            return (
              <Cell
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                data={item}
                width={wth}
                styles={cellStyles}
                borderStyle={borderStyle}
              />
            );
          }
        )
      }
    </div>
  ) : null;
});

const structRowstyles = {
  row: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden'
  }
};
