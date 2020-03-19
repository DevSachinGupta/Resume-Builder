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
import './style.scss';

function MultiselectSkill(props) {
  const [field, meta] = useField({
    name: props.name,
    // validate: async value => await props.validate(value),
  });

  const [multiselect, setMultiselect] = useState({
    activeOption: -1,
    filteredOptions: [],
    showOptions: false,
    userInput: '',
    userData: [],
    userRangeVal: [],
  });

  const updateRange = e => {
    const updatedAutocomplete = { ...multiselect };
    updatedAutocomplete.userRangeVal[e.target.dataset.idx] = e.target.value;
    setMultiselect(updatedAutocomplete);
  };

  const onTextboxClick = () => {
    const updatedAutocomplete = { ...multiselect };
    updatedAutocomplete.showOptions = true;
    let filteredOptions = props.options;
    updatedAutocomplete.activeOption = -1;

    updatedAutocomplete.userData.map((optionName, index) => {
      filteredOptions = filteredOptions.filter(_value => _value !== optionName);
    });

    updatedAutocomplete.filteredOptions = filteredOptions;
    setMultiselect(updatedAutocomplete);
  };

  const removeTag = (e, item) => {
    const updatedAutocomplete = { ...multiselect };
    const { userData } = updatedAutocomplete;
    updatedAutocomplete.userData = userData.filter(
      (_value, index) => index !== item,
    );
    const { userRangeVal } = updatedAutocomplete;
    updatedAutocomplete.userRangeVal = userRangeVal.filter(
      (_value, index) => index !== item,
    );
    setMultiselect(updatedAutocomplete);
  };

  const onClick = e => {
    setMultiselect({
      activeOption: -1,
      filteredOptions: [],
      showOptions: false,
      userInput: '',
      userData: [...userData, e.currentTarget.innerText],
      userRangeVal: [...userRangeVal, 10],
    });
  };

  const onChange = e => {
    const { options } = props;
    const userInput = e.currentTarget.value;
    let filteredOptions = options.filter(
      optionName =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
    );
    const updatedAutocomplete = { ...multiselect };
    updatedAutocomplete.activeOption = -1;
    updatedAutocomplete.userData.map((optionName, index) => {
      filteredOptions = filteredOptions.filter(_value => _value !== optionName);
    });
    updatedAutocomplete.filteredOptions = filteredOptions;
    updatedAutocomplete.showOptions = true;
    // if (e.keyCode === 188) {
    //   updatedAutocomplete.userInput = '';
    //   e.target.value = '';
    // } else {
    updatedAutocomplete.userInput = e.currentTarget.value;
    // }
    setMultiselect(updatedAutocomplete);
  };

  const onKeyDown = e => {
    const { activeOption, filteredOptions, userData } = { ...multiselect };
    if (e.keyCode === 13 || e.keyCode === 188) {
      const userDataLower = userData.map(a => a.toLowerCase());
      if (!(userDataLower.indexOf(e.target.value.toLowerCase()) >= 0)) {
        if (activeOption != -1) {
          e.preventDefault();
          const updatedAutocomplete = { ...multiselect };
          updatedAutocomplete.activeOption = -1;
          updatedAutocomplete.showOptions = false;
          updatedAutocomplete.userInput = '';
          updatedAutocomplete.filteredOptions = [];
          updatedAutocomplete.userData = [
            ...userData,
            filteredOptions[activeOption],
          ];
          updatedAutocomplete.userRangeVal = [...userRangeVal, 10];
          setMultiselect(updatedAutocomplete);
          props.updateData(filteredOptions[activeOption]);
        } else if (e.target.value != '') {
          e.preventDefault();
          const updatedAutocomplete = { ...multiselect };
          updatedAutocomplete.activeOption = -1;
          updatedAutocomplete.showOptions = false;
          updatedAutocomplete.userInput = '';
          updatedAutocomplete.filteredOptions = [];
          updatedAutocomplete.userData = [...userData, e.target.value];
          updatedAutocomplete.userRangeVal = [...userRangeVal, 10];
          setMultiselect(updatedAutocomplete);
        }
      } else {
        e.preventDefault();
        const updatedAutocomplete = { ...multiselect };
        updatedAutocomplete.activeOption = -1;
        updatedAutocomplete.showOptions = false;
        updatedAutocomplete.userInput = '';
        updatedAutocomplete.filteredOptions = [];
        updatedAutocomplete.userData = [...userData];
        setMultiselect(updatedAutocomplete);
      }
      // const updatedAutocomplete = { ...multiselect };
      // updatedAutocomplete.filteredOptions = [];
      // setMultiselect(updatedAutocomplete);
    } else if (e.keyCode === 38) {
      if (activeOption === -1) {
        return;
      }
      const updatedAutocomplete = { ...multiselect };
      updatedAutocomplete.activeOption = activeOption - 1;
      setMultiselect(updatedAutocomplete);
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        // const updatedAutocomplete = { ...multiselect };
        // updatedAutocomplete.activeOption = filteredOptions.length - 1;
        // setMultiselect(updatedAutocomplete);
        return;
      }
      const updatedAutocomplete = { ...multiselect };
      updatedAutocomplete.activeOption = activeOption + 1;
      setMultiselect(updatedAutocomplete);
    }
  };

  let optionList;
  const {
    activeOption,
    filteredOptions,
    showOptions,
    userInput,
    userData,
    userRangeVal,
  } = {
    ...multiselect,
  };

  if (showOptions) {
    // } && userInput) {
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
                <div className="">
                  <span className="ml-2">{optionName}</span>
                </div>
              </li>
            );
          })}
        </ul>
      );
    }
  }

  let showUserData;
  if (userData) {
    showUserData = userData.map((item, index) => (
      <div className="tags">
        <div className="">
          <span className="tag-name ml-3">{item}</span>

          <span className="w-20">
            <input
              id="range"
              data-idx={index}
              type="range"
              value={userRangeVal[index]}
              min="0"
              max="10"
              step="1"
              onChange={updateRange}
            />
            <span id="output">{userRangeVal[index]}</span>
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
      </div>
    ));
  }

  return (
    <div className={cx('inputWrapper', 'multiselectskill')}>
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
          onClick={onTextboxClick}
        />
        {props.clearable && props.value.length > 0 && (
          <span className="input-right-Icon cursor-pointer">
            {<MdCancel />}
          </span>
        )}
      </div>
      <div id={`autocomplete-data-${props.name}`} className="absolute">
        {optionList}
      </div>

      <div className="multiselectDiv"> {showUserData}</div>
      
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
