/**
 *
 * CardList
 *
 */

import React, { memo } from 'react';
import cx from 'classnames';
import { IoIosRocket } from 'react-icons/io';
import { BrowserRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function CardList({
  templateItems,
  selectedTemplate,
  setSelectedTemplate,
  selectTemplateOny,
  switchTemplate,
  dispatch,
}) {
  return (
    <div>
      {templateItems.map(item => (
        <div className="py-4 px-1 templateCard">
          <div
            className={cx(
              'flex bg-white shadow-md rounded-lg overflow-hidden shadow border-blue-500',
              {
                selectedBorder:
                  selectedTemplate && selectedTemplate.id === item.templateID,
              },
            )}
          >
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
                    <BrowserRouter>
                      <Link
                        to={`/preview/${encodeURIComponent(item.templateURL)}`}
                        target="_blank"
                        className="flex text-gray-700 border-black border px-2 py-1 text-sm hover:border-teal-400 hover:text-black"
                      >
                        Preview
                      </Link>
                    </BrowserRouter>
                  </div>

                  <div className="my-auto justtify-between">
                    {selectTemplateOny === true ? (
                      <button
                        type="button"
                        className="flex text-gray-700 border-black border px-2 py-1 text-sm hover:border-teal-400 hover:text-black"
                        data-templateid={item.templateID}
                        data-templatetitle={item.title}
                        data-templateurl={item.imageUrl}
                        onClick={e => {
                          switchTemplate({
                            name: e.target.dataset.templatetitle,
                            id: e.target.dataset.templateid,
                            url: e.target.dataset.templateurl,
                          });
                          // setSelectedTemplate({
                          //   name: e.target.dataset.templatetitle,
                          //   id: e.target.dataset.templateid,
                          //   url: e.target.dataset.templateurl,
                          // });
                        }}
                      >
                        <IoIosRocket size={22} class="bg-white text-teal-500" />{' '}
                        Select
                      </button>
                    ) : (
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
                        <IoIosRocket size={22} class="bg-white text-teal-500" />{' '}
                        Select
                      </button>
                    )}
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
