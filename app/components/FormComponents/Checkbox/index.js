import React, { memo } from 'react';
import cx from 'classnames';
import { useField } from 'formik';
import { MdCancel } from 'react-icons/md';
import PropTypes from 'prop-types';
import './style.scss';

function Checkbox(props) {
  const [field, meta, helpers] = useField(props.name);
  return (
    <div className={cx('inputWrapper')}>
      <div className="label">{props.label}</div>
      <div
        className={cx({
          fullWidth: props.fullWidth,
          error: props.error,
        })}
      >
        {props.inputIcon && (
          <span className="inputIcon">{props.inputIcon}</span>
        )}
        <input {...field} {...props} onChange={props.onChange} />
        {` ${props.placeholder}`}
        {props.clearable && props.value.length > 0 && (
          <span className="input-right-Icon cursor-pointer">
            {<MdCancel />}
          </span>
        )}
      </div>
      {meta.error && meta.touched && (
        <div className={cx('hint', { error_hint: meta.error && meta.touched })}>
          {props.error && props.error}
        </div>
      )}
    </div>
  );
}
Checkbox.defaultProps = {
  value: '',
}
Checkbox.propTypes = {
  clearable: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  inputIcon: PropTypes.node.isRequired,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
export default memo(Checkbox);
