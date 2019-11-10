/**
 *
 * BuilderEditor
 *
 */

import React, { memo, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import './style.scss';

function BuilderEditor() {
  useEffect(() => {
    grapesjs.init({
      container: '#gjs',
      fromElement: true,
      width: '82vw',
      height: 'calc(100vh - 64px)',
      storageManager: { type: null },
      panels: {
        defaults: [],
      },
    });
  }, []);
  return (
    <div>
      <div id="gjs" className="editor-container">
        <h1>Hello World Component!</h1>
      </div>
    </div>
  );
}

BuilderEditor.propTypes = {};

export default memo(BuilderEditor);
