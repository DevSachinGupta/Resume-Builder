/**
 *
 * Pages
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import HomePage from './HomePage';
import Publish from './Publish';
import ShareOnline from './ShareOnline';
import ContactUs from './ContactUs';
import Setting from './Setting';
import Feedback from './Feedback';

function setPagesContent(props) {
  console.log("inside pages")
  switch (props.pageTitle) {
    case 'HomePage':
      return <HomePage {...props} />;
    case 'Publish':
      return <Publish {...props} />;
    case 'ShareOnline':
      return <ShareOnline {...props} />;
    case 'ContactUs':
      return <ContactUs {...props} />;
    case 'Setting':
      return <Setting {...props} />;
    case 'Feedback':
      return <Feedback {...props} />;
    default:
      return <Text {...props} />;
  }
}

setPagesContent.propTypes = {
  pageTitle: PropTypes.string,
};

export default memo(setPagesContent);
