import React, { memo } from 'react';
import cx from 'classnames';
import { useField } from 'formik';
import { MdCancel } from 'react-icons/md';
import PropTypes from 'prop-types';
import './style.scss';

function TextArea(props) {
  let validateField = props.allowValidation;
  if (props.disabled) {
    validateField = false;
  }
  const [field, meta, helpers] = useField({
    name: props.name,
    validate: async value => {
      const val = validateField
        ? await props.validate(value).catch(err => err)
        : null;
      return val;
    },
  });

  const handleClearField = () => {
    helpers.setValue('');
  };

  const { clearable, validate, allowValidation, inputIcon, ...rest } = props;
  return (
    <div className={cx('textAreaWrapper')}>
      <div className="label">{props.label}</div>
      <div
        className={cx('textAreaContainer', {
          fullWidth: props.fullWidth,
          error: validateField && meta.error && meta.touched,
        })}
      >
        {props.inputIcon && (
          <span className="inputIcon">{props.inputIcon}</span>
        )}
        <textarea {...field} {...rest} />
        {props.clearable && (
          <span className="input-right-Icon cursor-pointer">
            {<MdCancel onClick={handleClearField} />}
          </span>
        )}
      </div>
      {validateField && meta.error && meta.touched && (
        <div className={cx('hint', { error_hint: meta.error && meta.touched })}>
          {meta.error && meta.error.message}
        </div>
      )}
    </div>
  );
}

TextArea.defaultProps = {
  allowValidation: true,
};

TextArea.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  fullWidth: PropTypes.bool,
  inputIcon: PropTypes.node,
  label: PropTypes.string,
  name: PropTypes.string,
  hidden: PropTypes.bool,
  disabled: PropTypes.bool,
  clearable: PropTypes.bool,
  validate: PropTypes.func.isRequired,
  allowValidation: PropTypes.bool,
};
export default memo(TextArea);
