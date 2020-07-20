/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 *
 * Themes
 *
 */

import React,  { memo, useState, useEffect } from 'react';
// import cx from 'classnames';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import { IoMdSearch } from 'react-icons/io';
// import Row from 'components/Layout/Row';
// import Column from 'components/Layout/Column';
import CardGrid from 'components/Dashboard/CardGrid';
import CardList from 'components/Dashboard/CardList';
import GridRow from 'components/Dashboard/GridRow';
import apiClient from '../../utils/app/API';
import DotsLoading from '../LoadingIndicator/dotsLoading';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import 'components/Dashboard/style.scss';
import './style.scss';

function Themes({ dispatch }) {
  const [filters, setFilters] = React.useState({
    pricing: 'All',
    category: 'Show All',
    searchKey: [],
    rating: -1,
    pageNumber: 1,
    pagesize: 12,
    sortOrder: -1, // Relevence:- no of user === then rating
  });
  // const [searchText, setSearchtext] = React.useState('');
  // const [activeBtnId, setActiveBtnId] = React.useState('allBtn');
  // const [templateList, setTemplateList] = React.useState([]);

  const [templateList2, setTemplateList2] = useState([]);
  const [templateList, setTemplateList] = useState([]);
  const [filteredItemCount, setFilteredItemCount] = useState(0);

  const [loadingStatus, setLoadingStatus] = useState(false);
  const [loadingCreateStatus, setLoadingCreateStatus] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const [layoutView, setLayoutView] = useState('Grid');
  const [currentCategory, setCurrentCategory] = useState('Show All');
  const [currentPricing, setPricing] = useState('All');
  const switchLayoutView = e => {
    setLayoutView(e.currentTarget.value);
  };

  const updateFilters = (key, value) => {
    const data1 = { ...filters };
    data1[key] = value;
    setFilters({ ...data1 });
  };
  const selectCategory = (ev, item) => {
    ev.preventDefault();
    // If this is not a left click
    if (ev.button !== 0) {
      return;
    }
    setCurrentCategory(item);
    // updateFilter('category', item);
  };
  const selectPricing = (ev, item) => {
    ev.preventDefault();
    // If this is not a left click
    if (ev.button !== 0) {
      return;
    }
    setPricing(item);
    // updateFilter('pricing', item);
  };
  useEffect(() => {
    // getFilteredList();
  }, [filters, templateList2, currentPricing, currentCategory]);

  React.useEffect(() => {
    // setLoadingStatus(true);
    apiClient
      .get('http://localhost:2000/template/getAllTemplateList', {
        withCredentials: true,
      })
      .then(response => {
        if (response.status === 200) {
          setTemplateList(response.data.data.templateList);
          updateFilters('data', response.data.data.templateList);
          console.log('res log', response);
        }
      })
      .catch(error => {
        // console.log('res err', error.response);
      });
  }, []);

  console.log('data list ', filters);

  return (
    <div className="mt-2 flex-items w-full shadow-md border-2 border-gray-300 ">
      <div className="mx-1 flex justify-between">
        <nav className="flex flex-col sm:flex-row">
          {['All', 'Free', 'Premium'].map(item => {
            const itemsClassName =
              currentPricing === item
                ? 'text-gray-600 px-2 py-1  block hover:text-blue-500 focus:outline-none text-blue-500 border-b border-blue-500'
                : 'text-gray-600 px-2 py-1  block hover:text-blue-500 focus:outline-none';

            return (
              <button
                type="button"
                onClick={ev => selectPricing(ev, item)}
                className={itemsClassName}
              >
                {item}
              </button>
            );
          })}
        </nav>
        <div className="mt-1">
          <GridRow
            updateFilter={updateFilters}
            switchLayoutView={switchLayoutView}
            layoutView={layoutView}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <nav className="flex flex-col sm:flex-row">
          {['Show All', 'Classic', 'Modern', 'professional'].map(item => {
            const itemsClassName =
              currentCategory === item
                ? 'text-gray-600 py-2 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500'
                : 'text-gray-600 py-2 px-6 block hover:text-blue-500 focus:outline-none';

            return (
              <button
                type="button"
                onClick={ev => selectCategory(ev, item)}
                className={itemsClassName}
              >
                {item}
              </button>
            );
          })}
        </nav>
      </div>
      <div className="mb-4 mx-2">
        {loadingStatus === true ? (
          <div>
            <DotsLoading loadingText="Loading..." />
          </div>
        ) : (
          <div>
            {layoutView === 'Grid' ? (
              <CardGrid
                templateItems={templateList}
                selectedTemplate={selectedTemplate}
                setSelectedTemplate={setSelectedTemplate}
                dispatch={dispatch}
              />
            ) : (
              <CardList
                templateItems={templateList}
                selectedTemplate={selectedTemplate}
                setSelectedTemplate={setSelectedTemplate}
                dispatch={dispatch}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );

  // return (
  //   <div className="themesSection">
  //     <div className="themeHeader">
  //       <Row className="items-center justify-between w-full">
  //         <Column className="self-center">
  //           <div className="">
  //             <div className="border-2 border-gray-300 bg-white rounded-lg relative mx-auto text-gray-600 focus:outline-none">
  //               <input
  //                 className="rounded-lg h-8 px-2 text-sm "
  //                 type="search"
  //                 name="search"
  //                 placeholder="Search here..."
  //                 onChange={e => {
  //                   setSearchtext(e.target.value);
  //                 }}
  //               />
  //               <span>
  //                 <button
  //                   type="button"
  //                   className="absolute right-0 mt-1 mr-2"
  //                   onClick={() => {
  //                     updateFilters('searchText', searchText);
  //                   }}
  //                 >
  //                   <IoMdSearch size={20} class="bg-white " />
  //                 </button>
  //               </span>
  //             </div>
  //           </div>
  //         </Column>
  //         <Column className="">
  //           <button
  //             id="allBtn"
  //             type="button"
  //             className={cx('mr-2', { active: activeBtnId === 'allBtn' })}
  //             onClick={() => {
  //               setActiveBtnId('allBtn');
  //               updateFilters('activeButton', 'all');
  //             }}
  //           >
  //             ALL
  //           </button>
  //           <button
  //             id="freeBtn"
  //             type="button"
  //             className={cx('mr-2', { active: activeBtnId === 'freeBtn' })}
  //             onClick={() => {
  //               setActiveBtnId('freeBtn');
  //               updateFilters('activeButton', 'free');
  //             }}
  //           >
  //             Free
  //           </button>
  //           <button
  //             id="paidBtn"
  //             type="button"
  //             className={cx('mr-2', { active: activeBtnId === 'paidBtn' })}
  //             onClick={() => {
  //               setActiveBtnId('paidBtn');
  //               updateFilters('activeButton', 'paid');
  //             }}
  //           >
  //             Premium
  //           </button>
  //         </Column>
  //       </Row>
  //     </div>
  //     <Row>
  //       <CardGrid templateItems={filters.data} />
  //     </Row>
  //   </div>
  // );
}

Themes.propTypes = {};
const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = null;
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Themes);
// export default Themes;
