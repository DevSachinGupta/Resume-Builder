import React from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
} from 'react-share';
import { Row, Column } from '../../../Layout';
import Input from '../../../FormComponents/Input';
import { validationMap } from './validation';
import TextArea from '../../../FormComponents/TextArea';
import Select from '../../../FormComponents/Select';

const ShareOnlineInputs = ({ url, text }) => (
  <div>
    <Row>
      <h3>Powered by Netcv()logo</h3>
      <br />
      <h4>support@netcv.co.in</h4>
      <br />
      <h5>Feel free to contact Us for any support.</h5>
    </Row>
    <Row>
      <Column width="full" className="px-1">
        <h5>This is ShareOnlineForm Page</h5>
        <FacebookShareButton url={url} quote={text}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton url={url} title={text}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <EmailShareButton
          subject="Check out what I did on gocv"
          body={`${text}: ${url}`}
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
      </Column>
    </Row>
  </div>
);

ShareOnlineInputs.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ShareOnlineInputs;
