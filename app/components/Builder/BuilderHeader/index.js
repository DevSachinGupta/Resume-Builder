/**
 *
 * BuilderHeader
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import cx from 'classnames';
import np from 'nprogress';
import { createStructuredSelector } from 'reselect';
import { GoThreeBars } from 'react-icons/go';
import { FaUserCircle } from 'react-icons/fa';
import { toggleHeaderUserMenu } from 'containers/App/actions';
import { makeSelectIsUserMenuOpen } from 'containers/App/selectors';
import Button from '../../Button';
import { toggleSidebar } from '../../../containers/Builder/actions';
import './progress.css';
import './style.scss';

function BuilderHeader({ dispatch, isHeaderMenuOpen }) {
  useEffect(() => {
    np.configure({
      showSpinner: false,
      easing: 'ease',
    });
    // np.start({});
  }, []);
  return (
    <div className="header-container flex bg-white border-b border-gray-200 inset-x-0 z-100 h-16 items-center shadow-lg">
      <Button
        handleRoute
        iconButton
        circular
        onClick={() => dispatch(toggleSidebar())}
      >
        <GoThreeBars size={22} />
      </Button>
      <div className={cx('actionContainer')}>
        <div className={cx('publishButton')}>
          <Button>Publish</Button>
        </div>
        <div className={cx('navAccountPill')}>
          <FaUserCircle
            onClick={() => dispatch(toggleHeaderUserMenu())}
            size={24}
          />
          <div
            className={cx('accountMenu', 'bg-white', 'rounded', 'shadow', {
              hideMenu: !isHeaderMenuOpen,
            })}
          >
            <ul>
              <li>MENU 1</li>
              <li>MENU 2</li>
              <li>MENU 3</li>
              <li>MENU 4</li>
              <li>MENU 5</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

BuilderHeader.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isHeaderMenuOpen: PropTypes.bool.isRequired,
};
const withConnect = connect(
  createStructuredSelector({
    isHeaderMenuOpen: makeSelectIsUserMenuOpen(),
  }),
  null,
);
export default compose(
  withConnect,
  memo,
)(BuilderHeader);
