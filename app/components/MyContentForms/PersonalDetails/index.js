import React, { useState } from 'react';
import { Formik } from 'formik';
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

  const countriesList = [];
  countries.map((item, index) => (countriesList[index] = { name: item.name }));

  const statesList = [];
  states.map((item, index) => (statesList[index] = item.name));

  const updateState = e => {
    const statesList = [];
    states.map((item, index) => (statesList[index] = item.name));
  };

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
