/**
 *
 * Features
 *
 */

import React, { memo } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import GridRow from './GridRow';
import Sidebar from './Sidebar';
import BodyLayout from './BodyLayout';
import Footer from './Footer';
import './style.scss';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Features() {
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
              <Sidebar />
            </div>
            <div className="w-3/4 ml-6 mt-2">
              {/* <div> */}
              <div className="mb-4">
                <GridRow />
              </div>
              <BodyLayout />
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
