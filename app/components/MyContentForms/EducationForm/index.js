/**
 *
 * EducationForm
 *
 */

import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeUpdateCurrentEditableItemId , makeUpdateResumeJSONState , makeUpdateEditorState } from 'containers/Builder/selectors';
import { updateCurrentEditableItemId , updateEditorState , updateDemoPageState , updateResumeJSONState } from 'containers/Builder/actions';
import { setModalContent } from 'containers/MyContent/actions';
import { InjectJSONUsingCheerioEducation } from 'components/CheerioComponent/templates/template_1'
import EduInputs from './EducationItems';
import { ComponentEditor } from 'components/Builder/BuilderEditor/ComponentEditor';
import { toggleModal } from 'containers/App/actions';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

console.log("inside render ...")

///  Main Section

function EducationForm({editor_state , resume_json_state , currentEditableItemId_state , dispatch}) {
  var counter = 0;
  var currentEditableItemId = currentEditableItemId_state; 
  // console.log("ResumeJSON: ", { ...resume_json_state['Education']['history']} )
  const blankEduFields = { title: '', institution: '', fieldOfStudy: '', state: '', country: '', start:'', end:'', summary: ''};
  const [educations, setEducations] = useState([
     { ...blankEduFields },
  ]);

  // console.log(educations)
  // console.log({ ...blankEduFields })
  // var data=resume_json_state['Education']['history'][0];
  // var data1=[{...{...{...data}}}]
  // console.log(data1)

  console.log(currentEditableItemId)
  
  const handlePrevious = () => {
	  setEducations([...educations, { ...blankEduFields }]); 
  };
  
  const addMore = () => {
    setEducations([...educations, { ...blankEduFields }]); 
    currentEditableItemId = educations.length; 
    dispatch(updateCurrentEditableItemId(educations.length))
    console.log("len add : " , currentEditableItemId)
  };
  
  const handleSave = () => {      
    console.log("rducation: ", educations)
    const updatedEdu = [...educations];
    var history = { history : updatedEdu} 
    var JSONString = JSON.stringify( history );
    var HTMLString = editor_state.getHtml();
    var ConvertedHTML = InjectJSONUsingCheerioEducation( HTMLString , JSONString );
    
    const DemoPage = {
      html: ConvertedHTML,
      css: '{8}',
      components: null,
      style: null,
    }; 
    
    dispatch(updateEditorState(ComponentEditor(DemoPage)))
    // dispatch(updateDemoPageState(DemoPage))
    dispatch(updateResumeJSONState(history,"Education"))

  };

  const handleSaveAndNext = () => {
    handleSave();
    dispatch(toggleModal())
    dispatch(setModalContent("employmentDetails"))
  };  
  
  const handleEduChange = (e) => {
        const updatedEdu = [...educations];
        updatedEdu[e.target.dataset.idx][e.target.dataset.name] = e.target.value;
        setEducations(updatedEdu);
    };

  const handleRemove = (e) => {
        const updatedEdu = [...educations];
        console.log("len: " , educations.length -1 ) 
        var updatedEdu1 = updatedEdu.filter((s, sidx) => e.target.dataset.idx != sidx)
        setEducations(updatedEdu1);
        if(currentEditableItemId >= e.target.dataset.idx){ 
          currentEditableItemId = updatedEdu1.length - 1 ;
          dispatch(updateCurrentEditableItemId(currentEditableItemId))
          console.log("inside if")
        }
        console.log("len: " , updatedEdu1.length -1 ) 
        console.log("len: " , currentEditableItemId)
    };

  return (
    <div>
      {educations.map((item ,idx ) => (
        <div >
          <EduInputs
            key={`field-${idx}`}
            idx={idx}
            educations={educations}
            handleEduChange={handleEduChange}
            handleRemove={handleRemove}
          />
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
  editor_state : makeUpdateEditorState(),
  resume_json_state : makeUpdateResumeJSONState(),
  currentEditableItemId_state : makeUpdateCurrentEditableItemId(),
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

