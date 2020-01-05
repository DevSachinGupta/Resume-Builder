import React, { useState } from 'react';
import { Formik } from 'formik';
import { Validations } from '../../../utils/validations';
import Accordian from '../../Accordion';
import PublicationInputs from './PublicationItems';

function PublicationForm() {
  let counter = 0;
  let checkboxState = false;
  const blankPubFields = {
    title: '',
    summary: '',
    url: '',
    date: '',
    description: '',
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
            {publications.map((item, idx) => (
              <Accordian
                id={idx}
                label={item.title ? item.title : `Publication ${idx + 1}`}
              >
                <PublicationInputs
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors}
                />
              </Accordian>
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
export default PublicationForm;
