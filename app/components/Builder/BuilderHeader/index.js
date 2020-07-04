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
import axios from 'axios';
import np from 'nprogress';
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { GoThreeBars } from 'react-icons/go';
import { FaUserCircle, FaMobileAlt } from 'react-icons/fa';
import { IoIosDesktop, IoIosTabletPortrait } from 'react-icons/io';
import { toggleHeaderUserMenu } from 'containers/App/actions';
import { makeSelectIsUserMenuOpen } from 'containers/App/selectors';
import { setModalContent } from 'containers/MyContent/actions';
import { makeUpdateEditorState } from 'containers/Builder/selectors';
import { toggleSidebar } from '../../../containers/Builder/actions';
import { getUserLogout } from '../../../containers/Authenticate/actions';
import Button from '../../Button';
import './progress.css';
import './style.scss';

function BuilderHeader({ dispatch, isHeaderMenuOpen, editorState }) {
  useEffect(() => {
    np.configure({
      showSpinner: false,
      easing: 'ease',
    });
    // np.start({});
  }, []);
  const { addToast } = useToasts();

  const saveBuilderSession = editor => {
    const HTMLCode = editor.getHtml();
    const CSSCode = editor.getCss();
    const JSCode = '';
    console.log('HTML Code: ', HTMLCode);
    console.log('CSS Code: ', CSSCode);

    axios
      .post(
        'http://localhost:2000/builder/saveBuilderSession',
        {
          HTMLCode,
          CSSCode,
          JSCode,
        },
        { withCredentials: true },
      )
      .then(response => {
        if (response.status === 200) {
          addToast('Save successfully!', { appearance: 'info' });
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
      <Button
        handleRoute
        iconButton
        circular
        type=""
        onClick={() => dispatch(toggleSidebar())}
      >
        <GoThreeBars size={22} />
      </Button>
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
          <Button onClick={() => saveBuilderSession(editorState)}>Save</Button>
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
              <li
                onClick={() => {
                  dispatch(toggleHeaderUserMenu());
                  dispatch(setModalContent('setting'));
                }}
              >
                Settings
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
  }),
  null,
);
export default compose(
  withConnect,
  memo,
)(BuilderHeader);
