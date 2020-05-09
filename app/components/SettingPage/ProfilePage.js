/**
 *
 * SettingPage
 *
 */

import React, { memo } from 'react';
import Button from '../Button';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ProfilePage() {
  return (
    <div className="flex-items w-full shadow-md rounded-md border-t border-gray-200 ">
      <div className="flex justify-between px-5 pt-3">
        <div className="pl-6 text-xl">Profile</div>
        <Button
          as="submit"
          type="primary"
          className="text-white"
          // className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
        >
          Save Changes
        </Button>
        {/* <button
          type="button"
          className="px-6 py-2 rounded shadow-md hover:bg-gray-100 text-md bg-gray-200"
        >
          Save Changes
        </button> */}
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

ProfilePage.propTypes = {};

export default memo(ProfilePage);
