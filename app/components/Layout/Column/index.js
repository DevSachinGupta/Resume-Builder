import React from 'react';
import PropTypes from 'prop-types';

function Column({ children, width, className }) {
  return <div className={`w-${width} ${className}`}>{children}</div>;
}
Column.defaultProps = {
  width: `1/3`,
};
Column.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  className: PropTypes.string,
};
export default Column;
