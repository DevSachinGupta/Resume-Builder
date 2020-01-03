/**
 *
 * Input
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import DatePicker from '../DatePicker';
import DateRangePicker from '../DateRangePicker';
import Text from '../Text';
import './style.scss';

function Input(props) {
  switch (props.type) {
    case 'date':
      return <DatePicker {...props} />;
    case 'dateRange':
      return <DateRangePicker {...props} />;
    default:
      return <Text {...props} />;
  }
}
Input.propTypes = {
  type: PropTypes.string.isRequired,
};

export default memo(Input);
