/**
 *
 * DashboardHeader
 *
 */

import React, { memo, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import cx from 'classnames';
import { useToasts } from 'react-toast-notifications';
import { getUserLogout } from '../../containers/Authenticate/actions';
import './style.scss';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function DashboardHeader(props) {
  const { user, userData } = props;
  const [isHeaderMenuOpen, toggleHeaderUserMenu] = useState(false);
  const { addToast } = useToasts();
  const ref = useRef(null);
  const handleGlobalClickForHeader = e => {
    console.log('set header', e.target, ref.current);
    if (ref.current && !ref.current.contains(e.target)) {
      toggleHeaderUserMenu(!isHeaderMenuOpen);
    }
  };
  // useEffect(() => {
  //   document.addEventListener('mousedown', handleGlobalClickForHeader, true);
  //   return function cleanup() {
  //     document.removeEventListener(
  //       'mousedown',
  //       handleGlobalClickForHeader,
  //       false,
  //     );
  //   };
  // }, []);
  console.log('userData 1', userData);
  console.log('user', user);
  return (
    <div className="bg-white text-black shadow-lg mb-6">
      <div className="container mx-auto px-8">
        <div className="flex items-center py-2 px-10">
          <div className="w-3/4 flex items-center">
            <div>
              <FaUserCircle size={32} className="bg-white rounded-full" />
            </div>
            <div className="ml-4">
              <div className="text-sm flex items-center my-auto">
                <div>
                  <Link to="/dashboard" className="no-underline  pr-3">
                    Projects
                  </Link>
                </div>
                <div>
                  <Link to="settings" className="no-underline  pr-3">
                    Settings
                  </Link>
                </div>
                <div>
                  <a
                    href="https://spectrum.chat/"
                    target="_blank"
                    className="no-underline  pr-3"
                  >
                    Docs
                  </a>
                </div>
                <div>
                  <a
                    href="https://spectrum.chat/"
                    target="_blank"
                    className="no-underline  pr-3"
                  >
                    Community
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4 text-right flex items-center justify-end">
            <div className="flex items-center">
              {!user && (
                <div className="mr-3">
                  <a href="#" className="no-underline  pr-3">
                    Login
                  </a>
                </div>
              )}
              {!user && (
                <div className="mr-3">
                  <a href="#" className="no-underline  pr-3">
                    Signup
                  </a>
                </div>
              )}
              {user && (
                <div
                  className="inline-flex"
                  onClick={() => toggleHeaderUserMenu(!isHeaderMenuOpen)}
                >
                  <div className="">
                    <span className="no-underline whitespace-no-wrap ">{`${
                      userData.firstName
                    } ${userData.lastName}`}</span>
                  </div>
                  <div className={cx('navAccountPill')}>
                    {props.userData.userProfileUrl ? (
                      <img
                        className="rounded-full"
                        src={props.userData.userProfileUrl}
                        width="25"
                        height="25"
                        alt=""
                      />
                    ) : (
                      <FaUserCircle
                        size={24}
                        className="bg-white rounded-full"
                      />
                    )}
                    <div
                      className={cx(
                        'accountMenu',
                        'bg-white',
                        'rounded',
                        'shadow',
                        {
                          hideMenu: !isHeaderMenuOpen,
                        },
                      )}
                    >
                      <ul className="text-left">
                        <li
                          onClick={() => {
                            console.log("dispatch header:", props.dispatch, getUserLogout)
                            props.dispatch(getUserLogout(addToast));
                            toggleHeaderUserMenu(!isHeaderMenuOpen);
                          }}
                        >
                          Logout
                        </li>
                        <Link to="settings" className="no-underline">
                          <li>Profile</li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

DashboardHeader.propTypes = {};

export default memo(DashboardHeader);
