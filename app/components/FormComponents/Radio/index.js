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
  if (props.hidden != undefined && props.hidden == true) {
    validateField = false;
  }
  const [field, meta, helpers] = useField({
    name: props.name,
    validate: async value => {
      const val = await props.validate(value).catch(err => err);
      return validateField ? val : null;
    },
  });
  const handleUpdateValue = e => {
    helpers.setValue(e.target.value);
    // props.afterReset(null);
  };
  console.log('hidden: ', props.name, meta);

  return (
    <Field
      name={props.name}
      render={() => (
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

            <>
              {props.values.map((item, idx) => (
                <label className="radio">
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

            {props.clearable && props.value.length > 0 && (
              <span className="input-right-Icon cursor-pointer">
                {<MdCancel />}
              </span>
            )}
          </div>
          {meta.error && meta.touched && (
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

Radio.propTypes = {
  clearable: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  inputIcon: PropTypes.node.isRequired,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  error: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  values: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
};

export default memo(Radio);
