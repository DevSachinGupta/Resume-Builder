/**
 *
 * BuilderHeader
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { toggleSidebar } from '../../../containers/Builder/actions';
import './style.css';
function BuilderHeader({ dispatch }) {
  return (
    <div className="header-container flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center">
      <button type="button" onClick={() => dispatch(toggleSidebar())}>
        TOGGLE SIDEBAR
      </button>
    </div>
  );
}

BuilderHeader.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
const withConnect = connect(
  null,
  null,
);
export default compose(
  withConnect,
  memo,
)(BuilderHeader);
