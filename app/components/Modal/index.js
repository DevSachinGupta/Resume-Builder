/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
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
import { createStructuredSelector } from 'reselect';
import { makeSelectIsModalOpen } from 'containers/App/selectors';
import { toggleModal } from 'containers/App/actions';
import './style.scss';

function Modal(props) {
  const { isModalOpen, heading, loading } = props;
  return (
    isModalOpen && (
      <div className={cx('modalWrapper')}>
        <div className={cx('modalContainer', 'shadow-lg', 'rounded')}>
          <div className={cx('modalHeader')}>
            <div className={cx('modalHeading')}>{heading && heading}</div>
            <div className={cx('actionContainer')}>
              {props.actions && props.actions.map(action => action)}
              {props.closable && (
                <div
                  className={cx('closeButton')}
                  onClick={() => props.dispatch(toggleModal())}
                >
                  <FaTimes />
                </div>
              )}
            </div>
          </div>
          {props.children}
          <div className={cx('footerContainer')}>{props.footer}</div>
        </div>
      </div>
    )
  );
}
Modal.defaultProps = {
  closable: true,
  loading: true,
};
Modal.propTypes = {
  heading: PropTypes.node,
  children: PropTypes.node.isRequired,
  closable: PropTypes.bool,
  actions: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  footer: PropTypes.node,
  loading: PropTypes.bool,
};
const withConnect = connect(
  createStructuredSelector({
    isModalOpen: makeSelectIsModalOpen(),
  }),
  null,
);
const withCompose = compose(
  withConnect,
  memo,
);
export default withCompose(Modal);
