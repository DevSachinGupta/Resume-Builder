/**
 *
 * BuilderLayout
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import BuilderSidebar from 'components/Builder/BuilderSidebar';
import BuilderHeader from 'components/Builder/BuilderHeader';
function BuilderLayout(props) {
  return (
    <div>
      <div className="">
        <BuilderSidebar />
      </div>
      <div className="">
        <BuilderHeader />
      </div>
      <div>{props.children}</div>
    </div>
  );
}

BuilderLayout.propTypes = {
  children: PropTypes.object,
};

export default memo(BuilderLayout);
