import React from 'react';
import { Formik } from 'formik';
import Input from '../../FormComponents/Input';
import Button from '../../Button';
import './style.scss';

function PersonalDetails() {
  return (
    <div>
      <Formik initialValues={{ val: '' }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <React.Fragment>
            <Input
              placeholder="First Name"
              name="firstName"
              value={values.val}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.val && touched.val && errors.val}
            />
            <Input
              placeholder="Last Name"
              val={values.val}
              onChange={handleChange}
              error={errors.val && touched.val && errors.val}
            />
            <Button>Save Details</Button>
          </React.Fragment>
        )}
      </Formik>
    </div>
  );
}
export default PersonalDetails;
