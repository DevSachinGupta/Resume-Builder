/**
 *
 * Input
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import cx from 'classnames';
import './style.scss';

function Input(props) {
  return (
    <div className={cx()}>
      <input {...props} onChange={props.onChange} />
    </div>
  );
}
Input.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default memo(Input);
