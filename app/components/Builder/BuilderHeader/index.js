/**
 *
 * BuilderHeader
 *
 */

import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import cx from 'classnames';
import np from 'nprogress';
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { GoThreeBars } from 'react-icons/go';
import { FaUserCircle, FaMobileAlt } from 'react-icons/fa';
import { IoIosDesktop, IoIosTabletPortrait } from 'react-icons/io';
import { toggleHeaderUserMenu } from 'containers/App/actions';
import {
  makeSelectIsUserMenuOpen,
  makeSelectGetUserIsAuthenticated,
  makeSelectGetCurrentUserData,
} from 'containers/App/selectors';
import { setModalContent } from 'containers/MyContent/actions';
import { makeUpdateEditorState } from 'containers/Builder/selectors';

import {
  toggleSidebar,
  updateSessionArrayInsert,
} from '../../../containers/Builder/actions';
import { getUserLogout } from '../../../containers/Authenticate/actions';
import Button from '../../Button';
import './progress.css';
import './style.scss';
import apiClient from '../../../utils/app/API';

function BuilderHeader({
  dispatch,
  isHeaderMenuOpen,
  editorState,
  user,
  userData,
  projectId,
}) {
  useEffect(() => {
    np.configure({
      showSpinner: false,
      easing: 'ease',
    });
    // np.start({});
  }, []);
  const { addToast } = useToasts();
  console.log('BuilderHeader userData:', projectId, userData);
  let projectName = '';
  if (userData.siteProjects) {
    projectName = userData.siteProjects.filter(
      item => item.projectId === projectId,
    )[0].projectName;
  }
  const saveBuilderSession = (editor, projectId) => {
    const templateHTML = editor.getHtml();
    const templateCSS = editor.getCss();
    const templateJS = '';

    apiClient
      .post('builder/saveBuilderSession', {
        templateHTML,
        templateCSS,
        templateJS,
        projectId,
      })
      .then(response => {
        if (response.status === 200) {
          addToast('Save successfully!', { appearance: 'info' });
          dispatch(
            updateSessionArrayInsert(projectId, {
              templateCSS,
              templateHTML,
              templateJS,
              autoLoadFlag: false,
            }),
          );
          console.log('succesfully submit your request.', response);
        } else {
          addToast('Issue while saving! Please try later.', {
            appearance: 'error',
          });
          console.log('Something went wrong while submitting: ', response);
        }
      })
      .catch(error => {
        addToast('Issue while saving! Please try later.', {
          appearance: 'error',
        });
        console.log('saveBuilderSession error: ', error);
      });
  };
  return (
    <div className="header-container flex bg-white border-b border-gray-200 inset-x-0 z-100 h-16 items-center shadow-lg">
      <div className="flex flex-row items-center justify-right">
        <Button
          handleRoute
          iconButton
          circular
          type=""
          onClick={() => dispatch(toggleSidebar())}
        >
          <GoThreeBars size={22} />
        </Button>
        <span className="ml-2 truncate text-xl max-w-xs">
          {projectName ? <span>{projectName}</span> : <></>}
        </span>
      </div>
      <div className={cx('deviceContainer')}>
        <div className="panel__top">
          <div className="w-1/4 flex items-center ">
            <button
              type="button"
              className="border-r-2 pr-2"
              onClick={() => {
                editorState.setDevice('Desktop');
              }}
            >
              <IoIosDesktop size={30} class="" />
            </button>
            <button
              type="button"
              className="border-r-2 pr-2 pl-2"
              onClick={() => {
                editorState.setDevice('Tablet');
              }}
            >
              <IoIosTabletPortrait size={30} class=" " />
            </button>
            <button
              type="button"
              className="pl-2"
              onClick={() => {
                editorState.setDevice('Mobile portrait');
              }}
            >
              <FaMobileAlt size={30} class="" />
            </button>
          </div>

          {/* <div className="panel__basic-actions" /> */}
        </div>
      </div>
      <div className={cx('actionContainer')}>
        <div className={cx('publishButton')}>
          {/* <Link
            to={{
              pathname: '/preview/vefe',
              aboutProps: {
                BuilderData: 'editorState',
              },
            }}
            // target="_blank"
            className="flex text-gray-700 border-black border px-2 py-1 text-sm hover:border-teal-400 hover:text-black"
          >
            Preview
          </Link> */}
          <Button onClick={() => dispatch(toggleSidebar())}>Preview</Button>
        </div>
        <div className={cx('publishButton')}>
          <Button onClick={() => saveBuilderSession(editorState, projectId)}>
            Save
          </Button>
        </div>
        <div className={cx('publishButton')}>
          <Button onClick={() => dispatch(setModalContent('publish'))}>
            Publish
          </Button>
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
              <li
                onClick={() => {
                  dispatch(getUserLogout());
                  dispatch(toggleHeaderUserMenu());
                }}
              >
                Logout
              </li>
              <li>
                <Link
                  to="settings"
                  target="_blank"
                  className="no-underline  pr-3"
                >
                  Settings
                </Link>
              </li>
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
    user: makeSelectGetUserIsAuthenticated(),
    userData: makeSelectGetCurrentUserData(),
  }),
  null,
);
export default compose(
  withConnect,
  memo,
)(BuilderHeader);
