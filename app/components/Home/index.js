/**
 *
 * Home
 *
 */

import React, { memo } from 'react';
import Header from './Header';
import MainBlock from './MainBlock';
import StepsBlock from './StepsBlock';
import TemplateSliderBlock from './TemplateSliderBlock';
import FeatureFirstBlock from './FeatureFirstBlock';
import PricingBlock from './PricingBlock';
import GetStartedBlock from './GetStartedBlock';
import ReviewsBlock from './ReviewsBlock';
import Footer from './Footer';
import './style.scss';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Home() {
  return (
    <div className="font-sans bg-white flex flex-col min-h-screen w-full">
      <div>
        <Header />
      </div>
      <MainBlock />
      <StepsBlock />
      <TemplateSliderBlock />
      <FeatureFirstBlock />
      <PricingBlock />
      <GetStartedBlock />
      <ReviewsBlock />
      <Footer />
      {/* <div className="">This is home page</div> */}
    </div>
  );
}

Home.propTypes = {};

export default memo(Home);
