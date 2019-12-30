import React from 'react';
import Proptypes from 'prop-types';
function Row({ children, className }) {
  return <div className={`flex ${className}`}>{children}</div>;
}
Row.propTypes = {
  children: Proptypes.node.isRequired,
  className: Proptypes.string.isRequired,
};

export default Row;
