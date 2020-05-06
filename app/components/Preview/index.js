/**
 *
 * Preview
 *
 */

import React, { memo } from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Preview() {
  // const templateURL = 'http://jitendra002.netcv.site/';
  const [previewWidth, setPreviewWidth] = React.useState('100%');
  return (
    <div className="bg-gray-200">
      <div>
        <Header setPreviewWidth={setPreviewWidth} />
      </div>
      <div className="">
        <iframe
          className="h-screen mx-auto"
          src={props.templateURL}
          sandbox="allow-same-origin allow-forms allow-scripts"
          seamless
          width={previewWidth}
          style={{ overflow: 'hidden' }}
          title="Template Preview"
        />
      </div>
    </div>
  );
}

Preview.propTypes = {
  templateURL: PropTypes.string.isRequired,
};

export default memo(Preview);
