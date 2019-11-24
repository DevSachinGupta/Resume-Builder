/**
 *
 * EducationForm
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function EducationForm() {
  const [educations, setEducations] = useState([
    {
      lable: '10th',
    },
  ]);
  const addMore = () => {
    educations.push({
      lable: 'Another One',
    });
    setEducations([...educations]);
  };
  return (
    <div>
      {educations.map(item => (
        <div>
          <label>{item.lable}</label>
          <input type="text" placeholder={item.label} />
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
