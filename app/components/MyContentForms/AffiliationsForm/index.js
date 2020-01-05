import React, { useState } from 'react';
import { Formik } from 'formik';
import { Validations } from '../../../utils/validations';
import Accordian from '../../Accordion';
import AffiliationInputs from './AffiliationItems';

function AffiliationForm() {
  const blankAffFields = {
    organization: '',
    role: '',
    start: '',
    end: '',
    summary: '',
    tillDate: '',
  };

  const [affiliations, setAffiliations] = useState([{ ...blankAffFields }]);

  const addMore = () => {
    setAffiliations([...affiliations, { ...blankAffFields }]);
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
            {affiliations.map((item, idx) => (
              <Accordian
                id={idx}
                label={item.title ? item.title : `Affiliation ${idx + 1}`}
              >
                <AffiliationInputs
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

export default AffiliationForm;
