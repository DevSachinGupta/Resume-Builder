/**
 *
 * Radio
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useField, Field } from 'formik';
import { MdCancel } from 'react-icons/md';
import './style.scss';

function Radio(props) {
  let validateField = true;
  if (
    (props.hidden !== undefined && props.hidden === true) ||
    (props.disabled !== undefined && props.disabled === true)
  ) {
    validateField = false;
  }
  const [field, meta, helpers] = useField({
    name: props.name,
    validate: async value => {
      const val = await props.validate(value).catch(err => err);
      return validateField ? val : null;
    },
  });

  const handleClearField = () => {
    helpers.setValue('');
  };

  const handleUpdateValue = e => {
    helpers.setValue(e.target.value);
  };

  return (
    <Field
      name={props.name}
      render={() => (
        <div className={cx('inputWrapper')}>
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

            <>
              {props.values.map(item => (
                <label key={`radio-${item}`} className="radio">
                  <input
                    type="radio"
                    // {...field}
                    name={`radio-${props.name}`}
                    value={item}
                    checked={field.value === item}
                    onChange={handleUpdateValue}
                  />
                  <span className="radio-label">{item}</span>
                </label>
              ))}
            </>

            {props.clearable && props.values.length > 0 && (
              <span className="input-right-Icon cursor-pointer">
                {<MdCancel onClick={handleClearField} />}
              </span>
            )}
          </div>
          {validateField && meta.error && meta.touched && (
            <div
              className={cx('hint', { error_hint: meta.error && meta.touched })}
            >
              {meta.error && meta.error.message}
            </div>
          )}
        </div>
      )}
    />
  );
}
Radio.defaultProps = {};

Radio.propTypes = {
  // type: PropTypes.string,
  // onChange: PropTypes.func,
  fullWidth: PropTypes.bool,
  inputIcon: PropTypes.node,
  label: PropTypes.string,
  name: PropTypes.string,
  hidden: PropTypes.bool,
  disabled: PropTypes.bool,
  clearable: PropTypes.bool,
  validate: PropTypes.func.isRequired,
  values: PropTypes.array,
};

export default memo(Radio);
