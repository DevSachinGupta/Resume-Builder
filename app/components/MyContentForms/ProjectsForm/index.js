import React, { useState } from 'react';
import { Formik } from 'formik';
import { Validations } from '../../../utils/validations';
import Input from '../../FormComponents/Input';
import { Row, Column } from '../../Layout';
import Textfield from '../../FormComponents/TextField';

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
              <div>
                <Row>
                  <Column width="1/2" className="px-1">
                    <Input
                      placeholder="Title"
                      label="Title"
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.val}
                    />
                  </Column>
                  <Column width="1/2" className="px-1">
                    <Input
                      placeholder="Summary"
                      label="Summary"
                      name="summary"
                      value={values.summary}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.val}
                    />
                  </Column>
                </Row>
                <Row>
                  <Column width="full" className="px-1">
                    <Input
                      placeholder="Description"
                      label="Description"
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.val}
                    />
                  </Column>
                </Row>
                <Row>
                  <Column width="1/2" className="px-1">
                    <Input
                      placeholder="Technology Used"
                      label="Technology Used"
                      name="keywords"
                      value={values.keywords}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.val}
                    />
                  </Column>
                  <Column width="1/2" className="px-1">
                    <Input
                      placeholder="Reference Link"
                      label="Reference Link"
                      name="url"
                      value={values.url}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.val}
                    />
                  </Column>
                </Row>
                <Row>
                  <Column width="2/5" className="px-1">
                    <Input
                      placeholder="Start Date"
                      label="Start Date"
                      name="start"
                      value={values.start}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.val}
                    />
                  </Column>
                  <Column width="2/5" className="px-1">
                    <Input
                      placeholder="End Date"
                      label="End Date"
                      name="end"
                      value={values.end}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.val}
                    />
                  </Column>
                  <Column width="1/5" className="px-1">
                    {/* TODO: Change this textfield with checkbox */}
                    <Textfield
                      labeltxt="Till date"
                      type="checkbox"
                      name="tillDate"
                      disabled={checkboxState}
                      onClick={checkboxStateChange}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.val}
                    />
                  </Column>
                </Row>
              </div>
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
