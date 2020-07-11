/**
 *
 * BodyLayout
 *
 */

import React, { memo } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';
import GridRow from './GridRow';
import CardGrid from './CardGrid';
import CardList from './CardList';
import ListFooter from './ListFooter';
// import styled from 'styled-components';

function BodyLayout(props) {
  const [layoutView, setLayoutView] = React.useState('Grid');
  const switchLayoutView = e => {
    setLayoutView(e.currentTarget.value);
  };

  return (
    <div>
      <div className="mb-4">
        <GridRow
          updateFilter={props.updateFilter}
          switchLayoutView={switchLayoutView}
          layoutView={layoutView}
        />
      </div>
      <div className="mb-4">
        {layoutView === 'Grid' ? (
          <CardGrid
            templateItems={props.templateItems}
            updateTemplateNumber={props.updateTemplateNumber}
            dispatch={props.dispatch}
          />
        ) : (
          <CardList
            templateItems={props.templateItems}
            updateTemplateNumber={props.updateTemplateNumber}
            dispatch={props.dispatch}
          />
        )}
      </div>
      <div className="mb-4">
        <ListFooter
          updateFilter={props.updateFilter}
          pageNumber={props.filters.pageNumber}
          pagesize={props.filters.pagesize}
          filteredItemCount={props.filteredItemCount}
        />
      </div>
    </div>
  );
}

BodyLayout.propTypes = {
  templateItems: PropTypes.object,
  updateFilter: PropTypes.func,
  filters: PropTypes.object,
  filteredItemCount: PropTypes.number,
};

export default memo(BodyLayout);
