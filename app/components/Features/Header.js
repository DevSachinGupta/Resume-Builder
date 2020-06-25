/**
 *
 * Header
 *
 */

import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import cx from 'classnames';
import { getUserLogout } from '../../containers/Authenticate/actions';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Header(props) {
  const { user, userData } = props;
  const [isHeaderMenuOpen, toggleHeaderUserMenu] = useState(false);
  console.log('userData', userData);
  console.log('user', user);
  return (
    <div className="bg-white text-black shadow-lg mb-6">
      <div className="container mx-auto px-8">
        <div className="flex items-center py-2 px-10">
          <div className="w-3/4 flex items-center">
            <div>
              <FaUserCircle size={32} class="bg-white rounded-full" />
            </div>
            <div className="ml-4">
              <div className="text-sm flex items-center my-auto">
                <div>
                  <Link to="features" className="no-underline  pr-3">
                    Templates
                  </Link>
                </div>
                <div>
                  <Link to="settings" className="no-underline  pr-3">
                    Settings
                  </Link>
                </div>
                <div>
                  <a href="#" className="no-underline  pr-3">
                    Docs
                  </a>
                </div>
                <div>
                  <a href="#" className="no-underline  pr-3">
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
                    <span className="no-underline">{userData.username}</span>
                  </div>
                  <div className={cx('navAccountPill')}>
                    {props.userData.userProfileUrl ? (
                      <img
                        className="rounded-full"
                        // src="https://lh3.googleusercontent.com/-biPvuIkz-PE/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnj_WXp169yeuyw2n9nG3_RZFdiGg/s50/photo.jpg"
                        src={props.userData.userProfileUrl}
                        width="25"
                        height="25"
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
                      <ul>
                        <li
                          onClick={() => {
                            props.dispatch(getUserLogout());
                            toggleHeaderUserMenu(!isHeaderMenuOpen);
                          }}
                        >
                          Logout
                        </li>
                        <li
                          onClick={() => {
                            toggleHeaderUserMenu(!isHeaderMenuOpen);
                            props.dispatch(setModalContent('setting'));
                          }}
                        >
                          Profile
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
              {/* {user && (
                <button>
                  <div className="text-sm flex items-center">
                    <div>
                      <span className="no-underline">{userData.username}</span>
                    </div>
                    <div>
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
                      </svg>
                    </div>
                  </div>
                </button>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default memo(Header);
