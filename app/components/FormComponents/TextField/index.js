/**
 *
 * TextField
 *
 */

import React, { memo, Fragment } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function TextField(props) {
return (
    <Fragment>
      <label>{props.labeltxt}</label>
      <input type={props.type} placeholder={props.labeltxt}/>
    </Fragment>
  );
}

TextField.propTypes = {};

export default memo(TextField);
