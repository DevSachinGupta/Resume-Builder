/**
 *
 * ReferralForm
 *
 */

// import PropTypes from 'prop-types';
import React, { memo, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectPublishType,
  makeSelectPublishDetails,
} from 'containers/App/selectors';
import { updateSettings, setPublishDetails } from 'containers/App/actions';
import {
  makeSelectProjectId,
  makeUpdateEditorState,
} from 'containers/Builder/selectors';
import { updateSessionArrayInsert } from 'containers/Builder/actions';
import apiClient from '../../../../utils/app/API';
import DotsLoading from '../../../LoadingIndicator/dotsLoading';
import { Row, Column } from '../../../Layout';
import './style.scss';

function ReferralForm({ dispatch }) {
  const [referralStatus, setReferralStatus] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const generateReferralLink = () => {
    setLoadingStatus(true);
    apiClient
      .post('/referral/createReferral', {})
      .then(response => {
        console.log('generateReferralLink response: ', response);
        if (response.status === 200) {
          setReferralStatus(true);
          // TODO: update in store
          // dispatch(updateSettings(response.data.data.settings));
          setSubmitError({
            statusSuccess: `Referral Link : ${response.data.data.referralLink}`,
          });
        } else if (response.status === 204) {
          setSubmitError({ statusFailer: 'Referral Link generation failed!!' });
          console.log('Something went wrong while submitting: ', response);
        } else {
          setSubmitError({
            statusFailer: 'Something went wrong while submitting!',
          });
          console.log('Something went wrong while submitting: ', response);
        }
        setLoadingStatus(false);
      })
      .catch(error => {
        setLoadingStatus(false);
        setSubmitError({
          statusFailer: 'Something went wrong while submitting!',
        });
        console.log('generateReferralLink error: ', error, error.response);
      });
  };

  useEffect(() => {
    // TODO: check if link is already there in userdata if exists show from there else call db
    generateReferralLink();
  }, []);

  return (
    <div>
      <Row>
        <div className="flex flex-col min-w-0 w-full mb-6 text-center">
          <div className="text-center leading-none text-2xl  mb-0 px-6 pb-3">
            Your Referral Link
          </div>
          <div className="text-base">
            Please Wait While We generating your referral link.
          </div>
        </div>
      </Row>
      <div className="text-center">
        {submitError && submitError.statusFailer && (
          <p className="text-red-500">
            <small>{submitError.statusFailer}</small>
          </p>
        )}
        {submitError && submitError.statusSuccess && (
          <p className="text-green-500">
            <small>{submitError.statusSuccess}</small>
          </p>
        )}
      </div>
      {loadingStatus && (
        <div className="text-center mt-4">
          <DotsLoading loadingText="Please Wait..." />
        </div>
      )}
    </div>
  );
}

ReferralForm.propTypes = {};

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
export default withCompose(ReferralForm);
