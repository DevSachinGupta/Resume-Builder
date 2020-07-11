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

function CardGrid({ templateItems, updateTemplateNumber, dispatch }) {
  return (
    // <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">

  // 	<div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
  // 		<div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
  // 			<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
  // 				 alt=""
  // 				 class="h-full w-full" />
  // 		</div>

  // 		<h2 class="mt-4 font-bold text-xl">Sebastian Bennett</h2>
  // 		<h6 class="mt-2 text-sm font-medium">Founder</h6>

  // 		<p class="text-xs text-gray-500 text-center mt-3">
  // 			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.
  // 		</p>

  // 		<ul class="flex flex-row mt-4 space-x-2">
  // 			<li>
  // 				<a href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
  // 					<i class="fab fa-facebook"></i>
  // 				</a>
  // 			</li>
  // 			<li>
  // 				<a href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
  // 					<i class="fab fa-twitter"></i>
  // 				</a>
  // 			</li>
  // 			<li>
  // 				<a href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
  // 					<i class="fab fa-instagram"></i>
  // 				</a>
  // 			</li>
  // 		</ul>
  // 	</div>

  // 	<div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
  // 		<div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
  // 			<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
  // 				 alt=""
  // 				 class="h-full w-full" />
  // 		</div>

  // 		<h2 class="mt-4 font-bold text-xl">Sebastian Bennett</h2>
  // 		<h6 class="mt-2 text-sm font-medium">Founder</h6>

  // 		<p class="text-xs text-gray-500 text-center mt-3">
  // 			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.
  // 		</p>

  // 		<ul class="flex flex-row mt-4 space-x-2">
  // 			<li>
  // 				<a href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
  // 					<i class="fab fa-facebook"></i>
  // 				</a>
  // 			</li>
  // 			<li>
  // 				<a href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
  // 					<i class="fab fa-twitter"></i>
  // 				</a>
  // 			</li>
  // 			<li>
  // 				<a href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
  // 					<i class="fab fa-instagram"></i>
  // 				</a>
  // 			</li>
  // 		</ul>
  // 	</div>

  // 	<div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
  // 		<div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
  // 			<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
  // 				 alt=""
  // 				 class="h-full w-full" />
  // 		</div>

  // 		<h2 class="mt-4 font-bold text-xl">Sebastian Bennett</h2>
  // 		<h6 class="mt-2 text-sm font-medium">Founder</h6>

  // 		<p class="text-xs text-gray-500 text-center mt-3">
  // 			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.
  // 		</p>

  // 		<ul class="flex flex-row mt-4 space-x-2">
  // 			<li>
  // 				<a href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
  // 					<i class="fab fa-facebook"></i>
  // 				</a>
  // 			</li>
  // 			<li>
  // 				<a href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
  // 					<i class="fab fa-twitter"></i>
  // 				</a>
  // 			</li>
  // 			<li>
  // 				<a href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
  // 					<i class="fab fa-instagram"></i>
  // 				</a>
  // 			</li>
  // 		</ul>
  // 	</div>

  // 	<div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
  // 		<div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
  // 			<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&w=128&h=128&q=60&facepad=2"
  // 				 alt=""
  // 				 class="h-full w-full" />
  // 		</div>

  // 		<h2 class="mt-4 font-bold text-xl">Sebastian Bennett</h2>
  // 		<h6 class="mt-2 text-sm font-medium">Founder</h6>

  // 		<p class="text-xs text-gray-500 text-center mt-3">
  // 			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae nulla.
  // 		</p>

  // 		<ul class="flex flex-row mt-4 space-x-2">
  // 			<li>
  // 				<a href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
  // 					<i class="fab fa-facebook"></i>
  // 				</a>
  // 			</li>
  // 			<li>
  // 				<a href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
  // 					<i class="fab fa-twitter"></i>
  // 				</a>
  // 			</li>
  // 			<li>
  // 				<a href="" class="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
  // 					<i class="fab fa-instagram"></i>
  // 				</a>
  // 			</li>
  // 		</ul>
  // 	</div>
    // </div>

    <main className="py-4">
      <div className="">
        <div className="block px-2 md:flex justify-between md:-mx-2">
          <ul className="flex flex-wrap -mx-2 overflow-hidden">
            {templateItems.map(item => (
              <li className="list-none my-2 px-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 templateGrid">
                <div className="md:mx-2 mb-4 md:mb-0">
                  <div className="bg-white rounded-lg overflow-hidden shadow relative">
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
                          {/* {console.log("template umber",item.templateID)} */}
                          <Link
                            onClick={e =>
                              dispatch(updateTemplateNumberState(e.target.dataset.templateid))
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
                          </Link>
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
