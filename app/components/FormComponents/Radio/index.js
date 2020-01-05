/**
 *
 * Radio
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useField } from 'formik';
import { MdCancel } from 'react-icons/md';
import './style.scss';

function Radio(props) {
  const [field, meta, helpers] = useField(props.name);
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

        {props.values.map((item, idx) => {
          return (
            <label className="radio-group">
              <input
                type="radio"
                {...field}
                name={props.name}
                value={item}
                onChange={props.onChange}
              />
              <span>{item}</span>
            </label>
          );
        })}

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

Radio.propTypes = {
  clearable: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  inputIcon: PropTypes.node.isRequired,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  values: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
};

export default memo(Radio);
