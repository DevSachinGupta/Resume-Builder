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
import { useField } from 'formik';
import { MdCancel } from 'react-icons/md';
import './style.scss';
function Dropdown(props) {
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
    setSelectedValues('');
  };

  const onSelect = value => {
    helpers.setValue(value);
  };

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedValues, setSelectedValues] = useState('');
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
    setFilteredOptions(props.options);
    document.addEventListener('mousedown', handleGlobalClick, true);
    return function cleanup() {
      document.removeEventListener('mousedown', handleGlobalClick, false);
    };
  }, []);
  const handleInputChange = e => {
    const query = e.target.value;
    if (query.length > 0) {
      setFilteredOptions(
        props.options.filter(
          option => option.name.toLowerCase().indexOf(query.toLowerCase()) > -1,
        ),
      );
    } else {
      setFilteredOptions(props.options);
    }
  };
  const handleSelect = e => {
    const value = JSON.parse(e.target.getAttribute('data'));
    // selectedValues.push(value.name);
    // selectedValues = value.name;
    setFilteredOptions(
      filteredOptions.filter(option => option.id !== value.id),
    );
    setSelectedValues(value.name);
    onSelect(value.name);
    toggleDropdown(false);
  };

  return (
    <div className={cx('inputWrapper')} hidden={props.hidden} ref={ref}>
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
        {/* <select {...field} {...props} onChange={(e) => {helpers.setValue(e.target.value) ; props.onChange();}} > 
          <option value="">Select</option>
          {optionList}
        </select> */}

        <input
          onClick={toggleDropdown}
          type="text"
          value={selectedValues}
          onChange={handleInputChange}
          placeholder="Search Anything"
        />

        {props.clearable && (
          <span className="input-right-Icon cursor-pointer">
            {<MdCancel onClick={handleClearField} />}
          </span>
        )}
      </div>
      {isDropdownVisible && (
        <div className="options">
          {filteredOptions &&
            filteredOptions.map(item => (
              <li
                className="option"
                key={item.id}
                data={JSON.stringify(item)}
                onClick={handleSelect}
              >
                {item.name}
              </li>
            ))}
        </div>
      )}
      {meta.error && meta.touched && (
        <div className={cx('hint', { error_hint: meta.error && meta.touched })}>
          {meta.error && meta.error.message}
        </div>
      )}
    </div>
  );

  // return (
  //   <div className={cx('dropdownContainer')} ref={ref}>
  //     <div className={cx('inputContainer')}>
  //       <input
  //         onClick={toggleDropdown}
  //         type="text"
  //         onChange={handleInputChange}
  //         placeholder="Search Anything"
  //       />
  //     </div>
  //     {isDropdownVisible && (
  //       <div className="options">
  //         {filteredOptions &&
  //           filteredOptions.map(item => (
  //             <li
  //               className="option"
  //               key={item.key}
  //               data={JSON.stringify(item)}
  //               onClick={handleSelect}
  //             >
  //               {item.value}
  //             </li>
  //           ))}
  //       </div>
  //     )}
  //   </div>
  // );
}
Dropdown.defaultProps = {
  onSelect: () => {},
};
Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func,
};

export default memo(Dropdown);
