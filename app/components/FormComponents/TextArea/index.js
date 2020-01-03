import React, { memo } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import './style.scss';

function TextArea(props) {
  return (
    <div className={cx('textAreaWrapper')}>
      <div className="label">{props.label}</div>
      <div
        className={cx('textAreaContainer', {
          error: props.error,
        })}
      >
        <textarea className={cx('')} {...props} />
      </div>
      <div className={cx('hint', { error_hint: props.error })}>
        {props.error && props.error}
      </div>
    </div>
  );
}
TextArea.propTypes = {
  error: PropTypes.bool.isRequired,
};
export default memo(TextArea);
