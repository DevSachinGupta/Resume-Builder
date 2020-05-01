/**
 *
 * CardList
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function CardList() {
  return (
    <div>
      <div className="pb-6">
        <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
          <div
            className="w-1/3 bg-cover"
            style={{"background-image": "url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')"}}
          />
          <div className="w-2/3 p-4">
            <h1 className="text-gray-900 font-bold text-2xl">Template 1</h1>
            <p className="mt-2 text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia
            </p>
            <div className="flex item-center mt-2">
              <span className="star ml-1 text-xl activeStar">&#9733;</span>
              <span className="star ml-1 text-xl activeStar">&#9733;</span>
              <span className="star ml-1 text-xl ">&#9733;</span>
              <span className="star ml-1 text-xl ">&#9733;</span>
              <span className="star ml-1 text-xl ">&#9733;</span>
            </div>
            <div className="flex item-center justify-between mt-3">
              <h1 className="text-gray-700 font-bold text-xl">Free</h1>
              <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-6">
        <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
          <div
            className="w-1/3 bg-cover"
            style={{"background-image": "url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')"}}
          />
          <div className="w-2/3 p-4">
            <h1 className="text-gray-900 font-bold text-2xl">Template 2</h1>
            <p className="mt-2 text-gray-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia
            </p>
            <div className="flex item-center mt-2">
              <span className="star ml-1 text-xl activeStar">&#9733;</span>
              <span className="star ml-1 text-xl activeStar">&#9733;</span>
              <span className="star ml-1 text-xl activeStar">&#9733;</span>
              <span className="star ml-1 text-xl ">&#9733;</span>
              <span className="star ml-1 text-xl ">&#9733;</span>
            </div>
            <div className="flex item-center justify-between mt-3">
              <h1 className="text-gray-700 font-bold text-xl">150 INR</h1>
              <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CardList.propTypes = {};

export default memo(CardList);
