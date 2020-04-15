/**
 *
 * ShareOnlineForm
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
// import {
//   FacebookShareButton,
//   TwitterShareButton,
//   EmailShareButton,
//   FacebookIcon,
//   TwitterIcon,
//   EmailIcon,
// } from 'react-share';
import './style.scss';

// const url = window.location.href;
// const text = 'test';

function ShareOnlineForm() {
  const [state, setState] = useState({
    shareOpen: 'closeShare',
    toggleButtonText: 'Share this',
  });

  const shareOpenToggle = () => {
    if (state.shareOpen === 'closeShare') {
      setState({
        shareOpen: 'openShare',
        toggleButtonText: 'Hide sharing options',
      });
    } else {
      setState({
        shareOpen: 'closeShare',
        toggleButtonText: 'Share this',
      });
    }
  };

  // URL from current page
  const url = window.location.href;
  // URL patterns for Social media sites share functionalities
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${url}`;
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;
  return (
    <div>
      <h5>This is ShareOnlineForm Page</h5>
      {/* <FacebookShareButton url={url} quote={text} >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton url={url} title={text} >
        <TwitterIcon size={32} round />
      </TwitterShareButton >

      <EmailShareButton
        subject="Check out what I did on gocv"
        body={`${text}: ${url}`}
      >
        <EmailIcon size={32} round />
      </EmailShareButton> */}

      <div className="socialShareContainer">
        <div>
          <button
            type="button"
            className="socialShareButton"
            onClick={shareOpenToggle}
          >
            {state.toggleButtonText}
          </button>
        </div>
        <div className={state.shareOpen}>
          <a href={facebookUrl} target="_blank">
            {' '}
            <i className="fa fa-facebook-square" />
          </a>
          <a href={linkedinUrl} target="_blank">
            <i className="fa fa-linkedin-square" />
          </a>
          <a href={twitterUrl} target="_blank">
            {' '}
            <i className="fa fa-twitter-square" />
          </a>
        </div>
      </div>
    </div>
  );
}

ShareOnlineForm.propTypes = {};

export default memo(ShareOnlineForm);
