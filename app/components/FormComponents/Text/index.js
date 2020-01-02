import React, { memo } from 'react';
import cx from 'classnames';
import { MdCancel } from "react-icons/md";
import PropTypes from 'prop-types';
import './style.scss';

function Text(props) {
  return <div className={cx('inputWrapper')}>
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
      {props.clearable && props.value.length > 0 &&
        <span className="input-right-Icon cursor-pointer">{<MdCancel />}</span>}
    </div>
    <div className={cx('hint', { error_hint: props.error })}>
      {props.error && props.error}
    </div>
  </div>
}
Text.propTypes = {
  clearable: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  inputIcon: PropTypes.node.isRequired,
  error: PropTypes.string,
  label: PropTypes.string,
}
export default memo(Text);
