/**
 *
 * MultiselectAutocomplete
 *
 */

import React, { memo, useState } from 'react';
import cx from 'classnames';
import { useField } from 'formik';
import { FaTimes } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import PropTypes from 'prop-types';
import './style.scss';

function MultiselectAutocomplete(props) {
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
  });

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
    setMultiselect(updatedAutocomplete);
  };

  const onClick = e => {
    const updatedAutocomplete = { ...multiselect };
    updatedAutocomplete.showOptions = false;
    const { filteredOptions } = updatedAutocomplete;
    updatedAutocomplete.activeOption = -1;
    filteredOptions.map((optionName, index) => {
      // filteredOptions = filteredOptions.filter(_value => _value !== optionName);
      if (optionName.name == e.currentTarget.innerText) {
        updatedAutocomplete.userData = [...userData, optionName];
      }
    });
    updatedAutocomplete.filteredOptions = [];
    updatedAutocomplete.userInput = '';
    setMultiselect(updatedAutocomplete);
  };

  const onChange = e => {
    const { options } = props;
    const userInput = e.currentTarget.value;
    let filteredOptions = options.filter(
      optionName =>
        optionName.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
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
    console.log('activeoption: ', activeOption);
    if (e.keyCode === 13 || e.keyCode === 188) {
      const userFilterLower = filteredOptions.map(a => a.name.toLowerCase());
      if (userFilterLower.indexOf(e.target.value.toLowerCase()) >= 0) {
        console.log('case 0');
        if (activeOption != -1) {
          e.preventDefault();
          console.log('case 1');
          const updatedAutocomplete = { ...multiselect };
          updatedAutocomplete.activeOption = -1;
          updatedAutocomplete.showOptions = false;
          updatedAutocomplete.userInput = '';
          updatedAutocomplete.filteredOptions = [];
          updatedAutocomplete.userData = [
            ...userData,
            filteredOptions[activeOption],
          ];

          setMultiselect(updatedAutocomplete);
        } else {
          e.preventDefault();
          console.log('case 2');
          const updatedAutocomplete = { ...multiselect };
          updatedAutocomplete.activeOption = -1;
          updatedAutocomplete.showOptions = false;
          updatedAutocomplete.userInput = '';
          updatedAutocomplete.filteredOptions = [];
          updatedAutocomplete.userData = [
            ...userData,
            filteredOptions[
              userFilterLower.indexOf(e.target.value.toLowerCase())
            ],
          ];
          setMultiselect(updatedAutocomplete);
        }
      } else if (activeOption != -1) {
        console.log('case 3');
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
        setMultiselect(updatedAutocomplete);
      } else if (activeOption == -1) {
        console.log('case 4');
        const userDataLower = userData.map(a => a.name.toLowerCase());
        if (userDataLower.indexOf(e.target.value.toLowerCase()) >= 0) {
          e.preventDefault();
          console.log('case 5');
          const updatedAutocomplete = { ...multiselect };
          updatedAutocomplete.activeOption = -1;
          updatedAutocomplete.showOptions = false;
          updatedAutocomplete.userInput = '';
          updatedAutocomplete.filteredOptions = [];
          updatedAutocomplete.userData = [...userData];
          setMultiselect(updatedAutocomplete);
        }
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
  const { activeOption, filteredOptions, showOptions, userInput, userData } = {
    ...multiselect,
  };
  // console.log("prop:", props);
  // if (props.showDefaultOptions === true) {
  //   optionList = (
  //     <ul className="options">
  //       {props.options.map((optionName, index) => {
  //         let className;
  //         if (index === activeOption) {
  //           className = 'option-active';
  //         }
  //         return (
  //           <li className={className} key={optionName} onClick={onClick}>
  //             <div className="inline-block mb-1 rounded-full bg-gray-300 pr-5 h-8 line-height-username1">
  //               <img
  //                 className="rounded-full float-left h-full"
  //                 src="https://randomuser.me/api/portraits/women/34.jpg"
  //               />
  //               <span className="ml-3">{optionName}</span>
  //             </div>
  //             {/* {typeof optionName === 'string'
  //               ? optionName
  //               : optionName.icon + optionName.label} */}
  //           </li>
  //         );
  //       })}
  //     </ul>
  //   );
  // }
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
              <li className={className} key={optionName.name} onClick={onClick}>
                <div className="inline-block mb-1 rounded-full bg-gray-200 pr-5 h-8 line-height-username1">
                  <span className="rounded-full p-1 float-left h-full">
                    {optionName.icon}
                  </span>

                  <span className="ml-3">{optionName.name}</span>
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
      <label className="tags">
        <div className="inline-block mb-1 rounded-full bg-gray-200 pr-5 h-8 line-height-username1">
          <span className="rounded-full p-1 float-left h-full">
            {item.icon}
          </span>
          <span className="ml-3">{item.name}</span>
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

        <div className="multiselectDiv">{showUserData}</div>

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
  showDefaultOptions: false,
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
  showDefaultOptions: PropTypes.bool,
};

export default memo(MultiselectAutocomplete);
