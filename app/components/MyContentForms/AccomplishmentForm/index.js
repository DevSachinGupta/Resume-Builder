import React, { useState } from 'react';
import { Formik } from 'formik';
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

  const handleAccChange = e => {
    const updatedAcc = [...accomplishments];
    const fieldName = e.target.name.split('-')[0];
    updatedAcc[e.target.dataset.idx][fieldName] = e.target.value;
    setAccomplishments(updatedAcc);
  };

  return (
    <div>
      <Formik initialValues={{ ...accomplishments }}>
        {({ handleSubmit, isSubmitting }) => (
          <React.Fragment>
            {accomplishments.map((item, idx) => (
              <Accordian
                id={idx}
                label={item.title ? item.title : `Accomplishment ${idx + 1}`}
              >
                <AccomplishmentInputs
                  idx={idx}
                  values={item}
                  handleChange={handleAccChange}
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
