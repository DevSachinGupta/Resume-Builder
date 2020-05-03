/**
 *
 * StepsBlock
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function StepsBlock() {
  return (
    <section className="bg-gray-200 border-b py-8 mt-2">
      <div className="container mx-auto flex flex-wrap pt-4 pb-4">
        <div className="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 pl-32">
            <h3 className="font-bold text-gray-700 text-md sm:text-xl md:text-3xl leading-tight mb-6 content-center">
              Get your Resume in 3 Simple Steps.
            </h3>

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
          </div>
        </div>

        <div className="w-full md:w-1/2 p-6 md: flex flex-col flex-grow flex-shrink">
          <div className="pr-32 my-auto">
            <div className="flex p-4 mb-4 bg-white border border-gray-400 overflow-hidden shadow-lg">
              <div className="w-1/5 text-blue-400 text-xl sm:text-2xl md:text-4xl">#1</div>
              <div className="w-4/5 my-auto text-md sm:text-xl md:text-2xl">Select your Template design.</div>
            </div>
            <div className="flex p-4 mb-4 bg-white border border-gray-400 overflow-hidden shadow-lg">
              <div className="w-1/5 text-blue-400 text-xl sm:text-2xl md:text-4xl">#2</div>
              <div className="w-4/5 my-auto text-md sm:text-xl md:text-2xl">Fill your Data.</div>
            </div>
            <div className="flex p-4 mb-4 bg-white border border-gray-400 overflow-hidden shadow-lg">
              <div className="w-1/5 text-blue-400 text-xl sm:text-2xl md:text-4xl">#3</div>
              <div className="w-4/5 my-auto text-md sm:text-xl md:text-2xl">Publish you Resume.</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

StepsBlock.propTypes = {};

export default memo(StepsBlock);
