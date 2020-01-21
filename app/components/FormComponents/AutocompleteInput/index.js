/**
 *
 * AutocompleteInput
 *
 */

import React, { memo, createElement, useState } from 'react';
import cx from 'classnames';
import { useField } from 'formik';
import { MdCancel } from 'react-icons/md';
import PropTypes from 'prop-types';
import { COUNTRY, CITY, STATE } from './constantArrays';
import './style.scss';
import { prop } from 'ramda';

function AutocompleteInput(props) {
  const [field, meta] = useField({
    name: props.name,
    validate: async value => await props.validate(value),
  });

  const [autocomplete, setAutocomplete] = useState({
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: '',
  });

  // const [showOptions, setShowOptions] = useState(false);
  // const [filteredOptions, setFilteredOptions] = useState([]);
  // const [activeOption, setActiveOption] = useState(0);
  // const [userValue, setUserValue] = useState('');
  // const [optionList, setOptionList] = useState([]);

  const onChange = (e) => {
    console.log('onChanges');

    const { options } = props;
    const userInput = e.currentTarget.value;

    const filteredOptions = options.filter(
      (optionName) =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
    );

    const updatedAutocomplete = { ...autocomplete };
    updatedAutocomplete.activeOption = 0;
    updatedAutocomplete.filteredOptions = filteredOptions;
    updatedAutocomplete.showOptions = true;
    updatedAutocomplete.userInput = e.currentTarget.value;
    setAutocomplete(updatedAutocomplete);
  };

  const onClick = (e) => {
    setAutocomplete({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText,
    });
  };

  const onKeyDown = (e) => {
    const { activeOption, filteredOptions } = { ...autocomplete };
    if (e.keyCode === 13) {
      const updatedAutocomplete = { ...autocomplete };
      updatedAutocomplete.activeOption = 0;
      updatedAutocomplete.showOptions = false;
      updatedAutocomplete.userInput = filteredOptions[activeOption];
      setAutocomplete(updatedAutocomplete);
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      const updatedAutocomplete = { ...autocomplete };
      updatedAutocomplete.activeOption = activeOption - 1;
      setAutocomplete(updatedAutocomplete);
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      const updatedAutocomplete = { ...autocomplete };
      updatedAutocomplete.activeOption = activeOption + 1;
      setAutocomplete(updatedAutocomplete);
    }
  };

  let optionList;
  const { activeOption, filteredOptions, showOptions, userInput } = { ...autocomplete };
  console.log("prop:", props);
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
                {optionName}
              </li>
            );
          })}
          {/* arr.map((option, index) => {
            // code for the list 
          }); */}
        </ul>);
    } else {
      optionList = (
        <div className="no-options">
          <em>No Option!</em>
        </div>
      );
    }
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
        <input
          {...field}
          {...props}
          className="search-box"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        {/* <div id={`autocomplete-data-${props.name}`}>{optionList}</div> */}

        {props.clearable && props.value.length > 0 && (
          <span className="input-right-Icon cursor-pointer">
            {<MdCancel />}
          </span>
        )}
      </div>
      <div id={`autocomplete-data-${props.name}`}>{optionList}</div>
      {meta.error && meta.touched && (
        <div className={cx('hint', { error_hint: meta.error && meta.touched })}>
          {meta.error && meta.error}
        </div>
      )}
    </div>
  );
}

Text.defaultProps = {
  value: '',
  name: '',
};
Text.propTypes = {
  clearable: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  inputIcon: PropTypes.node.isRequired,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  validate: PropTypes.object,
};

export default memo(AutocompleteInput);
