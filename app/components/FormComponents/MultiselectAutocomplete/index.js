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
  let checkboxState=[];
  props.options.forEach(element => {
    checkboxState.push(false)
  });
  console.log(checkboxState);

  const [multiselect, setMultiselect] = useState({
    activeOption: -1,
    filteredOptions: [],
    showOptions: false,
    userInput: '',
    userData: props.options,
    userRangeVal: checkboxState,
  });

  const updateRange = (e, item) => {
    const updatedAutocomplete = { ...multiselect };
    const { userRangeVal } = updatedAutocomplete;
    userRangeVal[item] = !userRangeVal[item]
    updatedAutocomplete.userRangeVal = userRangeVal;
    setMultiselect(updatedAutocomplete);
  };

  const onTextboxClick = () => {
    const updatedAutocomplete = { ...multiselect };
    updatedAutocomplete.showOptions = !updatedAutocomplete.showOptions;
    updatedAutocomplete.activeOption = -1;
    updatedAutocomplete.filteredOptions = props.options;
    setMultiselect(updatedAutocomplete);
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
    updatedAutocomplete.filteredOptions = filteredOptions;
    updatedAutocomplete.showOptions = true;
    updatedAutocomplete.userInput = e.currentTarget.value;
    setMultiselect(updatedAutocomplete);
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
              <li className={className} key={optionName} >
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
          })}
        </ul>
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

        <input
          {...field}
          {...props}
          className="search-box"
          onChange={onChange}
          // onKeyDown={onKeyDown}
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
