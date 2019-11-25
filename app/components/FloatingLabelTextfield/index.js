/**
 *
 * FloatingLabelTextfield
 *
 */

import React, { memo } from 'react';
import classNames from 'classnames';
import './style.css';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function FloatingLabelTextfield(props) {
  function lableClick(e) {
    e.target.previousElementSibling.focus();
  }
  function textFieldClick(e) {
    if(e.target.value != "") {
      e.target.classList.add("filled");
    } else {
      e.target.classList.remove("filled");
    }
  }
  return ( 
  <div className="floatingLabelContainer">
    <input type={props.fieldtype} id={props.id} name={props.id} onKeyUp={textFieldClick} className={classNames("input", props.borderColor, "border-l-4 border border-gray-400 appearance-none w-full px-3 py-3 pt-5 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600")} />
    <label htmlFor={props.id} onClick={lableClick} className="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-base mt-2 cursor-text">{props.labeltxt}</label>
  </div>);
}

FloatingLabelTextfield.propTypes = {};

export default memo(FloatingLabelTextfield);
