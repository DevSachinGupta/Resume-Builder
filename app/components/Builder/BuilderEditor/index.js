/**
 *
 * BuilderEditor
 *
 */

import React, { memo, useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import axios from 'axios';
import {
  makeUpdateDemoPageState,
  makeUpdateEditorState,
  makeSelectGetThemeContent,
} from 'containers/Builder/selectors';
import {
  updateTemplateNumberState,
  updateEditorState,
  getBuilderThemeContent,
} from 'containers/Builder/actions';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import './style.scss';

import { inspect } from 'util'

// import TemplateHTML from '../../CheerioComponent/templates/template_1/html.js';

// const template_number = 1;

let DemoPage = {
  html: 'blank',
  css: '{..}',
  components: null,
  style: null,
};

function BuilderEditor({ editor_state, demopageState, dispatch }) {
  // console.log(demopageState, 'This is the editor_state:Editor');
  DemoPage = demopageState || DemoPage;

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
          'https://resumebuilder.s3.ap-south-1.amazonaws.com/css/style.css', // template 2
          // 'https://resumebuilder.s3.ap-south-1.amazonaws.com/css/style-9.css', // template 9
          // 'https://resumebuilder.s3.ap-south-1.amazonaws.com/css/style-10.css', // template 10
        ],
      },
    });

    // editor.Panels.addPanel({ id: 'devices-c', el: '.deviceContainer' })
    //   .get('buttons')
    //   .add([
    //     {
    //       id: 'set-device-desktop',
    //       command(e) {
    //         return e.setDevice('Desktop');
    //       },
    //       className: 'fa fa-desktop',
    //       active: 1,
    //     },
    //     {
    //       id: 'set-device-tablet',
    //       command(e) {
    //         return e.setDevice('Tablet');
    //       },
    //       className: 'fa fa-tablet',
    //     },
    //     {
    //       id: 'set-device-mobile',
    //       command(e) {
    //         return e.setDevice('Mobile portrait');
    //       },
    //       className: 'fa fa-mobile',
    //     },
    //   ]);
    // editor.Panels.render();

    // editor.on(`component:update:content`, model => {
    //   if (editor.getSelected() === model) {
    //     console.log("Slected ", model)
    //   }
    // });

    // editor.on('change:changesCount', (editorModel, changes, changesArray) => {
    //   // const editorModel = editor.getModel();
    //   // const changes = editorModel.get('changesCount');
    //   if (changes) {
    //     const modelComponent = editor.getSelected();
    //     // console.log("component:", modelComponent )
    //     const attrs = modelComponent.getAttributes();
    //     console.log("Attr:", attrs)
    //     console.log("ChangeArray:",changesArray)
    //     console.log("ChangeArrayJSON:",JSON.stringify(changesArray))

    //     // console.log("Attr:", attrs.id)
    //     // console.log("ChangeArray:",changesArray.add)
    //     // console.log("ChangeArrayJSON:",JSON.parse(JSON.stringify(changesArray)).changes.added[0].content)
    //   } else {
    //     console.log("no changes")
    //   }
    // });

    // editor.on('change:changesCount', (editorModel, changes, changesArray) => {
    //   console.log("Slected 0", editorModel , changes, changesArray)
    // console.log("Slected 1", editorModel)
    // console.log("Slected 2", changes, changesArray, JSON.stringify(changesArray))
    // console.log("Slected 3", changesArray)
    // });
    // console.log('Global hook: component:update', model, editor.getSelected())
    dispatch(updateEditorState(editor));
  }, [demopageState]);

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
  demopageState: makeUpdateDemoPageState(),
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
