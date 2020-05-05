/**
 *
 * FeatureFirstBlock
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function FeatureFirstBlock() {
  return (
    <section className="bg-gray-100 py-8" id="featureSection">
      <div className="container max-w-5xl mx-auto m-8">
        <div className="mb-4 text-center heading">
          <h6>Business Consultancy</h6>
          <h3>Efficient Solution For Your Business</h3>
        </div>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>

        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 leading-none mb-3">
              Customized Templates
            </h3>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
              <br />
              <br />
              Images from:{' '}
              <a
                className="text-orange-500 underline"
                href="https://undraw.co/"
              >
                undraw.co
              </a>
            </p>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <img
              src={require('./images/ScreenViews.png')}
              alt=""
              className="max-w-full h-auto mx-auto justify-center"
            />
          </div>
        </div>

        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <img
              src={require('./images/ScreenViews.png')}
              alt=""
              className="max-w-full h-auto mx-auto justify-center"
            />
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 leading-none mb-3">
                Build a perfectly resume in minutes
              </h3>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
                <br />
                <br />
                Images from:{' '}
                <a
                  className="text-orange-500 underline"
                  href="https://undraw.co/"
                >
                  undraw.co
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 leading-none mb-3">
                Free resources and support
              </h3>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                at ipsum eu nunc commodo posuere et sit amet ligula.
                <br />
                <br />
                Images from:{' '}
                <a
                  className="text-orange-500 underline"
                  href="https://undraw.co/"
                >
                  undraw.co
                </a>
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <img
                src={require('./images/ScreenViews.png')}
                alt=""
                className="max-w-full h-auto mx-auto justify-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeatureFirstBlock.propTypes = {};

export default memo(FeatureFirstBlock);
