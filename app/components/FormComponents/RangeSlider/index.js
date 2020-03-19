/**
 *
 * RangeSlider
 *
 */

import React, { memo, useState, useRef } from 'react';
import cx from 'classnames';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import './style.scss';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function RangeSlider(props) {
  const [field, meta] = useField({
    name: props.name,
    // validate: async value => await props.validate(value),
  });

  const slider = useRef();

  const constants = {
    orientation: {
      horizontal: {
        dimension: 'width',
        direction: 'left',
        reverseDirection: 'right',
        coordinate: 'x',
      },
      vertical: {
        dimension: 'height',
        direction: 'top',
        reverseDirection: 'bottom',
        coordinate: 'y',
      },
    },
  };

  const [state, setState] = useState({
    active: false,
    limit: 0,
    grab: 0,
  });

  const handleFormat = value => {
    const { format } = props;
    return format ? format(value) : value;
  };

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const capitalize = str => str.charAt(0).toUpperCase() + str.substr(1);

  const handleDrag = e => {
    e.stopPropagation();
    const { onChange } = props;
    const {
      target: { className, classList, dataset },
    } = e;
    if (!onChange || className === 'rangeslider__labels') return;

    let value = positionValue(e);

    if (
      classList &&
      classList.contains('rangeslider__label-item') &&
      dataset.value
    ) {
      value = parseFloat(dataset.value);
    }
    onChange && onChange(value, e);
  };

  const handleEnd = e => {
    const { onChangeComplete } = props;
    setState(
      {
        active: false,
      },
      () => {
        onChangeComplete && onChangeComplete(e);
      },
    );
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', handleEnd);
  };

  const handleStart = e => {
    const { onChangeStart } = props;
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleEnd);
    setState(
      {
        active: true,
      },
      () => {
        onChangeStart && onChangeStart(e);
      },
    );
  };

  const handleKeyDown = e => {
    e.preventDefault();
    const { keyCode } = e;
    const { value, min, max, step, onChange } = props;
    let sliderValue;

    switch (keyCode) {
      case 38:
      case 39:
        sliderValue = value + step > max ? max : value + step;
        onChange && onChange(sliderValue, e);
        break;
      case 37:
      case 40:
        sliderValue = value - step < min ? min : value - step;
        onChange && onChange(sliderValue, e);
        break;
      default:
    }
  };

  const getValueFromPosition = pos => {
    const { limit } = state;
    const { orientation, min, max, step } = props;
    const percentage = clamp(pos, 0, limit) / (limit || 1);
    const baseVal = step * Math.round((percentage * (max - min)) / step);
    const value = orientation === 'horizontal' ? baseVal + min : max - baseVal;

    return clamp(value, min, max);
  };

  const getPositionFromValue = value => {
    const { limit } = state;
    const { min, max } = props;
    const diffMaxMin = max - min;
    const diffValMin = value - min;
    const percentage = diffValMin / diffMaxMin;
    const pos = Math.round(percentage * limit);
    return pos;
  };

  const positionValue = e => {
    const { grab } = state;
    const { orientation, reverse } = props;

    const node = slider;
    console.log(node.current.getBoundingClientRect());
    const coordinateStyle = constants.orientation[orientation].coordinate;
    const directionStyle = reverse
      ? constants.orientation[orientation].reverseDirection
      : constants.orientation[orientation].direction;
    const clientCoordinateStyle = `client${capitalize(coordinateStyle)}`;
    const coordinate = !e.touches
      ? e[clientCoordinateStyle]
      : e.touches[0][clientCoordinateStyle];
    const direction = node.current.getBoundingClientRect()[directionStyle];
    const pos = reverse
      ? direction - coordinate - grab
      : coordinate - direction - grab;
    const value = getValueFromPosition(pos);
    return value;
  };

  const renderLabels = labels => (
    <ul
      // ref={sl => {
      //   this.labels = sl;
      // }}
      className={cx('rangeslider__labels')}
    >
      {labels}
    </ul>
  );

  const coordinates = pos => {
    const { limit, grab } = state;
    const { orientation } = props;
    const value = getValueFromPosition(pos);
    const position = getPositionFromValue(value);
    const handlePos = orientation === 'horizontal' ? position + grab : position;
    const fillPos =
      orientation === 'horizontal' ? handlePos : limit - handlePos;
    return {
      fill: fillPos,
      handle: handlePos,
      label: handlePos,
    };
  };
  const {
    value,
    orientation,
    className,
    tooltip,
    reverse,
    labels,
    min,
    max,
    handleLabel,
  } = props;
  const { active } = state;
  const { dimension } = constants.orientation[orientation];
  const direction = reverse
    ? constants.orientation[orientation].reverseDirection
    : constants.orientation[orientation].direction;
  const position = getPositionFromValue(value);
  const coords = coordinates(position);
  const fillStyle = { [dimension]: `${coords.fill}px` };
  const handleStyle = { [direction]: `${coords.handle}px` };
  const showTooltip = tooltip && active;

  const labelItems = [];
  let labelKeys = Object.keys(labels);

  if (labelKeys.length > 0) {
    labelKeys = labelKeys.sort((a, b) => (reverse ? a - b : b - a));
    for (const key of labelKeys) {
      const labelPosition = getPositionFromValue(key);
      const labelCoords = coordinates(labelPosition);
      const labelStyle = { [direction]: `${labelCoords.label}px` };

      labelItems.push(
        <li
          key={key}
          className={cx('rangeslider__label-item')}
          data-value={key}
          onMouseDown={handleDrag}
          onTouchStart={handleStart}
          onTouchEnd={handleEnd}
          style={labelStyle}
        >
          {props.labels[key]}
        </li>,
      );
    }
  }
  return (
    <div
      // ref={s => {
      //   slider = s;
      // }}
      ref={slider}
      className={cx(
        'rangeslider',
        `rangeslider-${orientation}`,
        { 'rangeslider-reverse': reverse },
        className,
      )}
      onMouseDown={handleDrag}
      onMouseUp={handleEnd}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-orientation={orientation}
      role="slider"
      tabIndex="0"
    >
      <div className="rangeslider__fill" style={fillStyle} />
      <div
        // ref={sh => {
        //   handle = sh;
        // }}
        className="rangeslider__handle"
        onMouseDown={handleStart}
        onTouchMove={handleDrag}
        onTouchEnd={handleEnd}
        onKeyDown={handleKeyDown}
        style={handleStyle}
        role="slider"
        tabIndex={0}
      >
        {showTooltip ? (
          <div
            // ref={st => {
            //   tooltip = st;
            // }}
            className="rangeslider__handle-"
          >
            <span>{handleFormat(value)}</span>
          </div>
        ) : null}
        <div className="rangeslider__handle-label">{handleLabel}</div>
      </div>
      {labels ? renderLabels(labelItems) : null}
    </div>
  );
}

RangeSlider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  value: 0,
  orientation: 'horizontal',
  tooltip: true,
  reverse: false,
  labels: {},
  handleLabel: '',
};

RangeSlider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  orientation: PropTypes.string,
  tooltip: PropTypes.bool,
  reverse: PropTypes.bool,
  labels: PropTypes.object,
  handleLabel: PropTypes.string,
  format: PropTypes.func,
  onChangeStart: PropTypes.func,
  onChange: PropTypes.func,
  onChangeComplete: PropTypes.func,
  name: PropTypes.string,
};

export default memo(RangeSlider);
