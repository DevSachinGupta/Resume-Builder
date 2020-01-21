import React, { useState } from 'react';
import { Formik } from 'formik';
import Accordian from '../../Accordion';
import AccomplishmentInputs from './AccomplishmentItems';
import Button from '../../Button';

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
      <Formik initialValues={{ ...accomplishments }}>
        {({ handleSubmit, isSubmitting }) => (
          <React.Fragment>
            {accomplishments.map((item, idx) => (
              <Accordian
                id={idx}
                label={item.title ? item.title : `Accomplishment ${idx + 1}`}
              >
                <AccomplishmentInputs idx={idx} />
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
export default AccomplishmentForm;
