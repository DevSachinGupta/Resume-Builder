/**
 *
 * EducationForm
 *
 */

import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Formik, withFormik } from 'formik';
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
import EducationInputs from './EducationItems';
import Accordian from '../../Accordion';
import Button from '../../Button';

function EducationForm({
  displayName,
  editor_state,
  resume_json_state,
  dispatch,
}) {
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
  return (
    <div>
      <form>
        <React.Fragment>
          {educations.map((item, idx) => (
            <Accordian
              id={idx}
              label={item.title ? item.title : `Education ${idx + 1}`}
            >
              <EducationInputs idx={idx} />
            </Accordian>
          ))}
          <Button onClick={addMore} fullWidth type="flat">
            Add Another
          </Button>
        </React.Fragment>
      </form>
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
const withConnectedFormik = withFormik({
  mapPropsToValues: () => {},
  displayName: 'educationForm',
});
const withCompose = compose(
  withConnect,
  memo,
  withConnectedFormik,
);
export default withCompose(EducationForm);
