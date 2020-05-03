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
import Carousel from '../Carousel';
import './style.scss';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Home() {
  return (
  //   <Carousel showArrows showIndicators autoplay id="loginCarousel">
  //   <div className="w-full h-full text-center">
  //     <img
  //       src={require('./images/ScreenViews.png')}
  //       alt=""
  //       className="max-w-full h-auto mx-auto justify-center"
  //     />
  //   </div>
  //   <div className="w-full h-full text-center">2</div>
  //   <div className="w-full h-full text-center">3</div>
  // </Carousel>

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
