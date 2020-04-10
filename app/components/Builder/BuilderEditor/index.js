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
  makeUpdateResumeJSONState,
  makeSelectGetThemeContent,
} from 'containers/Builder/selectors';
import {
  updateTemplateNumberState,
  updateEditorState,
  updateResumeJSONState,
  getBuilderThemeContent,
} from 'containers/Builder/actions';

import { updateRseumeJSONState } from 'components/Builder/BuilderEditor/ComponentEditor';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import './style.scss';

import { inspect } from 'util';

// import TemplateHTML from '../../CheerioComponent/templates/template_1/html.js';

// const template_number = 1;

let DemoPage = {
  html: 'blank',
  css: '{..}',
  components: null,
  style: null,
};

function BuilderEditor({
  editor_state,
  demopageState,
  resumeJSONState,
  dispatch,
}) {
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

    editor.on('change:changesCount', (editorModel, changes, changesArray) => {
      if (changes) {
        if (changesArray.add) {
          if (changesArray.add === true) {
            const modelComponent = editor.getSelected();
            if (modelComponent) {
              const attrs = modelComponent.getAttributes();
              const { content } = JSON.parse(
                JSON.stringify(changesArray),
              ).changes.added[0];
              // console.log('ADD:', attrs.id, content);
              const sectionId = attrs.id.split('_')[0];
              const fieldIndex = attrs.id.split('_')[1];
              const fieldId = attrs.id.split('_').slice(-1)[0];
              console.log('add updateResume ', sectionId, fieldIndex, fieldId, content);
              if (sectionId && fieldId) {
                // form list from store
                const storeData = resumeJSONState[`${sectionId}`];
                console.log('store data:', resumeJSONState);
                if (storeData) {
                  // const dataJSON = "{ `${sectionId}`: { history: { `${sectionId}`: { `${sectionId}`: content} } } }"
                  console.log('store data update:', storeData, `${sectionId}.history.${fieldIndex}.${fieldId}`);
                  dispatch(updateResumeJSONState(content, `${sectionId}.history.${fieldIndex}.${fieldId}`));
                }
              }
              // updateRseumeJSONState(attrs, content, []);
            }
          } else {
            console.log(' remove or merged: ', changesArray);
          }
        }
      } else {
        // console.log('no changes');
      }
    });
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
  resumeJSONState: makeUpdateResumeJSONState(),
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
