import React,{ memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeUpdateResumeJSONState , makeUpdateEditorState } from 'containers/Builder/selectors';
import { updateEditorState , updateDemoPageState , updateResumeJSONState } from 'containers/Builder/actions';
import { setModalContent } from 'containers/MyContent/actions';
import { toggleModal } from 'containers/App/actions';
import { InjectJSONUsingCheerioEmployement } from 'components/CheerioComponent/templates/template_1'
import EmpInputs from "./EmploymentItems";
import { ComponentEditor } from 'components/Builder/BuilderEditor/ComponentEditor';

import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

///  Main Section
function EmploymentForm({editor_state , resume_json_state , dispatch}) {
  var counter = 0;
  const blankEmpFields = { position: '', employer: '', state: '', country: '', start:'', end:'', summary: ''};  
  const [employments, setEmployments] = useState([
    { ...blankEmpFields },
  ]);

  const handlePrevious = () => {
    dispatch(toggleModal())
    dispatch(setModalContent("education"))
  };
  
  const addMore = () => {
	  setEmployments([...employments, { ...blankEmpFields }]); 
  };
  
  const handleSave = () => {
    const updatedEmp = [...employments];
    var history = { history : updatedEmp} 
    var JSONString = JSON.stringify( history );
    var HTMLString = editor_state.getHtml();
    var TemplateCSS = editor_state.getCss();	
    var ConvertedHTML = InjectJSONUsingCheerioEmployement( HTMLString , JSONString );

    // var editor = GenerateEditor( ConvertedHTML, TemplateCSS );
    
    const DemoPage = {
      html: ConvertedHTML,
      css: '{9}',
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
    //   ]
    //   }
    // });
    dispatch(updateEditorState(ComponentEditor(DemoPage)))
    // dispatch(updateDemoPageState(DemoPage))
    dispatch(updateResumeJSONState(history,"Employement"))

  };

  const handleSaveAndNext = () => {
    handleSave();
    dispatch(toggleModal())
    dispatch(setModalContent("education"))
  };  
  
  const handleEmpChange = (e) => {
        const updatedEmp = [...employments];
        updatedEmp[e.target.dataset.idx][e.target.dataset.name] = e.target.value;
        setEmployments(updatedEmp);
    };

  return (<div>
     {employments.map((item ,idx ) => (
        <div >
          <EmpInputs
            key={`field-${idx}`}
            idx={idx}
            employments={employments}
            handleEmpChange={handleEmpChange}
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

EmploymentForm.propTypes = {};

const mapStateToProps = createStructuredSelector({
  editor_state : makeUpdateEditorState(),
  resume_json_state : makeUpdateResumeJSONState(),
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
export default withCompose(EmploymentForm);


