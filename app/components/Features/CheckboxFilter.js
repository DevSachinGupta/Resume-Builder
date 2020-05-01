/**
 *
 * CheckboxFilter
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function CheckboxFilter(props) {
  const categoryFieldValues = [
    { key: '0', value: 'Classic' },
    { key: '1', value: 'Modern' },
    { key: '2', value: 'Passion' },
    { key: '3', value: 'Stylish' },
    { key: '4', value: 'Timeliner' },
  ];
  return (
    <div>
      <div className="w-full mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="bg-white shadow-md rounded-lg px-2 py-2">
              <div className="block text-gray-700 text-lg font-semibold py-2 px-2">
                Category
              </div>
              <div className="pb-3 text-sm">
                {categoryFieldValues.map(item => (
                  <label
                    htmlFor={item.key}
                    className="flex justify-start text-gray-700 hover:text-blue-400 hover:bg-blue-100 cursor-pointer rounded-md px-2 pt-2"
                  >
                    <div className="">
                      <input
                        type="checkbox"
                        name="priceFilter"
                        value={item.key}
                        id={item.key}
                        onChange={e => {
                          props.updateFilter('category', e.currentTarget.value);
                        }}
                      />
                    </div>
                    <div className="flex-grow font-medium pl-2">
                      {item.value}
                    </div>
                    <div className="text-sm font-normal text-gray-500 tracking-wide px-2 bg-gray-300 rounded-full">
                      {item.count ? item.count : '0'}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CheckboxFilter.propTypes = {
  updateFilter: PropTypes.func,
};

export default memo(CheckboxFilter);
