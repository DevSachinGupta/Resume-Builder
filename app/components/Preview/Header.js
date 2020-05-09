/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import { FaUserCircle, FaMobileAlt } from 'react-icons/fa';
import { IoIosDesktop, IoIosTabletPortrait } from 'react-icons/io';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Header(props) {
  const userName = 'Jitendra990';
  const userProfilePhoto =
    'http://jitendra003.netcv.site/images/profile_photo.png';
  return (
    <div className="bg-white shadow-lg text-black h-16">
      <div className="container mx-auto px-8">
        <div className="flex items-center py-2 px-10">
          <div className="w-1/4 flex items-center">
            <div>
              <FaUserCircle size={32} class="bg-white rounded-full" />
            </div>
          </div>
          <div className="w-2/4 flex flex-grow text-center">
            <div className="text-sm flex items-center mx-auto">
              This Template is Copyright of NetCV
            </div>
          </div>
          <div className="w-1/4 flex items-center justify-end">
            <button
              type="button"
              className="border-r-2 pr-2"
              onClick={() => {
                props.setPreviewWidth('100%');
              }}
            >
              <IoIosDesktop size={30} class="" />
            </button>
            <button
              type="button"
              className="border-r-2 pr-2 pl-2"
              onClick={() => {
                props.setPreviewWidth('480px');
              }}
            >
              <IoIosTabletPortrait size={30} class=" " />
            </button>
            <button
              type="button"
              className="pl-2"
              onClick={() => {
                props.setPreviewWidth('320px');
              }}
            >
              <FaMobileAlt size={30} class="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  setPreviewWidth: PropTypes.func.isRequired,
};

export default memo(Header);
