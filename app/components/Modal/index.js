/**
 *
 * Modal
 *
 */

import React, { memo } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { toggleModal } from 'containers/App/actions';
import './style.scss';

function Modal(props) {
  return (
    <div className={cx('modalWrapper')}>
      <div className={cx('modalContainer', 'shadow-lg', 'rounded')}>
        <div className={cx('modalHeader')}>
          {props.heading && (
            <div className={cx('modalHeading')}>props.heading</div>
          )}
          <div className={cx('actionContainer')}>
            {props.actions && props.actions.map(action => action)}
            {props.closable && (
              <div className={cx('closeButton')}>
                <FaTimes onClick={() => props.dispatch(toggleModal())} />
              </div>
            )}
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
}
Modal.defaultProps = {
  closable: true,
};
Modal.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node.isRequired,
  closable: PropTypes.bool,
  actions: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
};
const withConnect = connect(
  null,
  null,
);
const withCompose = compose(
  withConnect,
  memo,
);
export default withCompose(Modal);
