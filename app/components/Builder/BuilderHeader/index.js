/**
 *
 * BuilderHeader
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './style.css';
function BuilderHeader() {
  return (
    <div className="header-container flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center">
      I AM HEADER
    </div>
  );
}

BuilderHeader.propTypes = {};

export default memo(BuilderHeader);
