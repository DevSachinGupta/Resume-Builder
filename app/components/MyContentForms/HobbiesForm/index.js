import React, { useState } from 'react';
import { Formik } from 'formik';
import Textfield from '../../FormComponents/TextField';
import { FaTimes } from 'react-icons/fa';
import MultiselectAutocomplete from '../../FormComponents/MultiselectAutocomplete';

function HobbiesForm() {
  const hobbyData = [
    {name:'Music', icon: <FaTimes/>},
    {name:'Singing', icon:<FaTimes/>},
    {name:'Reading', icon:<FaTimes/>},
    {name:'Writing', icon:<FaTimes/>},
    {name:'Bloging', icon:<FaTimes/>},
    // 'Singing',
    // 'Reading',
    // 'Writing',
    // 'Bloging',
    // 'Poetry',
    // 'Sketching',
    // 'Photography',
    // 'Designing',
    // 'Painting',
    // 'Volunteering',
    // 'Socializing',
    // 'Gaming',
    // 'Sport',
    // 'Cycling',
    // 'Swimming',
    // 'Hiking',
    // 'Camping',
    // 'Traveling',
    // 'Cricket',
    // 'Dancing',
    // 'Theater',
    // 'Acting',
    // 'Youtuber',
    // 'Coding',
    // 'Cooking',
    // 'Craftandart',
    // 'Gardening',
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
        <MultiselectAutocomplete options={hobbyData} showDefaultOptions />
      )}
    </Formik>
  );
}

export default HobbiesForm;
