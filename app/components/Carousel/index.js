/**
 *
 * Carousel
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
// import styled from 'styled-components';

function Carousel(props) {
  return (
    <div>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Slider {...props.settings}>{props.children}</Slider>
    </div>
  );
}

Carousel.propTypes = {
  settings: PropTypes.object.isRequired,
};

export default memo(Carousel);
