/**
 *
 * BuilderEditor
 *
 */

import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeUpdateEditorState } from 'containers/Builder/selectors';
import { updateEditorState } from 'containers/Builder/actions';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import './style.scss';

import TemplateHTML from '../../CheerioComponent/Template_1/Template/index.js';
import TemplateCSS from '../../CheerioComponent/Template_1/Template/css/style.js';

// function GenerateEditor(TemplateHTML, TemplateCSS ){
const DemoPage = {
  html: TemplateHTML,
  css: TemplateCSS,
  components: null,
  style: null,
};
function BuilderEditor({ dispatch }) {
  useEffect(() => {}, []);
  useEffect(() => {
    const editor = grapesjs.init({
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
      canvas: {
        styles: [
          'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
        ],
      },
    });
    dispatch(updateEditorState(editor));
  }, []);
  return (
    <div>
      <div id="gjs" className="editor-container" />
    </div>
  );
}

BuilderEditor.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  editor_state: makeUpdateEditorState(),
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
export default withCompose(BuilderEditor);
