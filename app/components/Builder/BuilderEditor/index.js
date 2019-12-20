/**
 *
 * BuilderEditor
 *
 */

import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import './style.scss';


const DemoPage = {
  html: `<h1>HELLO WORLD</h1>`,
  css: null,
  components: null,
  style: null,
};
function BuilderEditor({DemoPage,dispatch}) {
  
  useEffect(() => {
    var editor = grapesjs.init({
      container: '#gjs',
      width: '82vw',
      height: 'calc(100vh - 64px)',
      components: DemoPage.components || DemoPage.html,
      style: DemoPage.style || DemoPage.css,
      storageManager: {
        autoload: false,
      },
      panels: {
        defaults: [],
      },
    });
    dispatch({type: "UPDATED_EDITOR",editor})

  }, []);
  return (
    <div>
      <div id="gjs" className="editor-container" />
    </div>
  );
}


BuilderEditor.propTypes = {};

export default connect()(memo(BuilderEditor));
