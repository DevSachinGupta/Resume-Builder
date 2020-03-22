/**
 *
 * DatePicker
 *
 */

import React, { memo, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useField } from 'formik';
import cx from 'classnames';
import './style.scss';

function DatePicker({ type, name, label, clearable, validate, ...rest }) {
  const [field, meta, helpers] = useField({
    name,
    validate: async value => {
      const val = await validate(value).catch(err => err);
      return val;
    },
  });
  return (
    <div className={cx('relative', 'calenderWrapper')}>
      <div className="label">{label}</div>
      <ReactDatePicker
        selected={field.value}
        onChange={date => {
          helpers.setValue(date);
        }}
        wrapperClassName="w-full"
        className="customDatePickerInput"
        isClearable={clearable}
        {...rest}
      />
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
