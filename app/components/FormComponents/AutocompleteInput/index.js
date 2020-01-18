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

function AutocompleteInput(props) {
  const [field, meta] = useField({
    name: props.name,
    validate: async value => await props.validate(value),
  });
  const [showOptions, setShowOptions] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [activeOption, setActiveOption] = useState(0);
  const [userValue, setUserValue] = useState('');
  const [optionList, setOptionList] = useState([]);

  const clearListDiv = (e) => {
    const id = "autocomplete-data-"+ e.target.name;
    console.log(id);
    document.getElementById(id).innerHTML = '';
  };
  const onInput = e => {
    clearListDiv(e);
    const { value } = e.target;
    let arr;
    const id = "autocomplete-data-"+ e.target.name;
    switch (props.name.toLowerCase()) {
      case 'country':
        arr = COUNTRY;
        break;
      case 'state':
        arr = STATE;
        break;
      case 'city':
        arr = CITY;
        break;
      default:
        arr = [];
        break;
    }
    let b;
    if (showOptions && userValue) {
      if (filteredOptions.length) {
        optionList = (
          <ul className="options">
            arr.map((option, index) => {
              // code for the list 
            });
          </ul>);
      }
    }
  };
  const setData = data => {
    props.value = data;
    clearListDiv();
  };
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
          onChange={props.onChange}
          onInput={onInput}
        />
        <div id={`autocomplete-data-${props.name}`}>{optionList}</div>

        {props.clearable && props.value.length > 0 && (
          <span className="input-right-Icon cursor-pointer">
            {<MdCancel />}
          </span>
        )}
      </div>
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
