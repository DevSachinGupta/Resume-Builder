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
  updateEditorState,
  updateResumeEventHanlder,
  updateCanvasOnFirstLoad,
  handlePublishOnPaymentSuccess,
} from 'containers/Builder/actions';
import { setModalContent } from 'containers/MyContent/actions';
import Themes from 'components/Themes';
import PropTypes from 'prop-types';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import './style.scss';

const DemoPagePre = {
  html: '<p class="center">Loading...</p>',
  css: '.center {text-align: center; margin-top: 15px}',
  components: null,
  style: null,
};

function BuilderEditor({
  builderSessionState,
  showTemplateSelection,
  publishFlag,
  dispatch,
}) {
  const { projectId } = builderSessionState;
  const { addToast } = useToasts();

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
          `${builderSessionState.CSSLink}`,
          // 'https://resumebuilder.s3.ap-south-1.amazonaws.com/css/style.css', // template 2
          // 'https://resumebuilder.s3.ap-south-1.amazonaws.com/css/style-9.css', // template 9
          // 'https://resumebuilder.s3.ap-south-1.amazonaws.com/css/style-10.css', // template 10
        ],
      },
    });

    const updateAll = model => {
      model.set({ hoverable: false });
      model.get('components').each(model1 => updateAll(model1));
    };

    updateAll(editor.DomComponents.getWrapper());

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
                      projectId,
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
    // console.log("builderSessionState.autoLoadFlag:", builderSessionState.autoLoadFlag)
    if (builderSessionState.autoLoadFlag === true) {
      dispatch(updateCanvasOnFirstLoad(projectId));
      console.log('called updateCanvasOnFirstLoad');
    }

    if (publishFlag) {
      dispatch(setModalContent('publishStatus'));
    }
  }, [builderSessionState]);
  // console.log('showTemplateSelection', showTemplateSelection);
  return (
    <div>
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

const mapStateToProps = createStructuredSelector({});
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
