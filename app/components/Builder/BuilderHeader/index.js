/**
 *
 * BuilderHeader
 *
 */

import React, { memo, useEffect, useState } from 'react';
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
import { setModalContent } from 'containers/MyContent/actions';
import Toast from 'components/Toast';
import { toggleSidebar } from '../../../containers/Builder/actions';
import Button from '../../Button';
import './progress.css';
import './style.scss';

function BuilderHeader({ dispatch, isHeaderMenuOpen }) {
  const [toastList, setToastList] = useState([]);

  useEffect(() => {
    np.configure({
      showSpinner: false,
      easing: 'ease',
    });
    // np.start({});
  }, []);

  // toast test
  const toastProperties = {
    id: 1,
    title: 'Warning',
    description: 'This is a warning toast component',
    backgroundColor: '#f0ad4e',
    icon: <GoThreeBars />,
  };
  const list = [toastProperties];
  let toast = null;
  toast = (
    <div>
      <Toast
        toastList={toastList}
        position="bottom-left"
        autoDelete
        dismissTime={2000}
      />
    </div>
  );
  const displayToast = () => {
    console.log("called diplay")
    setToastList([...toastList, toastProperties]);
  };

  // end toast test

  return (
    <div className="header-container flex bg-white border-b border-gray-200 inset-x-0 z-100 h-16 items-center shadow-lg">
      <Button
        handleRoute
        iconButton
        circular
        type=""
        onClick={() => dispatch(toggleSidebar())}
      >
        <GoThreeBars size={22} />
      </Button>
      <div className={cx('deviceContainer')} />
      <div className="panel__top">
        <div className="panel__basic-actions" />
      </div>
      <div className={cx('actionContainer')}>
        <div className={cx('publishButton')}>
          <Button>Preview</Button>
        </div>
        <div className={cx('publishButton')}>
          <Button onClick={() => displayToast()}>Save</Button>
        </div>
        {toast}
        <div className={cx('publishButton')}>
          <Button onClick={() => dispatch(setModalContent('publish'))}>
            Publish
          </Button>
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
              <li>Login</li>
              <li
                onClick={() => {
                  dispatch(toggleHeaderUserMenu());
                  dispatch(setModalContent('setting'));
                }}
              >
                Settings
              </li>
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
