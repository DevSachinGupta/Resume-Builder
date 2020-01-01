import React, { useState } from 'react';
import { Formik } from 'formik';
import { Validations } from '../../../utils/validations';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';

function EmploymentForm() {
  let counter = 0;
  let checkboxState = false;
  const blankPubFields = {
    title: '',
    summary: '',
    keywords: '',
    url: '',
    start: '',
    end: '',
    description: '',
    tillDate: '',
  };
  const [publications, setPublications] = useState([
    {
      lable: 'Qualification',
      qualificationId: 'qualification[0]',
      checkboxState,
    },
  ]);
  const addMore = () => {
    counter += 1;
    publications.push({
      lable: 'Employeer',
      qualificationId: `employer[${counter}]`,
      checkboxState,
    });
    setPublications([...publications]);
  };
  const checkboxStateChange = () => {
    console.log('Checkbox state changed');
    checkboxState = 'disabled';
  };
  return (
    <div>
      <Formik
        initialValues={{ ...blankPubFields }}
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
            {publications.map(item => (
              <div>
                <Row>
                  <Column width="1/2" className="px-1">
                    <Input
                      placeholder="Title"
                      label="Title"
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.val}
                    />
                  </Column>
                  <Column width="1/2" className="px-1">
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
                <Row>
                  <Column width="1/2" className="px-1">
                    <Input
                      placeholder="Reference Link"
                      label="Reference Link"
                      name="url"
                      value={values.url}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.val}
                    />
                  </Column>
                  <Column width="1/2" className="px-1">
                    <Input
                      placeholder="Date"
                      label="Date"
                      name="date"
                      value={values.date}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.val}
                    />
                  </Column>
                </Row>
                <Row>
                  <Column width="full" className="px-1">
                    <Input
                      placeholder="Description"
                      label="Description"
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.val}
                    />
                  </Column>
                </Row>
                {/* <Textfield labeltxt="Title" type="text" />
                <Textfield labeltxt="Summary" type="text" />
                <Textfield labeltxt="Description" type="text" />
                <Textfield labeltxt="Technology Used" type="text"></Textfield>
                <Textfield labeltxt="Reference Link" type="text" />
                <Textfield labeltxt="Date" type="date" /> */}
                {/* <Textfield labeltxt="End date" type="date"></Textfield> */}
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
