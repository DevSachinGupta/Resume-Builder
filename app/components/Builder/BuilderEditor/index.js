/**
 *
 * BuilderEditor
 *
 */

import React, { memo, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import style from './style.css';
import Sidebar from '../BuilderSidebar/Loadable';
import grapesjs from 'grapesjs';
function BuilderEditor() {
  let editor = null;
  useEffect(() => {
    if (!editor) {
      editor = grapesjs.init({
        container: '#gjs',
        fromElement: true,
        width: '80vw',
        storageManager: { type: null },
        panels: {
          defaults: [
            {
              id: 'panel-devices',
              el: '.panel__devices',
              buttons: [
                {
                  id: 'device-desktop',
                  label: 'D',
                  command: 'set-device-desktop',
                  active: true,
                  togglable: false,
                },
                {
                  id: 'device-mobile',
                  label: 'M',
                  command: 'set-device-mobile',
                  togglable: false,
                },
              ],
            },
          ],
        },
        deviceManager: {
          devices: [
            {
              name: 'Desktop',
              width: '', // default size
            },
            {
              name: 'Mobile',
              width: '320px', // this value will be used on canvas width
              widthMedia: '480px', // this value will be used in CSS @media
            },
          ],
        },
      });
      editor.Panels.addPanel({
        id: 'panel-top',
        el: '.panel__top',
      });
      editor.Panels.addPanel({
        id: 'basic-actions',
        el: '.panel__basic-actions',
        buttons: [
          {
            id: 'visibility',
            active: true, // active by default
            className: 'btn-toggle-borders',
            label: '<u>B</u>',
            command: 'sw-visibility', // Built-in command
          },
        ],
      });
      editor.Commands.add('set-device-desktop', {
        run: editor => editor.setDevice('Desktop'),
      });
      editor.Commands.add('set-device-mobile', {
        run: editor => editor.setDevice('Mobile'),
      });
    }
  }, []);
  return (
    <div>
      <Sidebar />
      <div class="panel__top">
        <div class="panel__basic-actions" />
        <div class="panel__devices" />
      </div>
      <div id="gjs" className="editor-container">
        <h1>Hello World Component!</h1>
      </div>
    </div>
  );
}

BuilderEditor.propTypes = {};

export default memo(BuilderEditor);
