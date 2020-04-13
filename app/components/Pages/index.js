/**
 *
 * Pages
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import HomePage from './HomePage';

function setPagesContent(props) {
  switch (props.pageTitle) {
    case 'HomePage':
      return <HomePage {...props} />;
    default:
      return <HomePage {...props} />;
  }
}

setPagesContent.propTypes = {
  pageTitle: PropTypes.string,
};

export default memo(setPagesContent);
