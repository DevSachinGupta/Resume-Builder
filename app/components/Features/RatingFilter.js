/**
 *
 * RatingFilter
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function RatingFilter() {
  return (
    <div>
      <div className="w-full mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="bg-white shadow-md rounded-lg px-2 py-2">
              <div className="block text-gray-700 text-lg font-semibold py-2 px-2">
                Rating
              </div>
              <div className="pb-3 text-sm">
                <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 pt-2">
                  <div className="flex-grow font-medium pl-2 text-base RatingFilter">
                    <span className="star ml-1 activeStar">&#9733;</span>
                    <span className="star ml-1 activeStar">&#9733;</span>
                    <span className="star ml-1 activeStar">&#9733;</span>
                    <span className="star ml-1 activeStar">&#9733;</span>
                    <span className="star ml-1 activeStar">&#9733;</span>
                  </div>
                  <div className="text-sm font-normal text-gray-500 tracking-wide px-2 bg-gray-300 rounded-full">
                    Counts
                  </div>
                </div>
                <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 pt-2">
                  <div className="flex-grow font-medium pl-2 text-base RatingFilter">
                    <span className="star ml-1 activeStar">&#9733;</span>
                    <span className="star ml-1 activeStar">&#9733;</span>
                    <span className="star ml-1 activeStar">&#9733;</span>
                    <span className="star ml-1 activeStar">&#9733;</span>
                    <span className="star ml-1 ">&#9733;</span>
                  </div>
                  <div className="text-sm font-normal text-gray-500 tracking-wide px-2 bg-gray-300 rounded-full">
                    Counts
                  </div>
                </div>
                <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 pt-2">
                  <div className="flex-grow font-medium pl-2 text-base RatingFilter">
                    <span className="star ml-1 activeStar">&#9733;</span>
                    <span className="star ml-1 activeStar">&#9733;</span>
                    <span className="star ml-1 activeStar">&#9733;</span>
                    <span className="star ml-1 ">&#9733;</span>
                    <span className="star ml-1 ">&#9733;</span>
                  </div>
                  <div className="text-sm font-normal text-gray-500 tracking-wide px-2 bg-gray-300 rounded-full">
                    Counts
                  </div>
                </div>
                <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 pt-2">
                  <div className="flex-grow font-medium pl-2 text-base RatingFilter">
                    <span className="star ml-1 activeStar">&#9733;</span>
                    <span className="star ml-1 activeStar">&#9733;</span>
                    <span className="star ml-1 ">&#9733;</span>
                    <span className="star ml-1 ">&#9733;</span>
                    <span className="star ml-1 ">&#9733;</span>
                  </div>
                  <div className="text-sm font-normal text-gray-500 tracking-wide px-2 bg-gray-300 rounded-full">
                    Counts
                  </div>
                </div>
                <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 pt-2">
                  <div className="flex-grow font-medium pl-2 text-base RatingFilter">
                    <span className="star ml-1 activeStar">&#9733;</span>
                    <span className="star ml-1 ">&#9733;</span>
                    <span className="star ml-1 ">&#9733;</span>
                    <span className="star ml-1 ">&#9733;</span>
                    <span className="star ml-1 ">&#9733;</span>
                  </div>
                  <div className="text-sm font-normal text-gray-500 tracking-wide px-2 bg-gray-300 rounded-full">
                    Counts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

RatingFilter.propTypes = {};

export default memo(RatingFilter);
