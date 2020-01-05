import React, { useState } from 'react';
import { Formik } from 'formik';
import { Validations } from '../../../utils/validations';
import Accordian from '../../Accordion';
import ProjectInputs from './ProjectItems';

function ProjectForm() {
  let counter = 0;
  let checkboxState = false;
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

  const handleChange = e => {
    const updatedPro = [...projects];
    updatedPro[e.target.dataset.idx][e.target.name] = e.target.value;
    setProjects(updatedPro);
  };

  const addMore = () => {
    setProjects([...projects, { ...blankProFields }]);
  };
  const checkboxStateChange = () => {
    console.log('Checkbox state changed');
    checkboxState = 'disabled';
  };
  return (
    <div>
      <Formik
        initialValues={{ ...blankProFields }}
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
            {projects.map((item , idx) => (
              <Accordian
                id={idx}
                label={item.title ? item.title : `Project ${idx + 1}`}
              >
                <ProjectInputs
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
export default ProjectForm;
