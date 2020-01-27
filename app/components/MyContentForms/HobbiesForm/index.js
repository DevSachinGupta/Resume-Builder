import React, { useState } from 'react';
import { Formik } from 'formik';
import Textfield from '../../FormComponents/TextField';
import MultiselectAutocomplete from '../../FormComponents/MultiselectAutocomplete';

function HobbiesForm() {
  const hobbyData = [
    { "label": "test", "icon": "test" },
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
    'Cycling',
    'Swimming',
    'Hiking',
    'Camping',
    'Traveling',
    'Cricket',
    'Dancing',
    'Theater',
    'Acting',
    'Youtuber',
    'Coding',
    'Cooking',
    'Craftandart',
    'Gardening',
  ];
  const blankHobbiesField = {
    type: '',
  };
  const [hobbies, setHobbies] = useState([
    {
      lable: 'Qualification',
    },
  ]);
  const addMore = () => {
    hobbies.push({
      lable: 'Employeer',
    });
    setHobbies([...hobbies]);
  };

  return (
    <Formik initialValues={{ blankHobbiesField }}>
      {({ handleSubmit, isSubmitting }) => (
        <MultiselectAutocomplete options={hobbyData} />
      )}
    </Formik>
  );
}

export default HobbiesForm;
