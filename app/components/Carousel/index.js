/**
 *
 * Carousel
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
// import styled from 'styled-components';

function Carousel(props) {
  const [carouselDetails, setCrouselDetails] = useState({
    activeChildren: 0,
    isNext: true,
  });
  const onLeftArrowClick = () => {
    const { activeChildren } = carouselDetails;
    const ac = activeChildren - 1;
    setCrouselDetails({
      activeChildren: ac,
    });
  };
  const onRightArrowClick = () => {
    const { activeChildren } = carouselDetails;
    const ac = activeChildren + 1;
    setCrouselDetails({
      activeChildren: ac,
    });
  };
  const goToHistoryClick = (curIndex, index) => {
    const next = curIndex < index;
    setCrouselDetails({
      activeChildren: index,
      isNext: next,
    });
  };

  const mappedChildrenWithWrapper = React.Children.map(
    props.children,
    (child, index) => (
      <div className="carousel_item" id={`${props.id}-${index}`}>
        {child}
      </div>
    ),
  );

  const indicators = (
    <ul>
      {React.Children.map(props.children, (child, index) => {
        const activeClass =
          index === carouselDetails.activeChildren ? 'active' : '';
        return (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>
            <button
              type="button"
              className={activeClass}
              onClick={() =>
                goToHistoryClick(carouselDetails.activeChildren, index)
              }
            />
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="carousel">
      <div>
        <div>{mappedChildrenWithWrapper}</div>
      </div>
      {props.showArrows && (
        <button
          className="carousel_controls carousel_controls__prev"
          type="button"
          onClick={onLeftArrowClick}
        >
          <span />
        </button>
      )}
      {props.showArrows && (
        <button
          className="carousel_controls carousel_controls__next"
          type="button"
          onClick={onRightArrowClick}
        >
          <span />
        </button>
      )}

      {props.showIndicators && (
        <div className="carousel_indicators">{indicators}</div>
      )}
    </div>
  );
}

Carousel.defaultProps = {
  id: 'carousel',
  // duration: 500,
  // interval: 100,
};

Carousel.propTypes = {
  // duration: PropTypes.number,
  // loop: PropTypes.bool,
  // autoplay: PropTypes.bool,
  // interval: PropTypes.number,
  showArrows: PropTypes.bool,
  showIndicators: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  id: PropTypes.string,
};

export default memo(Carousel);
