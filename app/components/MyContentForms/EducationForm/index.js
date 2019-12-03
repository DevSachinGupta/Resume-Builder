/**
 *
 * EducationForm
 *
 */

import React, { memo, useState } from 'react';
import Textfield from "../../FormComponents/TextField";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function EducationForm() {
  var counter = 0;
  const [educations, setEducations] = useState([
    {
      lable: 'Qualification',
      qualificationId : "qualification[0]"
    },
  ]);
  const addMore = () => {
    counter = counter + 1;
    educations.push({
      lable: 'Qualification',
      qualificationId: "qualification[" + counter+"]"
      });
    setEducations([...educations]);
  };
  return (
    <div>
      {educations.map(item => (
        <div >
          {/* <label for={item.qualificationId}>{item.lable}</label>
          <input type="text" placeholder={item.lable} id={item.qualificationId}/> */}
			<div class="flex flex-wrap ">
			  <div class="w-1/2 px-2">
				  <Textfield labeltxt="Qualification" type="text"></Textfield>
			  </div>
			  <div class="w-1/2 px-2">
				  <Textfield labeltxt="Board/University" type="text"></Textfield>
			  </div>
			</div>
			
			<div class="flex flex-wrap ">
			  <div class="w-1/2 px-2">
				  <Textfield labeltxt="Institute Name" type="text"></Textfield>
			  </div>
			  <div class="w-1/2 px-2">
				  <Textfield labeltxt="Field of Study" type="text"></Textfield>
			  </div>
			</div>
			
			<div class="flex flex-wrap ">
			  <div class="w-1/3 px-2">
				  <Textfield labeltxt="Percentage" type="text"></Textfield>
			  </div>
			  <div class="w-1/3 px-2">
				  <Textfield labeltxt="State" type="text"></Textfield>
			  </div>
			  <div class="w-1/3 px-2">
				  <Textfield labeltxt="Country" type="text"></Textfield>
			  </div>
			</div>
			
			<div class="flex flex-wrap ">
			  <div class="w-1/2 px-2">
				  <Textfield labeltxt="Start date" type="date"></Textfield>
			  </div>
			  <div class="w-1/2 px-2">
				  <Textfield labeltxt="End date" type="date"></Textfield>
			  </div>
			</div>
			
			<div class="flex flex-wrap ">
			  <div class="w-full">
				  <Textfield labeltxt="Description" type="text"></Textfield>
			  </div>
			</div>


        </div>
      ))}
      <button type="button" onClick={addMore}>
        Add More
      </button>
    </div>
  );
}

EducationForm.propTypes = {};

export default memo(EducationForm);
