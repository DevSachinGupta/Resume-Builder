/**
 *
 * MultiselectSkill
 *
 */

import React, { memo, useState } from 'react';
import cx from 'classnames';
import { useField } from 'formik';
import { FaTimes } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import PropTypes from 'prop-types';
import RangeSlider from '../RangeSlider';
import './style.scss';

function MultiselectSkill(props) {
  const [field, meta] = useField({
    name: props.name,
    // validate: async value => await props.validate(value),
  });

  const [state, setState] = useState({
    value: 10,
  });

  const [multiselect, setMultiselect] = useState({
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: '',
    userData: [],
  });

  const rangeVal = 0;

  const [range, setRange] = useState(rangeVal);

  const updateRange = e => {
    setRange(e.target.value);
  }
  

  const removeTag = (e, item) => {
    const updatedAutocomplete = { ...multiselect };
    const { userData } = updatedAutocomplete;
    updatedAutocomplete.userData = userData.filter(
      (_value, index) => index !== item,
    );
    setMultiselect(updatedAutocomplete);
  };

  const onChange = e => {
    // console.log('onChanges');

    const { options } = props;
    const userInput = e.currentTarget.value;
    // console.log(options[0]);
    // console.log(options[0].label);
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
      e.target.style.width = '0ch';
    } else {
      updatedAutocomplete.userInput = e.currentTarget.value;
    }
    setMultiselect(updatedAutocomplete);
  };

  const onInput = e => {
    e.target.style.width = `${e.target.value.length}ch`;
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

  const handleChangeStart = () => {
    console.log('Change event started');
  };

  const handleChange = value => {
    setState({
      value,
    });
  };

  const handleChangeComplete = () => {
    console.log('Change event completed');
  };

  // console.log("prop:", props);
  if (props.showDefaultOptions === true) {
    optionList = (
      <ul className="options">
        {props.options.map((optionName, index) => {
          let className;
          if (index === activeOption) {
            className = 'option-active';
          }
          return (
            <li className={className} key={optionName} onClick={onClick}>
              <div className="inline-block mb-1 rounded-full bg-gray-300 pr-5 h-8 line-height-username1">
                <img
                  className="rounded-full float-left h-full"
                  src="https://randomuser.me/api/portraits/women/34.jpg"
                />
                <span className="ml-3">{optionName}</span>
              </div>
              {/* {typeof optionName === 'string'
                ? optionName
                : optionName.icon + optionName.label} */}
            </li>
          );
        })}
      </ul>
    );
  }
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
                <div className="inline-block mb-1 rounded-full bg-gray-300 pr-5 h-8 line-height-username1">
                  <img
                    className="rounded-full float-left h-full"
                    src="https://rrandomuser.me/api/portraits/women/34.jpg"
                  />
                  <span className="ml-3">{optionName}</span>
                </div>
                {/* {typeof optionName === 'string'
                  ? optionName
                  : optionName.icon + optionName.label} */}
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
  const { value } = state;
  if (userData) {
    showUserData = userData.map((item, index) => (
      <label className="tags">
        <div className="inline-block mb-1 rounded-full bg-gray-300 pr-5 h-8 line-height-username1">
          <img
            className="rounded-full float-left h-full"
            src="https://randomuser.me/api/portraits/women/34.jpg"
          />
          <span className="ml-3">{item}</span>
          <span className="w-20">
            <input id="range" type="range"
              value={range}
              min="0"
              max="20"
              step="1"
              onChange={updateRange}
            />
            <span id="output">{range}</span>
            {/* <div className="slider">
              <RangeSlider
                min={0}
                max={100}
                value={value}
                onChangeStart={handleChangeStart}
                onChange={handleChange}
                onChangeComplete={handleChangeComplete}
              />
              <div className='value'>{value}</div>
            </div> */}
          </span>
          <span
            className="inline-block align-middle"
            onClick={e => {
              e.preventDefault();
              removeTag(e, index);
            }}
          >
            {<FaTimes />}
          </span>
        </div>
        {/* {item}
        <span
          className="cursor-pointer"
          onClick={e => {
            e.preventDefault();
            removeTag(e, index);
          }}
        >
          {<FaTimes />}
        </span> */}
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
            onInput={onInput}
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

MultiselectSkill.defaultProps = {
  value: '',
  name: '',
  options: [],
  showDefaultOptions: false,
};

MultiselectSkill.propTypes = {
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
  showDefaultOptions: PropTypes.bool,
};

export default memo(MultiselectSkill);
