/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/**
 *
 * BuilderSidebar
 *
 */

import React, { memo } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FaArrowLeft } from 'react-icons/fa';
import { createStructuredSelector } from 'reselect';
import {
  toggleSecondarySidebar,
  showThemeToggle,
} from 'containers/Builder/actions';
import { setModalContent } from 'containers/MyContent/actions';
import { makeSelectIsSecondarySidebarOpen } from 'containers/Builder/selectors';
import SidebarItem from '../../Sidebar/SidebarItem';
import { primarySidebar, secondarySidebar } from './sidebarItems';
import './style.scss';

function BuilderSidebar({ isSecondarySidebarOpen, dispatch }) {
  return (
    <div className="builder-sidebar-container">
      {primarySidebar.map((item, index) => (
        <SidebarItem
          key={`sideBar-${index}`}
          icon={item.icon}
          onClick={
            // item.hasSecondary ? () => dispatch(toggleSecondarySidebar()) : null
            item.hasSecondary
              ? () => dispatch(toggleSecondarySidebar())
              //: item.id === 'myThemes'
               // ? () => dispatch(showThemeToggle())
                : item.id === 'myProject'
                ? 
                  () => {dispatch(showThemeToggle());console.log("open project ")}
                  // dispatch save session and call history
                
                : () => dispatch(setModalContent(item.id))
          }
          title={item.title}
        />
      ))}
      {isSecondarySidebarOpen && (
        <div className={cx('secondarySidebar')}>
          <div className={cx('header', 'border-b border-gray-200')}>
            <div
              className={cx('backButton')}
              onClick={() => dispatch(toggleSecondarySidebar())}
            >
              <FaArrowLeft />
            </div>
            <div>My Content</div>
          </div>
          {secondarySidebar.map(item => (
            <SidebarItem
              key={item.id}
              onClick={() => dispatch(setModalContent(item.id))}
              title={item.title}
              {...item}
            />
          ))}
        </div>
      )}
    </div>
  );
}

BuilderSidebar.propTypes = {
  isSecondarySidebarOpen: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};
const mapStateToProps = createStructuredSelector({
  isSecondarySidebarOpen: makeSelectIsSecondarySidebarOpen(),
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
export default withCompose(BuilderSidebar);
