/**
 *
 * BuilderTopbar
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function BuilderTopbar() {
  return (
    <div className="panel__top">
      <div className="panel__basic-actions" />
      <div className="panel__devices" />
    </div>
  );
}

BuilderTopbar.propTypes = {};

export default memo(BuilderTopbar);
