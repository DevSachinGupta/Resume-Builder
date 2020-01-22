/**
 *
 * Accordian
 *
 */

import React, { memo, useState } from 'react';
import './style.scss';
import PropTypes from 'prop-types';

function Accordion(props) {
  const [checkbox, setCheckbox] = useState(props.id);
  const onClickRadio = e => {
    if (checkbox !== e.target.id) {
      setCheckbox(e.target.id);
    } else {
      e.target.checked = false;
      setCheckbox(null);
    }
  };
  return (
    <div className="tab w-full overflow-hidden">
      <input
        type="radio"
        onClick={onClickRadio}
        className="absolute opacity-0"
        id={props.id}
        name="test"
      />
      <div className="flex justify-between">
        <label
          className="block p-1 leading-normal cursor-pointer"
          htmlFor={props.id}
        >
          {props.label}
        </label>
        <button type="button" data-idx={props.id} onClick={props.handleRemove}>
          Remove
        </button>
      </div>
      <div className="tab-content overflow-hidden leading-normal">
        {props.children}
      </div>
    </div>
  );
}

Accordion.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default memo(Accordion);
