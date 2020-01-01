/**
 *
 * BuilderHeader
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import cx from 'classnames';
import np from 'nprogress';
import { createStructuredSelector } from 'reselect';
import { GoThreeBars } from 'react-icons/go';
import { FaUserCircle } from 'react-icons/fa';
import { toggleHeaderUserMenu } from 'containers/App/actions';
import { makeSelectIsUserMenuOpen } from 'containers/App/selectors';
import {
  makeUpdateResumeJSONState,
  makeUpdateTemplateNumberState,
  makeUpdateEditorState,
} from 'containers/Builder/selectors';
import Button from '../../Button';
import { toggleSidebar } from '../../../containers/Builder/actions';
import './progress.css';
import './style.scss';

function BuilderHeader({
  isHeaderMenuOpen,
  editorState,
  resumeJSONState,
  templateNumberState,
  dispatch,
}) {
  useEffect(() => {
    np.configure({
      showSpinner: false,
      easing: 'ease',
    });
    // np.start({});
  }, []);

  const handlePublish = () => {
    const dataSet = {};
    dataSet.registeredEmail = 'test004';
    dataSet.bucketName = 'test004';
    dataSet.resumeJSON = resumeJSONState;
    dataSet.templateNumber = templateNumberState;
    dataSet.templateHTML = editorState.getHtml();
    dataSet.templateCSS = editorState.getCss();

    fetch('http://localhost:2000/builder/publish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataSet),
    })
      .then(response => {
        response.json().then(body => {
          console.log('return data: ', body);
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSave = () => {
    const dataSet = {};
    dataSet.registeredEmail = 'test006';
    dataSet.bucketName = 'test004';
    dataSet.resumeJSON = resumeJSONState;
    dataSet.templateNumber = templateNumberState;
    dataSet.templateHTML = editorState.getHtml();
    dataSet.templateCSS = editorState.getCss();

    fetch('http://localhost:2000/builder/storeSession', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataSet),
    })
      .then(response => {
        response.json().then(body => {
          console.log('return data: ', body);
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handlePreview = () => {
    const data = new FormData();
    data.append('UserName', 'test004');
    data.append('TemplateNumber', templateNumberState);
    data.append('TemplateHTML', editorState.getHtml());
    data.append('TemplateCSS', editorState.getCss());

    fetch('http://35.232.22.82:3001/preview', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: data,
    })
      .then(response => {
        response.json().then(body => {
          console.log('return data: ', body);
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="header-container flex bg-white border-b border-gray-200 inset-x-0 z-100 h-16 items-center shadow-lg">
      <Button
        handleRoute
        iconButton
        circular
        type=""
        onClick={() => dispatch(toggleSidebar())}
      >
        <GoThreeBars size={22} />
      </Button>
      <div className={cx('actionContainer')}>
        <div className={cx('publishButton')}>
          <Button onClick={handlePreview}>Preview</Button>
        </div>
        <div className={cx('publishButton')}>
          <Button onClick={handleSave}>Save</Button>
        </div>
        <div className={cx('publishButton')}>
          <Button onClick={handlePublish}>Publish</Button>
        </div>
        <div className={cx('navAccountPill')}>
          <FaUserCircle
            onClick={() => dispatch(toggleHeaderUserMenu())}
            size={24}
          />
          <div
            className={cx('accountMenu', 'bg-white', 'rounded', 'shadow', {
              hideMenu: !isHeaderMenuOpen,
            })}
          >
            <ul>
              <li>Login</li>
              <li>Settings</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

BuilderHeader.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isHeaderMenuOpen: PropTypes.bool.isRequired,
};
const withConnect = connect(
  createStructuredSelector({
    isHeaderMenuOpen: makeSelectIsUserMenuOpen(),
    editorState: makeUpdateEditorState(),
    resumeJSONState: makeUpdateResumeJSONState(),
    templateNumberState: makeUpdateTemplateNumberState(),
  }),
  null,
);
export default compose(
  withConnect,
  memo,
)(BuilderHeader);
