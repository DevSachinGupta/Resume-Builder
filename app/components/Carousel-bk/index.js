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
    let index = carouselDetails.activeChildren;
    const length = React.Children.count(props.children);

    if (index < 1) {
      index = length;
    }

    index -= 1;
    setCrouselDetails({
      activeChildren: index,
      isNext: false,
    });
  };
  const onRightArrowClick = () => {
    let index = carouselDetails.activeChildren;
    const length = React.Children.count(props.children) - 1;

    if (index === length) {
      index = -1;
    }

    index += 1;
    setCrouselDetails({
      activeChildren: index,
      isNext: true,
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

  React.useEffect(() => {
    if (props.autoplay) {
      const id = setTimeout(onRightArrowClick, props.duration * 1000);
      return () => {
        clearInterval(id);
      }
    }
  }, [carouselDetails]);

  return (
    <div className="carousel">
      <div>
        <div className="carousel_item" key={carouselDetails.activeChildren}>
          {props.children[carouselDetails.activeChildren]}
        </div>
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
  duration: 5,
  // interval: 100,
};

Carousel.propTypes = {
  duration: PropTypes.number,
  // loop: PropTypes.bool,
  autoplay: PropTypes.bool,
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
