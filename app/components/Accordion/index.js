/**
 *
 * Accordian
 *
 */

import React, { memo, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button';
import './style.scss';

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
    <div className="tab hover:shadow py-1 px-2 rounded mb-2 w-full overflow-hidden">
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
        <Button
          circular
          type="button"
          data-idx={props.id}
          onClick={props.onClickRemove}
        >
          <FaTimes />
        </Button>
      </div>
      <div
        className={cx('tab-content leading-normal', {
          'overflow-hidden': !checkbox,
        })}
      >
        {props.children}
      </div>
    </div>
  );
}

Accordion.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  handleRemove: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default memo(Accordion);
