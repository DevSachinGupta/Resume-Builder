/**
 *
 * RadioFilter
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function RadioFilter(props) {
  const priceFieldValues = [
    // { key: '-1', value: 'All' },
    { key: '<150', value: ' < 150 INR' },
    { key: '150-250', value: ' 150 - 250 INR' },
    { key: '250-500', value: ' 250 - 500 INR' },
    { key: '>500', value: ' > 500 INR' },
  ];
  return (
    <div>
      <div className="w-full mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="bg-white shadow-md rounded-lg px-2 py-2">
              <div className="block text-gray-700 text-lg font-semibold py-2 px-2">
                Pricing
              </div>
              <div className="pb-3 text-sm">
                {priceFieldValues.map(item => (
                  <label
                    htmlFor={item.key}
                    className="flex justify-start text-gray-700 hover:text-blue-400 hover:bg-blue-100 cursor-pointer rounded-md px-2 pt-2"
                  >
                    <div className="">
                      <input
                        type="radio"
                        name="priceFilter"
                        value={item.key}
                        id={item.key}
                        onChange={e => {
                          props.updateFilter('pricing', e.currentTarget.value);
                        }}
                        // checked={item.key === '-1' ? 'checked' : false}
                      />
                    </div>
                    <div className="flex-grow font-medium pl-2">
                      {item.value}
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

RadioFilter.propTypes = {
  updateFilter: PropTypes.func,
};

export default memo(RadioFilter);
