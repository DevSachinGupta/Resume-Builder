import React from 'react';
import { Formik } from 'formik';
import { Validations } from '../../../utils/validations';
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
  return (
    <div>
      <Formik
        initialValues={{ blankPersonalFields }}
        validate={Validations.InputValidations}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <React.Fragment>
            <PersonalDetailsForms
              values={values}
              errors={errors}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
          </React.Fragment>
        )}
      </Formik>
    </div>
  );
}
export default PersonalDetails;
