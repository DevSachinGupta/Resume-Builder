/**
 *
 * BuilderEditor
 *
 */

import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeUpdateResumeJSONState, makeUpdateDemoPageState, makeUpdateEditorState } from 'containers/Builder/selectors';
import { updateTemplateNumberState, updateEditorState } from 'containers/Builder/actions';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import './style.scss';

const template_number = '1'
let TemplateHTML = null;
// import TemplateHTML from '../../CheerioComponent/templates/template_1/html.js';
// const TemplateHTML = import(`../../CheerioComponent/templates/template_${template_number}/html.js`)
TemplateHTML = require(`../../CheerioComponent/templates/template_${template_number}/html.js`)
// TemplateHTML = React.lazy(() => import(`components/CheerioComponent/templates/template_${template_number}/html.js`));

var DemoPage = {
  html: TemplateHTML.default,
  css: '',
  components: null,
  style: null,
};

function BuilderEditor({editor_state , demopage_state ,  resume_json_state , dispatch}) {
  console.log(resume_json_state , "This is the resume_state_json")
  DemoPage=demopage_state || DemoPage
  useEffect(() => {
    var editor = grapesjs.init({
      container: '#gjs',
      width: '82vw',
      height: 'calc(100vh - 64px)',
      components: DemoPage.components || DemoPage.html,
      style: DemoPage.style || DemoPage.css,
      allowScripts: true,
      jsInHtml: true,
      storageManager: {
        autoload: false,
      },
      panels: {
        defaults: [],
      },
      canvas: {
        scripts: [
          // 'https://resumebuilder.s3.ap-south-1.amazonaws.com/js/bootstrap.min.js',
          // 'https://resumebuilder.s3.ap-south-1.amazonaws.com/js/jquery-3.3.1.slim.min.js',
          // 'https://resumebuilder.s3.ap-south-1.amazonaws.com/js/main.js',

        ],
        styles: [
          // 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
          // 'https://res.cloudinary.com/rb-app/raw/upload/v1577214082/commons/css/style_t9mzif.css',
          // 'https://resumebuilder.s3.ap-south-1.amazonaws.com/css/style.css',
        ]
      }
    });
    dispatch(updateEditorState(editor))
  }, [ ]);
  // dispatch(updateTemplateNumberState(template_number))
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
  editor_state : makeUpdateEditorState(),
  demopage_state : makeUpdateDemoPageState(),
  resume_json_state : makeUpdateResumeJSONState(),
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
