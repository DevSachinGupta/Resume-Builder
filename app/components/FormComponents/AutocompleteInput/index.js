/**
 *
 * AutocompleteInput
 *
 */

import React, { memo, useState, useRef, useEffect } from 'react';
import cx from 'classnames';
import { useField } from 'formik';
// import { FaTimes } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import PropTypes from 'prop-types';
import './style.scss';

function AutocompleteInput(props) {
  let validateField = props.allowValidation;
  if (props.hidden) {
    validateField = false;
  }
  const [field, meta, helpers] = useField({
    name: props.name,
    validate: async value => {
      // const val = await props.validate(value).catch(err => err);
      const val = validateField
        ? await props.validate(value).catch(err => err)
        : null;
      return val;
    },
  });

  let activeOptionDefault = 0;
  if (props.allowMultiselect === true) {
    activeOptionDefault = -1;
  }

  const [autoComplete, setAutoComplete] = useState({
    activeOption: activeOptionDefault,
    filteredOptions: [],
    showOptions: props.showDefaultOptions,
    userInput: '',
    userData: [],
    userRangeVal: [],
  });
  const ref = useRef(null);
  const handleGlobalClickForAutoComplete = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      const autocompleteUpdates = autoComplete;
      autocompleteUpdates.showOptions = false;
      setAutoComplete(autocompleteUpdates);
    }
  };
  useEffect(() => {
    document.addEventListener(
      'mousedown',
      handleGlobalClickForAutoComplete,
      true,
    );
    return function cleanup() {
      document.removeEventListener(
        'mousedown',
        handleGlobalClickForAutoComplete,
        false,
      );
    };
  }, []);
  const onTextBoxClick = () => {
    setAutoComplete({
      activeOptions: activeOptionDefault,
      filteredOptions: props.options,
      userInput: '',
      showOptions: true,
    });
  };
  const onListItemClick = e => {
    if (props.allowMultiselect) {
      // console.log("Multiselect allowed", e.currentTarget.value);
      setAutoComplete({
        activeOptions: activeOptionDefault,
        filteredOptions: [],
        userInput: '',
        showOptions: false,
      });

      if (props.allowCustomText) {
        props.updateValues(e.currentTarget.value);
      } else {
        const selectedValue = props.options.find(
          option =>
            option.value.toLowerCase() === e.currentTarget.value.toLowerCase(),
        );
        // console.log('Item clicked :- ', selectedValue);
        if (selectedValue) props.updateValues(selectedValue);
      }
    } else {
      helpers.setValue(e.currentTarget.value);
    }
  };
  const onTextBoxChange = e => {
    const filteredData = props.options.filter(
      word =>
        word.value.toLowerCase().indexOf(e.currentTarget.value.toLowerCase()) >=
        0,
    );
    setAutoComplete({
      activeOptions: activeOptionDefault,
      filteredOptions: filteredData,
      userInput: e.currentTarget.value,
      showOptions: true,
    });
    if (!props.allowMultiselect) {
      helpers.setValue(e.currentTarget.value);
    }
  };
  const onTextBoxKeydown = e => {
    // code on different key events...
    const updateAutocompleteData = { ...autoComplete };
    // console.log(updateAutocompleteData);
    if (e.keyCode === 38) {
      // key down event
      if (autoComplete.activeOptions === 0) {
        return;
      }
      updateAutocompleteData.activeOptions = autoComplete.activeOptions - 1;
      setAutoComplete(updateAutocompleteData);
    } else if (e.keyCode === 40) {
      // key up event
      if (
        autoComplete.activeOptions ===
        autoComplete.filteredOptions.length - 1
      ) {
        return;
      }
      updateAutocompleteData.activeOptions = autoComplete.activeOptions + 1;
      setAutoComplete(updateAutocompleteData);
    } else if (e.keyCode === 13) {
      e.preventDefault();
      let selectedValue = props.options.find(
        option =>
          option.value.toLowerCase() === e.currentTarget.value.toLowerCase(),
      );
      if (props.allowCustomText) {
        if (!selectedValue) {
          selectedValue = { value: e.currentTarget.value };
        }
        if (props.allowMultiselect) {
          props.updateValues(selectedValue);
          updateAutocompleteData.userInput = '';
        } else {
          helpers.setValue(selectedValue);
        }
      } else if (props.allowMultiselect) {
        if (selectedValue) {
          props.updateValues(selectedValue);
        } else if (
          updateAutocompleteData.activeOptions !== activeOptionDefault
        ) {
          props.updateValues(
            updateAutocompleteData.filteredOptions[
              updateAutocompleteData.activeOptions
            ],
          );
        }
        updateAutocompleteData.userInput = '';
      } else if (selectedValue) {
        props.updateValues(selectedValue);
      } else if (updateAutocompleteData.activeOptions !== activeOptionDefault) {
        props.updateValues(
          updateAutocompleteData.filteredOptions[
            updateAutocompleteData.activeOptions
          ],
        );
      }
      updateAutocompleteData.showOptions = false;
      updateAutocompleteData.filteredOptions = [];
      setAutoComplete(updateAutocompleteData);
    }
    // setAutoComplete(updateAutocompleteData);
  };

  let optionsList;
  if (autoComplete.showOptions) {
    if (autoComplete.filteredOptions.length) {
      optionsList = (
        <ul className="optionsListItems">
          {autoComplete.filteredOptions.map((optionName, index) => {
            let className1;
            if (index === autoComplete.activeOptions) {
              className1 = 'option-active';
            }
            let IconUI;
            if (props.allowIconsInOptionList) {
              IconUI = <span className="mx-3">{optionName.icon}</span>;
            }
            return (
              <li
                className={className1}
                key={`${props.name}_list_${optionName.value}`}
              >
                <button
                  type="button"
                  onClick={onListItemClick}
                  value={optionName.value}
                >
                  {IconUI}
                  {optionName.value}
                </button>
              </li>
            );
          })}
        </ul>
      );
    }
  }
  const {
    options,
    showDefaultOptions,
    allowMultiselect,
    allowCustomText,
    updateValues,
    allowIconsInOptionList,
    allowValidation,
    ...rest
  } = props;
  return (
    <React.Fragment>
      <div className={cx('inputWrapper', 'autocomplete')} ref={ref}>
        <div className="label">{props.label}</div>
        <div
          className={cx('inputContainer', {
            fullWidth: props.fullWidth,
            error: validateField && meta.error && meta.touched,
          })}
        >
          {props.inputIcon && (
            <span className="inputIcon">{props.inputIcon}</span>
          )}

          <input
            {...field}
            {...rest}
            type="text"
            value={autoComplete.userInput}
            onChange={onTextBoxChange}
            onKeyDown={onTextBoxKeydown}
            onClick={onTextBoxClick}
          />
          {props.clearable && (
            <span className="input-right-Icon cursor-pointer">
              {<MdCancel />}
            </span>
          )}
        </div>
        <div className="optionsList">{optionsList}</div>

        {validateField && meta.error && meta.touched && (
          <div
            className={cx('hint', { error_hint: meta.error && meta.touched })}
          >
            {meta.error && meta.error.message}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

AutocompleteInput.defaultProps = {
  allowCustomText: true,
  allowMultiselect: false,
  hidden: false,
  allowIconsInOptionList: false,
  showDefaultOptions: false,
  allowValidation: true,
};
AutocompleteInput.propTypes = {
  clearable: PropTypes.bool,
  onChange: PropTypes.func,
  fullWidth: PropTypes.bool,
  inputIcon: PropTypes.node,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  validate: PropTypes.object,
  options: PropTypes.array.isRequired,
  showDefaultOptions: PropTypes.bool,
  allowMultiselect: PropTypes.bool,
  allowCustomText: PropTypes.bool,
  updateValues: PropTypes.func,
  hidden: PropTypes.bool,
  allowIconsInOptionList: PropTypes.bool,
  allowValidation: PropTypes.bool,
};

export default memo(AutocompleteInput);
