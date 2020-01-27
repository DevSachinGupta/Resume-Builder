/**
 *
 * MultiselectAutocomplete
 *
 */

import React, { memo, useState } from 'react';
import cx from 'classnames';
import { useField } from 'formik';
import { MdCancel } from 'react-icons/md';
import PropTypes from 'prop-types';
import './style.scss';

function MultiselectAutocomplete(props) {
  const [field, meta] = useField({
    name: props.name,
    // validate: async value => await props.validate(value),
  });

  const [multiselect, setMultiselect] = useState({
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: '',
    userData: [],
  });

  const onChange = e => {
    // console.log('onChanges');

    const { options } = props;
    const userInput = e.currentTarget.value;
    console.log(options[0]);
    console.log(options[0].label);
    const filteredOptions = options.filter(optionName =>
      typeof optionName === 'string'
        ? optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        : optionName.label.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
    );

    const updatedAutocomplete = { ...multiselect };
    updatedAutocomplete.activeOption = 0;
    updatedAutocomplete.filteredOptions = filteredOptions;
    updatedAutocomplete.showOptions = true;
    if (e.keyCode === 188) {
      // updatedAutocomplete.userData = [..]
      updatedAutocomplete.userInput = '';
      e.target.value = '';
    } else {
      updatedAutocomplete.userInput = e.currentTarget.value;
    }
    setMultiselect(updatedAutocomplete);
  };

  const onClick = e => {
    setMultiselect({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: '', // e.currentTarget.innerText,
      userData: [...userData, e.currentTarget.innerText],
    });
  };

  const onKeyDown = e => {
    const { activeOption, filteredOptions, userData } = { ...multiselect };
    if (e.keyCode === 13 || e.keyCode === 188) {
      e.preventDefault();
      const updatedAutocomplete = { ...multiselect };
      updatedAutocomplete.activeOption = 0;
      updatedAutocomplete.showOptions = false;
      updatedAutocomplete.userInput = ''; // filteredOptions[activeOption];
      updatedAutocomplete.userData = [...userData, e.target.value];
      setMultiselect(updatedAutocomplete);
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      const updatedAutocomplete = { ...multiselect };
      updatedAutocomplete.activeOption = activeOption - 1;
      setMultiselect(updatedAutocomplete);
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        // console.log(activeOption);
        return;
      }
      const updatedAutocomplete = { ...multiselect };
      updatedAutocomplete.activeOption = activeOption + 1;
      setMultiselect(updatedAutocomplete);
    }
  };

  let optionList;
  const { activeOption, filteredOptions, showOptions, userInput, userData } = {
    ...multiselect,
  };
  // console.log("prop:", props);
  if (showOptions && userInput) {
    if (filteredOptions.length) {
      optionList = (
        <ul className="options">
          {filteredOptions.map((optionName, index) => {
            let className;
            if (index === activeOption) {
              className = 'option-active';
            }
            return (
              <li className={className} key={optionName} onClick={onClick}>
                {typeof optionName === 'string'
                  ? optionName
                  : optionName.icon + optionName.label}
                {optionName}
              </li>
            );
          })}
          {/* arr.map((option, index) => {
            // code for the list 
          }); */}
        </ul>
      );
    }
  }

  let showUserData;
  if (userData) {
    showUserData = userData.map((item, index) => (
      <label>
        {item}
        <span className="input-right-Icon cursor-pointer">{<MdCancel />}</span>
      </label>
    ));
  }

  return (
    <div className={cx('inputWrapper')}>
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
        <div className="multiselectDiv">
          {showUserData}

          <input
            {...field}
            {...props}
            className="search-box"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />

          {props.clearable && props.value.length > 0 && (
            <span className="input-right-Icon cursor-pointer">
              {<MdCancel />}
            </span>
          )}
        </div>
      </div>
      <div id={`autocomplete-data-${props.name}`}>{optionList}</div>
      {meta.error && meta.touched && (
        <div className={cx('hint', { error_hint: meta.error && meta.touched })}>
          {/* {meta.error && meta.error} */}
        </div>
      )}
    </div>
  );
}

MultiselectAutocomplete.defaultProps = {
  value: '',
  name: '',
  options: [],
};

MultiselectAutocomplete.propTypes = {
  clearable: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  inputIcon: PropTypes.node.isRequired,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  validate: PropTypes.object,
  options: PropTypes.array,
};

export default memo(MultiselectAutocomplete);
