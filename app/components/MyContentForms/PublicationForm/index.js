import React, { useState } from 'react';
import { Formik } from 'formik';
import Accordian from '../../Accordion';
import PublicationInputs from './PublicationItems';
import Button from '../../Button';

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
                <PublicationInputs idx={idx} />
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
export default PublicationForm;
