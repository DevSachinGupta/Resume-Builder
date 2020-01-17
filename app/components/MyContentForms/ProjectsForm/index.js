import React, { useState } from 'react';
import { Formik } from 'formik';
import Accordian from '../../Accordion';
import ProjectInputs from './ProjectItems';

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

  const handleProChange = e => {
    const updatedPro = [...projects];
    const fieldName = e.target.name.split('-')[0];
    updatedPro[e.target.dataset.idx][fieldName] = e.target.value;
    setProjects(updatedPro);
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
                <ProjectInputs
                  idx={idx}
                  values={item}
                  handleChange={handleProChange}
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
export default ProjectForm;
