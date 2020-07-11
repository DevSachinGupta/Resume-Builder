/**
 *
 * DashboardPage
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
import CreateNewProject from './CreateNewProject';
import GridRow from './GridRow';
import Sidebar from './Sidebar';
import BodyLayout from './BodyLayout';
import Button from '../Button';
import Footer from './Footer';
import './style.scss';
// import templateList2 from './templatesList';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function DashboardPage({ user, userData, dispatch }) {
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
  return (<CreateNewProject />);
  return (
    <div className="bg-white flex flex-col h-screen justify-between text-black">
      <div>
        <DashboardHeader user={user} userData={userData} dispatch={dispatch} />
      </div>
      <div className="flex mb-auto">
        <div className="container mx-auto md:px-8">
          <div className="flex px-10 items-center justify-between">
            <div className="pl-6 text-4xl text-gray-800">Projects</div>
            {noProject === false ? (
              <Button type="primary" className="text-white">
                <span className="whitespace-no-wrap">
                  <span className="font-bold">+ </span>Add New Project
                </span>
              </Button>
            ) : (
              <> </>
            )}
          </div>
          {noProject === true ? (
            <div className="flex flex-col px-10 text-center">
              <div className="md:mt-32 mt-16 text-4xl text-gray-700">
                <span className="flex justify-center">
                  <IoIosWarning size={52} className="text-gray-600 pr-1" /> You
                  have no projects, yet
                </span>
              </div>
              <div className="pt-3">
                <Button type="primary" className="text-sm text-white px-6 py-4">
                  Start your new project now!
                </Button>
                <small>
                  <span>Need help? </span>
                  <Link to="login" className="pt-3 text-blue-500">
                    Read our project guide
                  </Link>
                </small>
              </div>
            </div>
          ) : (
            <div className="flex px-10 pt-6 projectListConatiner">
              <div className="flex flex-wrap -mx-2 overflow-hidden">
                <div className="my-4 px-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
                  {/* <!-- Column Content --> */}
                  <div className="bg-white shadow-lg">
                    <img
                      className="h-48 w-full object-cover object-center hover:opacity-0"
                      src="https://images.unsplash.com/photo-1457282367193-e3b79e38f207?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1654&q=80"
                      alt=""
                    />
                    <div className="flex flex-col justigy-between">
                      <div className="px-2 pt-2 flex flex-row justify-between">
                        <h1 className="pt-1 text-xl front-bold md:text-base lg:text-lg">
                          Project Name
                        </h1>
                        {isPublished === true ? (
                          <div
                            title="Published"
                            className="my-auto w-3 h-3 rounded-full border-1 bg-green-400 published"
                          />
                        ) : (
                          <div
                            title="Draft"
                            className="my-auto w-3 h-3 rounded-full border-1 bg-gray-400 draft"
                          />
                        )}
                      </div>
                      <div className="px-2  h-8">
                        {isPublished === true ? (
                          <small className="pt-1">test.gocv.co.in</small>
                        ) : (
                          <div />
                        )}
                      </div>
                      <div className="flex w-full text-center justify-between">
                        <div
                          title="Edit"
                          className="w-1/3 border-t border-black border-r"
                        >
                          <Button className="py-2">
                            <FaRegEdit size={18} className="text-gray-600" />
                          </Button>
                        </div>
                        <div
                          title="Copy"
                          className="w-1/3 border-t border-black border-r"
                        >
                          <Button className="py-2">
                            <IoMdCopy size={18} className="text-gray-600" />
                          </Button>
                        </div>
                        <div
                          title="Delete"
                          className="w-1/3 border-t border-black"
                        >
                          <Button className="py-2">
                            <AiOutlineDelete
                              size={18}
                              className="text-gray-600"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

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

DashboardPage.propTypes = {};

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
)(DashboardPage);
