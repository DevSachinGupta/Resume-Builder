/**
 *
 * ReferralForm
 *
 */

// import PropTypes from 'prop-types';
import React, { memo, useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  WhatsappIcon,
  LinkedinIcon,
  TwitterIcon,
  EmailIcon,
} from 'react-share';
import { toggleModal } from 'containers/App/actions';
import apiClient from '../../../../utils/app/API';
import DotsLoading from '../../../LoadingIndicator/dotsLoading';
import { Row, Column } from '../../../Layout';
import Button from '../../../Button';
import './style.scss';

function ReferralForm({ dispatch }) {
  const url = window.location.href;
  const text = 'test';

  const [referralLink, setreferralLink] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  // const [submitError, setSubmitError] = useState(null);

  const copyRef = useRef(null);

  const copyToClipboard = e => {
    copyRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
  };

  const generateReferralLink = () => {
    setLoadingStatus(true);
    apiClient
      .post('/referral/createReferral', {})
      .then(response => {
        console.log('generateReferralLink response: ', response);
        if (response.status === 200) {
          setreferralLink(response.data.data.referralLink);
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
          <div>
            <p className="text-red-500">
              <small>{submitError.statusFailer}</small>
            </p>
            <Button
              type="primary"
              className="py-1 px-2 mt-4 text-sm"
              onClick={() => {
                dispatch(toggleModal());
              }}
            >
              Close
            </Button>
          </div>
        )}
        {submitError && submitError.statusSuccess && (
          <div>
            {/* <p className="text-green-500">
              <small>{submitError.statusSuccess}</small>
            </p>
            <p className="text-green-500" >
              <small>{referralLink}</small>
            </p> */}
            <div className="flex justify-center">
              <input
                className="text-green-500 text-sm"
                readOnly
                value={referralLink}
                ref={copyRef}
              />
              {document.queryCommandSupported('copy') && (
                <Button
                  type="primary"
                  className="py-1 px-2 ml-2 text-sm"
                  onClick={copyToClipboard}
                >
                  Copy
                </Button>
              )}
            </div>
            <Row>
              <div className="flex w-full mt-4 mx-10 border-t-2 border-gray-400" />
            </Row>
            <div className="mt-4 px-12 flex justify-center">
              <div className="px-2">
                <FacebookShareButton url={referralLink} quote={text}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
              </div>
              <div className="px-2">
                <WhatsappShareButton url={referralLink} quote={"sample text"}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>
              <div className="px-2">
                <LinkedinShareButton url={referralLink} quote={text}>
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
              </div>
              <div className="px-2">
                <TwitterShareButton url={referralLink} title={text}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
              </div>
              <div className="px-2">
                <EmailShareButton
                  subject="Check out what I did on NetCV."
                  body={`${text}: ${referralLink}`}
                >
                  <EmailIcon size={32} round />
                </EmailShareButton>
              </div>
            </div>
          </div>
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
