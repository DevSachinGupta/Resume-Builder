/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import { FaUserCircle } from 'react-icons/fa';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Header(props) {
  const userName = 'Jitendra990';
  const userProfilePhoto =
    'http://jitendra003.netcv.site/images/profile_photo.png';
  return (
    <div className="bg-black mb-6">
      <div className="container mx-auto px-8">
        <div className="flex items-center py-2 px-10">
          <div className="w-3/4 flex items-center">
            <div>
              <FaUserCircle size={32} class="bg-white rounded-full" />
            </div>
            <div className="ml-4">
              <div className="text-sm flex items-center my-auto">
                <div>
                  <a href="#" className="no-underline text-gray-100 pr-3">
                    Templates
                  </a>
                </div>
                <div>
                  <a href="#" className="no-underline text-gray-100 pr-3">
                    Settings
                  </a>
                </div>
                <div>
                  <a href="#" className="no-underline text-gray-100 pr-3">
                    Docs
                  </a>
                </div>
                <div>
                  <a href="#" className="no-underline text-gray-100 pr-3">
                    Community
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4 text-right flex items-center justify-end">
            <div className="flex items-center">
              <div className="mr-3">
                <img
                  className="h-6 w-6 inline-block rounded-full"
                  src={userProfilePhoto}
                  alt={userName}
                />
              </div>
              <button>
                <div className="text-sm flex items-center">
                  <div>
                    <span className="no-underline text-gray-100">
                      {userName}
                    </span>
                  </div>
                  <div>
                    <svg
                      className="fill-current text-gray-100 h-4 w-4"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default memo(Header);
