/**
 *
 * Preview
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
// import styled from 'styled-components';

function Preview(props) {
  const templateURL = decodeURIComponent(props.match.params.templateURL);
  const [previewWidth, setPreviewWidth] = React.useState('100%');
  return (
    <div className="bg-white">
      <div>
        <Header setPreviewWidth={setPreviewWidth} />
      </div>
      <div className="">
        <iframe
          className="h-screen mx-auto"
          // src={props.templateURL}
          src={templateURL}
          sandbox="allow-same-origin allow-forms allow-scripts"
          seamless
          width={previewWidth}
          style={{ height: 'calc(100vh - 64px)' }}
          // style={{ overflow: 'hidden' }}
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
