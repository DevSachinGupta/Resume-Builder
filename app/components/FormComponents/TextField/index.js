/**
 *
 * TextField
 *
 */

import React, { memo, Fragment } from 'react';
import './style.css';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

function TextField(props) {
return (
    <Fragment>
	
		<div className="form-field">	
			<label className="field-label" htmlFor={props.id}>{props.labeltxt}</label>
			<input 
				className="field-input" //+{props.className } 
				type={props.type} 
				placeholder={props.labeltxt}
				name={props.name}
				data-idx={props.idx}
				data-name={props.namex}
				id={props.id}
				value={props.value}
				onChange={props.onChange}
			/>
	  </div>
	
	{/* <div className="form-field">	
        <label className="field-label">{props.labeltxt}</label>
        <input className="field-input" type={props.type} placeholder={props.labeltxt}/>
	</div>	 */}
    </Fragment>
  );
}

TextField.propTypes = {
  onChange: PropTypes.func,
};

export default memo(TextField);
