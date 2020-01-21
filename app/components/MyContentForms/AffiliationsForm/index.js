import React, { useState } from 'react';
import { Formik } from 'formik';
import Accordian from '../../Accordion';
import AffiliationInputs from './AffiliationItems';
import Button from '../../Button';

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
      <Formik initialValues={{ ...affiliations }}>
        {({ handleSubmit, isSubmitting }) => (
          <React.Fragment>
            {affiliations.map((item, idx) => (
              <Accordian
                id={idx}
                label={item.title ? item.title : `Affiliation ${idx + 1}`}
              >
                <AffiliationInputs idx={idx} />
              </Accordian>
            ))}
            <Button onClick={addMore} fullWidth type="flat">
              Add Another
            </Button>
          </React.Fragment>
        )}
      </Formik>
    </div>
  );
}

export default AffiliationForm;
