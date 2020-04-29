/**
 *
 * ListFooter
 *
 */

import React, { memo } from 'react';
import { FaUserCircle } from 'react-icons/fa';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ListFooter() {
  return (
    <div className="flex justify-end items-center">
      <div className="justify-between text-md flex text-right">
        <div className="ml-4 my-auto ">
          <span className="">Row per page:</span>
        </div>
        <div className="ml-4 my-auto">
          {/* TODO: Dropdown for page */}
          <span className="">6 ></span>
        </div>
        <div className="ml-4 my-auto">
          <span className="">1</span>
          <span className="">-</span>
          <span className="mr-2">6</span>
          <span className="mr-2">of</span>
          <span className="mr-2">24</span>
        </div>
        <div className="p-3 rounded-full  hover:bg-gray-100">
          <button className="w-5 h-5">
            &lt;
          </button>
        </div>
        <div className="p-3 rounded-full  hover:bg-gray-100">
          <button className="w-5 h-5">
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

ListFooter.propTypes = {};

export default memo(ListFooter);
