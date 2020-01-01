/**
 *
 * EducationForm
 *
 */

import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeUpdateCurrentEditableItemId,
  makeUpdateResumeJSONState,
  makeUpdateEditorState,
} from 'containers/Builder/selectors';
import {
  updateCurrentEditableItemId,
  updateEditorState,
  updateResumeJSONState,
} from 'containers/Builder/actions';
import { setModalContent } from 'containers/MyContent/actions';
import { InjectJSONUsingCheerioEducation } from 'components/CheerioComponent/templates/template_1';
import { ComponentEditor } from 'components/Builder/BuilderEditor/ComponentEditor';
import { toggleModal } from 'containers/App/actions';
import EduInputsEditable from './EducationItemsEditable';
import EduInputsNonEditable from './EducationItemsNonEditable';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// Main Section

function EducationForm({
  editorState,
  resumeJSONState,
  currentEditableItemIdState,
  dispatch,
}) {
  const counter = 0;
  let storeEducation = null;
  // TODO: variables should revert back in Models(in sessions)
  if (resumeJSONState.Education) {
    storeEducation = resumeJSONState.Education.history;
  }

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
  const [educations, setEducations] = useState(
    storeEducation || [{ ...blankEduFields }],
  );

  const handlePrevious = () => {
    setEducations([...educations, { ...blankEduFields }]);
  };

  const addMore = () => {
    setEducations([...educations, { ...blankEduFields }]);
    dispatch(updateCurrentEditableItemId(educations.length));
  };

  const handleSave = () => {
    const updatedEdu = [...educations];
    const history = { history: updatedEdu };
    const JSONString = JSON.stringify(history);
    const HTMLString = editorState.getHtml();
    const TemplateCss = editorState.getCss();
    const ConvertedHTML = InjectJSONUsingCheerioEducation(
      HTMLString,
      JSONString,
    );

    const DemoPage = {
      html: ConvertedHTML,
      css: TemplateCss,
      components: null,
      style: null,
    };

    dispatch(updateEditorState(ComponentEditor(DemoPage)));
    // dispatch(updateDemoPageState(DemoPage))
    dispatch(updateResumeJSONState(history, 'Education'));
  };

  const handleSaveAndNext = () => {
    handleSave();
    dispatch(toggleModal());
    dispatch(setModalContent('employmentDetails'));
  };

  const handleEduChange = e => {
    const updatedEdu = [...educations];
    updatedEdu[e.target.dataset.idx][e.target.dataset.name] = e.target.value;
    setEducations(updatedEdu);
  };

  const handleRemove = e => {
    const updatedEdu = [...educations];
    const updatedEdu1 = updatedEdu.filter(
      (s, sidx) => e.target.dataset.idx != sidx,
    );
    setEducations(updatedEdu1);
    if (currentEditableItemIdState > e.target.dataset.idx) {
      dispatch(updateCurrentEditableItemId(currentEditableItemIdState - 1));
    }
    if (currentEditableItemIdState == e.target.dataset.idx) {
      dispatch(updateCurrentEditableItemId(updatedEdu1.length - 1));
    }
  };

  const handleEdit = e => {
    dispatch(updateCurrentEditableItemId(e.target.dataset.idx));
  };

  return (
    <div>
      {educations.map((item, idx) => (
        <div>
          {currentEditableItemIdState == idx && (
            <EduInputsEditable
              key={`field-${idx}`}
              idx={idx}
              educations={educations}
              handleEduChange={handleEduChange}
              handleRemove={handleRemove}
            />
          )}
          {currentEditableItemIdState != idx && (
            <EduInputsNonEditable
              key={`field-${idx}`}
              idx={idx}
              educations={educations}
              handleEduChange={handleEduChange}
              handleRemove={handleRemove}
              handleEdit={handleEdit}
            />
          )}
        </div>
      ))}
      <button type="button" onClick={handlePrevious}>
        Previous
      </button>

      <button type="button" onClick={addMore}>
        Add More
      </button>

      <button type="button" onClick={handleSave}>
        Save
      </button>

      <button type="button" onClick={handleSaveAndNext}>
        Save & Next
      </button>
    </div>
  );
}

EducationForm.propTypes = {};

const mapStateToProps = createStructuredSelector({
  editorState: makeUpdateEditorState(),
  resumeJSONState: makeUpdateResumeJSONState(),
  currentEditableItemIdState: makeUpdateCurrentEditableItemId(),
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
