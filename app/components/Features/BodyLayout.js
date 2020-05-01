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

function BodyLayout(props) {
  const [layoutView, setLayoutView] = React.useState('Grid');
  const switchLayoutView = e => {
    console.log('view', e.currentTarget.value, layoutView);
    console.log('view', e);
    setLayoutView(e.currentTarget.value);
  };

  return (
    <div>
      <div className="mb-4">
        <GridRow switchLayoutView={switchLayoutView} layoutView={layoutView} />
      </div>
      <div className="mb-4">
        {layoutView === 'Grid' ? (
          <CardGrid templateItems={props.templateItems} />
        ) : (
          <CardList templateItems={props.templateItems} />
        )}
      </div>
      <div className="mb-4">
        <ListFooter />
      </div>
    </div>
  );
}

BodyLayout.propTypes = {};

export default memo(BodyLayout);
