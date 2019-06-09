import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
function HR({ content }) {
  return <hr className="hr-text" data-content={content} />;
}
HR.propTypes = {
  content: PropTypes.string.isRequired,
};
export default HR;
