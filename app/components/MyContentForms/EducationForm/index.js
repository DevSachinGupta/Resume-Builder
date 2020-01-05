/**
 *
 * EducationForm
 *
 */

import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Formik } from 'formik';
import { createStructuredSelector } from 'reselect';
import {
  makeUpdateResumeJSONState,
  makeUpdateEditorState,
} from 'containers/Builder/selectors';
import {
  updateEditorState,
  updateResumeJSONState,
} from 'containers/Builder/actions';
import { InjectJSONUsingCheerioEducation } from 'components/CheerioComponent/templates/template_1';
import { ComponentEditor } from 'components/Builder/BuilderEditor/ComponentEditor';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Validations } from '../../../utils/validations';
import EducationInputs from './EducationItems';
import Accordian from '../../Accordion';

function EducationForm({ editor_state, resume_json_state, dispatch }) {
  // const counter = 0;
  const blankEduFields = {
    title: '',
    institution: '',
    fieldOfStudy: '',
    state: '',
    country: '',
    start: '',
    end: '',
    summary: '',
  };
  const [educations, setEducations] = useState([{ ...blankEduFields }]);

  const handlePrevious = () => {
    setEducations([...educations, { ...blankEduFields }]);
  };

  const addMore = () => {
    setEducations([...educations, { ...blankEduFields }]);
  };

  const handleSave = () => {
    const updatedEdu = [...educations];
    const history = { history: updatedEdu };
    const JSONString = JSON.stringify(history);
    const HTMLString = editor_state.getHtml();
    const TemplateCSS = editor_state.getCss();
    const ConvertedHTML = InjectJSONUsingCheerioEducation(
      HTMLString,
      JSONString,
    );
    const DemoPage = {
      html: ConvertedHTML,
      css: TemplateCSS,
      components: null,
      style: null,
    };

    dispatch(updateEditorState(ComponentEditor(DemoPage)));
    dispatch(updateResumeJSONState(history, 'Education'));
  };

  const handleSaveAndNext = () => {
    handleSave();
    setEducations([...educations, { ...blankEduFields }]);
  };

  const handleEduChange = e => {
    const updatedEdu = [...educations];
    updatedEdu[e.target.dataset.idx][e.target.dataset.name] = e.target.value;
    setEducations(updatedEdu);
  };

  return (
    <div>
      <Formik
        initialValues={{ ...blankEduFields }}
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
            {educations.map((item, idx) => (
              <Accordian
                id={idx}
                label={item.title ? item.title : `Education ${idx + 1}`}
              >
                <EducationInputs
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
EducationForm.propTypes = {};

const mapStateToProps = createStructuredSelector({
  editor_state: makeUpdateEditorState(),
  resume_json_state: makeUpdateResumeJSONState(),
});
const mapDispatchToProps = null;
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withCompose = compose(
  withConnect,
  memo,
);
export default withCompose(EducationForm);
