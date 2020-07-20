/**
 *
 * TemplateContainer
 *
 */

import React, { memo } from 'react';
import DotsLoading from '../LoadingIndicator/dotsLoading';
import CardGrid from './CardGrid';
import CardList from './CardList';
import GridRow from './GridRow';

// import PropTypes from 'prop-types';

function TemplateContainer({
  currentPricing,
  selectPricing,
  updateFilter,
  switchLayoutView,
  layoutView,
  currentCategory,
  selectCategory,
  loadingStatus,
  templateList,
  selectedTemplate,
  setSelectedTemplate,
  selectTemplateOny,
  switchTemplate,
  dispatch,
}) {
  return (
    <div className="flex-items w-full shadow-md border-2 border-gray-300 ">
      <div className="mx-1 flex justify-between">
        <nav className="flex flex-col sm:flex-row">
          {['All', 'Free', 'Premium'].map(item => {
            const itemsClassName =
              currentPricing === item
                ? 'text-gray-600 px-2 py-1  block hover:text-blue-500 focus:outline-none text-blue-500 border-b border-blue-500'
                : 'text-gray-600 px-2 py-1  block hover:text-blue-500 focus:outline-none';

            return (
              <button
                type="button"
                onClick={ev => selectPricing(ev, item)}
                className={itemsClassName}
              >
                {item}
              </button>
            );
          })}
        </nav>
        <div className="mt-1">
          <GridRow
            updateFilter={updateFilter}
            switchLayoutView={switchLayoutView}
            layoutView={layoutView}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <nav className="flex flex-col sm:flex-row">
          {['Show All', 'Classic', 'Modern', 'professional'].map(item => {
            const itemsClassName =
              currentCategory === item
                ? 'text-gray-600 py-2 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500'
                : 'text-gray-600 py-2 px-6 block hover:text-blue-500 focus:outline-none';

            return (
              <button
                type="button"
                onClick={ev => selectCategory(ev, item)}
                className={itemsClassName}
              >
                {item}
              </button>
            );
          })}
        </nav>
      </div>
      <div className="mb-4 mx-2">
        {loadingStatus === true ? (
          <div>
            <DotsLoading loadingText="Loading..." />
          </div>
        ) : (
          <div>
            {layoutView === 'Grid' ? (
              <CardGrid
                templateItems={templateList}
                selectedTemplate={selectedTemplate}
                setSelectedTemplate={setSelectedTemplate}
                selectTemplateOny={selectTemplateOny}
                switchTemplate={switchTemplate}
                dispatch={dispatch}
              />
            ) : (
              <CardList
                templateItems={templateList}
                selectedTemplate={selectedTemplate}
                setSelectedTemplate={setSelectedTemplate}
                selectTemplateOny={selectTemplateOny}
                switchTemplate={switchTemplate}
                dispatch={dispatch}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

TemplateContainer.propTypes = {};

export default memo(TemplateContainer);
