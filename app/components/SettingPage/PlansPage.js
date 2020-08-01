/**
 *
 * PlansPage
 *
 */

import React, { memo } from 'react';
import {
  updateRedirectionUrl,
  setPublishDetails,
} from 'containers/App/actions';
import { setModalContent } from 'containers/MyContent/actions';
import { formatDateDB } from 'utils/app/textFormating';
import Button from '../Button';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function PlansPage(props) {
  return (
    <div className="flex-items w-full shadow-md rounded-md border-t border-gray-200 ">
      <div className="flex justify-between px-5 pt-3">
        <div className="pl-6 text-xl">Plans settings</div>
        {/* <Button as="submit" type="primary" className="text-white">
          Save Changes
        </Button> */}
      </div>
      <div className="md:px-16 pt-5 w-full">
        <div className="mb-4 md:flex ">
          <label className="block text-sm  text-gray-700">Current Plan</label>
        </div>
        <div className="mb-4 md:flex ">
          <div className="w-full border border-gray-600">
            <table className="min-w-full bg-white">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Plan
                  </th>
                  <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Activated Date
                  </th>
                  <th className="w-1/5 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Expiry Date
                  </th>
                  <th className="w-2/5 text-left py-3 px-4 uppercase font-semibold text-sm">
                    Desscription
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="w-1/5 text-left py-3 px-4">
                    {(props.userData.settings.activePlan &&
                      props.userData.settings.activePlan.planName) ||
                      '-'}
                  </td>
                  <td className="w-1/5 text-left py-3 px-4">
                    {(props.userData.settings.activePlan &&
                      formatDateDB(new Date(props.userData.settings.activePlan.activetedDate))) ||
                      '-'}
                  </td>
                  <td className="w-1/5 text-left py-3 px-4">
                    {(props.userData.settings.activePlan &&
                      formatDateDB(new Date(props.userData.settings.activePlan.expiryDate))) ||
                      '-'}
                  </td>
                  <td className="w-2/5 text-sm text-left py-3 px-4">
                    {(props.userData.settings.activePlan &&
                      props.userData.settings.activePlan.planDescription) ||
                      '-'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="md:px-16 py-5 border-b w-full">
        <div className="mb-4 md:flex ">
          <div className="md:ml-2">
            {/* TODO : Code the plans */}
            <Button
              type="primary"
              className="text-white"
              onClick={e => {
                props.dispatch(setModalContent('publish'))
                props.dispatch(setPublishDetails({ paymentOnlyFlag: true, copySubDomainFlag: false }));
                props.dispatch(updateRedirectionUrl(`/settings`)); // for payment redirection
              }}
            >
              Upgrade Your Plan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

PlansPage.propTypes = {};

export default memo(PlansPage);
