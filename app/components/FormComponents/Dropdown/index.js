/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/**
 *
 * Dropdown
 *
 */

import React, { memo, useState, useEffect, useRef } from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';
function Dropdown({ options, onSelect, validate, name, multiSelect }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  const [field, meta, helpers] = useField({
    name,
    validate: async value => {
      const val = validate && (await validate(value).catch(err => err));
      return val;
    },
  });
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
          option =>
            option && option.toLowerCase().indexOf(query.toLowerCase()) > -1,
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
    if (multiSelect) {
      if (field.value) {
        helpers.setValue([...field.value, value]);
      } else {
        helpers.setValue([value]);
      }
    } else {
      helpers.setValue(value);
    }
    onSelect(value);
  };
  return (
    <div className={cx('dropdownContainer')} ref={ref}>
      <div
        className={cx('inputContainer', {
          'border-l border-r border-t enabledRadius': isDropdownVisible,
          'border disabledRadius': !isDropdownVisible,
        })}
      >
        <input
          onClick={toggleDropdown}
          type="text"
          onChange={handleInputChange}
          placeholder="Search Anything"
        />
      </div>
      {meta.error && meta.touched && (
        <div className={cx('hint', { error_hint: meta.error && meta.touched })}>
          {meta.error && meta.error.message}
        </div>
      )}
      {isDropdownVisible && (
        <div className={cx('options', 'border-l border-r border-b')}>
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
  multiSelect: false,
};
Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
  validate: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  multiSelect: PropTypes.bool,
};

export default memo(Dropdown);