/**
 *
 * Input
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.scss';

function Input(props) {
  return (
    <React.Fragment>
      <div className={cx('inputContainer', { fullWidth: !props.fullWidth })}>
        {props.inputIcon && (
          <span className="inputIcon">{props.inputIcon}</span>
        )}
        <input {...props} onChange={props.onChange} />
      </div>
    </React.Fragment>
  );
}
Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  fullWidth: PropTypes.bool.isRequired,
  inputIcon: PropTypes.node.isRequired,
};

export default memo(Input);
