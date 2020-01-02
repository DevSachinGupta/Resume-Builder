/**
 *
 * DatePicker
 *
 */

import React, { memo, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import Text from '../Text';
import './style.scss';

function DatePicker({ type, ...rest }) {
  let refNode = useRef(null);
  const [isPickerActive, toggleDatePicker] = useState(false);
  useEffect(() => {
    document.addEventListener("mousedown", handleGlobalClick, true)
    return function cleanup() {
      document.removeEventListener("mousedown", handleGlobalClick, false)
    }
  });
  const handleSelect = (date) => {
    console.log(date); // native Date object
  }
  const handleGlobalClick = (e) => {
    if (refNode !== null && !refNode.contains(e.target) && isPickerActive) {
      handleDatePicker();
    }
  }
  const handleDatePicker = () => {
    toggleDatePicker(!isPickerActive);
  }
  return <div className={cx('relative', 'calenderWrapper')} ref={node => refNode = node}>
    <Text onClick={handleDatePicker} {...rest} clearable />
    {
      isPickerActive && <Calendar
        date={new Date()}
        className="shadow rounded z-10 absolute floating-calender"
        onChange={handleSelect}
      />
    }</div>;
}

DatePicker.propTypes = {

};

export default memo(DatePicker);
