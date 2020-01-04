/**
 *
 * Radio
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Text from "../Text";

function Radio(props) {
  return (
    <div>
      <Text type="radio" {...props} /> {props.text}
    </div>
  );
}

Radio.propTypes = {
  text: PropTypes.string.isRequired,
};

export default memo(Radio);
