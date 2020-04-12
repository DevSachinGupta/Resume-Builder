/**
 *
 * Select
 *
 */

import React, { memo } from 'react';
import cx from 'classnames';
import { useField } from 'formik';
import { MdCancel } from 'react-icons/md';
import PropTypes from 'prop-types';
import './style.scss';

function Select(props) {
  let validateField = props.allowValidation;
  if (props.disabled) {
    validateField = false;
  }
  const [field, meta, helpers] = useField({
    name: props.name,
    validate: async value => {
      const val = validateField
        ? await props.validate(value).catch(err => err)
        : null;
      return val;
    },
  });

  const handleClearField = () => {
    helpers.setValue('');
  };

  const optionList = props.options.map(optionName => {
    if (props.allowIdAsValue) {
      return (
        <option key={optionName.id} value={optionName.id}>
          {optionName.name}
        </option>
      );
    }
    return (
      <option key={optionName.name} value={optionName.name}>
        {optionName.name}
      </option>
    );
  });

  const {
    clearable,
    allowIdAsValue,
    validate,
    options,
    allowValidation,
    inputIcon,
    ...rest
  } = props;
  return (
    <div className={cx('inputWrapper')} hidden={props.hidden}>
      <div className="label">{props.label}</div>
      <div
        className={cx('inputContainer', {
          fullWidth: props.fullWidth,
          error: validateField && meta.error && meta.touched,
        })}
      >
        {props.inputIcon && (
          <span className="inputIcon">{props.inputIcon}</span>
        )}
        {/* <input {...field} {...props} onChange={(e) => {helpers.setValue(e.target.value) ; props.onStateUpdate(); props.onChange(e);}} /> */}
        <select {...field} {...rest}>
          <option value="">Select</option>
          {optionList}
        </select>
        {props.clearable && (
          <span className="input-right-Icon cursor-pointer">
            {<MdCancel onClick={handleClearField} />}
          </span>
        )}
      </div>
      {validateField && meta.error && meta.touched && (
        <div className={cx('hint', { error_hint: meta.error && meta.touched })}>
          {meta.error && meta.error.message}
        </div>
      )}
    </div>
  );
}

Select.defaultProps = {
  allowIdAsValue: false,
  allowValidation: true,
};

Select.propTypes = {
  allowIdAsValue: PropTypes.bool,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  fullWidth: PropTypes.bool,
  inputIcon: PropTypes.node,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  hidden: PropTypes.bool,
  disabled: PropTypes.bool,
  clearable: PropTypes.bool,
  validate: PropTypes.func.isRequired,
  allowValidation: PropTypes.bool,
};

export default memo(Select);
