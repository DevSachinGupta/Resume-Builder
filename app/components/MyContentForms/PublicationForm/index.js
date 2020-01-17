import React, { useState } from 'react';
import { Formik } from 'formik';
import Accordian from '../../Accordion';
import PublicationInputs from './PublicationItems';

function PublicationForm() {
  const blankPubFields = {
    title: '',
    summary: '',
    url: '',
    date: '',
    description: '',
  };

  const [publications, setPublications] = useState([{ ...blankPubFields }]);

  const addMore = () => {
    setPublications([...publications, { ...blankPubFields }]);
  };

  const handlePubChange = e => {
    const updatedPub = [...publications];
    const fieldName = e.target.name.split('-')[0];
    updatedPub[e.target.dataset.idx][fieldName] = e.target.value;
    setPublications(updatedPub);
  };

  return (
    <div>
      <Formik initialValues={{ ...publications }}>
        {({ handleSubmit, isSubmitting }) => (
          <React.Fragment>
            {publications.map((item, idx) => (
              <Accordian
                id={idx}
                label={item.title ? item.title : `Publication ${idx + 1}`}
              >
                <PublicationInputs
                  idx={idx}
                  values={item}
                  handleChange={handlePubChange}
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
