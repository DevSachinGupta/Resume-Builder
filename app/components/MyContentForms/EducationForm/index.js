/**
 *
 * EducationForm
 *
 */

import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeUpdateEditorState } from 'containers/Builder/selectors';
import { updateEditorState , updateDemoPageState , updateResumeJSONState } from 'containers/Builder/actions';
import { InjectJSONUsingCheerioEducation } from 'components/CheerioComponent/templates/template_1'
import EduInputs from './EducationItems';
import { ComponentEditor } from 'components/Builder/BuilderEditor/ComponentEditor';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import { Builder } from '../../../containers/Builder';

console.log("inside render ...")

///  Main Section

function EducationForm({editor_state , dispatch}) {
  var counter = 0;
  const blankEduFields = { title: '', institution: '', fieldOfStudy: '', state: '', country: '', start:'', end:'', summary: ''};
  const [educations, setEducations] = useState([
     { ...blankEduFields },
  ]);
  
  const handlePrevious = () => {
	  setEducations([...educations, { ...blankEduFields }]); 
  };
  
  const addMore = () => {
	  setEducations([...educations, { ...blankEduFields }]); 
  };
  
  const handleSave = () => {
    console.log(editor_state,"This is the editor_state:Edu")
      
    const updatedEdu = [...educations];
    var history = { history : updatedEdu} 
    var JSONString = JSON.stringify( history );
    var HTMLString = editor_state.getHtml();
    // var TemplateCSS = editor_state.getCss();	
    var ConvertedHTML = InjectJSONUsingCheerioEducation( HTMLString , JSONString );
    // var editor = GenerateEditor( ConvertedHTML, TemplateCSS );
    
    const DemoPage = {
      html: ConvertedHTML,
      css: '{}',
      components: null,
      style: null,
    }; 

    // var editor = grapesjs.init({
    //   container: '#gjs',
    //   width: '82vw',
    //   height: 'calc(100vh - 64px)',
    //   components: DemoPage.components || DemoPage.html,
    //   style: DemoPage.style || DemoPage.css,
    //   storageManager: {
    //   autoload: false,
    //   },
    //   panels: {
    //   defaults: [],
    //   },
    //   canvas: {
    //   styles: [
    //     'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
    //     // 'https://res.cloudinary.com/rb-app/raw/upload/v1577214082/commons/css/style_t9mzif.css',
    //     'https://resumebuilder.s3.ap-south-1.amazonaws.com/css/style.css',
    //   ]
    //   }
    // });
    
    dispatch(updateEditorState(ComponentEditor(DemoPage)))
    // dispatch(updateDemoPageState(DemoPage))
    dispatch(updateResumeJSONState(JSONString))
  

  };

  const handleSaveAndNext = () => {
	handleSave();
	setEducations([...educations, { ...blankEduFields }]); 
  };  
  
  const handleEduChange = (e) => {
        const updatedEdu = [...educations];
        updatedEdu[e.target.dataset.idx][e.target.dataset.name] = e.target.value;
        setEducations(updatedEdu);
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

