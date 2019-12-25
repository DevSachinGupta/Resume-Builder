import React,{ memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeUpdateEditorState } from 'containers/Builder/selectors';
import { updateEditorState , updateDemoPageState , updateResumeJSONState } from 'containers/Builder/actions';
import { InjectJSONUsingCheerioEmployement } from 'components/CheerioComponent/templates/template_1'
import EmpInputs from "./EmploymentItems";
import { ComponentEditor } from 'components/Builder/BuilderEditor/ComponentEditor';

import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';

///  Main Section
function EmploymentForm({editor_state , dispatch}) {
  var counter = 0;
  const blankEmpFields = { position: '', employer: '', state: '', country: '', start:'', end:'', summary: ''};  
  const [employments, setEmployments] = useState([
    { ...blankEmpFields },
  ]);

  const handlePrevious = () => {
	  setEmployments([...employments, { ...blankEmpFields }]); 
  };
  
  const addMore = () => {
	  setEmployments([...employments, { ...blankEmpFields }]); 
  };
  
  const handleSave = () => {
    console.log(editor_state,"This is the editor_state:Emp")
      
    const updatedEmp = [...employments];
    var history = { history : updatedEmp} 
    var JSONString = JSON.stringify( history );
    var HTMLString = editor_state.getHtml();
    var TemplateCSS = editor_state.getCss();	
    var ConvertedHTML = InjectJSONUsingCheerioEmployement( HTMLString , JSONString );

    // var editor = GenerateEditor( ConvertedHTML, TemplateCSS );
    
    const DemoPage = {
      html: ConvertedHTML,
      css: TemplateCSS,
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
    dispatch(updateDemoPageState(DemoPage))
    dispatch(updateResumeJSONState(JSONString))

  };

  const handleSaveAndNext = () => {
    handleSave();
    setEmployments([...employments, { ...blankEmpFields }]); 
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


