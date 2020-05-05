import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
function HR({ content, background }) {
  return (
    <hr
      className="hr-text"
      data-content={content}
      data-background={background}
    />
  );
}
HR.propTypes = {
  content: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};
export default HR;
