/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/**
 *
 * Dropdown
 *
 */

import React, { memo, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';
function Dropdown({ options, onSelect }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  const toggleDropdown = flag => {
    setIsDropdownVisible(flag);
  };
  const handleGlobalClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      toggleDropdown(false);
    }
  };
  const ref = useRef(null);
  useEffect(() => {
    /**
     * create a Map of Original Values
     */
    setFilteredOptions(options);
    document.addEventListener('mousedown', handleGlobalClick, true);
    return function cleanup() {
      document.removeEventListener('mousedown', handleGlobalClick, false);
    };
  }, []);
  const handleInputChange = e => {
    const query = e.target.value;
    if (query.length > 0) {
      setFilteredOptions(
        options.filter(
          option => option.toLowerCase().indexOf(query.toLowerCase()) > -1,
        ),
      );
    } else {
      setFilteredOptions(options);
    }
  };
  const handleSelect = e => {
    const value = JSON.parse(e.target.getAttribute('data'));
    selectedValues.push(value);
    setFilteredOptions(
      filteredOptions.filter(option => option.key !== value.key),
    );
    setSelectedValues([...selectedValues]);
    onSelect(value);
  };
  return (
    <div className={cx('dropdownContainer')} ref={ref}>
      <div className={cx('inputContainer')}>
        <input
          onClick={toggleDropdown}
          type="text"
          onChange={handleInputChange}
          placeholder="Search Anything"
        />
      </div>
      {isDropdownVisible && (
        <div className="options">
          {filteredOptions &&
            filteredOptions.map(item => (
              <li
                className="option"
                key={item.key}
                data={JSON.stringify(item)}
                onClick={handleSelect}
              >
                {item.value}
              </li>
            ))}
        </div>
      )}
    </div>
  );
}
Dropdown.defaultProps = {
  onSelect: () => {},
};
Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
};

export default memo(Dropdown);
