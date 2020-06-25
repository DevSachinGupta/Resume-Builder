/**
 *
 * NotificationsPage
 *
 */

import React, { memo } from 'react';
import Button from '../Button';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function NotificationsPage(props) {
  console.log("notification userdata:", props.userData)
  return (
    <div className="flex-items w-full shadow-md rounded-md border-t border-gray-200 ">
      <div className="flex justify-between px-5 pt-3">
        <div className="pl-6 text-xl">Notifications</div>
        <Button as="submit" type="primary" className="text-white">
          Save Changes
        </Button>
      </div>
      <div className="md:px-16 pt-5 w-full">
        <div className="mb-4 md:flex ">
          <label className="block text-sm  text-gray-700">
            Upload your avatar image (size up to 256 x 256)
          </label>
        </div>
      </div>
      <div className="md:px-16 py-5 border-b w-full">
        <div className="mb-2 justify-center">
          <input
            className="px-3 py-2 mb-3 focus:outline-none focus:shadow-outline"
            id="newsletters"
            type="checkbox"
            defaultChecked={props.userData.settings.notifications.newsletterAndBlogs || true}
          />
          <label className=" mx-4 mb-2 text-gray-700" htmlFor="newsletters">
            Blogs and Newsletters
          </label>
        </div>
        <div className="mb-2 ">
          <input
            className="px-3 py-2 mb-3 focus:outline-none focus:shadow-outline"
            id="newFeatures"
            type="checkbox"
            defaultChecked={props.userData.settings.notifications.newFetures || true}
          />
          <label className=" mx-4 mb-2 text-gray-700" htmlFor="newFeatures">
            New Features
          </label>
        </div>
      </div>
    </div>
  );
}

NotificationsPage.propTypes = {};

export default memo(NotificationsPage);
