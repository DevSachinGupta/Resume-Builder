/**
 *
 * SettingPage
 *
 */

import React, { memo } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Button from '../Button';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ProfilePage(props) {
  return (
    <div className="flex-items w-full shadow-md rounded-md border-t border-gray-200 ">
      <div className="flex justify-between px-5 pt-3">
        <div className="pl-6 text-xl">Profile</div>
        <Button as="submit" type="primary" className="text-white">
          Save Changes
        </Button>
      </div>
      <div className="md:px-16 py-5 border-b w-full">
        <div className="mb-4 md:flex ">
          <div className="mb-4 md:mr-2 md:mb-0">
            <div className="rounded-full border-8 border-gray-200">
              {/* <FaUserCircle size={52} class="bg-white rounded-full" /> */}
              {props.userData.userProfileUrl ? (
                <img
                  className="rounded-full"
                  // src="https://lh3.googleusercontent.com/-biPvuIkz-PE/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnj_WXp169yeuyw2n9nG3_RZFdiGg/s50/photo.jpg"
                  src={props.userData.userProfileUrl}
                  width="50"
                  height="50"
                  alt=""
                />
              ) : (
                <FaUserCircle size={52} class="bg-white rounded-full" />
              )}
            </div>
          </div>
          <div className="md:ml-2">
            <label className="block mb-2 text-sm  text-gray-700">
              Upload your avatar image (size up to 256 x 256)
            </label>
            <Button htmlFor="upload" type="primary" className="text-white">
              Upload
            </Button>
            {/* <button class="bg-blue-500 hover:bg-blue-light py-2 px-4 rounded inline-flex items-center">
              <svg fill="#FFF" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
                </svg>
                <span class="ml-2">Upload</span>
            </button> */}
            <input
              className="cursor-pointer absolute block py-2 px-4 w-full opacity-0 pin-r pin-t"
              id="upload"
              type="file"
              name="documents[]"
              accept="image/*"
            />
          </div>
        </div>
      </div>
      <div className="md:px-16 py-5 border-b w-full">
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
              defaultValue={props.userData.firstName || ''}
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
              defaultValue={props.userData.lastName || ''}
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
            defaultValue={props.userData.registeredEmail || ''}
            readOnly
          />
        </div>
      </div>
      <div className="md:px-16 py-5 border-b w-full">
        <div className="mb-4 md:flex ">
          <div className="md:ml-2">
            <label
              className="block mb-2 text-sm  text-gray-700"
              htmlFor="lastName"
            >
              Start the process to delete your account
            </label>
            <Button className="text-white bg-red-500">Delete Account</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

ProfilePage.propTypes = {};

export default memo(ProfilePage);
