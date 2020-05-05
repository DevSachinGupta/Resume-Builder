/**
 *
 * TemplateSliderBlock
 *
 */

import React, { memo } from 'react';
import Carousel from '../Carousel';
import './CarouselTemplateStyle.scss';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function TemplateSliderBlock() {
  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    centerPadding: '30px',
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="border-b py-4" id="templateSection">
      <div className="container mx-auto">
        <div className="w-full text-black p-6">
          <Carousel settings={settings}>
            <div className="p-4">
              <img className=" " src={require('./images/cv.jpg')} />
            </div>
            <div className="p-4">
              <img className=" " src={require('./images/cv.jpg')} />
            </div>
            <div className="p-4">
              <img className=" " src={require('./images/cv.jpg')} />
            </div>
            <div className="p-4">
              <img className=" " src={require('./images/cv.jpg')} />
            </div>
            <div className="p-4">
              <img className=" " src={require('./images/cv.jpg')} />
            </div>
            <div className="p-4">
              <img className=" " src={require('./images/cv.jpg')} />
            </div>
            <div className="p-4">
              <img className=" " src={require('./images/cv.jpg')} />
            </div>
            <div className="p-4">
              <img className=" " src={require('./images/cv.jpg')} />
            </div>
            <div className="p-4">
              <img className=" " src={require('./images/cv.jpg')} />
            </div>
            <div className="p-4">
              <img className=" " src={require('./images/cv.jpg')} />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

TemplateSliderBlock.propTypes = {};

export default memo(TemplateSliderBlock);
