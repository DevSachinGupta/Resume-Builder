/**
 *
 * BodyLayout
 *
 */

import React, { memo } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import GridRow from './GridRow';
import CardGrid from './CardGrid';
import CardList from './CardList';
import ListFooter from './ListFooter';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function BodyLayout() {
  return (
    <div>
      <div className="mb-4">
        <GridRow />
      </div>
      <div className="mb-4">
        <CardGrid />
      </div>
      <div className="mb-4">
        <CardList />
      </div>
      <div className="mb-4">
        <ListFooter />
      </div>
    </div>
  );
}

BodyLayout.propTypes = {};

export default memo(BodyLayout);
