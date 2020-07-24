/**
 *
 * Footer
 *
 */

import React, { memo } from 'react';
import { FaUserCircle } from 'react-icons/fa';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Footer() {
  return (
    <div className="flex items-center justify-between border-t py-8">
      <div className="justify-start justify-between text-xs w-2/5 flex">
        <div className="mr-4">&copy; 2020 Netcv, Inc.</div>
        <div className="mr-4">
          <a href="#" className="no-underline">
            Terms
          </a>
        </div>
        <div className="mr-4">
          <a href="#" className="no-underline">
            Privacy
          </a>
        </div>
        <div className="mr-4">
          <a href="#" className="no-underline">
            Security
          </a>
        </div>
        <div className="mr-4">
          <a href="#" className="no-underline">
            Help
          </a>
        </div>
      </div>
      <div className="justify-center w-1/5 items-center text-center">
        <FaUserCircle size={32} class="bg-white rounded-full mx-auto " />
      </div>
      <div className="justify-end justify-between text-xs w-2/5 flex text-right">
        <div className="ml-4">
          <a href="#" className="no-underline">
            Contact Netcv
          </a>
        </div>
        <div className="ml-4">
          <a href="#" className="no-underline">
            Setting
          </a>
        </div>
        <div className="ml-4">
          <a href="#" className="no-underline">
            Docs
          </a>
        </div>
        <div className="ml-4">
          <a href="#" className="no-underline">
            Community
          </a>
        </div>
        <div className="ml-4">
          <a href="#" className="no-underline">
            About
          </a>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {};

export default memo(Footer);
