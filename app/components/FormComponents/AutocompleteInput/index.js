/**
 *
 * AutocompleteInput
 *
 */

import React, { memo, createElement, useState } from 'react';
import cx from 'classnames';
import { useField } from 'formik';
import { FaTimes } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import PropTypes from 'prop-types';
import './style.scss';

function AutocompleteInput(props) {
  const [field, meta] = useField({
    name: props.name,
    validate: async value => await props.validate(value),
  });

  // props.allowCustomText = true;
  // props.manageRangeVal = false;
  // props.allowMultiselect = false;
  // props.showFilterTagIcon = false;
  // props.filterIconClassList = '';
  // props.filterNameClassList = '';
  // props.filterTagClassList = '';
  // props.showDataTagIcon = false;
  // props.dataIconClassList = '';
  // props.dataNameClassList = '';
  // props.dataTagClassList = '';
  // props.showMultisectInTop = true;
  // props.showMultisectInBottom = false;
  // props.allowCustomText  props.allowMultiselect  props.manageRangeVal
  // props.showLabelIcon props.FilterIconClassList props.FilterNameClassList props.FilterTagClassList
  // props.showDataTagIcon props.dataIconClassList props.dataNameClassList props.dataTagClassList
  let activeOptionDefault = 0;
  if (props.allowMultiselect === true) {
    activeOptionDefault = -1;
  }

  const [autocomplete, setAutocomplete] = useState({
    activeOption: activeOptionDefault,
    filteredOptions: [],
    showOptions: false,
    userInput: '',
    userData: [],
    userRangeVal: [],
  });

  console.log(autocomplete);

  const updateRange = e => {
    const updatedAutocomplete = { ...autocomplete };
    updatedAutocomplete.userRangeVal[e.target.dataset.idx] = e.target.value;
    setAutocomplete(updatedAutocomplete);
  };

  const onTextboxClick = () => {
    const updatedAutocomplete = { ...autocomplete };
    updatedAutocomplete.showOptions = true;
    let filteredOptions = props.options;
    updatedAutocomplete.activeOption = activeOptionDefault;
    updatedAutocomplete.userData.map(optionName => {
      filteredOptions = filteredOptions.filter(_value => _value.name !== optionName.name);
    });
    updatedAutocomplete.filteredOptions = filteredOptions;
    setAutocomplete(updatedAutocomplete);
  };

  const removeTag = (e, item) => {
    const updatedAutocomplete = { ...autocomplete };
    const { userData } = updatedAutocomplete;
    updatedAutocomplete.userData = userData.filter(
      (_value, index) => index !== item,
    );
    if (props.manageRangeVal === true) {
      const { userRangeVal } = updatedAutocomplete;
      updatedAutocomplete.userRangeVal = userRangeVal.filter(
        (_value, index) => index !== item,
      );
    }
    setAutocomplete(updatedAutocomplete);
  };

  const onClick = e => {
    const updatedAutocomplete = { ...autocomplete };
    const { filteredOptions } = updatedAutocomplete;
    updatedAutocomplete.activeOption = activeOptionDefault;
    updatedAutocomplete.filteredOptions = [];
    updatedAutocomplete.showOptions = false;
    if (props.allowMultiselect === true) {
      updatedAutocomplete.userInput = '';
    } else {
      updatedAutocomplete.userInput = e.currentTarget.innerText;
    }
    if (props.allowMultiselect === true) {
      if (props.allowCustomText === true) {
        updatedAutocomplete.userData = [
          ...updatedAutocomplete.userData,
          { name: e.currentTarget.innerText },
        ];
      } else {
        filteredOptions.map(optionName => {
          if (optionName.name === e.currentTarget.innerText) {
            updatedAutocomplete.userData = [
              ...updatedAutocomplete.userData,
              optionName,
            ];
          }
        });
      }
    }
    if (props.manageRangeVal === true) {
      updatedAutocomplete.userRangeVal = [
        ...updatedAutocomplete.userRangeVal,
        10,
      ];
    }
    setAutocomplete(updatedAutocomplete);

    // setAutocomplete({
    //   activeOption: 0,
    //   filteredOptions: [],
    //   showOptions: false,
    //   userInput: e.currentTarget.innerText,
    // });
  };

  const onChange = e => {
    const { options } = props;
    const userInput = e.currentTarget.value;
    let filteredOptions = options.filter(
      optionName =>
        optionName.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
    );
    const updatedAutocomplete = { ...autocomplete };
    updatedAutocomplete.activeOption = activeOptionDefault;
    updatedAutocomplete.showOptions = true;
    updatedAutocomplete.userInput = e.currentTarget.value;

    if (props.allowMultiselect === true) {
      updatedAutocomplete.userData.map(optionName => {
        filteredOptions = filteredOptions.filter(
          _value => _value !== optionName,
        );
      });
      updatedAutocomplete.filteredOptions = filteredOptions;
    } else {
      updatedAutocomplete.filteredOptions = filteredOptions;
    }
    setAutocomplete(updatedAutocomplete);
  };

  const onKeyDown = e => {
    const { activeOption, filteredOptions, userData } = { ...autocomplete };
    if (e.keyCode === 13) {
      const updatedAutocomplete = { ...autocomplete };
      updatedAutocomplete.activeOption = activeOptionDefault; // TODO
      updatedAutocomplete.showOptions = false;
      e.preventDefault();

      if (props.allowCustomText === true && props.allowMultiselect === false) {
        // Deafault Autocomplete
        updatedAutocomplete.userInput = filteredOptions[activeOption].name;
      } else if (
        props.allowCustomText === true &&
        props.allowMultiselect === true
      ) {
        // Skills
        const userDataLower = userData.map(a => a.name.toLowerCase());
        if (!(userDataLower.indexOf(e.target.value.toLowerCase()) >= 0)) {
          if (activeOption !== -1) {
            // console.log("case 1")
            updatedAutocomplete.userData = [
              ...userData,
              filteredOptions[activeOption],
            ];
            if (props.manageRangeVal === true) {
              updatedAutocomplete.userRangeVal = [
                ...updatedAutocomplete.userRangeVal,
                10,
              ];
            }
          } else if (e.target.value !== '') {
            // console.log("case 2")
            updatedAutocomplete.userData = [
              ...userData,
              { name: e.target.value },
            ];
            if (props.manageRangeVal === true) {
              updatedAutocomplete.userRangeVal = [
                ...updatedAutocomplete.userRangeVal,
                10,
              ];
            }
          }
        } else {
          // console.log("case 3")
          updatedAutocomplete.userData = [...userData];
        }
        updatedAutocomplete.userInput = '';
      } else if (
        props.allowCustomText === false &&
        props.allowMultiselect === true
      ) {
        // Hobbies
        const userFilterLower = filteredOptions.map(a => a.name.toLowerCase());
        if (userFilterLower.indexOf(e.target.value.toLowerCase()) >= 0) {
          // console.log("case 0")
          if (activeOption !== -1) {
            // console.log("case 1")
            updatedAutocomplete.userData = [
              ...userData,
              filteredOptions[activeOption],
            ];
          } else {
            // console.log("case 2")
            updatedAutocomplete.userData = [
              ...userData,
              filteredOptions[
                userFilterLower.indexOf(e.target.value.toLowerCase())
              ],
            ];
          }
        } else if (activeOption !== -1) {
          // console.log("case 3")
          updatedAutocomplete.userData = [
            ...userData,
            filteredOptions[activeOption],
          ];
        } else if (activeOption === -1) {
          // console.log("case 4")
          const userDataLower = userData.map(a => a.name.toLowerCase());
          if (userDataLower.indexOf(e.target.value.toLowerCase()) >= 0) {
            // console.log("case 5")
            updatedAutocomplete.userData = [...userData];
          }
        }
        updatedAutocomplete.userInput = '';
      }
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
        return;
      }
      const updatedAutocomplete = { ...autocomplete };
      updatedAutocomplete.activeOption = activeOption + 1;
      setAutocomplete(updatedAutocomplete);
    }
  };

  const { activeOption, filteredOptions, showOptions, userInput, userData } = {
    ...autocomplete,
  };

  let userRangeVal;
  if (props.manageRangeVal === true) {
    const updatedAutocomplete = { ...autocomplete };
    userRangeVal = updatedAutocomplete.userRangeVal;
  }

  let optionList;
  let IconsUI;
  // if (showOptions && userInput) {
  if (showOptions) {
    if (filteredOptions.length) {
      optionList = (
        <ul className="options">
          {filteredOptions.map((optionName, index) => {
            let className;
            if (index === activeOption) {
              className = 'option-active';
            }
            if (props.showFilterTagIcon) {
              IconsUI = (
                <span className={props.filterIconClassList}>
                  {optionName.icon}
                </span>
              );
            }
            return (
              <li className={className} key={optionName} onClick={onClick}>
                <div className={props.filterTagClassList}>
                  {IconsUI}
                  <span className={props.filterNameClassList}>
                    {optionName.name}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      );
    } else {
      optionList = (
        <div className="no-options">
          <em>No Option!</em>
        </div>
      );
    }
  }

  let showUserData;
  let rangeUI;
  let dataIconUI;
  // props.showDataTagIcon props.dataIconClassList props.dataNameClassList props.dataTagClassList
  if (props.allowMultiselect) {
    if (userData) {
      showUserData = userData.map((item, index) => {
        if (props.showFilterTagIcon) {
          dataIconUI = (
            <span className={props.dataIconClassList}>{item.icon}</span>
          );
        }
        if (props.manageRangeVal) {
          rangeUI = (
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
          );
        }
        return (
          <label className="tags">
            <div className={props.dataTagClassList}>
              {dataIconUI}
              <span className={props.dataNameClassList}>{item.name}</span>
              {rangeUI}
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
          </label>
        );
      });
    }
  }
  let muiltiSelectTopUI;
  let muiltiSelectBottomUI;
  // props.showMultisectInBottom props.showMultisectInTop
  if (props.allowMultiselect === true) {
    if (props.showMultisectInTop === true) {
      muiltiSelectTopUI = <div className="multiselectDiv"> {showUserData}</div>;
    } else if (props.showMultisectInBottom === true) {
      muiltiSelectBottomUI = (
        <div className="multiselectDiv"> {showUserData}</div>
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

        {muiltiSelectTopUI}

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

      {muiltiSelectBottomUI}

      {meta.error && meta.touched && (
        <div className={cx('hint', { error_hint: meta.error && meta.touched })}>
          {meta.error && meta.error}
        </div>
      )}
    </div>
  );
}

AutocompleteInput.defaultProps = {
  value: '',
  name: '',
  allowCustomText: true,
  manageRangeVal: false,
  allowMultiselect: false,
  showFilterTagIcon: false,
  filterIconClassList: '',
  filterNameClassList: '',
  filterTagClassList: '',
  showDataTagIcon: false,
  dataIconClassList: '',
  dataNameClassList: '',
  dataTagClassList: '',
  showMultisectInTop: true,
  showMultisectInBottom: false,
};
AutocompleteInput.propTypes = {
  clearable: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  inputIcon: PropTypes.node.isRequired,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  validate: PropTypes.object,
  options: PropTypes.object.isRequired,
  manageRangeVal: PropTypes.bool,
  allowCustomText: PropTypes.bool,
  activeOptionDefault: PropTypes.bool,
  allowMultiselect: PropTypes.bool,
  showFilterTagIcon: PropTypes.bool,
  filterIconClassList: PropTypes.string,
  filterNameClassList: PropTypes.string,
  filterTagClassList: PropTypes.string,
  showDataTagIcon: PropTypes.bool,
  dataIconClassList: PropTypes.string,
  dataNameClassList: PropTypes.string,
  dataTagClassList: PropTypes.string,
  showMultisectInBottom: PropTypes.bool,
  showMultisectInTop: PropTypes.bool,
};

export default memo(AutocompleteInput);
