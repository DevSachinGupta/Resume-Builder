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
        <div>
          {/* <label for={item.qualificationId}>{item.lable}</label>
          <input type="text" placeholder={item.lable} id={item.qualificationId}/> */}

          <Textfield labeltxt="Qualification" type="text"></Textfield>
          <Textfield labeltxt="Board/University" type="text"></Textfield>
          <Textfield labeltxt="Institute Name" type="text"></Textfield>
          <Textfield labeltxt="Field of Study" type="text"></Textfield>
          <Textfield labeltxt="State" type="text"></Textfield>
          <Textfield labeltxt="Country" type="text"></Textfield>
          <Textfield labeltxt="Start date" type="date"></Textfield>
          <Textfield labeltxt="End date" type="date"></Textfield>
          <Textfield labeltxt="Percentage" type="text"></Textfield>
          <Textfield labeltxt="Description" type="text"></Textfield>

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
