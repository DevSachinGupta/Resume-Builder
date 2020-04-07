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
    helpers.setValue(null);
  };

  const formatDateValue = date => {
    const splitDate = date.toString().split(' ');
    // const dateFormated = `${splitDate[2]} ${splitDate[1]} ${splitDate[3]}`;
    // console.log(dateFormated);
    // return dateFormated;
    return date;
  };

  return (
    <div className={cx('calenderWrapper')} hidden={props.hidden}>
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

        <ReactDatePicker
          selected={field.value}
          onChange={date => {
            helpers.setValue(formatDateValue(date));
          }}
          dateFormat="dd MMM yyyy"
          // dateFormat="dd/MM/yyyy"
          placeholderText="DD/MM/YYYY"
          wrapperClassName="w-full"
          className="customDatePickerInput"
          showMonthDropdown
          showYearDropdown
          {...props}
        />
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
DatePicker.defaultProps = {
  allowValidation: true,
};
DatePicker.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  fullWidth: PropTypes.bool,
  inputIcon: PropTypes.node,
  label: PropTypes.string,
  name: PropTypes.string,
  hidden: PropTypes.bool,
  disabled: PropTypes.bool,
  clearable: PropTypes.bool,
  validate: PropTypes.func.isRequired,
  allowValidation: PropTypes.bool,
};

export default memo(DatePicker);
