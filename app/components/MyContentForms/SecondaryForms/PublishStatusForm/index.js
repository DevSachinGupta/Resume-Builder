/**
 *
 * PublishStatusForm
 *
 */

// import PropTypes from 'prop-types';
import React, { memo, useState, useEffect } from 'react';
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

function PublishStatusForm({
  publishType,
  publishDetails,
  projectId,
  editorState,
  dispatch,
}) {
  console.log('publishType and publish deatils:', publishType, publishDetails);
  const blankDomainNameFields = {
    domainName: '',
  };
  const url = window.location.href;
  const text = 'test';
  let publishOnExistingDomain = false;
  if (publishDetails.publishOnExistingDomain)
    publishOnExistingDomain = publishDetails.publishOnExistingDomain;

  console.log(
    'publishOnExistingDomain: ',
    publishOnExistingDomain,
    publishDetails.publishOnExistingDomain,
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [publshingStatus, setPublshingStatus] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handlePublishWebsite = () => {
    setLoadingStatus(true);
    console.log('data html css', editorState.getCss(), editorState.getHtml());
    apiClient
      .post('builder/publishWebsite', {
        projectId,
        CSSCode: editorState.getCss(),
        HTMLCode: editorState.getHtml(),
        JSCode: '{}',
        publishOnExistingDomain,
      })
      .then(response => {
        console.log('handlePublishWebsite response: ', response);
        if (response.status === 200) {
          // TODO: update session Data in builderSession
          dispatch(
            updateSessionArrayInsert(projectId, {
              templateCSS: editorState.getCss(),
              templateHTML: editorState.getHtml(),
              templateJS: '{}',
              autoLoadFlag: false,
            }),
          );
          setPublshingStatus(true);
          dispatch(updateSettings(response.data.data.settings));
          setSubmitError({
            statusSuccess: 'Successfully Published your resume!',
          });
          console.log('succesfully publish your resume.');
        } else if (response.status === 204) {
          setSubmitError({ statusFailer: 'Domain already taken!' });
          console.log('Something went wrong while submitting: ', response);
        } else {
          setSubmitError({
            statusFailer: 'Something went wrong while submitting!',
          });
          console.log('Something went wrong while submitting: ', response);
        }
        setLoadingStatus(false);
        dispatch(setPublishDetails({ publishOnLoadFlag: false }));
      })
      .catch(error => {
        setLoadingStatus(false);
        setSubmitError({
          statusFailer: 'Something went wrong while submitting!',
        });
        console.log('handlePublishWebsite error: ', error, error.response);
      });
  };

  useEffect(() => {
    // TODO check for accounts limit(check previous for publish) also verify publishDetails

    // TODO: call publish website and on success update userData(settings)
    handlePublishWebsite();
  }, []);

  return (
    <>
      <Row>
        {currentPage === 0 ? (
          <div>
            <Row>
              <div className="flex flex-col min-w-0 w-full mb-6 text-center">
                <div className="text-center leading-none text-2xl  mb-0 px-6 pb-3">
                  Publishing your Resume.
                </div>
                <div className="text-base">
                  Please Wait While We Publishing your Resume.
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
                <div>
                  <p className="text-green-500">
                    <small>{submitError.statusSuccess}</small>
                  </p>
                  <Row>
                    <div className="flex w-full mt-4 mx-10 border-t-2 border-gray-400" />
                  </Row>
                  <div className="mt-4 px-12 flex justify-center">
                    <div className="px-2">
                      <FacebookShareButton url={url} quote={text}>
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>
                    </div>
                    <div className="px-2">
                      <WhatsappShareButton url={url} quote="sample text">
                        <WhatsappIcon size={32} round />
                      </WhatsappShareButton>
                    </div>
                    <div className="px-2">
                      <LinkedinShareButton url={url} quote={text}>
                        <LinkedinIcon size={32} round />
                      </LinkedinShareButton>
                    </div>
                    <div className="px-2">
                      <TwitterShareButton url={url} title={text}>
                        <TwitterIcon size={32} round />
                      </TwitterShareButton>
                    </div>
                    <div className="px-2">
                      <EmailShareButton
                        subject="Check out what I did on NetCV."
                        body={`${text}: ${url}`}
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
        ) : (
          <div>
            <Row>
              <div className="flex flex-col min-w-0 w-full mb-6 text-center">
                <div className="text-center leading-none text-2xl  mb-0 px-6 pb-3">
                  Get Ready to Publish your Resume.
                </div>
                <div className="text-base">
                  Choose a plan for your online Resume.
                </div>
              </div>
            </Row>
          </div>
        )}
      </Row>
    </>
  );
}

PublishStatusForm.propTypes = {};

const mapStateToProps = () =>
  createStructuredSelector({
    publishType: makeSelectPublishType(),
    publishDetails: makeSelectPublishDetails(),
    projectId: makeSelectProjectId(),
    editorState: makeUpdateEditorState(),
  });
const mapDispatchToProps = null;
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withCompose = compose(
  withConnect,
  memo,
);
export default withCompose(PublishStatusForm);
