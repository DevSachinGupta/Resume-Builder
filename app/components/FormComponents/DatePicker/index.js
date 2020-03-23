/**
 *
 * DatePicker
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import { MdCancel } from 'react-icons/md';
import 'react-datepicker/dist/react-datepicker.css';
import { useField } from 'formik';
import cx from 'classnames';
import './style.scss';

// function DatePicker({ type, name, label, clearable, validate, ...rest }) {
function DatePicker(props) {
  let validateField = true;
  if (
    (props.hidden != undefined && props.hidden == true) ||
    (props.disabled != undefined && props.disabled == true)
  ) {
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

  return (
    <div className={cx('relative', 'calenderWrapper')} hidden={props.hidden}>
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

        <ReactDatePicker
          selected={field.value}
          onChange={date => {
            helpers.setValue(date);
          }}
          wrapperClassName="w-full"
          className="customDatePickerInput"
          isClearable={props.clearable}
          showMonthDropdown
          showYearDropdown
          {...props}
        />
        {/* {props.clearable && (
          <span className="input-right-Icon cursor-pointer">
            {<MdCancel onClick={handleClearField} />}
          </span>
        )} */}
      </div>
      {meta.error && meta.touched && (
        <div className={cx('hint', { error_hint: meta.error && meta.touched })}>
          {meta.error && meta.error.message}
        </div>
      )}
    </div>
  );
}
DatePicker.defaultProps = {};
DatePicker.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  validate: PropTypes.func.isRequired,
  clearable: PropTypes.bool,
};

export default memo(DatePicker);
