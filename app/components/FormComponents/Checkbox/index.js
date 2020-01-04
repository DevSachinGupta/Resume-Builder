/**
 *
 * Checkbox
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Text from "../Text";

function Checkbox(props) {
  return (
    <div>
      <Text type="checkbox" {...props} /> {props.text}
    </div>
  );
}

Checkbox.propTypes = {
  text: PropTypes.string.isRequired,
};

export default memo(Checkbox);
