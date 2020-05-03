/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Header() {
  return (
    <nav id="header" className="fixed w-full z-30 top-0 ">
      <div className="bg-gray-200">
        <div className="w-full container md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between mt-0 py-2">
          <div class="pl-4 flex items-center">
            <a href="#" class="inline-block py-2 text-gray-800 text-2xl font-bold">NetCV.</a >
          </div>

          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              className="flex items-center p-1 text-orange-800 hover:text-gray-900"
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div
            className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
            id="nav-content"
          >
            <ul className="list-reset lg:flex justify-center flex-1 items-center">
              <li className="mr-3">
                <a
                  className="inline-block py-2 px-4 text-gray-600  hover:font-bold no-underline"
                  href="#"
                >
                  How it Works
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block py-2 px-4 text-gray-600  hover:font-bold no-underline"
                  href="#"
                >
                  Solutions
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block py-2 px-4 text-gray-600  hover:font-bold no-underline"
                  href="#"
                >
                  Pricing
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block py-2 px-4 text-gray-600  hover:font-bold no-underline"
                  href="#"
                >
                  Desktop
                </a>
              </li>

            </ul>
            <div id="navAction" >
             <a
                href="login"
                class="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-600 mr-6"
                >Login</a
              >
              <a
                href="signup"
                class="inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gray-100 rounded-lg"
                >Start a free trial</a
              >
            </div>
          </div>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
}

Header.propTypes = {};

export default memo(Header);
