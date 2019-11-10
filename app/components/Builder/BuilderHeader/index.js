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
import { GoThreeBars } from 'react-icons/go';
import Button from '../../Button';
import { toggleSidebar } from '../../../containers/Builder/actions';
import './style.css';
function BuilderHeader({ dispatch }) {
  return (
    <div className="header-container flex bg-white border-b border-gray-200 inset-x-0 z-100 h-16 items-center">
      <Button
        handleRoute
        iconButton
        circular
        type="button"
        onClick={() => dispatch(toggleSidebar())}
      >
        <GoThreeBars />
      </Button>
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
