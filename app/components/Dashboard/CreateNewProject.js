/**
 *
 * CreateNewProject
 *
 */

import React, { memo } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoIosWarning, IoMdCopy } from 'react-icons/io';
import { AiOutlineDelete } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import { updateTemplateNumberState } from 'containers/Builder/actions';
import {
  makeSelectGetUserIsAuthenticated,
  makeSelectGetCurrentUserData,
} from '../../containers/Authenticate/selectors';
import DashboardHeader from '../Header/DashboardHeader';
import SearchBar from './SearchBar';
import GridRow from './GridRow';
import Sidebar from './Sidebar';
import BodyLayout from './BodyLayout';
import Button from '../Button';
import Footer from './Footer';
import './style.scss';
import CardGrid from './CardGrid';
import CardList from './CardList';
// import templateList2 from './templatesList';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function CreateNewProject({ user, userData, dispatch }) {
  const [filters, setFilters] = React.useState({
    pricing: '-1',
    category: [],
    searchKey: [],
    rating: -1,
    pageNumber: 1,
    pagesize: 12,
    sortOrder: -1, // Relevence:- no of user === then rating
  });
  const [templateList2, setTemplateList2] = React.useState([]);
  const [templateList, setTemplateList] = React.useState([]);
  const [filteredItemCount, setFilteredItemCount] = React.useState(0);

  React.useEffect(() => {
    getFilteredList();
  }, [filters, templateList2]);

  React.useEffect(() => {
    axios
      // .get('http://localhost:2000/template/getAllTemplateList')
      .get('http://localhost:2000/template/getAllTemplateList', {
        withCredentials: true,
      })
      .then(response => {
        if (response.status === 200) {
          setTemplateList2(response.data.data.templateList);
        }
      })
      .catch(error => {
        console.log('res err', error.response);
      });
  }, []);

  function updateFilter(key, value) {
    // console.log("Update Filter :- ", key, " : ", value);
    const data = { ...filters };
    if (key === 'pageChange') {
      data.pageNumber =
        value === '++' ? data.pageNumber + 1 : data.pageNumber - 1;
    } else if (key === 'clearFilter') {
      data.pricing = '-1';
      data.category = [];
      data.rating = -1;
      data.pageNumber = 1;
      data.pagesize = 12;
      data.sortOrder = -1;
    } else {
      data[key] = value;
    }
    setFilters({ ...data });
    // getFilteredList();
  }
  // console.log(filters)
  function getFilteredList() {
    let newList = [];
    if (filters.pricing != '-1') {
      const data = filters.pricing.split('-');
      newList = templateList2.filter(d => {
        if (data.length > 1) {
          return (
            parseFloat(data[0]) <= parseFloat(d.price) &&
            parseFloat(data[1]) >= parseFloat(d.price)
          );
        }
        if (data[0].indexOf('>') > -1) {
          return parseFloat(d.price) >= parseFloat(data[0].replace('>', ''));
        }
        if (data[0].indexOf('<') > -1) {
          return parseFloat(d.price) <= parseFloat(data[0].replace('<', ''));
        }
      });
    } else {
      newList = templateList2;
    }
    if (filters.category.length !== 0) {
      newList = newList.filter(d =>
        d.category.some(s => filters.category.includes(s)),
      );
    }
    if (filters.searchKey.length !== 0) {
      newList = newList.filter(d =>
        d.searchBag.some(s => filters.searchKey.includes(s)),
      );
    }
    if (filters.rating !== -1) {
      newList = newList.filter(d => d.rating === filters.rating);
    }
    switch (filters.sortOrder) {
      case 0: // Pricing High ---> low
        newList.sort((a, b) =>
          parseFloat(a.price) > parseFloat(b.price)
            ? -1
            : parseFloat(b.price) > parseFloat(a.price)
              ? 1
              : 0,
        );
        break;
      case 1: // Pricing low ---> High
        newList.sort((a, b) =>
          parseFloat(a.price) > parseFloat(b.price)
            ? 1
            : parseFloat(b.price) > parseFloat(a.price)
              ? -1
              : 0,
        );
        break;
      case 2: // rating low ---> High
        newList.sort((a, b) =>
          parseInt(a.rating) > parseInt(b.rating)
            ? 1
            : parseInt(b.rating) > parseInt(a.rating)
              ? -1
              : 0,
        );
        break;
      default:
        newList.sort((a, b) =>
          // if(parseInt(a.rating) > parseInt(b.rating)) return 1;
          parseInt(a.rating) > parseInt(b.rating)
            ? -1
            : parseInt(b.rating) > parseInt(a.rating)
              ? 1
              : 0,
        );
        break;
    }
    setFilteredItemCount(newList.length);
    newList = newList.slice(
      (filters.pageNumber - 1) * filters.pagesize,
      filters.pageNumber * filters.pagesize,
    );
    setTemplateList(newList);
  }
  const noProject = false;
  const isPublished = true;
  const [layoutView, setLayoutView] = React.useState('Grid');
  const switchLayoutView = e => {
    setLayoutView(e.currentTarget.value);
  };
  return (
    <div className="bg-white flex flex-col h-screen justify-between text-black">
      <div>
        <DashboardHeader user={user} userData={userData} dispatch={dispatch} />
      </div>
      <div className="flex mb-auto">
        <div className="container mx-auto md:px-8">
          <div className="flex px-10 justify-between">
            <div className="w-full pl-6 text-4xl text-gray-800">
              Create New Project
            </div>
          </div>
          <div className="flex px-10 items-end justify-between">
            <div className="my-4 md:mr-2 md:mb-0 w-1/2">
              <label className="block mb-2 text-sm" htmlFor="projectName">
                Project Name
              </label>
              <input
                className="w-full px-3 py-2 text-sm leading-tight bg-gray-200 text-gray-700 border focus:outline-none focus:shadow-outline"
                id="projectName"
                name="projectName"
                type="text"
                defaultValue="My First Project"
                placeholder="Project Name"
              />
            </div>
            {noProject === false ? (
              <Button type="primary" className="text-white">
                <span className="whitespace-no-wrap">Create Project</span>
              </Button>
            ) : (
              <> </>
            )}
          </div>
          <div className="flex pt-4 flex-col px-10">
            <span className="text-sm">
              Selected Template:<span className="text-xl pl-2">Template01</span>
            </span>
          </div>
          <div className="flex pt-6 flex-col px-10">
            <div className="text-lg">Choosing a Starting Template</div>
            <div className="flex-items w-full shadow-md  border-2 border-gray-300 ">
              <div className="flex justify-between">
                <div className="flex flex-row pl-3" id="myBtnContainer">
                  <button
                    type="button"
                    className="px-2 py-1 active hover:text-xl"
                    onClick="filterSelection('all')"
                  >
                    All
                  </button>
                  <div className="my-2 border border-gray-700" />
                  <button
                    type="button"
                    className="px-2 py-1 "
                    onClick="filterSelection('cars')"
                  >
                    Free
                  </button>
                  <div className="my-2 border border-gray-700" />
                  <button
                    type="button"
                    className="px-2 py-1 "
                    onClick="filterSelection('animals')"
                  >
                    Premium
                  </button>
                </div>
                <div>
                  <GridRow
                    updateFilter={updateFilter}
                    switchLayoutView={switchLayoutView}
                    layoutView={layoutView}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex flex-row pl-3" id="myBtnContainer">
                <button
                    type="button"
                    className="px-2 py-1 active hover:text-xl"
                    onClick="filterSelection('all')"
                  >
                    Show All
                  </button>
                  <div className="my-2 border border-gray-700" />
                  <button
                    type="button"
                    className="px-2 py-1 "
                    onClick="filterSelection('cars')"
                  >
                    Classic
                  </button>
                  <div className="my-2 border border-gray-700" />
                  <button
                    type="button"
                    className="px-2 py-1 "
                    onClick="filterSelection('animals')"
                  >
                    Modern
                  </button>
                  <div className="my-2 border border-gray-700" />
                  <button
                    type="button"
                    className="px-2 py-1 "
                    onClick="filterSelection('animals')"
                  >
                    Passionate
                  </button>
                </div>
              </div>
              <div className="mb-4">
                {layoutView === 'Grid' ? (
                  <CardGrid
                    templateItems={templateList}
                    updateTemplateNumber="{updateTemplateNumber}"
                    dispatch={dispatch}
                  />
                ) : (
                  <CardList
                    templateItems={templateList}
                    updateTemplateNumber="{updateTemplateNumber}"
                    dispatch={dispatch}
                  />
                )}
              </div>
            </div>
          </div>

          {/* <div className="w-1/4 mt-2 mr-6 sm:block hidden">
              <Sidebar updateFilter={updateFilter} />
            </div>
            <div className="w-full sm:w-3/4 mt-2">
              <BodyLayout
                templateItems={templateList}
                updateFilter={updateFilter}
                filters={filters}
                filteredItemCount={filteredItemCount}
                updateTemplateNumber="updateTemplateNumber"
                dispatch={dispatch}
              />
            </div> */}
        </div>
      </div>
      <div className="mx-4 mt-8">
        <Footer />
      </div>
    </div>
  );
}

CreateNewProject.propTypes = {};

const mapStateToProps = createStructuredSelector({
  user: makeSelectGetUserIsAuthenticated(),
  userData: makeSelectGetCurrentUserData(),
});

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }
const mapDispatchToProps = null;
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CreateNewProject);
