/**
 *
 * MultiselectSkill
 *
 */

import React, { memo, useState, useEffect } from 'react';
import cx from 'classnames';
import { useField } from 'formik';
import { FaTimes } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import ReactList from 'react-list';
import PropTypes from 'prop-types';
import './style.scss';

function MultiselectSkill(props) {
  const [field, meta, helpers] = useField({
    name: props.name,
    // validate: async value => await props.validate(value),
  });
  const checkboxState = [];
  props.options.forEach(element => {
    checkboxState.push(false);
  });

  const [multiselect, setMultiselect] = useState({
    activeOption: -1,
    filteredOptions: [],
    showOptions: false,
    userInput: '',
    userData: props.options,
    customOptions: [],
    userRangeVal: checkboxState,
  });

  const updateRange = (e, item) => {
    const updatedAutocomplete = { ...multiselect };
    const { userRangeVal } = updatedAutocomplete;
    userRangeVal[item] = !userRangeVal[item];
    updatedAutocomplete.userRangeVal = userRangeVal;
    setMultiselect(updatedAutocomplete);
  };

  const onTextboxClick = () => {
    const updatedAutocomplete = { ...multiselect };
    updatedAutocomplete.showOptions = !updatedAutocomplete.showOptions;
    updatedAutocomplete.activeOption = -1;
    updatedAutocomplete.filteredOptions = [
      ...multiselect.customOptions,
      ...props.options,
    ];
    setMultiselect(updatedAutocomplete);
  };

  const onChange = e => {
    let { options } = props;
    const userInput = e.currentTarget.value;
    options = [...multiselect.customOptions, ...options];
    const filteredOptions = options.filter(
      optionName =>
        optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
    );
    const updatedAutocomplete = { ...multiselect };
    updatedAutocomplete.activeOption = -1;
    updatedAutocomplete.filteredOptions = filteredOptions;
    updatedAutocomplete.showOptions = true;
    updatedAutocomplete.userInput = e.currentTarget.value;
    setMultiselect(updatedAutocomplete);
  };

  const onKeyDown = e => {
    const { activeOption, filteredOptions, userData, customOptions } = {
      ...multiselect,
    };
    if (e.keyCode === 13 || e.keyCode === 188) {
      const userDataLower = userData
        .filter((optionName, index) => userRangeVal[index] && optionName)
        .map(a => a.toLowerCase());
      if (!(userDataLower.indexOf(e.target.value.toLowerCase()) >= 0)) {
        // if (!(userDataLower.indexOf(e.target.value.toLowerCase()) >= 0)) {
        if (activeOption != -1) {
          e.preventDefault();
          const updatedAutocomplete = { ...multiselect };
          // updatedAutocomplete.activeOption = -1;
          // updatedAutocomplete.showOptions = false;
          updatedAutocomplete.userInput = '';
          // updatedAutocomplete.userData = [
          //   ...userData,
          //   filteredOptions[activeOption],
          // ];
          updatedAutocomplete.userRangeVal[activeOption] = !updatedAutocomplete
            .userRangeVal[activeOption];
          // updatedAutocomplete.userRangeVal = [...userRangeVal, 10];
          setMultiselect(updatedAutocomplete);
        } else {
          e.preventDefault();
          const updatedAutocomplete = { ...multiselect };
          // updatedAutocomplete.activeOption = -1;
          // updatedAutocomplete.showOptions = false;
          updatedAutocomplete.userInput = '';
          updatedAutocomplete.userData = [e.target.value, ...userData];
          updatedAutocomplete.customOptions = [
            e.target.value,
            ...customOptions,
          ];
          updatedAutocomplete.filteredOptions = [
            e.target.value,
            ...filteredOptions,
          ];
          updatedAutocomplete.userRangeVal = [true, ...userRangeVal];
          setMultiselect(updatedAutocomplete);
        }
      } else {
        e.preventDefault();
        const updatedAutocomplete = { ...multiselect };
        // updatedAutocomplete.activeOption = -1;
        // updatedAutocomplete.showOptions = false;
        updatedAutocomplete.userInput = '';
        updatedAutocomplete.userData = [...userData];
        setMultiselect(updatedAutocomplete);
      }
    } else if (e.keyCode === 38) {
      if (activeOption === -1) {
        return;
      }
      const updatedAutocomplete = { ...multiselect };
      updatedAutocomplete.activeOption = activeOption - 1;
      setMultiselect(updatedAutocomplete);
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        const updatedAutocomplete = { ...multiselect };
        updatedAutocomplete.activeOption = filteredOptions.length - 1;
        setMultiselect(updatedAutocomplete);
        return;
      }
      const updatedAutocomplete = { ...multiselect };
      updatedAutocomplete.activeOption = activeOption + 1;
      setMultiselect(updatedAutocomplete);
    }
  };

  console.log(multiselect);
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

  useEffect(() => {
    if (userRangeVal.indexOf(true) > -1) {
      const fieldData = userData
        .filter((optionName, index) => userRangeVal[index] && optionName)
        .join(', ');
      helpers.setValue(fieldData);
    }
  }, [multiselect]);

  console.log(
    userData.filter((optionName, index) => userRangeVal[index] && optionName),
  );

  if (showOptions) {
    // } && userInput) {
    if (filteredOptions.length) {
      optionList = (
        <div>
          <ul className="optionsListItems">
            <ReactList
              itemRenderer={(index, key) => {
                let className;
                if (index === activeOption) {
                  className = 'option-active';
                }
                return (
                  <li className={className} key={key}>
                    <div className="">
                      <span className="ml-2">
                        <input
                          type="checkbox"
                          id={`checkbox-${index}`}
                          checked={userRangeVal[userData.indexOf(filteredOptions[index])]}
                          // value="green" isChecked={currentValues.indexOf('green') > -1}
                          onChange={e => {
                            // e.preventDefault();
                            updateRange(e, userData.indexOf(filteredOptions[index]));
                          }}
                          value={filteredOptions[index]}
                        />
                        <label htmlFor={`checkbox-${index}`}>
                          {filteredOptions[index]}
                        </label>
                      </span>
                    </div>
                  </li>
                );
              }}
              length={filteredOptions.length}
              type="uniform"
            />

            {/* {filteredOptions.map((optionName, index) => {
              let className;
              if (index === activeOption) {
                className = 'option-active';
              }
              return (
                <li className={className} key={optionName}>
                  <div className="">
                    <span className="ml-2">
                      <input
                        type="checkbox"
                        id={`checkbox-${index}`}
                        checked={userRangeVal[userData.indexOf(optionName)]}
                        // value="green" isChecked={currentValues.indexOf('green') > -1}
                        onChange={e => {
                          // e.preventDefault();
                          updateRange(e, userData.indexOf(optionName));
                        }}
                        value={optionName}
                      />
                      <label htmlFor={`checkbox-${index}`}>{optionName}</label>
                    </span>
                  </div>
                </li>
              );
            })} */}
          </ul>
        </div>
      );
    }
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

        {/* <input type="button" onClick={onTextboxClick}/> */}
        <button type="button" onClick={onTextboxClick}>
          {userRangeVal.indexOf(true) > -1
            ? userData
              .filter(
                (optionName, index) => userRangeVal[index] && optionName,
              )
              .join(', ')
            : 'Select some value'}
          {/* {(userRangeVal.indexOf(true) > -1 )? userData.map((optionName, index) => {
            if (userRangeVal[index] === true) {
              return optionName;
            }
          }):'Select some value'} */}
        </button>
      </div>
      <div id={`autocomplete-data-${props.name}`} className="optionsList">
        {showOptions && (
          <input
            {...field}
            {...props}
            className="search-box"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />
        )}
        {optionList}
      </div>

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
