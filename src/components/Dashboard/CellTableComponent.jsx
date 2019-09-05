/* eslint-disable react/prop-types */
// Dependenices
import React from 'react';

export default React.memo((props) => {
  const {
    data, styles, width, height, borderStyle
  } = props;
  const textDom = React.isValidElement(data) ? (data) : (
    <span>
      { data.toString() }
    </span>
  );
  const cellContainerStyles = {
    ...styles,
    ...borderStyle,
    whiteSpace: 'normal'
  };

  if (width) {
    cellContainerStyles.width = width;
    cellContainerStyles.minWidth = width;
    cellContainerStyles.maxWidth = width;
  }
  if (height) { cellContainerStyles.height = height; }
  if (!width && !height) { cellContainerStyles.flex = 1; }

  return (
    <div
      style={cellContainerStyles}
    >
      { textDom }
    </div>
  );
});
