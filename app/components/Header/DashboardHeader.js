/**
 *
 * DashboardHeader
 *
 */

import React, { memo, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaRegUser } from 'react-icons/fa';
import { IoIosPower } from 'react-icons/io';
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
    if (ref.current && !ref.current.contains(e.target)) {
      toggleHeaderUserMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleGlobalClickForHeader, true);
    return function cleanup() {
      document.removeEventListener(
        'mousedown',
        handleGlobalClickForHeader,
        false,
      );
    };
  }, []);
  console.log('userData 1', userData);
  console.log('user', user);
  return (
    <div className="bg-white text-black shadow-lg mb-6 w-full">
      <div className="container mx-auto px-8">
        <div className="w-full flex items-center py-2 px-10">
          <div className="w-3/4 flex items-center">
            <div>
              <FaUserCircle size={32} className="bg-white rounded-full" />
            </div>
            <div className="ml-4">
              <div className="text-sm flex items-center my-auto">
                <div>
                  {props.activeLink === 'dashboard' ? (
                    <Link to="/dashboard" className="no-underline  pr-3 activeLink">
                      Dashboard
                    </Link>
                  ) : (
                    <Link to="/dashboard" className="no-underline  pr-3">
                      Dashboard
                    </Link>
                  )}
                </div>
                <div>
                  {props.activeLink === 'settings' ? (
                    <Link to="/settings" className="no-underline  pr-3 activeLink">
                      Settings
                    </Link>
                  ) : (
                    <Link to="/settings" className="no-underline  pr-3">
                      Settings
                    </Link>
                  )}
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
                  className="inline-flex items-center cursor-pointer"
                  onClick={() => toggleHeaderUserMenu(!isHeaderMenuOpen)}
                >
                  <div className="">
                    <span className="no-underline whitespace-no-wrap pr-2">{`${
                      userData.firstName
                    } ${userData.lastName}`}</span>
                  </div>
                  <div className={cx('navAccountPill')} ref={ref}>
                    {props.userData.settings.profileImageUrl ? (
                      <img
                        className="rounded-full max-w-6xl max-w-none"
                        // src="https://lh3.googleusercontent.com/-biPvuIkz-PE/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnj_WXp169yeuyw2n9nG3_RZFdiGg/s50/photo.jpg"
                        src={props.userData.settings.profileImageUrl}
                        width="30"
                        height="30"
                        alt=""
                      />
                    ) : (
                      <FaUserCircle size={24} class="bg-white rounded-full" />
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
                        <Link to="/settings" className="no-underline">
                          <li>
                            <div className="flex flex-row text-center">
                              <FaRegUser className="w-auto my-auto pr-2 font-light" />{' '}
                              Profile
                            </div>
                          </li>
                        </Link>
                        <li
                          onClick={() => {
                            console.log(
                              'dispatch header:',
                              props.dispatch,
                              getUserLogout,
                            );
                            props.dispatch(getUserLogout(addToast));
                            toggleHeaderUserMenu(!isHeaderMenuOpen);
                          }}
                        >
                          <div className="flex flex-row text-center">
                            <IoIosPower className="w-auto my-auto pr-2" />{' '}
                            Logout
                          </div>
                        </li>
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
