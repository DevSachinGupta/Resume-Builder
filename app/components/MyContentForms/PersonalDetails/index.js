import React from 'react';
import { Formik } from 'formik';
import { Row, Column } from '../../Layout';
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
              <Row>
                <Column width="1/2" className="px-1">
                  <Input
                    placeholder="First Name"
                    label="First Name"
                    name="firstName"
                    value={values.val}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.val}
                  />
                </Column>
                <Column width="1/2" className="px-1">
                  <Input
                    placeholder="Last Name"
                    val={values.val}
                    label="Last Name"
                    onChange={handleChange}
                    error={errors.val}
                  />
                </Column>
              </Row>
              <Row>
                <Column width="1/3" className="px-1">
                  <Input
                    placeholder="Last Name"
                    val={values.val}
                    label="Last Name"
                    onChange={handleChange}
                    error={errors.val}
                  />
                </Column>
                <Column width="1/3" className="px-1">
                  <Input
                    placeholder="Last Name"
                    val={values.val}
                    label="Last Name"
                    onChange={handleChange}
                    error={errors.val}
                  />
                </Column>
                <Column width="1/3" className="px-1">
                  <Input
                    placeholder="Last Name"
                    val={values.val}
                    label="Last Name"
                    onChange={handleChange}
                    error={errors.val}
                  />
                </Column>
              </Row>
            </React.Fragment>
          );
        }}
      </Formik>
    </div>
  );
}
export default PersonalDetails;
