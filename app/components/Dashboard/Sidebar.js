/**
 *
 * Sidebar
 *
 */

import React, { memo } from 'react';
import { IoMdSearch } from 'react-icons/io';
import RadioFilter from './RadioFilter';
import CheckboxFilter from './CheckboxFilter';
import RatingFilter from './RatingFilter';
import Button from '../Button';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Sidebar(props) {
  return (
    <div>
      <div className="mb-4">
        <div className="border-2 border-gray-300 bg-white rounded-lg relative mx-auto  text-gray-600 focus:outline-none">
          <input
            className="w-full rounded-lg h-10 px-2 text-sm "
            type="search"
            name="search"
            placeholder="Search here..."
          />
          <span>
            <button type="submit" className="absolute right-0 mt-2 mr-4">
              <IoMdSearch size={22} class="bg-white " />
            </button>
          </span>
        </div>
      </div>
      <div className="mb-4">
        <RadioFilter updateFilter={props.updateFilter}/>
      </div>
      <div className="mb-4">
        <CheckboxFilter updateFilter={props.updateFilter} />
      </div>
      <div className="mb-4">
        <RatingFilter updateFilter={props.updateFilter}/>
      </div>
      <div className="mb-4">
        <Button
          className="mt-3 text-base font-medium bg-blue-500 w-full text-white rounded-lg px-6 py-2 block shadow-lg hover:text-white hover:bg-blue-800"
          onClick={e => {
            props.updateFilter('clearFilter', '');
          }}
        >
          Clear All Filters
        </Button>
      </div>
    </div>
  );
}

Sidebar.propTypes = {};

export default memo(Sidebar);
