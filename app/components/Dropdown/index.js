/**
 *
 * Dropdown
 *
 */

import React, { memo, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

function Dropdown({ options }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const toggleDropdown = (flag) => {
    setIsDropdownVisible(flag)
  }
  const ref = useRef();
  const handleGlobalClick = (e) => {
    if (e.target.contains(ref)) {
      toggleDropdown(true)
    }
    toggleDropdown(false)
  }
  useEffect(() => {
    document.addEventListener("click", handleGlobalClick, true)
    return function cleanup() {
      document.removeEventListener("click", handleGlobalClick, false)
    }
  }, [])
  return <div className={cx('dropdownContainer')} ref={node => ref = node}>
    <input onClick={toggleDropdown} type="text" placeholder="Search Anything" />
    {isDropdownVisible && <div className="options">
      {
        options && options.map((item) => <div>{item}</div>)
      }
    </div>}
  </div>;
}

Dropdown.propTypes = {
  options: PropTypes.array.isRequired
};

export default memo(Dropdown);
