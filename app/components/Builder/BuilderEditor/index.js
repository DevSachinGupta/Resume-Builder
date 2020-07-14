/**
 *
 * BuilderEditor
 *
 */

import React, { memo, useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useToasts } from 'react-toast-notifications';
import {
  makeUpdateDemoPageState,
  makeUpdateResumeJSONState,
  makeSelectGetThemeContent,
  makeUpdateShowThemeToggle,
} from 'containers/Builder/selectors';
import {
  updateEditorState,
  getBuilderThemeContent,
  updateResumeEventHanlder,
} from 'containers/Builder/actions';
import Themes from 'components/Themes';
import PropTypes from 'prop-types';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import './style.scss';

const DemoPagePre = {
  html: '',
  css: '{..}',
  components: null,
  style: null,
};

function BuilderEditor({
  builderSessionState,
  demopageState,
  showTemplateSelection,
  dispatch,
}) {
  console.log('builderSessionState Builder: ', builderSessionState);
  const { projectId } = builderSessionState;
  const { addToast } = useToasts();
  // DemoPage = demopageState || DemoPage;
  useEffect(() => {
    const editor = grapesjs.init({
      container: '#gjs',
      // width: '82vw',
      width: '100%',
      // height: 'calc(100vh - 64px)',
      components: builderSessionState.templateHTML || DemoPagePre.html,
      style: builderSessionState.templateCSS || DemoPagePre.css,
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
              if (attrs.id) {
                const sectionId = attrs.id.split('_')[0];
                const fieldIndex = attrs.id.split('_')[1];
                const fieldId = attrs.id.split('_').slice(-1)[0];
                if (sectionId && fieldId) {
                  dispatch(
                    updateResumeEventHanlder(
                      sectionId,
                      fieldId,
                      fieldIndex,
                      content,
                      addToast,
                    ),
                  );
                }
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
  }, [builderSessionState]);
  // console.log('showTemplateSelection', showTemplateSelection);
  return (
    <div>
      {showTemplateSelection ? (
        <div id="myTheme" className="mytheme-container hbjh">
          <Themes />
        </div>
      ) : null}
      <div
        id="gjs"
        className="editor-container"
        hidden={showTemplateSelection}
      />
    </div>
  );
}

BuilderEditor.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  demopageState: makeUpdateDemoPageState(),
  showTemplateSelection: makeUpdateShowThemeToggle(),
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
