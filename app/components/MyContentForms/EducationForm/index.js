/**
 *
 * EducationForm
 *
 */

import React, { memo, useState } from 'react';
import Textfield from "../../FormComponents/TextField";
import PropTypes from 'prop-types';
// import styled from 'styled-components';

// ####


const EduInputs = ({ idx, educations, handleEduChange }) => {
    const qualificationId = `qualification-${idx}`;
    const universityId = `university-${idx}`;
    const instituteId = `institute-${idx}`;
    const fieldOfStudyId = `fieldOfStudy-${idx}`;
    const percentageId = `percentage-${idx}`;
    const stateId = `state-${idx}`;
    const countryId = `country-${idx}`;
    const startDateId = `startDate-${idx}`;
    const endDateId = `endDate-${idx}`;
    const descriptionId = `description-${idx}`;

    return (
        <div key={`field-${idx}`}>
			<div className="flex flex-wrap ">
			  <div className="w-1/2 px-2">
				  <Textfield
				    labeltxt="Qualification"
					type="text"
					name={qualificationId}
					idx={idx}
					id={qualificationId}
					className="qualification"
					namex="qualification"
					value={educations[idx].qualification}
					onChange={handleEduChange}
      			   />
			  </div>
			  <div className="w-1/2 px-2">
				  <Textfield
				    labeltxt="Board/University"
					type="text"
					name={universityId}
					idx={idx}
					id={universityId}
					className="university"
					namex="university"
					value={educations[idx].university}
					onChange={handleEduChange}
				  />
			  </div>
			</div>
			
			<div className="flex flex-wrap ">
			  <div className="w-1/2 px-2">
				  <Textfield
				    labeltxt="Institute Name"
					type="text"
					name={instituteId}
					idx={idx}
					id={instituteId}
					className="institute"
					namex="institute"
					value={educations[idx].institute}
					onChange={handleEduChange}
				  />
			  </div>
			  <div className="w-1/2 px-2">
				  <Textfield
				    labeltxt="Field of Study"
					type="text"
					name={fieldOfStudyId}
					idx={idx}
					id={fieldOfStudyId}
					className="fieldOfStudy"
					namex="fieldOfStudy"
					value={educations[idx].fieldOfStudy}
					onChange={handleEduChange}
				  />
			  </div>
			</div>
			
			<div className="flex flex-wrap ">
			  <div className="w-1/3 px-2">
				  <Textfield
				    labeltxt="Percentage"
					type="text"
					name={percentageId}
					idx={idx}
					id={percentageId}
					className="percentage"
					namex="percentage"
					value={educations[idx].percentage}
					onChange={handleEduChange}
				  />
			  </div>
			  <div className="w-1/3 px-2">
				  <Textfield
				    labeltxt="State"
					type="text"
					name={stateId}
					idx={idx}
					id={stateId}
					className="state"
					namex="state"
					value={educations[idx].state}
					onChange={handleEduChange}
				  />
			  </div>
			  <div className="w-1/3 px-2">
				  <Textfield
				    labeltxt="Country"
					type="text"
					name={countryId}
					idx={idx}
					id={countryId}
					className="country"
					namex="country"
					value={educations[idx].country}
					onChange={handleEduChange}
				  />
			  </div>
			</div>
			
			<div className="flex flex-wrap ">
			  <div className="w-1/2 px-2">
				  <Textfield
				    labeltxt="Start Date"
					type="date"
					name={startDateId}
					idx={idx}
					id={startDateId}
					className="startDate"
					namex="startDate"
					value={educations[idx].startDate}
					onChange={handleEduChange}
				  />
			  </div>
			  <div className="w-1/2 px-2">
				  <Textfield
				    labeltxt="End Date"
					type="date"
					name={endDateId}
					idx={idx}
					id={endDateId}
					className="endDate"
					namex="endDate"
					value={educations[idx].endDate}
					onChange={handleEduChange}
				  />
			  </div>
			</div>
			
			<div className="flex flex-wrap ">
			  <div className="w-full">
				  <Textfield
				    labeltxt="Description"
					type="text"
					name={descriptionId}
					idx={idx}
					namex="description"
					id={descriptionId}
					className="description"
					value={educations[idx].description}
					onChange={handleEduChange}
				  />
			  </div>
			</div> 
        </div>
    );
};

EduInputs.propTypes = {
    idx: PropTypes.number,
    educations: PropTypes.array,
    handleEduChange: PropTypes.func,
};


function EducationForm() {
  var counter = 0;
  const blankEduFields = { qualification: '', university: '', institute: '', fieldOfStudy: '',percentage:'', state: '', country: '', startDate:'', endDate:'', description: ''};
  const [educations, setEducations] = useState([
     { ...blankEduFields },
  ]);
  
  const handlePrevious = () => {
	  
	setEducations([...educations, { ...blankEduFields }]); 
	console.log(educations);
  };
  
  const addMore = () => {
	setEducations([...educations, { ...blankEduFields }]); 
  };
  
  const handleSave = () => {
	const updatedEdu = [...educations];
	// create JSON
	console.log(updatedEdu)
	var jsonString = JSON.stringify(updatedEdu);
	console.log(jsonString)
	// call grapesjs component with req JSON
	
	// Close the current model
	// setEducations([...educations, { ...blankEduFields }]); 
  };

  const handleSaveAndNext = () => {
	handleSave
	setEducations([...educations, { ...blankEduFields }]); 
  };  
  
  const handleEduChange = (e) => {
        const updatedEdu = [...educations];
		console.log(e.target.dataset)
        updatedEdu[e.target.dataset.idx][e.target.dataset.name] = e.target.value;
        setEducations(updatedEdu);
		console.log(updatedEdu);
    };

  return (
    <div>
      {educations.map((item ,idx ) => (
        <div >
          {/* <label for={item.qualificationId}>{item.lable}</label>
          <input type="text" placeholder={item.lable} id={item.qualificationId}/> */}
		  
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
