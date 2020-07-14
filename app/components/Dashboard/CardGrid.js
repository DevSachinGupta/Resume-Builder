/**
 *
 * CardGrid
 *
 */

import React, { memo } from 'react';
import { updateTemplateNumberState } from 'containers/Authenticate/actions';
import cx from 'classnames';
import { IoIosRocket } from 'react-icons/io';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function CardGrid({
  templateItems,
  selectedTemplate,
  setSelectedTemplate,
  dispatch,
}) {
  return (
    <main className="py-4">
      <div className="">
        <div className="block px-2 md:flex justify-between md:-mx-2">
          <ul className="flex flex-wrap -mx-2 overflow-hidden">
            {templateItems.map(item => (
              <li className="list-none my-2 px-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 templateGrid">
                <div className="md:mx-2 mb-4 md:mb-0">
                  {/* {selectedTemplate.id === item.templateID ?  */}
                  <div
                    className={cx(
                      'bg-white, rounded-lg overflow-hidden shadow relative border-blue-500',
                      {
                        selectedBorder:
                          selectedTemplate &&
                          selectedTemplate.id === item.templateID,
                      },
                    )}
                  >
                    <div className="group ">
                      <img
                        className="h-48 w-full object-cover object-center hover:opacity-0"
                        src={item.imageUrl}
                        alt=""
                      />
                    </div>
                    {/* <div className="p-4 h-auto md:h-40 lg:h-48"> */}
                    <div className="p-4">
                      <h1 className="text-gray-900 font-bold text-xl md:text-base lg:text-lg">
                        {item.title}
                      </h1>
                      <div className="flex mt-3">
                        <h1 className="flex-grow item-center my-auto text-gray-700 font-bold text-sm ">
                          {item.price === '0' ? 'Free' : `${item.price} INR`}
                        </h1>
                        <div className="flex item-center">
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
                      </div>
                      {/* <p className="mt-2 text-gray-600 text-sm">
                        {item.description}
                      </p> */}
                      <div className="flex mt-3 justify-end">
                        <div className="my-auto justtify-between mr-2">
                          {/* <button
                            type="button"
                            className="flex text-gray-700 border-black border px-2 py-1 text-sm hover:border-teal-400 hover:text-black"
                          >
                            Preview
                          </button> */}

                          <Link
                            to={`/preview/${encodeURIComponent(
                              item.templateURL,
                            )}`}
                            target="_blank"
                            className="flex text-gray-700 border-black border px-2 py-1 text-sm hover:border-teal-400 hover:text-black"
                          >
                            Preview
                          </Link>
                        </div>

                        <div className="my-auto justtify-between">
                          <button
                            type="button"
                            className="flex text-gray-700 border-black border px-2 py-1 text-sm hover:border-teal-400 hover:text-black"
                            data-templateid={item.templateID}
                            data-templatetitle={item.title}
                            data-templateurl={item.imageUrl}
                            onClick={e => {
                              setSelectedTemplate({
                                name: e.target.dataset.templatetitle,
                                id: e.target.dataset.templateid,
                                url: e.target.dataset.templateurl,
                              });
                            }}
                          >
                            <IoIosRocket
                              size={22}
                              class="bg-white text-teal-500"
                            />{' '}
                            Select
                          </button>
                          {/* <Link
                            onClick={e =>
                              dispatch(
                                updateTemplateNumberState(
                                  e.target.dataset.templateid,
                                ),
                              )
                            }
                            data-templateid={item.templateID}
                            to="/builder"
                            className="flex text-gray-700 border-black border px-2 py-1 text-sm hover:border-teal-400 hover:text-black"
                          >
                            <IoIosRocket
                              size={22}
                              class="bg-white text-teal-500"
                            />{' '}
                            Select
                          </Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

CardGrid.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default memo(CardGrid);
