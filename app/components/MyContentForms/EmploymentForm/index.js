import React,{ memo, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeUpdateEditorState } from 'containers/Builder/selectors';
import { updateEditorState } from 'containers/Builder/actions';
import EmpInputs from "./EmploymentItems";

import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import cheerio from 'cheerio';

//  ***** Cheerio Component :START *****
function InjectJSONUsingCheerio(HTMLString , JSONString){
	console.log("inside convert");
	var $ = cheerio.load(HTMLString);
	var JSONData = JSON.parse(JSONString);
	console.log(JSONData);
	console.log(JSONString);
	/* ##########  Employment  ###########3 */
  var list=[];
  var d = $("#EmploymentSection").clone();
  var element = JSONData["history"];
  var keys = Object.keys(element);
    
  if( d.html() && keys.length!=0  ){
    for(var i = 0; i < keys.length; i++){
      var temp = d.find("List").clone();
      var inner_keys = Object.keys(element[i]);
      for(var j = 0; j < inner_keys.length; j++){
        if(inner_keys[j] == "position"){ 	temp.find(".employmentPosition").text(element[i].position);     }
        else if(inner_keys[j] == "employer"){   temp.find(".employmentEmployer").text(element[i].employer);   } 
        else if(inner_keys[j] == "state"){   temp.find(".employmentState").text(element[i].state);   } 
        else if(inner_keys[j] == "country"){   temp.find(".employmentCountry").text(element[i].country);   } 
        else if(inner_keys[j] == "summary"){   temp.find(".employmentSummary").text(element[i].summary);   } 
        else if(inner_keys[j] == "start"){   temp.find(".employmentStart").text(element[i].start);   } 
        else if(inner_keys[j] == "end"){   temp.find(".employmentEnd").text(element[i].end);   } 
      }
      list.push(temp.html());
    }
    $("#EmploymentSection List").html(list.join('\n'))
  }
  else{
    console.log("Employment NULL")
    $("#EmploymentSection").replaceWith("")
  }
	console.log(list.join('\n'));
	return $.html();
}

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
    var ConvertedHTML = InjectJSONUsingCheerio( HTMLString , JSONString );

    // var editor = GenerateEditor( ConvertedHTML, TemplateCSS );
    
    const DemoPage = {
      html: ConvertedHTML,
      css: TemplateCSS,
      components: null,
      style: null,
    }; 

    var editor = grapesjs.init({
      container: '#gjs',
      width: '82vw',
      height: 'calc(100vh - 64px)',
      components: DemoPage.components || DemoPage.html,
      style: DemoPage.style || DemoPage.css,
      storageManager: {
      autoload: false,
      },
      panels: {
      defaults: [],
      },
      canvas: {
      styles: [
        'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
      ]
      }
    });
    dispatch(updateEditorState(editor))

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


