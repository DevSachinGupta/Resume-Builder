/**
 *
 * TextField
 *
 */

import React, { memo, Fragment } from 'react';
import './style.css';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function TextField(props) {
return (
    <Fragment>
	  <div className="form-field">	
        <label className="field-label">{props.labeltxt}</label>
        <input className="field-input" type={props.type} placeholder={props.labeltxt}/>
	  </div>	
    </Fragment>
  );
}

TextField.propTypes = {};

export default memo(TextField);
