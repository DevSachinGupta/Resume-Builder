/**
 *
 * Accordian
 *
 */

import React, { memo, useState } from 'react';
import './style.scss';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

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
      <label
        className="block p-1 leading-normal cursor-pointer"
        htmlFor={props.id}
      >
        {props.label}
      </label>
      <div className="tab-content overflow-hidden leading-normal">
        {props.content}
      </div>
    </div>
  );
}

Accordion.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  content: PropTypes.oneOfType,
};

export default memo(Accordion);
