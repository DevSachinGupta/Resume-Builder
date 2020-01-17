import React, { useState } from 'react';
import { Formik } from 'formik';
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

  const handleAffChange = e => {
    const updatedAff = [...affiliations];
    const fieldName = e.target.name.split('-')[0];
    updatedAff[e.target.dataset.idx][fieldName] = e.target.value;
    setAffiliations(updatedAff);
  };

  return (
    <div>
      <Formik initialValues={{ ...affiliations }}>
        {({ handleSubmit, isSubmitting }) => (
          <React.Fragment>
            {affiliations.map((item, idx) => (
              <Accordian
                id={idx}
                label={item.title ? item.title : `Affiliation ${idx + 1}`}
              >
                <AffiliationInputs
                  idx={idx}
                  values={item}
                  handleChange={handleAffChange}
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
