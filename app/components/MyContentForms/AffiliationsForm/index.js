import React, { useState } from 'react';
import { Formik } from 'formik';
import { Validations } from '../../../utils/validations';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import Textfield from '../../FormComponents/TextField';

function EmploymentForm() {
  let counter = 0;
  let checkboxState = false;
  const blankAffFields = {
    organization: '',
    role: '',
    start: '',
    end: '',
    summary: '',
    tillDate: '',
  };

  const [affiliations, setAffiliations] = useState([
    {
      lable: 'Qualification',
      qualificationId: 'qualification[0]',
      checkboxState,
    },
  ]);
  const addMore = () => {
    counter += 1;
    affiliations.push({
      lable: 'Employeer',
      qualificationId: `employer[${counter}]`,
      checkboxState,
    });
    setAffiliations([...affiliations]);
  };
  const checkboxStateChange = () => {
    console.log('Checkbox state changed');
    checkboxState = 'disabled';
  };
  return (
    <div>
      <Formik
        initialValues={{ ...blankAffFields }}
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
            {affiliations.map(item => (
              <div>
                <Row>
                  <Column width="1/2" className="px-1">
                    <Input
                      placeholder="Organisation"
                      label="Organisation"
                      name="organization"
                      value={values.organization}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.val}
                    />
                  </Column>
                  <Column width="1/2" className="px-1">
                    <Input
                      placeholder="Role"
                      label="Role"
                      name="role"
                      value={values.role}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.val}
                    />
                  </Column>
                </Row>
                <Row>
                  <Column width="2/5" className="px-1">
                    <Input
                      placeholder="Start Date"
                      label="Start Date"
                      name="start"
                      value={values.start}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.val}
                    />
                  </Column>
                  <Column width="2/5" className="px-1">
                    <Input
                      placeholder="End Date"
                      label="End Date"
                      name="end"
                      value={values.end}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.val}
                    />
                  </Column>
                  <Column width="1/5" className="px-1">
                    {/* TODO: Change this textfield with checkbox */}
                    <Textfield
                      labeltxt="Till date"
                      type="checkbox"
                      name="tillDate"
                      disabled={checkboxState}
                      onClick={checkboxStateChange}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.val}
                    />
                  </Column>
                </Row>
                <Row>
                  <Column width="full" className="px-1">
                    <Input
                      placeholder="Summary"
                      label="Summary"
                      name="summary"
                      value={values.summary}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.val}
                    />
                  </Column>
                </Row>

                {/* <Textfield labeltxt="Till date" type="checkbox" disabled={item.checkboxState} onClick={checkboxStateChange}></Textfield> */}
                {/* <Textfield labeltxt="Percentage" type="text"></Textfield> */}
              </div>
            ))}
            <button type="button" onClick={addMore}>
              Add More
            </button>
          </React.Fragment>
        )}
      </Formik>
    </div>
  );
}

export default EmploymentForm;
