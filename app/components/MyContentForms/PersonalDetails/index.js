import React, { useState } from 'react';
import { Formik } from 'formik';
import PersonalDetailsForms from './PersonalDetailsForms';
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

  const handlePerChange = e => {
    const updatedPer = { ...personal };
    updatedPer[e.target.name] = e.target.value;
    setPersonal(updatedPer);
  };
  return (
    <div>
      <Formik initialValues={{ personal }}>
        {({ handleSubmit, isSubmitting }) => (
          <React.Fragment>
            <PersonalDetailsForms
              values={personal}
              handleChange={handlePerChange}
            />
          </React.Fragment>
        )}
      </Formik>
    </div>
  );
}
export default PersonalDetails;
