/**
 *
 * CardList
 *
 */

import React, { memo } from 'react';
import cx from 'classnames';
import { IoIosRocket } from 'react-icons/io';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function CardList(props) {
  return (
    <div>
      {props.templateItems.map(item => (
        <div className="pb-6">
          <div className="flex bg-white shadow-md rounded-lg overflow-hidden">
            <div
              className="w-1/3 bg-cover"
              style={{
                'background-image': `url('${item.imageUrl}')`,
              }}
            />
            <div className="w-2/3 p-4">
              <h1 className="text-gray-900 font-bold text-2xl">{item.title}</h1>
              <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
              <div className="flex item-center mt-2">
                {[1, 2, 3, 4, 5].map(e => (
                  <span
                    className={cx('star ml-1', 'text-xl', {
                      activeStar: e <= parseInt(item.rating),
                    })}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
              <div className="flex item-center justify-between mt-3">
                <h1 className="text-gray-700 font-bold text-xl">
                  {item.price === '0' ? 'Free' : `${item.price} INR`}
                </h1>
                <div className="flex mt-3 justify-end">
                  <div className="my-auto justtify-between mr-2">
                    <button className="flex text-gray-700 border-black border px-2 py-1 text-sm hover:border-teal-400 hover:text-black">
                      Preview
                    </button>
                  </div>

                  <div className="my-auto justtify-between">
                    <button className="flex text-gray-700 border-black border px-2 py-1 text-sm hover:border-teal-400 hover:text-black ">
                    <IoIosRocket size={22} className="bg-white text-teal-400" /> Select
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

CardList.propTypes = {};

export default memo(CardList);
