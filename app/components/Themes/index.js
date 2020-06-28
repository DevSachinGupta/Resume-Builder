/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 *
 * Themes
 *
 */

import React from 'react';
import cx from 'classnames';
import { IoMdSearch } from 'react-icons/io';
import Row from 'components/Layout/Row';
import Column from 'components/Layout/Column';
import CardGrid from 'components/Features/CardGrid';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './style.scss';

function Themes() {
  const [filters, setFilters] = React.useState({
    activeButton: 'all',
    searchText: '',
    data: [],
  });
  const [searchText, setSearchtext] = React.useState('');
  const [activeBtnId, setActiveBtnId] = React.useState('allBtn');
  const updateFilters = (key, value) => {
    const data = { ...filters };
    data[key] = value;
    setFilters({ ...data });
  };

  return (
    <div className="themesSection">
      <div className="themeHeader">
        <Row className="items-center justify-between w-full">
          <Column className="self-center">
            <div className="">
              <div className="border-2 border-gray-300 bg-white rounded-lg relative mx-auto text-gray-600 focus:outline-none">
                <input
                  className="rounded-lg h-8 px-2 text-sm "
                  type="search"
                  name="search"
                  placeholder="Search here..."
                  onChange={e => {
                    setSearchtext(e.target.value);
                  }}
                />
                <span>
                  <button
                    type="button"
                    className="absolute right-0 mt-1 mr-2"
                    onClick={() => {
                      updateFilters('searchText', searchText);
                    }}
                  >
                    <IoMdSearch size={20} class="bg-white " />
                  </button>
                </span>
              </div>
            </div>
          </Column>
          <Column className="">
            <button
              id="allBtn"
              type="button"
              className={cx('mr-2', { active: activeBtnId === 'allBtn' })}
              onClick={() => {
                setActiveBtnId('allBtn');
                updateFilters('activeButton', 'all');
              }}
            >
              ALL
            </button>
            <button
              id="freeBtn"
              type="button"
              className={cx('mr-2', { active: activeBtnId === 'freeBtn' })}
              onClick={() => {
                setActiveBtnId('freeBtn');
                updateFilters('activeButton', 'free');
              }}
            >
              Free
            </button>
            <button
              id="paidBtn"
              type="button"
              className={cx('mr-2', { active: activeBtnId === 'paidBtn' })}
              onClick={() => {
                setActiveBtnId('paidBtn');
                updateFilters('activeButton', 'paid');
              }}
            >
              Premium
            </button>
          </Column>
        </Row>
      </div>
      <Row>
        <CardGrid templateItems={filters.data} />
      </Row>
    </div>
  );
}

Themes.propTypes = {};

export default Themes;
