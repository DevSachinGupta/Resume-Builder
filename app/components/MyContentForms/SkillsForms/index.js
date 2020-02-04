import React, { useState } from 'react';
import { Formik } from 'formik';
import Textfield from '../../FormComponents/TextField';
import MultiselectSkill from '../../FormComponents/MultiselectSkill';
import './style.scss';
import Dropdown from '../../FormComponents/Dropdown';

function SkillsForm() {
  const skillData = [
    'Music',
    'Singing',
    'Reading',
    'Writing',
    'Bloging',
    'Poetry',
    'Sketching',
    'Photography',
    'Designing',
    'Painting',
    'Volunteering',
    'Socializing',
    'Gaming',
    'Sport',
  ];
  const blankSkillsField = {
    type: '',
  };
  return (
    <Formik initialValues={{ blankSkillsField }}>
      {({ handleSubmit, isSubmitting }) => (
        <MultiselectSkill options={skillData} showDefaultOptions />
      )}
    </Formik>
    // <React.Fragment>
    //   <Dropdown onSelect={handleOptionSelect} options={options} />
    // </React.Fragment>
  );
}

export default SkillsForm;
