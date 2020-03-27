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
  let validateField = true;
  if (props.hidden) {
    validateField = false;
  }
  const [field, meta, helpers] = useField({
    name: props.name,
    validate: async value => {
      const val = await props.validate(value).catch(err => err);
      return validateField ? val : null;
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
            option.name.toLowerCase() === e.currentTarget.value.toLowerCase(),
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
        word.name.toLowerCase().indexOf(e.currentTarget.value.toLowerCase()) >=
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
          option.name.toLowerCase() === e.currentTarget.value.toLowerCase(),
      );
      if (props.allowCustomText) {
        if (!selectedValue) {
          selectedValue = { name: e.currentTarget.value };
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
                key={`${props.name}_list_${optionName.name}`}
              >
                <button
                  type="button"
                  onClick={onListItemClick}
                  value={optionName.name}
                >
                  {IconUI}
                  {optionName.name}
                </button>
              </li>
            );
          })}
        </ul>
      );
    }
  }

  return (
    <React.Fragment>
      <div className={cx('inputWrapper', 'autocomplete')} ref={ref}>
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
            type="text"
            value={autoComplete.userInput}
            onChange={onTextBoxChange}
            onKeyDown={onTextBoxKeydown}
            onClick={onTextBoxClick}
          />
          {props.clearable && props.value.length > 0 && (
            <span className="input-right-Icon cursor-pointer">
              {<MdCancel />}
            </span>
          )}
        </div>
        <div className="optionsList">{optionsList}</div>

        {meta.error && meta.touched && (
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
  options: PropTypes.arrayOf(
    PropTypes.oneOf([PropTypes.string, PropTypes.object]),
  ).isRequired,
  showDefaultOptions: PropTypes.bool,
  allowMultiselect: PropTypes.bool,
  allowCustomText: PropTypes.bool,
  allowIconsOnOptionList: PropTypes.bool,
  updateValues: PropTypes.func,
  hidden: PropTypes.bool,
  allowIconsInOptionList: PropTypes.bool,
};

export default memo(AutocompleteInput);
