import React, { useState } from 'react';
import './style.scss';
import Dropdown from '../../Dropdown';

const options = [
  {
    key: 'abc',
    value: 'ABC',
  },
  {
    key: 'a',
    value: 'A',
  },
  {
    key: 'b',
    value: 'B',
  },
  {
    key: 'c',
    value: 'C',
  },
  {
    key: 'abcd',
    value: 'ABCD',
  },
];
function SkillsForm() {
  const handleOptionSelect = selectedOption => {
    console.log(selectedOption);
  };
  return (
    <React.Fragment>
      <Dropdown onSelect={handleOptionSelect} options={options} />
    </React.Fragment>
  );
}

export default SkillsForm;
