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
import { toggleSecondarySidebar } from 'containers/Builder/actions';
import { toggleModal } from 'containers/App/actions';
import { makeSelectIsSecondarySidebarOpen } from 'containers/Builder/selectors';
import SidebarItem from '../../Sidebar/SidebarItem';
import { primarySidebar, secondarySidebar } from './sidebarItems';
import './style.scss';

function BuilderSidebar({ isSecondarySidebarOpen, dispatch }) {
  return (
    <div className="builder-sidebar-container">
      {primarySidebar.map(item => (
        <SidebarItem
          onClick={
            item.hasSecondary ? () => dispatch(toggleSecondarySidebar()) : null
          }
          title={item.title}
        />
      ))}
      {isSecondarySidebarOpen && (
        <div className={cx('secondarySidebar')}>
          <div className={cx('header', 'border-b border-gray-200')}>
            <div className={cx('backButton')}>
              <FaArrowLeft onClick={() => dispatch(toggleSecondarySidebar())} />
            </div>
            <div>My Content</div>
          </div>
          {secondarySidebar.map(item => (
            <SidebarItem
              onClick={() => dispatch(toggleModal())}
              title={item.title}
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
