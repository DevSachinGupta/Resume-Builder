/**
 *
 * EducationForm
 *
 */

import React, { memo, useState } from 'react';
import EduInputs from "./EducationItems";
import PropTypes from 'prop-types';
// import styled from 'styled-components';


// ***** load template on builder
console.log("inside render ...")

import BuilderEditor from 'components/Builder/BuilderEditor';
import grapesjs from 'grapesjs';
import 'grapesjs/dist/css/grapes.min.css';
import ReactDOM from 'react-dom';


import TemplateHTML from '../../CheerioComponent/Template_1/Template/index.js';
import TemplateCSS from '../../CheerioComponent/Template_1/Template/css/style.js';

// function GenerateEditor(TemplateHTML, TemplateCSS ){
const DemoPage = {
  html: TemplateHTML,
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


// ReactDOM.render(< BuilderEditor DemoPage={DemoPage}	/>, document.getElementById('gjs'));

//  ***** Cheerio Component :START *****
import cheerio from 'cheerio';

function InjectJSONUsingCheerio(HTMLString , JSONString){
	console.log("inside convert");
	var $ = cheerio.load(HTMLString);
	var JSONData = JSON.parse(JSONString);
	console.log(JSONData);
	console.log(JSONString);
	/* ##########  EDUCATION  ###########3 */
    var list=[];
    var d = $("#EducationSection").clone();
    var element = JSONData["history"];
    var keys = Object.keys(element);
    if( d.html() && keys.length!=0  ){
        for(var i = 0; i < keys.length; i++){
            var temp = d.find("List").clone();
            // console.log(temp.html())
            var inner_keys = Object.keys(element[i]);
            for(var j = 0; j < inner_keys.length; j++){
                if(inner_keys[j] == "title"){ 	temp.find(".educationTitle").text(element[i].title);     }
                else if(inner_keys[j] == "fieldOfStudy"){   temp.find(".educationFieldOfStudy").text(element[i].fieldOfStudy);   } 
                else if(inner_keys[j] == "institution"){   temp.find(".educationInstitution").text(element[i].institution);   } 
                else if(inner_keys[j] == "state"){   temp.find(".educationState").text(element[i].state);   } 
                else if(inner_keys[j] == "country"){   temp.find(".educationCountry").text(element[i].country);   } 
                else if(inner_keys[j] == "summary"){   temp.find(".educationSummary").text(element[i].summary);   } 
                else if(inner_keys[j] == "start"){   temp.find(".educationStart").text(element[i].start);   } 
                else if(inner_keys[j] == "end"){   temp.find(".educationEnd").text(element[i].end);   } 
            }
            list.push(temp.html());  
        }
        //console.log(list.join('\n'))
        $("#EducationSection List").html(list.join('\n'))
    }
    else{
        console.log("EDUCATION NULL")
        $("#EducationSection").replaceWith("")	
    }
	console.log(list.join('\n'));
	return $.html();
}

//  *****  Cheerio Component :END ******

///  Main Section

function EducationForm() {
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
	const updatedEdu = [...educations];
	var history = { history : updatedEdu} 
	var JSONString = JSON.stringify( history );
	
	var HTMLString = editor.getHtml();
	var CSString = editor.getCss();	
	var ConvertedHTML = InjectJSONUsingCheerio( HTMLString , JSONString );

	// var editor = GenerateEditor( ConvertedHTML, TemplateCSS );
	
	const DemoPage = {
	  html: ConvertedHTML,
	  css: TemplateCSS,
	  components: null,
	  style: null,
	}; 

	var editor1 = grapesjs.init({
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
          {/* <label for={item.titleId}>{item.lable}</label>
          <input type="text" placeholder={item.lable} id={item.titleId}/> */}
		  
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

export default memo(EducationForm);
