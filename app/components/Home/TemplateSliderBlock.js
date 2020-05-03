/**
 *
 * TemplateSliderBlock
 *
 */

import React, { memo } from 'react';
import Carousel from '../Carousel';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function TemplateSliderBlock() {
  return (
    <section className="border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-4">
        <div className="w-full text-black p-6 flex flex-col flex-grow flex-shrink">
          <Carousel showArrows showIndicators autoplay id="loginCarousel">
            <div className="w-full h-full text-center">
              <img
                src={require('./images/ScreenViews.png')}
                alt=""
                className="max-w-full h-auto mx-auto justify-center"
              />
            </div>
            <div className="w-full h-full text-center">2</div>
            <div className="w-full h-full text-center">3</div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

TemplateSliderBlock.propTypes = {};

export default memo(TemplateSliderBlock);
