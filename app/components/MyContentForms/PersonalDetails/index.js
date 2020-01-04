import React from 'react';
import { Formik } from 'formik';
import { Validations } from '../../../utils/validations';
import PersonalDetailsForms from './PersonalDetailsForms';
import './style.scss';

function PersonalDetails() {
  return (
    <div>
      <Formik
        initialValues={{ val: '' }}
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
        }) => {
          return (
            <PersonalDetailsForms
              values={values}
              errors={errors}
              handleBlur={handleBlur}
              handleChange={handleChange}
            />
          );
        }}
      </Formik>
    </div>
  );
}
export default PersonalDetails;
