/**
 *
 * PricingBlock
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function PricingBlock() {
  return (
    <section className="py-8" id="pricingSection">
      <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
        <div className="w-full mt-2 leading-tight text-black text-center heading">
          <h3>Pricing</h3>
        </div>

        <div className="flex flex-col sm:flex-row px-2 lg:px-16 md:px-16 justify-center pt-4 my-12 sm:my-4">
          
          <div className="flex flex-col relative px-4 w-5/6 lg:w-1/3 mx-auto lg:mx-0 bg-white">
            <div className="flex-1 bg-white m-6 p-6 overflow-hidden hover:shadow-xl border">
              <div className="p-6 border-b text-3xl font-bold text-center">
                Basic
              </div>
              <ul className="w-full text-gray-900  text-center text-md">
                <li className="text-base py-3">Features</li>
                <li className="text-base py-3">Features</li>
                <li className="text-base py-3">Features</li>
              </ul>
              <div className="flex items-center justify-center">
                <div className="p8 text-3xl font-bold text-center">0 INR</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="px-8 py-3 my-5 bg-purple-400 rounded text-md font-bold text-center">
                  Get Started
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col relative px-4 w-5/6 lg:w-1/3 mx-auto lg:mx-0 bg-white">
            <div className="flex-1 bg-white m-6 p-6 overflow-hidden hover:shadow-xl border">
              <div className="p-6 border-b text-3xl font-bold text-center">
                Standard
              </div>
              <ul className="w-full text-gray-900  text-center text-md">
                <li className="text-base py-3">Features</li>
                <li className="text-base py-3">Features</li>
                <li className="text-base py-3">Features</li>
              </ul>
              <div className="flex items-center justify-center">
                <div className="p8 text-3xl font-bold text-center">150 INR</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="px-8 py-3 my-5 bg-purple-400 rounded text-md font-bold text-center">
                  Get Started
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col relative px-4 w-5/6 lg:w-1/3 mx-auto lg:mx-0 bg-white">
            <div className="flex-1 bg-white m-6 p-6 overflow-hidden hover:shadow-xl border">
              <div className="p-6 border-b text-3xl font-bold text-center">
                Premium
              </div>
              <ul className="w-full text-gray-900  text-center text-md">
                <li className="text-base py-3">Features</li>
                <li className="text-base py-3">Features</li>
                <li className="text-base py-3">Features</li>
              </ul>
              <div className="flex items-center justify-center">
                <div className="p8 text-3xl font-bold text-center">150+ INR</div>
              </div>
              <div className="flex items-center justify-center">
                <div className="px-8 py-3 my-5 bg-purple-400 rounded text-md font-bold text-center">
                  Get Started
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

PricingBlock.propTypes = {};

export default memo(PricingBlock);
