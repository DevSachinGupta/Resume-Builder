/**
 *
 * BuilderEditor
 *
 */

import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeUpdateDemoPageState,
  makeUpdateEditorState,
} from 'containers/Builder/selectors';
import {
  updateTemplateNumberState,
  updateEditorState,
} from 'containers/Builder/actions';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import './style.scss';

import TemplateHTML from '../../CheerioComponent/templates/template_1/html.js';

const template_number = 1;

const DemoPage = {
  html: TemplateHTML,
  css: '{..}',
  components: null,
  style: null,
};

function BuilderEditor({ editor_state, demopage_state, dispatch }) {
  // console.log(editor_state, 'This is the editor_state:Editor');
  // console.log(demopage_state, 'This is the editor_state:Editor');
  // console.log(DemoPage, 'This is the editor_state:Editor');
  // DemoPage=demopage_state || DemoPage
  // var DemoPage = demopage_state
  useEffect(() => {
    const editor = grapesjs.init({
      container: '#gjs',
      // width: '82vw',
      width: '100%',
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
          // 'https://res.cloudinary.com/rb-app/raw/upload/v1577214082/commons/css/style_t9mzif.css',
          'https://resumebuilder.s3.ap-south-1.amazonaws.com/css/style.css',
        ],
      },
    });
    // console.log("pannel: ", editor.Panels.getPanels())
    // editor.getConfig().showDevices = 0;

    editor.Panels.addPanel({ id: 'devices-c', el: '.deviceContainer' })
      .get('buttons')
      .add([
        {
          id: 'set-device-desktop',
          command(e) {
            return e.setDevice('Desktop');
          },
          className: 'fa fa-desktop',
          active: 1,
        },
        {
          id: 'set-device-tablet',
          command(e) {
            return e.setDevice('Tablet');
          },
          className: 'fa fa-tablet',
        },
        {
          id: 'set-device-mobile',
          command(e) {
            return e.setDevice('Mobile portrait');
          },
          className: 'fa fa-mobile',
        },
      ]);
    editor.Panels.render();

    dispatch(updateEditorState(editor));
  }, []);

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
  editor_state: makeUpdateEditorState(),
  demopage_state: makeUpdateDemoPageState(),
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
