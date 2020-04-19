/**
 *
 * BuilderEditor
 *
 */

import React, { memo, useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeUpdateDemoPageState,
  makeUpdateResumeJSONState,
  makeSelectGetThemeContent,
} from 'containers/Builder/selectors';
import {
  updateEditorState,
  getBuilderThemeContent,
  updateResumeEventHanlder,
} from 'containers/Builder/actions';

import PropTypes from 'prop-types';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import './style.scss';

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
  // let editor;
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
        defaults: [
          {
            id: 'devices-c',
            el: '.deviceContainer',
            visible: true,
            buttons: [
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
            ],
          },
        ],
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
              const sectionId = attrs.id.split('_')[0];
              const fieldIndex = attrs.id.split('_')[1];
              const fieldId = attrs.id.split('_').slice(-1)[0];
              console.log(
                'add updateResume ',
                sectionId,
                fieldIndex,
                fieldId,
                content,
              );
              if (sectionId && fieldId) {
                dispatch(
                  updateResumeEventHanlder(
                    sectionId,
                    fieldId,
                    fieldIndex,
                    content,
                  ),
                );
              }
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
  }, [DemoPage]);
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
  // editor_state: makeUpdateEditorState(),
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
