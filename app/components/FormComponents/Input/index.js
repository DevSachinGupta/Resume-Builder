/**
 *
 * Input
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

function Input(props) {
  return (
    <div className={cx('inputWrapper')}>
      <div className="label">{props.label}</div>
      <div
        className={cx('inputContainer', {
          fullWidth: props.fullWidth,
          error: props.error,
        })}
      >
        {props.inputIcon && (
          <span className="inputIcon">{props.inputIcon}</span>
        )}
        <input {...props} onChange={props.onChange} />
        {props.error && props.error}
      </div>
    </div>
  );
}
Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  inputIcon: PropTypes.node.isRequired,
  error: PropTypes.string,
  label: PropTypes.string,
};

export default memo(Input);
