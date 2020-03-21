/**
 *
 * DatePicker
 *
 */

import React, { memo, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useField, useFormikContext } from 'formik';
import cx from 'classnames';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Text from '../Text';
import './style.scss';

function DatePicker({ type, onChange, ...rest }) {
  let refNode = useRef(null);
  const [isPickerActive, toggleDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  useEffect(() => {
    document.addEventListener('mousedown', handleGlobalClick, true);
    return function cleanup() {
      document.removeEventListener('mousedown', handleGlobalClick, false);
    };
  });

  const { setFieldValue } = useFormikContext();
  const [field] = useField(rest);

  const handleSelect = date => {
    onChange(date);
    setFieldValue(field.name, date);
    handleDatePicker();
  };

  const handleGlobalClick = e => {
    if (refNode !== null && !refNode.contains(e.target) && isPickerActive) {
      handleDatePicker();
    }
  };
  const handleDatePicker = () => {
    toggleDatePicker(!isPickerActive);
  };
  return (
    <div
      className={cx('relative', 'calenderWrapper')}
      ref={node => (refNode = node)}
    >
      <Text
        onClick={handleDatePicker}
        // value={selectedDate}
        clearable
        // afterReset={setSelectedDate}
        {...rest}
      />
      {isPickerActive && (
        <Calendar
          date={new Date()}
          className="shadow rounded z-10 fixed floating-calender"
          onChange={handleSelect}
          dateDisplayFormat="MM/DD/YYYY"
        />
      )}
    </div>
  );
}
DatePicker.defaultProps = {
  onChange: date => {
    console.log(date);
  },
};
DatePicker.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  validate: PropTypes.func.isRequired,
};

export default memo(DatePicker);
