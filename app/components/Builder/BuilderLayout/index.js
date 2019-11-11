/**
 *
 * BuilderLayout
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import cx from 'classnames';
import BuilderSidebar from 'components/Builder/BuilderSidebar';
import BuilderHeader from 'components/Builder/BuilderHeader';
import { makeSelectIsSidebarOpen } from 'containers/Builder/selectors';
import './style.scss';
function BuilderLayout({ isSidebarOpen, ...rest }) {
  return (
    <div className={cx('builderLayout')}>
      <BuilderHeader />
      <div className={cx('appContainer')}>
        {isSidebarOpen && (
          <div className={cx('sidebarContainer', 'border-r border-gray-200')}>
            <BuilderSidebar />
          </div>
        )}
        <div className={cx('editorContainer')}>{rest.children}</div>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isSidebarOpen: makeSelectIsSidebarOpen(),
});
BuilderLayout.propTypes = {
  children: PropTypes.node,
  isSidebarOpen: PropTypes.bool.isRequired,
};
const withConnect = connect(
  mapStateToProps,
  null,
);
export default compose(
  withConnect,
  memo,
)(BuilderLayout);
