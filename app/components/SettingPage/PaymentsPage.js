/**
 *
 * PaymentsPage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function PaymentsPage() {
  return (
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
                <td className="w-1/4 text-left py-3 px-4">Standard</td>
                <td className="w-1/4 text-left py-3 px-4">24 Feb 2020</td>
                <td className="w-1/4 text-left py-3 px-4">
                  <a className="hover:text-blue-500">24 Feb 2020</a>
                </td>
                <td className="w-1/4 text-left py-3 px-4">
                  <a className="hover:text-blue-500">1234567890</a>
                </td>
              </tr>
              <tr className="bg-gray-200">
                <td className="w-1/4 text-left py-3 px-4">Standard</td>
                <td className="w-1/4 text-left py-3 px-4">24 Feb 2020</td>
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
  );
}

PaymentsPage.propTypes = {};

export default memo(PaymentsPage);
