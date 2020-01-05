import React, { useState } from 'react';
import { Formik } from 'formik';
import { Validations } from '../../../utils/validations';
import Accordian from '../../Accordion';
import AccomplishmentInputs from './AccomplishmentItems';

function AccomplishmentForm() {
  const blankAccompFields = {
    title: '',
    date: '',
    rank: '',
    summary: '',
  };

  const [accomplishments, setAccomplishments] = useState([
    { ...blankAccompFields },
  ]);

  const addMore = () => {
    setAccomplishments([...accomplishments, { ...blankAccompFields }]);
  };

  return (
    <div>
      <Formik
        initialValues={{ ...blankAccompFields }}
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
            {accomplishments.map((item, idx) => (
              <Accordian
                id={idx}
                label={item.title ? item.title : `Accomplishment ${idx + 1}`}
              >
                <AccomplishmentInputs
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
export default AccomplishmentForm;
