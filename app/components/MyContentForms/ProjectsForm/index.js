import React, { useState } from 'react';
import { Formik } from 'formik';
import Accordian from '../../Accordion';
import ProjectInputs from './ProjectItems';
import Button from '../../Button';

function ProjectForm() {
  const blankProFields = {
    title: '',
    summary: '',
    keywords: '',
    url: '',
    start: '',
    end: '',
    description: '',
    tillDate: '',
  };
  const [projects, setProjects] = useState([{ ...blankProFields }]);

  const addMore = () => {
    setProjects([...projects, { ...blankProFields }]);
  };

  return (
    <div>
      <Formik initialValues={{ ...projects }}>
        {({ handleSubmit, isSubmitting }) => (
          <React.Fragment>
            {projects.map((item, idx) => (
              <Accordian
                id={idx}
                label={item.title ? item.title : `Project ${idx + 1}`}
              >
                <ProjectInputs idx={idx} />
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
export default ProjectForm;
