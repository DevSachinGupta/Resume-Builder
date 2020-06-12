/**
 *
 * Features
 *
 */

import React, { memo } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import axios from 'axios';
import { updateTemplateNumberState } from 'containers/Builder/actions';
import Header from './Header';
import SearchBar from './SearchBar';
import GridRow from './GridRow';
import Sidebar from './Sidebar';
import BodyLayout from './BodyLayout';
import Footer from './Footer';
import './style.scss';
// import templateList2 from './templatesList';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Features({ dispatch }) {
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
  }, [filters,templateList2]);

  React.useEffect(() => {
    axios
      .get('http://localhost:2000/getAllTemplateList', {})
      .then(response => {
        console.log('reset response: ');
        console.log(response);
        if (response.status === 200) {
          console.log("response.status === 200", response.status, response.data.data.templateList)
          setTemplateList2(response.data.data.templateList);
          // update App.js state
          // this.props.updateUser({
          //   loggedIn: true,
          //   username: response.data.username,
          // });
          // update the state to redirect to home
          // this.setState({
          //   redirectTo: '/',
          // });
        }
      })
      .catch(error => {
        console.log('reset error: ');
        console.log(error);
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

  return (
    <div className="bg-white text-black">
      <div>
        <Header />
      </div>
      <div className="flex ">
        <div className="container mx-auto px-8">
          {/* <div className="flex px-10">
            <div className="w-full">
              <SearchBar />
            </div>
          </div> */}
          <div className="flex px-10">
            <div className="w-1/4 mt-2">
              <Sidebar updateFilter={updateFilter} />
            </div>
            <div className="w-3/4 ml-6 mt-2">
              <BodyLayout
                templateItems={templateList}
                updateFilter={updateFilter}
                filters={filters}
                filteredItemCount={filteredItemCount}
                updateTemplateNumber="updateTemplateNumber"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <div className="container mx-auto ">
          <div className="px-10">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

Features.propTypes = {};

const mapStateToProps = createStructuredSelector({});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Features);
