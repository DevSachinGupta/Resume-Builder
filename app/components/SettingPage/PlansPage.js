/**
 *
 * PlansPage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function PlansPage() {
  return (
    <div className="flex-items w-full bg-gray-300 shadow-md rounded-md border-b border-gray-500">
      <div className="flex px-5 pt-3">
        <div className="w-full pl-6 text-xl">Plans settings</div>
      </div>
      <div className="md:px-16 py-5 w-full">
        <div className="mb-4 md:flex md:justify-between">
          <div className="mb-4 md:mr-2 md:mb-0 w-1/2">
            <label
              className="block mb-2 text-sm  text-gray-700"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="w-full px-3 py-2 text-sm leading-tight bg-gray-200 text-gray-700 border focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="md:ml-2 w-1/2">
            <label
              className="block mb-2 text-sm  text-gray-700"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="w-full px-3 py-2 text-sm leading-tight bg-gray-200 text-gray-700 border focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm  text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 mb-3 text-sm leading-tight bg-gray-200 text-gray-700 border focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
    </div>
  );
}

PlansPage.propTypes = {};

export default memo(PlansPage);
