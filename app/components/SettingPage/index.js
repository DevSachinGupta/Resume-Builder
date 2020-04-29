/**
 *
 * SettingPage
 *
 */

import React, { memo } from 'react';
import Header from './Header';
import Footer from './Footer';
import './style.scss';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function SettingPage() {
  return (
    <div className="bg-gray-200">
      <div>
        <Header />
      </div>
      <div className="flex ">
        <div className="container mx-auto px-8">
          <div className="flex px-10">
            <div className="w-full pl-6 text-2xl">Account Settings</div>
          </div>
          <div className="flex px-10">
            <div className="w-full px-4 mt-2">
              <nav className="flex flex-col sm:flex-row">
                <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">
                  Profile
                </button>
                <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                  Plans
                </button>
                <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                  Notifications
                </button>
                <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                  Payments
                </button>
                <button className="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
                  Subscription
                </button>
              </nav>
            </div>
          </div>
          <div className="px-10">
            <div className="px-4 mt-2">
              <div className="">
                <div className="flex-items w-full bg-gray-300 shadow-md rounded-md border-b border-gray-500">
                  <div className="flex px-5 pt-3">
                    <div className="w-full pl-6 text-xl">Profile</div>
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
                      <label
                        className="block mb-2 text-sm  text-gray-700"
                        htmlFor="email"
                      >
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
                <div className="flex-items w-full bg-gray-300 shadow-md rounded-md">
                  <div className="flex px-5 pt-3">
                    <div className="w-full pl-6 text-xl">Orders</div>
                  </div>
                  <div className="md:px-16 py-5 w-full">
                    <div className="border border-gray-600">
                      <table className="min-w-full bg-white">
                        <thead className="bg-gray-300 text-gray-600">
                          <tr>
                            <th className="w-1/4 text-left py-3 px-4 uppercase font-semibold text-sm">
                              Plan
                            </th>
                            <th className="w-1/4 text-left py-3 px-4 uppercase font-semibold text-sm">
                              Activated Date
                            </th>
                            <th className="w-1/4 text-left py-3 px-4 uppercase font-semibold text-sm">
                              Expiry Date
                            </th>
                            <th className="w-1/4 text-left py-3 px-4 uppercase font-semibold text-sm">
                              Invoice
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-gray-200">
                          <tr>
                            <td className="w-1/4 text-left py-3 px-4">
                              Standard
                            </td>
                            <td className="w-1/4 text-left py-3 px-4">
                              24 Feb 2020
                            </td>
                            <td className="w-1/4 text-left py-3 px-4">
                              <a className="hover:text-blue-500">24 Feb 2020</a>
                            </td>
                            <td className="w-1/4 text-left py-3 px-4">
                              <a className="hover:text-blue-500">1234567890</a>
                            </td>
                          </tr>
                          <tr className="bg-gray-200">
                            <td className="w-1/4 text-left py-3 px-4">
                              Standard
                            </td>
                            <td className="w-1/4 text-left py-3 px-4">
                              24 Feb 2020
                            </td>
                            <td className="w-1/4 text-left py-3 px-4">
                              <a className="hover:text-blue-500">24 Feb 2020</a>
                            </td>
                            <td className="w-1/4 text-left py-3 px-4">
                              <a className="hover:text-blue-500">1234567890</a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="w-3/4 ml-6 mt-2">
              <BodyLayout />
            </div> */}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="container mx-auto ">
          <div className="px-10">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

SettingPage.propTypes = {};

export default memo(SettingPage);
