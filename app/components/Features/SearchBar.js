/**
 *
 * SearchBar
 *
 */

import React, { memo } from 'react';
import { GoThreeBars } from 'react-icons/go';
import { FaUserCircle } from 'react-icons/fa';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function SearchBar() {
  return (
    <div className="flex ">
      <div className="w-1/4 items-center">
        <div className="mb-4 mt-2">
          <input
            className="p-2 rounded bg-grey-darkest text-grey-light text-xs w-128"
            type="text"
            name="q"
            placeholder="Search here..."
          />
        </div>
      </div>
      <div className="w-3/4 flex text-center justify-end my-auto">
        <div className="ml-3">
          <FaUserCircle size={22} class="bg-white " />
        </div>
        <div className="ml-2">
          <FaUserCircle size={22} class="bg-white " />
        </div>
      </div>
    </div>
  );
}

SearchBar.propTypes = {};

export default memo(SearchBar);
