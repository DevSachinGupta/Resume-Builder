/**
 *
 * MainBlock
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function MainBlock() {
  return (
    <div>
      <div className="pt-20 bg-gray-200 md:overflow-hidden">
        <div className="flex flex-wrap flex-col md:flex-row px-4 py-16">
          <div className="relative w-full md:max-w-2xl md:mx-auto text-center">
            <h1 className="font-bold text-gray-700 text-xl sm:text-2xl md:text-5xl leading-tight mb-6">
              Design Your Resume
            </h1>

            <p className="text-gray-600 md:text-xl md:px-18">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit hello.
            </p>
            <div className="pt-6">
              <a
                href="#"
                className="inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gray-100 "
              >
                Start a free trial
              </a>
              <p className="pt-2 text-gray-500 md:text-xs md:px-18">
                Easy to use - Responsive
              </p>
            </div>
            <div className="hidden md:block h-40 w-40 rounded-full bg-blue-800 absolute right-0 bottom-0 -mb-64 -mr-48" />

            <div className="hidden md:block h-5 w-5 rounded-full bg-yellow-500 absolute top-0 right-0 -mr-40 mt-32" />
          </div>
        </div>

        <svg
          className="fill-current bg-gray-200 text-white hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fillOpacity="1"
            d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          />
        </svg>
        <div className="icon-effects-temps-amkl">
          <img
            src={require('./images/shape1.png')}
            alt=""
            className="max-w-full h-auto shape-amk-tems shape-temps-amk-one"
          />
          <img
            src={require('./images/shape2.png')}
            alt=""
            className="max-w-full h-auto shape-amk-tems shape-temps-amk-two"
          />
          <img
            src={require('./images/shape3.png')}
            alt=""
            className="max-w-full h-auto shape-amk-tems shape-temps-amk-three"
          />
          <img
            src={require('./images/shape5.png')}
            alt=""
            className="max-w-full h-auto shape-amk-tems shape-temps-amk-four"
          />
          <img
            src={require('./images/shape4.png')}
            alt=""
            className="max-w-full h-auto shape-amk-tems shape-temps-amk-five"
          />
          <img
            src={require('./images/shape6.png')}
            alt=""
            className="max-w-full h-auto shape-amk-tems shape-temps-amk-six"
          />
        </div>
      </div>
      <div
        className="max-w-4xl mx-auto bg-white shadow-lg relative z-20 hidden md:block"
        style={{ 'margin-top': '-320px', 'border-radius': '20px' }}
      />
        <img
            src={require('./images/ScreenViews.png')}
            alt=""
            className="max-w-full h-auto mx-auto justify-center"
          />
    </div>
  );
}

MainBlock.propTypes = {};

export default memo(MainBlock);
