import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import PersonalDetailsForms from './PersonalDetailsForms';
import states from '../../DropdownList/stateList';
import countries from '../../DropdownList/countryList';
import './style.scss';

function PersonalDetails() {
  const blankPersonalFields = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    brief: '',
  };
  const [personal, setPersonal] = useState({ ...blankPersonalFields });

  const [country, setCountry] = useState({
    countryList: [],
    isLoading: true,
    errors: null,
  });

  // useEffect(() => {
  //   axios
  //     .get('https://resumebuilder.s3.ap-south-1.amazonaws.com/List/countryList.json')
  //     .then(response => {
  //       setCountry({
  //         countryList: response.data,
  //         isLoading: false,
  //       });
  //     })
  //     .catch(error => {
  //       setCountry({ error, isLoading: false });
  //     });
  // }, []);

  useEffect(() => {
    async function getPosts() {
      const response = await axios.get('https://resumebuilder.s3.ap-south-1.amazonaws.com/List/countryList.json')
      try {
        setCountry({
          countryList: response.data,
          isLoading: false,
        });
      } catch (error) {
        setCountry({ error, isLoading: false });
      }
    }
    getPosts();
  }, []);

  const countriesList = [];
  countries.map((item, index) => (countriesList[index] = { name: item.name }));

  const statesList = [];
  states.map((item, index) => (statesList[index] = item.name));

  const updateState = e => {
    const statesList = [];
    states.map((item, index) => (statesList[index] = item.name));
  };

  console.log('axios state: ', country);

  return (
    <div>
      <Formik initialValues={{ personal }}>
        {({ handleSubmit, isSubmitting }) => (
          <React.Fragment>
            <PersonalDetailsForms
              countriesList={countriesList}
              statesList={statesList}
            />
          </React.Fragment>
        )}
      </Formik>
    </div>
  );
}
export default PersonalDetails;
