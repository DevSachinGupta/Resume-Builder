/**
 *
 * ShareOnlineForm
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
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
import { Row, Column } from '../../../Layout';
import './style.scss';

function ShareOnlineForm() {
  const url = window.location.href;
  const text = 'test';

  return (
    <div>
      <Row>
        <div className="flex flex-col min-w-0 w-full mb-4 text-center">
          <div className="text-center leading-none   mb-0 px-6 pb-3">
            <small className="text-xs font-light ">Powered by </small>NetCV.
          </div>
          <div className="text-2xl">Publish and Share Your Online Resume.</div>
        </div>
      </Row>
      <Row>
        <div className="flex w-full mx-10 border-t-2 border-gray-400" />
      </Row>
      <div className="mt-4 px-12 flex justify-center">
        <div className="px-2">
          <FacebookShareButton url={url} quote={text}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
        <div className="px-2">
          <WhatsappShareButton url={url} quote={text}>
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
            subject="Check out what I did on gocv"
            body={`${text}: ${url}`}
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
}

ShareOnlineForm.propTypes = {};

export default memo(ShareOnlineForm);
