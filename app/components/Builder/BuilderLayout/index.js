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
function BuilderLayout({ isSidebarOpen }) {
  return (
    <div className={cx('builderLayout')}>
      <div className={cx('sidebarContainer')}>
        {isSidebarOpen && <BuilderSidebar />}
      </div>
      <div className="">
        <BuilderHeader />
      </div>
      {/* <div>{props.children}</div> */}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isSidebarOpen: makeSelectIsSidebarOpen(),
});
BuilderLayout.propTypes = {
  // children: PropTypes.object,
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
