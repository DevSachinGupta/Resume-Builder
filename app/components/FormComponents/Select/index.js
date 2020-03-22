/**
 *
 * Select
 *
 */

import React, { memo, useEffect } from 'react';
import cx from 'classnames';
import { useField } from 'formik';
import { MdCancel } from 'react-icons/md';
import PropTypes from 'prop-types';
import './style.scss';

function Select(props) {
  let validateField = true;
  if (props.hidden != undefined && props.hidden == true) {
    validateField = false;
  }
  const [field, meta, helpers] = useField({
    name: props.name,
    validate: async value => {
      const val = await props.validate(value).catch(err => err);
      return validateField ? val : null;
    },
  });
  const handleClearField = () => {
    helpers.setValue('');
  };

  const optionList = props.options.map(optionName => {
    if (props.allowIdAsValue) {
      return <option value={optionName.id}>{optionName.name}</option>;
    }
    return <option value={optionName.name}>{optionName.name}</option>;
  });

  return (
    <div className={cx('inputWrapper')} hidden={props.hidden}>
      <div className="label">{props.label}</div>
      <div
        className={cx('inputContainer', {
          fullWidth: props.fullWidth,
          error: meta.error && meta.touched,
        })}
      >
        {props.inputIcon && (
          <span className="inputIcon">{props.inputIcon}</span>
        )}
        {/* <input {...field} {...props} /> */}
        <select {...field} {...props} onChange={(e) => {helpers.setValue(e.target.value) ; props.onStateUpdate(); props.onChange(e);}} > 
          <option value="">Select</option>
          {optionList}
        </select>
        {props.clearable && (
          <span className="input-right-Icon cursor-pointer">
            {<MdCancel onClick={handleClearField} />}
          </span>
        )}
      </div>
      {meta.error && meta.touched && (
        <div className={cx('hint', { error_hint: meta.error && meta.touched })}>
          {meta.error && meta.error.message}
        </div>
      )}
    </div>
  );
}

Select.defaultProps = {
  allowIdAsValue: false,
};

Select.propTypes = {
  clearable: PropTypes.bool,
  allowIdAsValue: PropTypes.bool,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  inputIcon: PropTypes.node.isRequired,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  afterReset: PropTypes.func,
  label: PropTypes.string,
  name: PropTypes.string,
  validate: PropTypes.func.isRequired,
};

export default memo(Select);
