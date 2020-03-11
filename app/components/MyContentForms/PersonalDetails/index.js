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

  console.log("1countries: ", countries)
  console.log("1states: ", states)

  let countriesList=[]
  countries.map((item,index) => (
    countriesList[index] = item.name
  ));

  let statesList=[]
  states.map((item,index) => (
    statesList[index] = item.name
  ));

  const updateState = (e) => {
    let statesList=[]
    states.map((item,index) => (
      statesList[index] = item.name
    ));
  }

  console.log("countries: ", countriesList)
  console.log("states: ", statesList)

  return (
    <div>
      <Formik initialValues={{ personal }}>
        {({ handleSubmit, isSubmitting }) => (
          <React.Fragment>
            <PersonalDetailsForms countriesList={countriesList} statesList={statesList}/>
          </React.Fragment>
        )}
      </Formik>
    </div>
  );
}
export default PersonalDetails;
