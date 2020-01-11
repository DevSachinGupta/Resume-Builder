import React, { memo } from 'react';
import cx from 'classnames';
import { useField } from 'formik';
import { MdCancel } from 'react-icons/md';
import PropTypes from 'prop-types';
import './style.scss';

function Text(props) {
  const [field, meta, helpers] = useField(props.name);
  return (
    <div className={cx('inputWrapper')}>
      <div className="label">{props.label}</div>
      <div
        className={cx('inputContainer', {
          fullWidth: props.fullWidth,
          error: props.touched && props.error,
        })}
      >
        {props.inputIcon && (
          <span className="inputIcon">{props.inputIcon}</span>
        )}
        <input {...field} {...props} onChange={props.onChange} />
        {props.clearable && props.value.length > 0 && (
          <span className="input-right-Icon cursor-pointer">
            {<MdCancel />}
          </span>
        )}
      </div>
      {props.touched && props.error && (
        <div
          className={cx('hint', { error_hint: props.touched && props.error })}
        >
          {props.error && props.error}
        </div>
      )}
    </div>
  );
}
Text.defaultProps = {
  value: '',
};
Text.propTypes = {
  clearable: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  inputIcon: PropTypes.node.isRequired,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  touched: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};
export default memo(Text);
