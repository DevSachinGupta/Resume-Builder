/**
 *
 * RatingFilter
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
// import styled from 'styled-components';

function RatingFilter(props) {
  const ratingFieldValues = [
    { key: '5', value: '5' },
    { key: '4', value: '4' },
    { key: '3', value: '3' },
    { key: '2', value: '2' },
    { key: '1', value: '1' },
  ];
  return (
    <div>
      <div className="w-full mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="bg-white shadow-md rounded-lg px-2 py-2">
              <div className="block text-gray-700 text-lg font-semibold py-2 px-2">
                Rating
              </div>
              <div className="pb-3 text-sm">
                {ratingFieldValues.map(item => (
                  <label
                    htmlFor={item.key}
                    className="flex justify-start text-gray-700 hover:text-blue-400 hover:bg-blue-100 cursor-pointer rounded-md px-2 pt-2"
                  >
                    <div
                      type="button"
                      className="flex-grow font-medium pl-2 text-base RatingFilter"
                    >
                      <button
                        type="button"
                        value={item.key}
                        id={item.key}
                        onClick={e => {
                          props.updateFilter('rating', parseInt(e.currentTarget.value));
                        }}
                      >
                        {[1, 2, 3, 4, 5].map(e => (
                          <span
                            className={cx('star ml-1', 'text-xl', {
                              activeStar: e <= parseInt(item.value),
                            })}
                          >
                            &#9733;
                          </span>
                        ))}
                      </button>
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

RatingFilter.propTypes = {
  updateFilter: PropTypes.func,
};

export default memo(RatingFilter);
