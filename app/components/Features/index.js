/**
 *
 * Features
 *
 */

import React, { memo } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Sidebar from './Sidebar';
import BodyLayout from './BodyLayout';
import Footer from './Footer';
import './style.scss';
import templateList from './templatesList';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Features() {
  const [filters, setFilters] = React.useState({
		"pricing": "-1",
		"category": [],
		"rating": -1,
		"pagesize": 12,
		"sortOrder": -1, // Relevence:- no of user === then rating 
		"viewType": "Grid",
  });
  function updateFilter(key, value) {
    const data = {};
    data[key] = value;
    setFilters({...filters, ...data});
  }
  function getFilteredList(){
    let newList = [];
    if(filters.pricing != "-1") {
      const data = filters.pricing.split("-");
      newList = templateList.filter(d => {
        if(data.length > 1) {
          return parseFloat(d.price) <= parseFloat(data[0]) && parseFloat(d.price) <= parseFloat(data[1]);
        } else if (data.indexOf(">") > 0){
          return parseFloat(d.price) >= parseFloat(data[0].replace(">", ""));
        } else if (data.indexOf("<") > 0) {
          return parseFloat(d.price) <= parseFloat(data[0].replace("<", ""));
        }
      })
    }
    if(filters.category.length !== 0) {
      newList = newList.filter(d => d.category.some(s => filters.category.includes(s)));
    }
    if(filters.rating !== -1) {
      newList = newList.filter(d => d.rating === filters.rating);
    }
    switch(filters.sortOrder) {
      case -1: break;
      
    }
    newList = newList.slice(0, filters.pagesize);
    return newList;
  };
  
  return (
    <div className="bg-gray-200">
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
              <Sidebar updateFilters={updateFilter}/>
            </div>
            <div className="w-3/4 ml-6 mt-2">
              <BodyLayout viewType={filters.viewType} templateItems={getFilteredList}/>
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

export default memo(Features);
