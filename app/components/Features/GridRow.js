/**
 *
 * GridRow
 *
 */

import React, { memo } from 'react';
import cx from 'classnames';
import Select from 'react-dropdown-select';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function GridRow(props) {
  const options = [
    {id:1, name:'Lowest Price'},
    {id:0, name:'Highest Price'},
    {id:2, name:'Lowest Rating'},
    {id:3, name:'Highest Rating'},
  ];
  return (
    <div className="flex text-center justify-end my-auto GridRow">
      <div className="ml-3 featureDropdown">
        <Select
          placeholder="Default"
          className="border-0"
          labelField="name"
          searchable={false}
          options={options}
          values={[]}
          onChange={value => {
            props.updateFilter('sortOrder', value[0].id);
          }}
        />
      </div>
      {/* <div className="ml-3 GridRowDropdown">
        <div className="group inline-block">
          <button
            type="button"
            className="outline-none focus:outline-none px-3 py-1 bg-transparent flex items-center min-w-32"
          >
            <span className="pr-1 font-semibold flex-1">Default</span>
            <span>
              <svg
                className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </span>
          </button>
          <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32">
            <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
              Lowest Price
            </li>
            <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
              Highest Price
            </li>
          </ul>
        </div>
      </div> */}
      <div className="bg-gray-200 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex">
        <button
          type="button"
          onClick={props.switchLayoutView}
          value="Grid"
          className={cx(
            'inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-4 py-2',
            { activeGrid: props.layoutView === 'Grid' },
          )}
          id="grid"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="fill-current w-4 h-4 mr-2"
          >
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
          <span>Grid</span>
        </button>
        <button
          type="button"
          onClick={props.switchLayoutView}
          value="List"
          className={cx(
            'inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-4 py-2',
            { activeGrid: props.layoutView === 'List' },
          )}
          id="list"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="fill-current w-4 h-4 mr-2"
          >
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
          </svg>
          <span>List</span>
        </button>
      </div>
    </div>
  );
}

GridRow.propTypes = {};

export default memo(GridRow);
