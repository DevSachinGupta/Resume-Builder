import React from 'react';
import { Formik } from 'formik';
import { Validations } from '../../../utils/validations';
import Input from '../../FormComponents/Input';
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
            <React.Fragment>
              <Input
                placeholder="First Name"
                label="First Name"
                name="firstName"
                value={values.val}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.val}
              />
              <Input
                placeholder="Last Name"
                val={values.val}
                label="Last Name"
                onChange={handleChange}
                error={errors.val}
              />
            </React.Fragment>
          );
        }}
      </Formik>
    </div>
  );
}
export default PersonalDetails;
