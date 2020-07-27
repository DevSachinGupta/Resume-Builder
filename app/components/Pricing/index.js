/**
 *
 * Pricing
 *
 */

import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { useToasts } from 'react-toast-notifications';
import { setModalContent } from 'containers/MyContent/actions';
import {
  setPublishDetails,
  updateSettings,
  toggleModal,
} from 'containers/App/actions';
import { makeSelectRedirectionUrl } from 'containers/App/selectors';
import apiClient from '../../utils/app/API';
import history from '../../containers/App/history';
import './style.scss';

function PricingCardContainer({ showStaterPlan, dispatch }) {
  const pricingDataAll = {
    planList: [
      {
        planCode: '000',
        planName: 'Starter',
        planPrice: 'Free',
        planDuration: '3 Months',
        planFeaturesList: [
          '5 Projects',
          '15 Updations',
          'SEO Optimization',
          'Custom Domain',
        ],
        description:
          "This is the most basic package but it's also the cheapest. Great for ordinary use.",
      },
      {
        planCode: '001',
        planName: 'Basic',
        planPrice: 'INR 250',
        planDuration: '1 Year',
        planFeaturesList: [
          '5 Projects',
          '15 Updations',
          'SEO Optimization',
          'Custom Domain',
          'SEO Optimization',
          'Custom Domain',
        ],
        description:
          "This is the most basic package but it's also the cheapest. Great for ordinary use.",
      },
      {
        planCode: '002',
        planName: 'Premium',
        planPrice: 'INR 300',
        planDuration: '1 Year',
        planFeaturesList: [
          '5 Projects',
          '15 Updations',
          'SEO Optimization',
          'Custom Domain',
          '15 Updations',
          'SEO Optimization',
          'Custom Domain',
        ],
        description:
          "This is the most basic package but it's also the cheapest. Great for ordinary use.",
      },
      {
        planCode: '003',
        planName: 'Advanced',
        planPrice: 'INR 400',
        planDuration: '2 Year',
        planFeaturesList: [
          '5 Projects',
          '15 Updations',
          'SEO Optimization',
          'Custom Domain',
          '5 Projects',
          '15 Updations',
          'SEO Optimization',
          'Custom Domain',
        ],
        description:
          "This is the most basic package but it's also the cheapest. Great for ordinary use.",
      },
    ],
  };

  const { addToast } = useToasts();
  const [paymentVerifyStatus, setPaymentVerifyStatus] = useState(true);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const activateStaterPlan = item => {
    setLoadingStatus(true);
    apiClient
      .post('billing/activateStarterPlan', { ...item })
      .then(response => {
        if (response.status === 200) {
          // TODO : update userData in redux and dispatch to update publishDetails
          console.log('succesfully submit your request.', response);
          setPaymentVerifyStatus(true);
          setLoadingStatus(false);
          dispatch(updateSettings(response.data.data.settings));
          // dispatch(toggleModal());
          // TODO : update plan details on local redux
          // dispatch(setPublishDetails({ pusblishFlag: true }));
          // dispatch(setPublishDetails({ pusblishFlag: true }));
        } else {
          console.log('Something went wrong while submitting: ', response);
          setSubmitError({
            status: 'Something went wrong while submitting!',
          });
          setLoadingStatus(false);
        }
      })
      .catch(error => {
        console.log('updateProfile error: ', error, error.response);
        setSubmitError({
          status: 'Something went wrong while submitting!',
        });
        setLoadingStatus(false);
      });
  };

  const handleSelectClick = item => {
    console.log('item Data: ', item);
    if (item.planCode === '000') activateStaterPlan(item);
    else {
      // TODO: dispatch checkout data
      dispatch(toggleModal());
      dispatch(setPublishDetails({ planData: item }));
      history.push('/checkout');
    }
  };

  return (
    <div className="flex flex-wrap -mx-2 items-center justify-center overflow-hidden sm:-mx-1 md:-mx-1 lg:-mx-px">
      {pricingDataAll.planList.map(item => {
        if (showStaterPlan === false && item.planCode === '000') return <></>;
        return (
          <div className="flex-col justify-between my-2 px-2 w-full rounded border boder-gray-800 overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-1 md:px-2 md:w-1/3 lg:my-px lg:px-2 lg:w-1/4 xl:w-1/4">
            {console.log('item list: ', item)}
            <div className="w-full py-4">
              <h3 className="mx-auto mb-2 text-lg font-semibold text-center underline text-gray-700">
                {item.planName}
              </h3>
              <p className="text-xl font-bold text-center whitespace-no-wrap text-teal-500">
                {item.planPrice}
              </p>
              <p className="text-xs text-center uppercase text-teal-500">
                {item.planDuration}
              </p>
            </div>
            <hr className="mx-2 border-t-2" />
            <div className="w-full px-1 my-4 flex-grow ">
              {item.planFeaturesList.map(featureItem => (
                <p className="text-sm pb-3 leading-none text-center text-gray-700">
                  {featureItem}
                </p>
              ))}
            </div>
            <div className="flex w-full mt-2 my-2 items-center justify-center">
              <button
                type="button"
                className="w-full mx-3 my-1 text-center  bg-teal-500 border border-transparent rounded text-black"
                onClick={() => {
                  handleSelectClick(item);
                }}
              >
                Select
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

PricingCardContainer.propTypes = {
  pricingDataAll: PropTypes.object,
};
PricingCardContainer.defaultParams = {
  showStaterPlan: true,
};

const mapStateToProps = () => createStructuredSelector({});
const mapDispatchToProps = null;
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withCompose = compose(
  withConnect,
  memo,
);
export default withCompose(PricingCardContainer);
