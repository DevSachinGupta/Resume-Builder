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
  makeUpdateShowThemeToggle,
} from 'containers/Builder/selectors';
import {
  updateEditorState,
  getBuilderThemeContent,
  updateResumeEventHanlder,
  getBuilderThemeContentTest,
} from 'containers/Builder/actions';
import Themes from 'components/Themes';
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

function BuilderEditor({ demopageState, showTemplateSelection, dispatch }) {
  DemoPage = demopageState || DemoPage;
  const [showEditorPanel, setShowEditorPanel] = useState(0);
  useEffect(() => {
    console.log('getBuilderThemeCt');
    dispatch(getBuilderThemeContentTest(setShowEditorPanel));
  }, []);
  // const response = await dispatch(getBuilderThemeContentTest())
  console.log('getBuilderThemeContentTestoutput: ', showEditorPanel);
  useEffect(() => {
    console.log('getBuilderThemeContentTestoutput effect: ', showEditorPanel);
  }, [showEditorPanel]);
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
            visible: false,
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
              if (attrs.id) {
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
            }
          } else {
            console.log(' remove or merged: ', changesArray);
          }
        }
      } else {
        // console.log('no changes');
      }
    });

    // console.log("show editor",showEditorPanel)
    if (true) {
      setShowEditorPanel(1);
      const PanelObject = editor.Panels.getPanels();
      // console.log("Panels Lsit1 panels:", editor.Panels.getPanels());
      // console.log("Panels Lsit1 panels:", PanelObject.where({id:'devices-c'}));

      const nodes = document.querySelectorAll('.deviceContainer'); // .forEach(e => e.parentNode.removeChild(e));
      // console.log("nodes: ", nodes[0].childNodes)
      // nodes[0].childNodes.forEach(e => console.log("child:",  e.parentNode.removeChild(e)));
      // console.log("nodes: ", nodes)
      // PanelObject.remove({id:'devices-c'})
      // console.log("Panels Lsit1 panels:", PanelObject.remove({id:'devices-c'}));
      // console.log("Panels Lsit1:", editor.Panels.getPanels());
      // editor.Panels.removePanel('devices-c');
      // console.log("Panels Lsit:", editor.Panels.getPanels());
      // editor.Panels.removeButton('devices-c' , 'set-device-desktop' );
      // editor.Panels.removeButton('devices-c' , 'set-device-desktop' );
      // editor.Panels.removeButton('devices-c' , 'set-device-desktop' );
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
      // console.log("Panels Lsit2 button:", editor.Panels.getButton("devices-c", "set-device-desktop"));
      // console.log("Panels Lsit2 panels:", editor.Panels.getPanels());

      dispatch(updateEditorState(editor));
      // const iframe = document.getElementsByClassName('gjs-frame')[0];
      // console.log("iframe data: ", iframe)
      // if (iframe) {
      //   console.log("iframe height: ",iframe.contentWindow.document.documentElement.scrollHeight)
      //   iframe.style.height = `${
      //     iframe.contentWindow.document.documentElement.scrollHeight
      //   }px`;
      //   // console.log("iframe height: ", iframe.contentWindow.document.body.scrollHeight)
      //   iframe.onload = function() {
      //     iframe.style.height = `${
      //       iframe.contentWindow.document.documentElement.scrollHeight
      //     }px`;
      //   };
      // }
    }
  }, [DemoPage]);
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
